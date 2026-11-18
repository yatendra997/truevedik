const DEFAULT_MESSAGE = "Hello, I'd like to ask a question about a Vedic astrology consultation."

export function getWhatsAppUrl(message = DEFAULT_MESSAGE) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '')
  if (!number || number.length < 10 || number.length > 15) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
