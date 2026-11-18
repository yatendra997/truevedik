import assert from 'node:assert/strict'
import test from 'node:test'
import { POST } from '../app/api/bookings/route.ts'

const validBooking = {
  name: 'Asha Rao',
  phone: '+91 98765 43210',
  email: 'asha@example.com',
  dateOfBirth: '1990-03-12',
  timeOfBirth: '10:30',
  placeOfBirth: 'Pune, India',
  question: 'I would like to discuss a career change.',
  timezone: 'Asia/Kolkata',
  mode: 'WhatsApp',
  service: 'Kundali Reading',
  consent: true,
}

function createRequest(body, ip) {
  return new Request('http://localhost/api/bookings', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-real-ip': ip },
    body: JSON.stringify(body),
  })
}

test('booking requests validate details and send email through Resend', async () => {
  const keys = ['RESEND_API_KEY', 'BOOKING_NOTIFICATION_EMAIL', 'BOOKING_FROM_EMAIL']
  const previous = Object.fromEntries(keys.map((key) => [key, process.env[key]]))
  const originalFetch = globalThis.fetch
  let sentPayload
  process.env.RESEND_API_KEY = 'test-key'
  process.env.BOOKING_NOTIFICATION_EMAIL = 'team@example.com'
  process.env.BOOKING_FROM_EMAIL = 'TrueVedik <booking@example.com>'
  globalThis.fetch = async (_url, options) => {
    sentPayload = JSON.parse(options.body)
    return new Response(JSON.stringify({ id: 'email-test' }), { status: 200 })
  }

  try {
    const response = await POST(createRequest(validBooking, 'booking-valid-test'))
    assert.equal(response.status, 200)
    assert.match(sentPayload.html, /Asha Rao/)
    assert.ok(sentPayload.html.includes('Asia/Kolkata'))
  } finally {
    globalThis.fetch = originalFetch
    for (const key of keys) {
      if (previous[key] === undefined) delete process.env[key]
      else process.env[key] = previous[key]
    }
  }
})

test('invalid timezone is rejected before contacting the email provider', async () => {
  const response = await POST(createRequest({ ...validBooking, timezone: 'Not/A_Timezone' }, 'booking-invalid-test'))
  assert.equal(response.status, 400)
})

test('booking requests are not reported as sent without email configuration', async () => {
  const keys = ['RESEND_API_KEY', 'BOOKING_NOTIFICATION_EMAIL', 'BOOKING_FROM_EMAIL']
  const previous = Object.fromEntries(keys.map((key) => [key, process.env[key]]))
  for (const key of keys) delete process.env[key]

  try {
    const response = await POST(createRequest(validBooking, 'booking-unconfigured-test'))
    assert.equal(response.status, 503)
  } finally {
    for (const key of keys) {
      if (previous[key] === undefined) delete process.env[key]
      else process.env[key] = previous[key]
    }
  }
})
