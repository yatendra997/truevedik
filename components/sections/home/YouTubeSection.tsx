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
          <h2 id="youtube-heading" className="mt-2" style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500 }}>Clear conversations about Vedic traditions</h2>
          <p className="mt-3 max-w-xl" style={{ color: '#514536', lineHeight: 1.8 }}>Explore short videos from TrueVedik. Astrology is a traditional belief practice, and videos are for general information rather than personal or professional advice.</p>
          <Link href={channelUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-md px-5 py-3 text-sm font-semibold" style={{ color: '#fff', background: '#8A311F', textDecoration: 'none' }}>Visit our YouTube channel</Link>
        </div>
        {validVideoId && (
          <a
            href={`https://www.youtube.com/watch?v=${validVideoId}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch the latest TrueVedik video on YouTube"
            className="relative flex items-center justify-center overflow-hidden rounded-xl"
            style={{
              aspectRatio: '16/9',
              background: 'radial-gradient(circle at 28% 35%, rgba(212,175,55,0.18), transparent 42%), linear-gradient(135deg, #2E2117, #713820)',
              textDecoration: 'none',
            }}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white text-[#8A311F] shadow-lg" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.5v13l10-6.5-10-6.5Z" />
              </svg>
            </span>
            <span className="absolute bottom-4 left-4 rounded-full bg-black/35 px-3 py-1.5 text-xs font-semibold tracking-wide text-white">
              Watch on YouTube
            </span>
          </a>
        )}
      </div>
    </section>
  )
}
