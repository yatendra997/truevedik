export interface DailyHoroscopeResult {
  date: string
  sign: string
  text: string
}

interface DailyHoroscopeResponse {
  data?: {
    date?: unknown
    period?: unknown
    sign?: unknown
    horoscope?: unknown
  }
}

export async function getDailyHoroscope(sign: string): Promise<DailyHoroscopeResult | null> {
  const signSlug = sign.toLowerCase()
  const url = new URL('https://freehoroscopeapi.com/api/v1/get-horoscope/daily')
  url.searchParams.set('sign', signSlug)

  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(8000),
    })
    if (!response.ok) return null

    const payload = await response.json() as DailyHoroscopeResponse
    const result = payload.data
    if (
      !result ||
      result.period !== 'daily' ||
      typeof result.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(result.date) ||
      typeof result.sign !== 'string' || result.sign.toLowerCase() !== signSlug ||
      typeof result.horoscope !== 'string' || !result.horoscope.trim()
    ) return null

    return { date: result.date, sign: result.sign, text: result.horoscope.trim() }
  } catch {
    return null
  }
}
