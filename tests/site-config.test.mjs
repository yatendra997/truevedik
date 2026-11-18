import assert from 'node:assert/strict'
import test from 'node:test'
import { absoluteSiteUrl, SITE_URL } from '../lib/constants/site.ts'
import { getWhatsAppUrl } from '../lib/constants/whatsapp.ts'

test('absolute URLs use the configured canonical site origin', () => {
  assert.equal(new URL(absoluteSiteUrl('/about')).origin, SITE_URL)
  assert.equal(absoluteSiteUrl('/about'), `${SITE_URL}/about`)
})

test('WhatsApp links use the configured international number and a prefilled message', () => {
  const previous = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '+91 98765 43210'

  try {
    const url = new URL(getWhatsAppUrl('Hello TrueVedik') )
    assert.equal(url.origin, 'https://wa.me')
    assert.equal(url.pathname, '/919876543210')
    assert.equal(url.searchParams.get('text'), 'Hello TrueVedik')
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    else process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = previous
  }
})

test('WhatsApp links fall back safely when no valid number is configured', () => {
  const previous = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

  try {
    assert.equal(getWhatsAppUrl(), null)
  } finally {
    if (previous !== undefined) process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = previous
  }
})
