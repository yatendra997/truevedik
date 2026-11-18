import Link from 'next/link'

const channelUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL
const videoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID
const validVideoId = videoId && /^[A-Za-z0-9_-]{11}$/.test(videoId) ? videoId : null

export function YouTubeSection() {
  if (!channelUrl) return null

  return (
    <section aria-labelledby="youtube-heading" style={{ background: '#F5F0E6', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)' }}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" style={{ maxWidth: 1200 }}>
        <div>
          <p style={{ color: '#805900', fontSize: '.7rem', letterSpacing: '.14em', textTransform: 'uppercase' }}>Watch and learn</p>
          <h2 id="youtube-heading" className="mt-2" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500 }}>Clear conversations about Vedic traditions</h2>
          <p className="mt-3 max-w-xl" style={{ color: '#514536', lineHeight: 1.8 }}>Explore short videos from TrueVedik. Astrology is a traditional belief practice, and videos are for general information rather than personal or professional advice.</p>
          <Link href={channelUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-md px-5 py-3 text-sm font-semibold" style={{ color: '#fff', background: '#8A311F', textDecoration: 'none' }}>Visit our YouTube channel</Link>
        </div>
        {validVideoId && <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: '16/9' }}><iframe title="TrueVedik YouTube video" src={`https://www.youtube-nocookie.com/embed/${validVideoId}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute inset-0 h-full w-full border-0" /></div>}
      </div>
    </section>
  )
}
