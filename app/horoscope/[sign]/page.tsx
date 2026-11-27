import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SIGNS } from '@/lib/horoscope'
import { HoroscopeReading } from '@/components/horoscope/HoroscopeReading'
import { getDailyHoroscope } from '@/lib/daily-horoscope-api'

type Props = { params: Promise<{ sign: string }> }

export const revalidate = 0

function getSign(slug: string) {
  return SIGNS.find((sign) => sign.en.toLowerCase() === slug.toLowerCase())
}

export function generateStaticParams() {
  return SIGNS.map((sign) => ({ sign: sign.en.toLowerCase() }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sign: slug } = await params
  const sign = getSign(slug)
  if (!sign) return { title: 'Horoscope not found | TrueVedik' }

  return {
    title: `${sign.en} Horoscope | TrueVedik`,
    description: `Read the latest general ${sign.en} sun-sign horoscope and daily reflection on TrueVedik.`,
  }
}

export default async function SignHoroscopePage({ params }: Props) {
  const { sign: slug } = await params
  const sign = getSign(slug)
  if (!sign) notFound()

  const now = new Date()
  const indiaDateParts = new Intl.DateTimeFormat('en', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now)
  const year = Number(indiaDateParts.find((part) => part.type === 'year')?.value)
  const month = Number(indiaDateParts.find((part) => part.type === 'month')?.value)
  const day = Number(indiaDateParts.find((part) => part.type === 'day')?.value)
  const dateTime = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  const dateLabel = new Intl.DateTimeFormat('en-IN', { dateStyle: 'full', timeZone: 'Asia/Kolkata' }).format(now)
  const reading = await getDailyHoroscope(sign.en)

  return <main className="min-h-screen px-5 py-10 sm:px-8 sm:py-14" style={{ background: '#FFFDF8' }}>
    <div className="mx-auto max-w-5xl">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm" style={{ color: '#665B4E' }}>
        <ol className="flex flex-wrap items-center gap-2"><li><Link className="underline-offset-4 hover:underline" href="/">Home</Link></li><li aria-hidden="true">/</li><li><Link className="underline-offset-4 hover:underline" href="/tools">Daily horoscope</Link></li><li aria-hidden="true">/</li><li aria-current="page">{sign.en}</li></ol>
      </nav>
      <HoroscopeReading sign={sign} dateLabel={dateLabel} dateTime={dateTime} reading={reading} />
    </div>
  </main>
}
