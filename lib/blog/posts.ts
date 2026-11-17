export interface BlogSection {
  heading: string
  paragraphs: string[]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string
  readingTime: string
  image: string
  imageAlt: string
  keywords: string[]
  sections: BlogSection[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'janam-kundali-birth-chart-guide',
    title: 'What Is a Janam Kundali? A Clear Guide to Your Birth Chart',
    description: 'Learn what a Janam Kundali can show, how birth time and place shape a Vedic birth chart, and what to know before a personal reading.',
    category: 'Vedic Astrology',
    publishedAt: '2026-11-12',
    readingTime: '6 min read',
    image: '/service-kundali.jpg',
    imageAlt: 'Astrology chart and notes arranged on a desk',
    keywords: ['Janam Kundali', 'Vedic birth chart', 'Kundali reading', 'birth chart houses'],
    sections: [
      {
        heading: 'A snapshot of the sky at birth',
        paragraphs: [
          'A Janam Kundali, also called a birth chart or horoscope, maps the positions of celestial bodies for a particular date, time, and place. In Vedic astrology, that map is used as a traditional framework for reflecting on life themes and timing. It is not a substitute for personal judgment or professional advice.',
          'Birth time matters because the ascendant and house placements can change as the day progresses. If the time is uncertain, share the range you know rather than treating an estimate as exact. The location is important too, since chart calculations use the local sky at the birthplace.',
        ],
      },
      {
        heading: 'Houses, planets, and dashas',
        paragraphs: [
          'The twelve houses are areas of life traditionally considered in a reading, while planets and signs describe different qualities and patterns within them. An astrologer studies the chart as a whole; one placement alone should not be treated as a complete prediction.',
          'Dashas are planetary periods used in many Vedic astrology traditions to discuss timing. Their interpretation depends on the wider chart and the question being explored, so a period is best understood as context for reflection rather than a guaranteed event or outcome.',
        ],
      },
      {
        heading: 'Preparing for a useful reading',
        paragraphs: [
          'Bring your birth date, best-known birth time, and birthplace, along with a few clear questions. Naming the decision you are considering helps focus the discussion, whether it concerns work, relationships, study, or a change of location.',
          'A thoughtful Janam Kundali consultation should explain its reasoning in language you understand and leave room for your own circumstances. Ask how uncertainty is handled, take time before acting on a suggestion, and use qualified medical, legal, or financial professionals for those matters.',
        ],
      },
    ],
  },
  {
    slug: 'kundali-matching-beyond-guna-milan',
    title: 'Kundali Matching Explained: Looking Beyond Guna Milan',
    description: 'Understand the role of Guna Milan in Kundali matching, why compatibility needs a wider conversation, and what information to bring to a consultation.',
    category: 'Marriage & Relationships',
    publishedAt: '2026-11-12',
    readingTime: '5 min read',
    image: '/service-kundali.jpg',
    imageAlt: 'Astrology chart and notes arranged on a desk',
    keywords: ['Kundali matching', 'Guna Milan', 'marriage compatibility astrology', 'horoscope matching'],
    sections: [
      {
        heading: 'What Guna Milan describes',
        paragraphs: [
          'Guna Milan is a traditional part of horoscope matching that compares selected qualities in two birth charts. Its score can offer one point of reference, but it does not describe the whole relationship or determine whether two people will build a happy life together.',
          'Different traditions and practitioners may explain chart factors differently. A useful discussion makes clear what method is being used and avoids reducing a personal relationship to a single number.',
        ],
      },
      {
        heading: 'Why a wider view matters',
        paragraphs: [
          'A fuller Kundali matching conversation may look at emotional temperament, communication, shared expectations, and the broader chart context. These themes can help couples frame conversations about family, finances, work, and where they hope to live.',
          'Astrology cannot establish consent, character, or the future of a partnership. Those are learned through honest conversation, mutual respect, and observing how each person handles real decisions over time.',
        ],
      },
      {
        heading: 'Questions to bring to a consultation',
        paragraphs: [
          'If both people are comfortable, bring accurate birth details and agree on the questions you want to explore. Ask the astrologer to explain the interpretation, distinguish tradition from certainty, and describe any limitations caused by an uncertain birth time.',
          'Use a reading to open a conversation, not to pressure someone into a decision. A considerate consultation should respect both people’s agency and complement, rather than replace, direct communication and practical compatibility.',
        ],
      },
    ],
  },
  {
    slug: 'vastu-home-checks-before-renovation',
    title: 'Vastu for Home: Five Thoughtful Checks Before Renovating',
    description: 'Explore practical Vastu Shastra considerations for entrances, light, room use, and movement before making changes to a home.',
    category: 'Vastu Shastra',
    publishedAt: '2026-11-12',
    readingTime: '5 min read',
    image: '/vastu-home.jpg',
    imageAlt: 'A residential home representing practical Vastu planning',
    keywords: ['Vastu for home', 'Vastu Shastra', 'home layout', 'Vastu consultation'],
    sections: [
      {
        heading: 'Start with how the home works',
        paragraphs: [
          'Vastu Shastra is a traditional approach to considering orientation and the use of space. Before planning a major change, first notice the practical experience of the home: how daylight enters, how people move between rooms, and where everyday tasks feel comfortable.',
          'Write down the direction of the main entrance and note the purpose of each room. A simple floor plan and a compass reading are more useful starting points than making assumptions based on a single photograph.',
        ],
      },
      {
        heading: 'Five points to review',
        paragraphs: [
          'Look at the entrance and its approach, the availability of natural light and ventilation, how sleeping and working areas support routine, where cooking and dining fit, and whether walkways remain clear. These observations help keep any Vastu discussion connected to the home you actually live in.',
          'Every building has structural and budget limits. Before changing walls, electrical systems, plumbing, or heavy equipment, consult the relevant licensed architect or contractor and follow local safety requirements.',
        ],
      },
      {
        heading: 'Choose proportionate changes',
        paragraphs: [
          'A Vastu review can identify traditional preferences and discuss modest adjustments that fit the household. There is rarely a reason to rush into disruptive work; clarify the rationale, costs, and practical impact of each suggestion first.',
          'Use Vastu as one lens for thoughtful planning, alongside accessibility, building codes, comfort, and the needs of everyone at home. No layout can guarantee a particular outcome, but a considered space can better support daily life.',
        ],
      },
    ],
  },
]

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
