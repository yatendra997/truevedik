'use client'

import Script from 'next/script'
import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'truevedik-analytics-consent'
const CHANGE_EVENT = 'truevedik-consent-change'

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback)
  window.addEventListener(CHANGE_EVENT, callback)
  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener(CHANGE_EVENT, callback)
  }
}

function getSnapshot(): 'accepted' | 'rejected' | null {
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'accepted' || saved === 'rejected' ? saved : null
}

function getServerSnapshot() {
  return null
}

export function CookieConsent() {
  const choice = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const choose = (value: 'accepted' | 'rejected') => {
    window.localStorage.setItem(STORAGE_KEY, value)
    window.dispatchEvent(new Event(CHANGE_EVENT))
  }

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
  const analyticsEnabled = choice === 'accepted'

  return (
    <>
      {analyticsEnabled && gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`} strategy="afterInteractive" />
          <Script id="truevedik-ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId.replace(/[^A-Z0-9-]/gi, '')}');`}
          </Script>
        </>
      )}
      {analyticsEnabled && pixelId && (
        <Script id="truevedik-meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId.replace(/\D/g, '')}');fbq('track','PageView');`}
        </Script>
      )}
      {choice === null && (
        <aside role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-copy" className="fixed inset-x-4 bottom-4 z-[80] mx-auto flex max-h-[calc(100dvh-2rem)] max-w-3xl flex-col gap-4 overflow-y-auto rounded-xl p-5 shadow-xl sm:flex-row sm:items-center sm:justify-between" style={{ background: '#241B14', color: '#FFFDF8', border: '1px solid rgba(212,175,55,0.45)' }}>
          <div>
            <h2 id="cookie-title" className="font-semibold">Optional analytics</h2>
            <p id="cookie-copy" className="mt-1 text-sm" style={{ color: '#E5DCCB', lineHeight: 1.6 }}>We use analytics only if you allow it. Essential site functions work either way.</p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
            <button type="button" onClick={() => choose('rejected')} className="w-full rounded-md border px-4 py-2 text-sm sm:w-auto" style={{ borderColor: '#D4AF37', color: '#FFFDF8' }}>Reject optional</button>
            <button type="button" onClick={() => choose('accepted')} className="w-full rounded-md px-4 py-2 text-sm font-medium sm:w-auto" style={{ background: '#D4AF37', color: '#241B14' }}>Allow analytics</button>
          </div>
        </aside>
      )}
    </>
  )
}
