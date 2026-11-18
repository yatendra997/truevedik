const configuredSiteUrl = process.env.SITE_URL?.trim()

export const SITE_URL = (configuredSiteUrl || 'https://truevedik.vercel.app').replace(/\/+$/, '')

export function absoluteSiteUrl(path: string) {
  return new URL(path.replace(/^\/+/, ''), `${SITE_URL}/`).toString()
}
