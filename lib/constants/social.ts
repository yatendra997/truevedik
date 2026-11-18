import { getWhatsAppUrl } from './whatsapp'

function configuredSocialUrl(value: string | undefined) {
  if (!value?.trim()) return null
  try {
    const url = new URL(value)
    return ['https:', 'http:'].includes(url.protocol) ? url.toString() : null
  } catch {
    return null
  }
}

export const SOCIAL_LINKS = {
  whatsapp: getWhatsAppUrl() ?? '/consultation',
  instagram: configuredSocialUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
  facebook: configuredSocialUrl(process.env.NEXT_PUBLIC_FACEBOOK_URL),
  youtube: configuredSocialUrl(process.env.NEXT_PUBLIC_YOUTUBE_URL),
} as const
