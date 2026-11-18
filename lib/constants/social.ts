import { getWhatsAppUrl } from './whatsapp'

export const SOCIAL_LINKS = {
  whatsapp: getWhatsAppUrl() ?? '/consultation',
  instagram: 'https://instagram.com/truevedic',
  facebook: 'https://facebook.com/truevedic',
  youtube: 'https://youtube.com/@truevedic',
} as const
