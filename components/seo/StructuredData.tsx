import { absoluteSiteUrl } from '@/lib/constants/site'

type BreadcrumbItem = { name: string; path: string }

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: absoluteSiteUrl(item.path),
        })),
      }}
    />
  )
}

export function ServiceJsonLd({ name, description, path }: { name: string; description: string; path: string }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url: absoluteSiteUrl(path),
        provider: { '@id': `${absoluteSiteUrl('/')}#organization` },
        areaServed: ['India', 'Worldwide'],
      }}
    />
  )
}

export function FAQSection({ heading = 'Common questions', items }: { heading?: string; items: { question: string; answer: string }[] }) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <section style={{ background: '#FFFDF8', padding: 'var(--space-section) clamp(1.5rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 400, color: '#1E1208', marginBottom: '1.5rem' }}>{heading}</h2>
        <div className="flex flex-col gap-3">
          {items.map(({ question, answer }) => (
            <details key={question} className="rounded-lg p-5" style={{ background: '#FFFFFF', border: '1px solid rgba(184,134,11,0.18)' }}>
              <summary className="cursor-pointer font-medium" style={{ color: '#35271A', lineHeight: 1.5 }}>{question}</summary>
              <p className="mt-3" style={{ color: '#514536', fontSize: '0.9rem', lineHeight: 1.75 }}>{answer}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqJsonLd} />
    </section>
  )
}
