export const runtime = 'nodejs'

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

  // Quietly accept bot submissions without sending email.
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

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.BOOKING_NOTIFICATION_EMAIL
  const from = process.env.BOOKING_FROM_EMAIL
  if (!apiKey || !to || !from) {
    return Response.json({ error: 'Booking requests are temporarily unavailable. Please contact us on WhatsApp.' }, { status: 503 })
  }

  const rows = Object.entries({
    Name: booking.name,
    Phone: booking.phone,
    Email: booking.email || 'Not provided',
    Service: booking.service || 'Consultation',
    'Preferred mode': booking.mode,
    'Date of birth': booking.dateOfBirth || 'Not provided',
    'Time of birth': booking.timeOfBirth || 'Not provided',
    'Place of birth': booking.placeOfBirth || 'Not provided',
    Timezone: booking.timezone,
    Question: booking.question || 'Not provided',
  }).map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`).join('')

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: booking.email || undefined,
        subject: `New TrueVedik consultation request: ${booking.name}`,
        html: `<h1>Consultation request</h1>${rows}<p>Submitted from the TrueVedik booking form.</p>`,
      }),
    })
    if (!response.ok) {
      return Response.json({ error: 'We could not send your request just now. Please try again or contact us on WhatsApp.' }, { status: 502 })
    }
  } catch {
    return Response.json({ error: 'We could not send your request just now. Please try again or contact us on WhatsApp.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
