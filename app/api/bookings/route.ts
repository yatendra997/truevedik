export const runtime = 'nodejs'

import nodemailer from 'nodemailer'

type BookingRequest = {
  name?: unknown
  phone?: unknown
  email?: unknown
  dateOfBirth?: unknown
  timeOfBirth?: unknown
  placeOfBirth?: unknown
  question?: unknown
  timezone?: unknown
  mode?: unknown
  service?: unknown
  website?: unknown
  consent?: unknown
}

const attempts = new Map<string, { count: number; expiresAt: number }>()
const WINDOW_MS = 15 * 60 * 1000
const MAX_ATTEMPTS = 5

function cleanText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character] ?? character)
}

function rateLimited(key: string) {
  const now = Date.now()
  if (attempts.size > 1000) {
    for (const [address, value] of attempts) {
      if (value.expiresAt <= now) attempts.delete(address)
    }
  }
  const current = attempts.get(key)
  if (!current || current.expiresAt <= now) {
    attempts.set(key, { count: 1, expiresAt: now + WINDOW_MS })
    return false
  }
  current.count += 1
  return current.count > MAX_ATTEMPTS
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0)
  if (contentLength > 10_000) {
    return Response.json({ error: 'The form is too large. Please shorten your message.' }, { status: 413 })
  }

  const ip = request.headers.get('x-real-ip') ?? 'unknown'
  if (rateLimited(ip)) {
    return Response.json({ error: 'Please wait a few minutes before trying again.' }, { status: 429 })
  }

  let input: BookingRequest
  try {
    const parsed: unknown = await request.json()
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return Response.json({ error: 'Please check the form and try again.' }, { status: 400 })
    }
    input = parsed as BookingRequest
  } catch {
    return Response.json({ error: 'Please check the form and try again.' }, { status: 400 })
  }

  // Honeypot — quietly accept bot submissions without sending email
  if (cleanText(input.website, 200)) return Response.json({ ok: true })

  const booking = {
    name: cleanText(input.name, 120),
    phone: cleanText(input.phone, 40),
    email: cleanText(input.email, 254),
    dateOfBirth: cleanText(input.dateOfBirth, 10),
    timeOfBirth: cleanText(input.timeOfBirth, 5),
    placeOfBirth: cleanText(input.placeOfBirth, 120),
    question: cleanText(input.question, 2000),
    timezone: cleanText(input.timezone, 60),
    mode: cleanText(input.mode, 30),
    service: cleanText(input.service, 100),
  }

  if (!booking.name || booking.name.length < 2 || !/^[+\d()\s.-]{7,40}$/.test(booking.phone)) {
    return Response.json({ error: 'Enter your name and a valid phone or WhatsApp number.' }, { status: 400 })
  }
  if (booking.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email)) {
    return Response.json({ error: 'Enter a valid email address or leave it blank.' }, { status: 400 })
  }
  if (!booking.timezone || !['WhatsApp', 'Phone', 'Video'].includes(booking.mode)) {
    return Response.json({ error: 'Choose a time zone and a consultation mode.' }, { status: 400 })
  }
  if (input.consent !== true) {
    return Response.json({ error: 'Please confirm how we may use your booking details.' }, { status: 400 })
  }
  try {
    new Intl.DateTimeFormat('en', { timeZone: booking.timezone })
  } catch {
    return Response.json({ error: 'Choose a valid time zone.' }, { status: 400 })
  }
  if (booking.dateOfBirth && !/^\d{4}-\d{2}-\d{2}$/.test(booking.dateOfBirth)) {
    return Response.json({ error: 'Enter a valid date of birth.' }, { status: 400 })
  }
  if (booking.dateOfBirth) {
    const date = new Date(`${booking.dateOfBirth}T00:00:00.000Z`)
    if (Number.isNaN(date.valueOf()) || date.toISOString().slice(0, 10) !== booking.dateOfBirth || date > new Date()) {
      return Response.json({ error: 'Enter a valid date of birth.' }, { status: 400 })
    }
  }
  if (booking.timeOfBirth && !/^([01]\d|2[0-3]):[0-5]\d$/.test(booking.timeOfBirth)) {
    return Response.json({ error: 'Enter a valid time of birth.' }, { status: 400 })
  }

  // ── Gmail SMTP via Nodemailer ──────────────────────────────
  const smtpEmail = process.env.SMTP_EMAIL
  const smtpPassword = process.env.SMTP_PASSWORD
  const notificationEmail = process.env.BOOKING_NOTIFICATION_EMAIL

  if (!smtpEmail || !smtpPassword || !notificationEmail) {
    console.error('Missing email env variables: SMTP_EMAIL, SMTP_PASSWORD, or BOOKING_NOTIFICATION_EMAIL')
    return Response.json({ error: 'Booking requests are temporarily unavailable. Please contact us on WhatsApp.' }, { status: 503 })
  }

  // Build the HTML email body
  const rows = Object.entries({
    'Name': booking.name,
    'Phone / WhatsApp': booking.phone,
    'Email': booking.email || 'Not provided',
    'Service Requested': booking.service || 'General Consultation',
    'Preferred Mode': booking.mode,
    'Date of Birth': booking.dateOfBirth || 'Not provided',
    'Time of Birth': booking.timeOfBirth || 'Not provided',
    'Place of Birth': booking.placeOfBirth || 'Not provided',
    'Timezone': booking.timezone,
    'Question / Details': booking.question || 'Not provided',
  }).map(([label, value]) =>
    `<tr>
      <td style="padding:10px 14px;border-bottom:1px solid #f0ebe3;font-weight:600;color:#5A4A36;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #f0ebe3;color:#1E1208;">${escapeHtml(value)}</td>
    </tr>`
  ).join('')

  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' })

  const htmlBody = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#FFFDF8;border:1px solid #e8dfc9;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#B8860B,#C4600A);padding:24px 28px;">
        <h1 style="margin:0;color:#FFFFFF;font-size:22px;font-weight:600;">🕉️ New Consultation Lead</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">TrueVedic — Booking Form Submission</p>
      </div>
      <div style="padding:24px 28px;">
        <p style="margin:0 0 16px;color:#5A4A36;font-size:14px;">A new consultation request has been submitted:</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;border:1px solid #e8dfc9;border-radius:8px;overflow:hidden;">
          ${rows}
        </table>
        <p style="margin:20px 0 0;color:#9A8C7E;font-size:12px;">Submitted on: ${submittedAt} (IST)</p>
      </div>
      <div style="background:#F5F0E6;padding:16px 28px;text-align:center;">
        <p style="margin:0;color:#9A8C7E;font-size:11px;">This email was sent from the TrueVedic website booking form.</p>
      </div>
    </div>
  `

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    })

    await transporter.sendMail({
      from: `"TrueVedic Bookings" <${smtpEmail}>`,
      to: notificationEmail,
      replyTo: booking.email || undefined,
      subject: `🕉️ New Lead: ${booking.name} — ${booking.service || 'Consultation'}`,
      html: htmlBody,
    })
  } catch (err) {
    console.error('Email sending failed:', err)
    return Response.json({ error: 'We could not send your request just now. Please try again or contact us on WhatsApp.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
