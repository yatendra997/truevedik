import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, BriefcaseBusiness, Compass, Globe2, HeartHandshake, House, Languages, LockKeyhole, MoonStar, Sparkles, Telescope, UsersRound } from 'lucide-react'

const INK = '#221334'
const PURPLE = '#302044'
const GOLD = '#B8904B'
const MUTED = '#655C6D'

const SIGNS = [
  { en: 'Aries', hi: 'मेष', glyph: '♈', work: 'Pick one priority and give it your full attention before adding something new.', love: 'Make space for a direct, kind conversation instead of guessing what the other person means.', money: 'Review a choice before committing. A little patience can make the details clearer.', wellness: 'A short pause between tasks may help you reset your pace.', number: '9', colour: 'Warm red' },
  { en: 'Taurus', hi: 'वृषभ', glyph: '♉', work: 'Steady progress matters more than rushing through a task. Keep your plan practical.', love: 'Show care through a small, thoughtful gesture and be open about what you need.', money: 'Take a closer look at recurring expenses and decide what still feels worthwhile.', wellness: 'A familiar routine may feel grounding. Leave room for rest, too.', number: '6', colour: 'Soft green' },
  { en: 'Gemini', hi: 'मिथुन', glyph: '♊', work: 'Write down your main idea before sharing it. Clear notes can keep a busy discussion focused.', love: 'Listen for what is being said, then ask a simple follow-up rather than filling in the gaps.', money: 'Compare the details before choosing between options. Check the terms, not just the headline.', wellness: 'A quieter moment away from notifications may help you collect your thoughts.', number: '5', colour: 'Light yellow' },
  { en: 'Cancer', hi: 'कर्क', glyph: '♋', work: 'Set a manageable boundary around your time so you can finish the work already in front of you.', love: 'Let someone know what support would feel useful instead of expecting them to guess.', money: 'A small review of a shared plan can help everyone understand the next step.', wellness: 'Make time for a familiar comfort and notice what helps you feel settled.', number: '2', colour: 'Silver' },
  { en: 'Leo', hi: 'सिंह', glyph: '♌', work: 'Take responsibility for one task you can complete, and give credit where others have helped.', love: 'Warmth is welcome; so is curiosity about the other person’s point of view.', money: 'Pause before an impulse purchase and ask whether it fits the priorities you set.', wellness: 'Choose an activity that feels enjoyable rather than turning rest into another target.', number: '1', colour: 'Gold' },
  { en: 'Virgo', hi: 'कन्या', glyph: '♍', work: 'A short list can help you sort urgent items from those that can wait.', love: 'Try to say what is on your mind without needing every detail to be perfect first.', money: 'Check dates and small print on an upcoming bill or commitment.', wellness: 'A simple meal or a little fresh air can be a good way to look after yourself.', number: '5', colour: 'Olive' },
  { en: 'Libra', hi: 'तुला', glyph: '♎', work: 'Name the decision that needs attention and the information you still need to make it.', love: 'A fair conversation makes room for both people to speak and be heard.', money: 'If a choice involves others, agree on expectations before moving ahead.', wellness: 'A change of setting or a few calm minutes may help restore your focus.', number: '6', colour: 'Rose' },
  { en: 'Scorpio', hi: 'वृश्चिक', glyph: '♏', work: 'Focus on what you can confirm rather than trying to solve every unknown at once.', love: 'Honesty can be gentle. Share your concern without assuming the other person’s intent.', money: 'Keep a careful record of a decision that needs follow-up.', wellness: 'Give yourself space to think, then choose one small step that feels supportive.', number: '8', colour: 'Deep red' },
  { en: 'Sagittarius', hi: 'धनु', glyph: '♐', work: 'An interesting idea still needs a practical next step. Write down what you would need to test it.', love: 'Make room for a shared plan, even if you each picture the details a little differently.', money: 'Check the full cost before saying yes to something that sounds exciting.', wellness: 'A walk or a change in routine may help you feel refreshed.', number: '3', colour: 'Purple' },
  { en: 'Capricorn', hi: 'मकर', glyph: '♑', work: 'Break a longer task into one step you can finish and review today.', love: 'Show that you are listening; a calm check-in may matter more than a quick fix.', money: 'Look at the longer-term effect before agreeing to a new commitment.', wellness: 'Rest is part of a steady routine. Leave some time unplanned if you can.', number: '8', colour: 'Charcoal' },
  { en: 'Aquarius', hi: 'कुंभ', glyph: '♒', work: 'A different approach may be useful. Share it clearly and invite practical feedback.', love: 'Respect each other’s need for space while staying clear about plans and expectations.', money: 'Research an option carefully and avoid decisions based on pressure or urgency.', wellness: 'Choose a simple activity that helps you reconnect with the present moment.', number: '4', colour: 'Sky blue' },
  { en: 'Pisces', hi: 'मीन', glyph: '♓', work: 'Put an open-ended idea into a few concrete steps so it is easier to begin.', love: 'Kindness and clear words can sit together. Say what you hope for without overpromising.', money: 'Keep a note of what is known and what still needs checking before you decide.', wellness: 'A little quiet time may help you notice what you need today.', number: '7', colour: 'Sea green' },
] as const

const SERVICES = [
  { category: 'Personal astrology', icon: HeartHandshake, href: '/kundali-reading', items: [
    ['Kundali Vishleshan', 'Discuss chart themes and the questions you bring.'], ['Marriage life questions', 'Explore relationship themes without treating a reading as a verdict.'], ['Children and family', 'Bring family questions for a careful, traditional chart discussion.'], ['Marriage astrology', 'Ask how relationship themes are read in a birth chart.'], ['Love astrology', 'Reflect on relationship questions while keeping your choices central.'], ['Compatibility', 'Learn what traditional chart matching can and cannot show.'], ['Match making', 'Understand the method behind a Kundali match and its limits.'],
  ], detail: 'Discuss relationships and family themes through a traditional birth chart reading. The conversation respects each person’s choices and circumstances.' },
  { category: 'Career & professional', icon: BriefcaseBusiness, href: '/consultation', items: [
    ['Career astrology', 'Reflect on work themes alongside your skills and plans.'], ['Business questions', 'Use a reading as one perspective, not business advice.'], ['Foreign settlement', 'Discuss travel or relocation themes without promises.'], ['Legal matters', 'Reflect on timing; consult a qualified legal professional for advice.'], ['Property questions', 'Discuss traditional chart themes and review practical details separately.'],
  ], detail: 'Explore traditional chart perspectives alongside practical information. This is not career, legal, property, or financial advice.' },
  { category: 'Financial reflection', icon: Sparkles, href: '/consultation', items: [
    ['Finance astrology', 'Discuss traditional money themes, not financial recommendations.'], ['Share market astrology', 'No investment calls, market forecasts, or return promises are provided.'],
  ], detail: 'Discuss how astrology traditions approach timing and money themes. This is not investment or financial advice, and no returns are promised.' },
  { category: 'Spiritual & personal', icon: MoonStar, href: '/puja-remedies', items: [
    ['Health-related chart themes', 'Astrology is not medical advice or a substitute for care.'], ['Numerology', 'Explore number traditions as a personal reflection practice.'], ['Rudraksha', 'Ask about traditional meaning, sourcing, and care.'], ['Yantras', 'Learn how yantras are used in some spiritual traditions.'], ['Gemstones', 'Ask about traditional associations and verify stone details.'], ['Online puja', 'Understand the practice and any costs before choosing.'],
  ], detail: 'Learn about traditional practices and ask questions before choosing anything. Astrology does not replace medical or other professional care.' },
  { category: 'Vastu consultancy', icon: House, href: '/vastu-consultation', items: [
    ['Residential Vastu', 'Consider room use, light, circulation, and household needs.'], ['Commercial Vastu', 'Discuss a workplace layout alongside access and building requirements.'],
  ], detail: 'Review a home or workplace layout, room use, and everyday needs through traditional Vastu principles.' },
] as const

const TOOLS = [
  { title: 'Kundli matching', icon: HeartHandshake, description: 'Learn what traditional chart matching considers, and what it cannot tell you about a relationship.', href: '/blog/kundali-matching-beyond-guna-milan', cta: 'Read the guide' },
  { title: 'Free Kundali request', icon: Telescope, description: 'Ask about a Kundali overview. Automated chart generation is not available on this site yet.', href: '/consultation', cta: 'Ask about a reading' },
  { title: 'Free horoscope prompts', icon: MoonStar, description: 'See today’s general zodiac reflection prompts for all 12 signs.', href: '/tools', cta: 'Explore reflections' },
  { title: 'Aaj ka shubh muhurat', icon: Sparkles, description: 'Ask a question about traditional auspicious timing. We do not publish unverified live timings.', href: '/contact', cta: 'Ask a question' },
  { title: 'Aaj ka Panchang', icon: BookOpen, description: 'Panchang details depend on date, place, and calculation method. Contact us to ask about a reading.', href: '/contact', cta: 'Ask about Panchang' },
  { title: 'Monthly Panchang', icon: Compass, description: 'Learn about the traditional calendar and ask which date and location details are needed.', href: '/contact', cta: 'Get in touch' },
  { title: 'Numerology conversation', icon: Sparkles, description: 'Ask about numerology as a traditional reflection practice. No outcome is guaranteed.', href: '/consultation', cta: 'Explore a consultation' },
] as const

const COUNTRIES = [
  ['🇮🇳', 'India'], ['🇬🇧', 'United Kingdom'], ['🇺🇸', 'United States'], ['🇨🇦', 'Canada'],
  ['🇦🇺', 'Australia'], ['🇦🇪', 'United Arab Emirates'], ['🇳🇿', 'New Zealand'], ['🌍', 'Europe'],
] as const

const KNOWLEDGE = [
  ['What is Vedic astrology?', 'Jyotish is a traditional Indian system that interprets the positions of celestial bodies through a set of established methods. People may use it as a cultural or spiritual lens for reflection. It is not a scientific guarantee of future events.', '/kundali-reading'],
  ['What is a Janam Kundli?', 'A Janam Kundli is a birth chart calculated from a person’s date, time, and place of birth. If the time is uncertain, say so; a chart reading should make its limits clear.', '/blog/janam-kundali-birth-chart-guide'],
  ['What is Kundli Vishleshan?', 'Kundli Vishleshan means examining a birth chart within a particular astrology tradition. The astrologer should explain the factors they consider and avoid treating one placement as the whole story.', '/kundali-reading'],
  ['What are planetary transits?', 'In astrology, a transit describes the apparent movement of a planet in relation to a chart or zodiac sign. Interpretations vary by tradition and should not be treated as certain events.', '/blog'],
  ['What are Mahadasha and Antardasha?', 'These are major and sub-periods used in some Vedic astrology systems to discuss timing. Their meaning depends on the chart and method being used; they do not guarantee a result.', '/blog'],
  ['What are Mangal Dosha and Kaal Sarp Dosha?', 'These are chart combinations described in some astrology traditions. Names and interpretations vary. Ask what method is being used and be cautious of fear-based claims or costly remedies.', '/kundali-reading'],
  ['What is Kundli matching?', 'Kundli matching compares selected factors in two charts in some marriage traditions. It cannot measure consent, character, or how two people will build a life together.', '/blog/kundali-matching-beyond-guna-milan'],
  ['What is numerology?', 'Numerology assigns traditional meanings to numbers linked with names or dates. It is a belief practice and should not be treated as a verified prediction or professional advice.', '/consultation'],
  ['What is Vastu Shastra?', 'Vastu Shastra is a traditional approach to orientation and the use of space. Any suggestions should also respect building safety, accessibility, local rules, and your budget.', '/vastu-consultation'],
  ['How are gemstones and Rudraksha viewed?', 'Some traditions associate gemstones and Rudraksha with spiritual or astrological meaning. Ask about sourcing and cost, and make your own choice without pressure or promises.', '/gemstones'],
] as const

const FAQS = [
  ['What is Vedic astrology?', 'Vedic astrology, also called Jyotish, is a traditional belief system used by some people to reflect on life themes and timing. Interpretations vary, and it should not be treated as a guaranteed prediction.'],
  ['How does Kundli analysis work?', 'A reading uses birth date, best-known birth time, and birthplace to prepare a chart, then discusses selected placements and periods using the astrologer’s stated method. You can ask the astrologer to explain each step in plain language.'],
  ['What details are needed for Kundli analysis?', 'Usually the date, time, and place of birth, plus a question you would like to discuss. If your time is uncertain, share the range you know rather than guessing an exact time.'],
  ['Can astrology help with career decisions?', 'Some people use a reading as one reflective perspective. It cannot choose a career or guarantee a job or business result. Consider your skills, finances, experience, and qualified career or financial advice too.'],
  ['Can Kundli matching help before marriage?', 'Kundli matching is a traditional way some families discuss compatibility. It cannot replace conversation, consent, shared values, or a couple’s own judgment.'],
  ['What happens during an online consultation?', 'You share the topic and any birth details you want considered. The team confirms an available time and mode, then Acharya Ved Prakash discusses the reading and answers your questions. A booking request is not a confirmed appointment.'],
  ['Do you provide international consultations?', 'Online consultation requests are welcome from India and other countries. The team confirms the available mode and time zone with you; no local office is implied.'],
  ['Are astrology remedies personalized?', 'Traditional suggestions may depend on the chart and the question. You can ask what a practice involves and what it costs, and you are free to decline. No remedy guarantees an outcome.'],
  ['What is the difference between a daily horoscope and a personal Kundli?', 'A daily horoscope is general and often based on a sun sign. A personal Kundli uses birth date, time, and place, though its interpretation is still a traditional reading rather than a certainty.'],
  ['How can I book a consultation?', 'Use the Book a Consultation button to send a request with your contact details and preferred mode. The team will follow up to confirm availability and share any price or payment terms before you agree.'],
] as const

const DEMO_STATS = ['Clients guided', 'Countries reached', 'Years of experience', 'Consultations completed'] as const

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className="text-xs font-semibold uppercase tracking-[.18em]" style={{ color: light ? '#E2C47F' : '#826331' }}>{children}</p>
}

function HomeHeading({ eyebrow, title, intro, light = false, id }: { eyebrow: string; title: string; intro?: string; light?: boolean; id?: string }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center">
    <Eyebrow light={light}>{eyebrow}</Eyebrow>
    <h2 id={id} className="mt-3" style={{ color: light ? '#FFF9ED' : INK, fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem, 4.4vw, 3.1rem)', fontWeight: 500, lineHeight: 1.12 }}>{title}</h2>
    {intro && <p className="mx-auto mt-4 max-w-2xl text-sm leading-7" style={{ color: light ? '#E8E0ED' : MUTED }}>{intro}</p>}
  </div>
}

function SectionLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4" style={{ color: light ? '#F1D597' : '#70501D' }}>{children}<ArrowRight size={16} aria-hidden="true" /></Link>
}

export function HomepageExperience() {
  const today = new Intl.DateTimeFormat('en-IN', { dateStyle: 'full', timeZone: 'Asia/Kolkata' }).format(new Date())
  const faqsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  }

  return <>
    <section id="daily-horoscope" aria-labelledby="daily-horoscope-title" className="scroll-mt-24" style={{ background: PURPLE, color: '#FFF9ED', padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: 1320 }}>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div><Eyebrow light>Today · {today}</Eyebrow><h2 id="daily-horoscope-title" className="mt-3" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem, 4.4vw, 3.1rem)', fontWeight: 500 }}>A daily moment for reflection</h2><p className="mt-3 max-w-2xl text-sm leading-7" style={{ color: '#E8E0ED' }}>Choose a sign to read an original daily prompt across work, relationships, money, and wellbeing.</p></div>
          <SectionLink href="/tools" light>See all daily prompts</SectionLink>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {SIGNS.map((sign) => <article key={sign.en} className="rounded-2xl p-5 sm:p-6" style={{ background: '#3A2A4E', border: '1px solid rgba(226,196,127,.24)' }}>
            <div className="flex items-center gap-4 border-b pb-4" style={{ borderColor: 'rgba(255,255,255,.12)' }}>
              <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full text-3xl" style={{ color: '#E2C47F', background: 'rgba(226,196,127,.12)' }}>{sign.glyph}</span>
              <div><h3 className="text-lg font-semibold">{sign.en}</h3><p className="text-sm" lang="hi" style={{ color: '#D9C9E3' }}>{sign.hi}</p></div>
              <span className="ml-auto text-xs" style={{ color: '#D9C9E3' }}>Sun sign</span>
            </div>
            <p className="mt-4 text-sm leading-6" style={{ color: '#FFF9ED' }}>{sign.work}</p>
            <details className="mt-4 border-t pt-3" style={{ borderColor: 'rgba(255,255,255,.12)' }}>
              <summary className="cursor-pointer text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4" style={{ color: '#F1D597' }}>Read today’s full reflection</summary>
              <dl className="mt-3 grid grid-cols-1 gap-3 text-sm leading-6">
                {[["Relationships", sign.love], ["Money", sign.money], ["Wellbeing", sign.wellness], ["Traditional lucky number", sign.number], ["Traditional lucky colour", sign.colour]].map(([label, text]) => <div key={label}><dt className="font-semibold" style={{ color: '#E2C47F' }}>{label}</dt><dd style={{ color: '#E8E0ED' }}>{text}</dd></div>)}
              </dl>
            </details>
          </article>)}
        </div>
        <p className="mt-6 text-xs leading-6" style={{ color: '#D9C9E3' }}>These are general, original reflection prompts, not live planetary calculations or personal predictions. Lucky details reflect tradition and are for interest only. This content does not replace professional medical, legal, or financial advice.</p>
      </div>
    </section>

    <section aria-labelledby="consultancy-why" style={{ background: '#FFFDF8', padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        <HomeHeading eyebrow="A thoughtful starting point" title="Why speak with an astrology consultant?" intro="A consultation can give you time to look at a question through the lens of traditional Vedic astrology, understand how an interpretation is formed, and consider your options at your own pace." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Career questions', 'Talk through work themes or a possible change. Keep your experience, finances, and professional advice in view.'],
            ['Relationships', 'Explore what a traditional chart reading says while keeping communication, consent, and personal judgment at the centre.'],
            ['Timing and life periods', 'Ask how a practitioner uses Mahadasha, Antardasha, or transits, and what uncertainty remains.'],
            ['Home and personal practices', 'Learn about Vastu or traditional practices without pressure, fear, or promises of a particular result.'],
          ].map(([title, description]) => <article key={title} className="rounded-2xl p-5" style={{ background: '#F7F3EA', border: '1px solid #EAE2D3' }}><h3 className="text-lg font-semibold" style={{ color: INK }}>{title}</h3><p className="mt-2 text-sm leading-6" style={{ color: MUTED }}>{description}</p></article>)}
        </div>
        <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-6" style={{ color: MUTED }}>Astrology is a traditional belief practice. It is not medical, legal, financial, or mental-health advice, and it cannot guarantee a result. For urgent or professional matters, speak with an appropriately qualified expert.</p>
      </div>
    </section>

    <section id="services" aria-labelledby="services-title" className="scroll-mt-24" style={{ background: '#F3EFE7', padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: 1320 }}>
        <HomeHeading eyebrow="Explore our services" title="Support for the questions on your mind" intro="Start with a topic, then choose what you would like to discuss. Each service below leads to an existing TrueVedik page." />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return <article key={service.category} className="overflow-hidden rounded-2xl bg-white" style={{ border: '1px solid #E8E0D2', boxShadow: '0 8px 24px rgba(34,19,52,.05)' }}>
              <div className="flex items-center gap-3 px-5 pt-5"><span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ color: GOLD, background: '#F7F1E5' }}><Icon size={22} aria-hidden="true" /></span><h3 className="text-xl font-semibold" style={{ color: INK }}>{service.category}</h3></div>
              <p className="px-5 pt-3 text-sm leading-6" style={{ color: MUTED }}>{service.detail}</p>
              <ul className="grid grid-cols-1 gap-3 px-5 py-4 sm:grid-cols-2">{service.items.map(([title, description]) => <li key={title} className="flex flex-col rounded-xl p-3" style={{ color: '#44394C', background: '#FAF8F3', border: '1px solid #EEE8DE' }}><h4 className="text-sm font-semibold" style={{ color: INK }}>{title}</h4><p className="mt-1 flex-1 text-xs leading-5" style={{ color: MUTED }}>{description}</p><div className="mt-2"><Link href={service.href} className="inline-flex items-center gap-1 text-xs font-semibold underline-offset-4 hover:underline focus-visible:outline-2" style={{ color: '#70501D' }}>Explore <ArrowRight size={13} aria-hidden="true" /></Link></div></li>)}</ul>
              <div className="border-t px-5 py-4" style={{ borderColor: '#EEE8DE' }}><SectionLink href={service.href}>Explore {service.category}</SectionLink></div>
            </article>
          })}
        </div>
        <div className="mt-8 text-center"><Link href="/consultation" className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold" style={{ color: '#FFF9ED', background: INK }}>View all consultation options <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </div>
    </section>

    <section aria-labelledby="why-truevedik" style={{ background: '#FFFDF8', padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        <HomeHeading eyebrow="The TrueVedik approach" title="Clear, personal, and grounded in tradition" intro="A consultation should help you understand what is being discussed and leave you free to decide what feels useful." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Telescope, 'Experienced guidance', 'Acharya Ved Prakash has over 12 years of experience discussing Vedic astrology.'],
            [BookOpen, 'Your chart, explained', 'We make space for questions and explain traditional chart ideas in everyday language.'],
            [Sparkles, 'Practical options', 'Any traditional practice is explained clearly. You choose whether to follow it.'],
            [LockKeyhole, 'Respectful conversation', 'Birth details are requested only for the consultation request and handled under the privacy policy.'],
            [Globe2, 'Online appointments', 'Ask about WhatsApp, phone, or video consultations; the team confirms the time and mode.'],
            [Compass, 'A clear process', 'Send a request first. Availability, duration, and any price are confirmed before you book.'],
            [Languages, 'English and Hindi', 'Guidance can be discussed in Hindi or English. Website information is currently mostly in English.'],
            [UsersRound, 'Your choice matters', 'A chart reading is one perspective. Your experience, values, and decisions remain your own.'],
          ].map(([Icon, title, description]) => {
            const FeatureIcon = Icon as typeof Telescope
            return <article key={title as string} className="rounded-2xl p-5" style={{ background: '#F7F3EA', border: '1px solid #EAE2D3' }}><FeatureIcon size={23} color={GOLD} aria-hidden="true"/><h3 className="mt-3 font-semibold" style={{ color: INK }}>{title as string}</h3><p className="mt-2 text-sm leading-6" style={{ color: MUTED }}>{description as string}</p></article>
          })}
        </div>
      </div>
    </section>

    <section aria-labelledby="international-title" style={{ color: '#FFF9ED', background: INK, padding: 'clamp(3.5rem, 7vw, 5.5rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        <HomeHeading light eyebrow="Online, across time zones" title="Consultations for clients in India and abroad" intro="People can send a consultation request from these regions. We confirm the available mode and time zone with each client. These are online consultations; we do not claim local offices." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{COUNTRIES.map(([flag, country]) => <Link key={country} href="/consultation" className="rounded-xl p-4 text-center transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4" style={{ color: '#FFF9ED', background: 'rgba(255,255,255,.055)', border: '1px solid rgba(226,196,127,.22)', textDecoration: 'none' }}><span aria-hidden="true" className="text-2xl">{flag}</span><span className="mt-2 block text-sm font-medium">{country}</span><span className="mt-1 block text-xs" style={{ color: '#D9C9E3' }}>Online consultation</span></Link>)}</div>
      </div>
    </section>

    <section aria-labelledby="about-truevedik" style={{ background: '#FFFDF8', padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div className="mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-2" style={{ maxWidth: 1180 }}>
        <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '5 / 4' }}><Image src="/acharya-ved-prakash-study.webp" alt="Acharya Ved Prakash in his study" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
        <div><Eyebrow>About TrueVedik</Eyebrow><h2 id="about-truevedik" className="mt-3" style={{ color: INK, fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.15 }}>Traditional Jyotish, explained in today’s language</h2>
          <p className="mt-4 text-sm leading-7" style={{ color: MUTED }}>TrueVedik offers one-to-one Vedic astrology consultations with Acharya Ved Prakash, who has more than 12 years of experience. Our aim is to make the conversation clear, personal, and respectful of each person’s circumstances.</p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">{[['Our journey', 'Over 12 years of listening to people’s questions and discussing traditional Jyotish.'], ['Our mission', 'Explain the reading simply and make room for the client’s own judgment.'], ['Our vision', 'Keep traditional guidance accessible through thoughtful online conversations.']].map(([title, body]) => <div key={title} className="rounded-xl p-4" style={{ background: '#F7F3EA' }}><h3 className="font-semibold" style={{ color: INK }}>{title}</h3><p className="mt-2 text-xs leading-5" style={{ color: MUTED }}>{body}</p></div>)}</div>
          <div className="mt-6"><SectionLink href="/about">Read more about Acharya Ved Prakash</SectionLink></div>
        </div>
      </div>
    </section>

    <section aria-labelledby="knowledge-title" style={{ background: '#F3EFE7', padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        <HomeHeading eyebrow="Astrology, explained simply" title="A few ideas you may come across in a reading" intro="Here is a clear starting point for common terms. Meanings can differ between teachers and schools of practice." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{KNOWLEDGE.map(([title, body, href]) => <article key={title} className="rounded-xl bg-white p-5" style={{ border: '1px solid #E7E0D5' }}><h3 className="text-lg font-semibold" style={{ color: INK }}>{title}</h3><p className="mt-2 text-sm leading-6" style={{ color: MUTED }}>{body}</p><div className="mt-3"><SectionLink href={href}>Read more</SectionLink></div></article>)}</div>
      </div>
    </section>

    <section aria-labelledby="free-tools-title" style={{ background: '#302044', padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: 1320 }}>
        <HomeHeading light eyebrow="Start exploring" title="Explore our free astrology tools" intro="Find a guide, see general horoscope prompts, or ask the team about a consultation. Some automated reports are not available yet; each card explains what is currently offered." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{TOOLS.map((tool) => {
          const ToolIcon = tool.icon
          return <article key={tool.title} className="flex flex-col rounded-2xl p-5" style={{ background: '#3A2A4E', border: '1px solid rgba(226,196,127,.25)' }}><ToolIcon size={23} color="#E2C47F" aria-hidden="true"/><h3 className="mt-3 font-semibold" style={{ color: '#FFF9ED' }}>{tool.title}</h3><p className="mt-2 flex-1 text-sm leading-6" style={{ color: '#E8E0ED' }}>{tool.description}</p><div className="mt-4"><SectionLink href={tool.href} light>{tool.cta}</SectionLink></div></article>
        })}</div>
      </div>
    </section>

    <section aria-labelledby="stats-title" style={{ background: '#FFFDF8', padding: 'clamp(3rem, 6vw, 4.5rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: 1180 }}><div className="mb-6 text-center"><Eyebrow>Trust, built on facts</Eyebrow><h2 id="stats-title" className="mt-2" style={{ color: INK, fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '2.4rem', fontWeight: 500 }}>Our work in numbers</h2><p className="mt-2 text-xs" style={{ color: MUTED }}>DEMO placeholders below. Replace with verified business figures before publishing.</p></div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{DEMO_STATS.map((label) => <div key={label} className="rounded-xl p-5 text-center" style={{ background: '#F7F3EA', border: '1px dashed #B8904B' }}><p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#826331' }}>DEMO</p><p className="mt-2 text-lg font-semibold" style={{ color: INK }}>Add verified figure</p><p className="mt-1 text-xs" style={{ color: MUTED }}>{label}</p></div>)}</div>
      </div>
    </section>

    <section aria-labelledby="faq-title" style={{ background: '#F3EFE7', padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)' }}>
      <div className="mx-auto" style={{ maxWidth: 900 }}><HomeHeading id="faq-title" eyebrow="Before you book" title="Frequently asked questions" intro="Clear answers about Vedic astrology, online consultations, and what to expect." />
        <div className="space-y-3">{FAQS.map(([question, answer]) => <details key={question} className="rounded-xl bg-white p-5" style={{ border: '1px solid #E7E0D5' }}><summary className="cursor-pointer font-semibold focus-visible:outline-2 focus-visible:outline-offset-4" style={{ color: INK }}>{question}</summary><p className="mt-3 text-sm leading-7" style={{ color: MUTED }}>{answer}</p></details>)}</div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsJsonLd).replace(/</g, '\\u003c') }} />
    </section>
  </>
}
