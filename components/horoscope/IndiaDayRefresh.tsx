'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function millisecondsUntilIndiaMidnight() {
  const now = new Date()
  const dateParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(now)
  const part = (type: 'year' | 'month' | 'day') => Number(dateParts.find((item) => item.type === type)?.value)
  const nextMidnightUtc = Date.UTC(part('year'), part('month') - 1, part('day') + 1) - (5.5 * 60 * 60 * 1000)
  return Math.max(1000, nextMidnightUtc - now.getTime() + 1000)
}

export function IndiaDayRefresh() {
  const router = useRouter()

  useEffect(() => {
    let timer: number
    const scheduleRefresh = () => {
      timer = window.setTimeout(() => {
        router.refresh()
        scheduleRefresh()
      }, millisecondsUntilIndiaMidnight())
    }

    scheduleRefresh()
    return () => window.clearTimeout(timer)
  }, [router])

  return null
}
