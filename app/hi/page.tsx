import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { absoluteSiteUrl } from '@/lib/constants/site'

export const metadata: Metadata = {
  title: 'वैदिक ज्योतिष परामर्श | TrueVedik',
  description: 'आचार्य वेद प्रकाश के साथ वैदिक ज्योतिष परामर्श। कुंडली, रिश्तों, काम और घर से जुड़े सवालों पर सरल बातचीत।',
  alternates: { canonical: absoluteSiteUrl('/hi'), languages: { en: absoluteSiteUrl('/'), hi: absoluteSiteUrl('/hi') } },
  openGraph: { locale: 'hi_IN', title: 'TrueVedik | वैदिक ज्योतिष परामर्श', description: 'कुंडली और जीवन के सवालों पर सहज, व्यक्तिगत बातचीत।', url: absoluteSiteUrl('/hi') },
}

const links = [
  ['आचार्य के बारे में', '/hi/about'],
  ['लेख और मार्गदर्शिकाएँ', '/hi/blog'],
  ['कुंडली पढ़ना', '/hi/kundali-reading'],
  ['पूजा और उपाय', '/hi/puja-remedies'],
  ['रत्न और रुद्राक्ष', '/hi/gemstones'],
  ['वास्तु परामर्श', '/hi/vastu-consultation'],
  ['संपर्क', '/hi/contact'],
]

export default function HindiPage() {
  return (
    <main lang="hi" className="min-h-screen" style={{ background: '#FFFDF8', color: '#1E1208' }}>
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8" style={{ padding: 'clamp(3rem, 7vw, 6rem) clamp(1.5rem, 6vw, 5rem)', background: '#F5F0E6' }}>
        <div className="mx-auto" style={{ maxWidth: 680 }}>
          <p className="text-sm" style={{ color: '#805900' }}>TrueVedik · आचार्य वेद प्रकाश</p>
          <h1 className="mt-3" style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.15, fontWeight: 500 }}>वैदिक ज्योतिष पर सरल और व्यक्तिगत बातचीत</h1>
          <p className="mt-5" style={{ color: '#514536', lineHeight: 1.9 }}>आचार्य वेद प्रकाश को वैदिक ज्योतिष के क्षेत्र में 12 साल से अधिक का अनुभव है। कुंडली, रिश्तों, काम या घर से जुड़े सवालों पर अपनी परिस्थिति के अनुसार बात करें। कोई भी उपाय आपकी पसंद है, और किसी नतीजे की गारंटी नहीं दी जाती।</p>
          <Link href="/hi/consultation" className="mt-6 inline-flex rounded-md px-6 py-3 text-sm font-semibold" style={{ background: '#9A4B0A', color: 'white', textDecoration: 'none' }}>परामर्श के बारे में जानें</Link>
        </div>
        <div className="relative mx-auto w-full overflow-hidden rounded-2xl" style={{ maxWidth: 520, aspectRatio: '4 / 3' }}>
          <Image src="/acharya-ved-prakash-study.webp" alt="अपने अध्ययन कक्ष में आचार्य वेद प्रकाश" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>
      <section className="mx-auto" style={{ maxWidth: 1150, padding: '3.5rem 1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '2.3rem', fontWeight: 500 }}>आप किस विषय पर बात करना चाहते हैं?</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map(([label, href]) => <Link key={href} href={href} className="rounded-xl p-5" style={{ background: '#fff', border: '1px solid rgba(30,18,8,.12)', color: '#62470B', textDecoration: 'none' }}>{label} <span aria-hidden="true">→</span></Link>)}
        </div>
      </section>
      <aside className="mx-auto mb-14 rounded-xl px-5 py-4 text-sm" style={{ maxWidth: 1120, background: '#F5F0E6', color: '#514536', lineHeight: 1.8 }}>
        ज्योतिष एक पारंपरिक आस्था-आधारित अभ्यास है। इसे चिकित्सा, कानूनी, वित्तीय या अन्य पेशेवर सलाह का विकल्प न मानें। कोई नतीजा सुनिश्चित नहीं है।
      </aside>
    </main>
  )
}
