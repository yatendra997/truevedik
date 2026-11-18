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
    image: '/kundali-stars.jpg',
    imageAlt: 'Night sky with stars, used as a visual for traditional chart matching',
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
  {
    slug: 'career-kundali-reflection-questions',
    title: 'Career Questions in a Kundali: What a Reading Can and Cannot Tell You',
    description: 'A grounded guide to discussing work themes in a birth chart, with practical questions to ask before making a career decision.',
    category: 'Career & Work',
    publishedAt: '2026-11-18',
    readingTime: '5 min read',
    image: '/acharya-ved-prakash-study.webp',
    imageAlt: 'Acharya Ved Prakash in his study, where he meets clients for consultations',
    keywords: ['career astrology', 'career Kundali reading', 'Vedic astrology for work'],
    sections: [
      { heading: 'Use a reading to think, not to decide for you', paragraphs: [
        'In a traditional Vedic astrology reading, an astrologer may discuss chart factors linked with work, responsibility, learning, and periods of change. These are ways of looking at a question through a belief practice. They do not replace your skills, interests, financial needs, or knowledge of your field.',
        'A chart cannot promise a job, promotion, or business result. Treat an interpretation as one perspective to consider alongside real information, conversations with people you trust, and advice from qualified career or financial professionals when needed.',
      ] },
      { heading: 'Bring the decision into focus', paragraphs: [
        'Before a consultation, write down the choice in front of you. For example: are you comparing two roles, thinking of further study, or deciding whether to make a gradual career change? A clear question makes the conversation easier to follow.',
        'Bring your best-known birth time and place, and say if either detail is uncertain. Ask the astrologer to explain the chart factors in everyday language and to separate traditional interpretation from practical facts.',
      ] },
      { heading: 'Leave room for your own judgment', paragraphs: [
        'Take notes if they help, then give yourself time to reflect. You do not have to accept a suggestion or make a quick change because of a reading. Your circumstances and personal choice matter.',
        'For a career-focused conversation, see our Kundali reading page or read the consultation details before booking.',
      ] },
    ],
  },
  {
    slug: 'vedic-remedies-what-to-ask-before-starting',
    title: 'Vedic Remedies: Questions to Ask Before You Begin',
    description: 'Learn how to discuss traditional puja and mantra practices with care, clear costs, and no pressure to act.',
    category: 'Puja & Remedies',
    publishedAt: '2026-11-18',
    readingTime: '4 min read',
    image: '/service-puja.jpg',
    imageAlt: 'Traditional puja setting representing Vedic worship practices',
    keywords: ['Vedic remedies', 'puja consultation', 'traditional mantra practice'],
    sections: [
      { heading: 'Understand what is being suggested', paragraphs: [
        'Vedic remedies can refer to many traditional practices, including prayer, mantra recitation, puja, or acts of service. Customs vary by teacher and community. Ask what a practice involves, how often it is done, and what parts are optional.',
        'A remedy is a matter of personal belief. It cannot guarantee a change in health, relationships, work, or finances, and it should never be used to frighten someone into paying or acting quickly.',
      ] },
      { heading: 'Ask about time and cost first', paragraphs: [
        'If a ritual or service has a fee, request the full price and a plain description before agreeing. You should have time to consider it. A simple personal practice may be enough for someone who prefers not to arrange a service.',
        'Avoid sharing payment details until you have reviewed the terms. Do not stop prescribed care, delay urgent help, or make a legal or financial decision because of a suggested remedy.',
      ] },
      { heading: 'Choose without pressure', paragraphs: [
        'A respectful conversation leaves the decision with you and makes room for questions. It should not predict harm if you decline. If something feels unclear, pause and seek another opinion.',
        'Read about the approach on our Puja and remedies page, then decide whether you want to discuss it in a consultation.',
      ] },
    ],
  },
  {
    slug: 'vedic-gemstones-buying-with-care',
    title: 'Vedic Gemstones: A Careful Guide Before You Buy',
    description: 'What to ask about gemstone quality, cost, and tradition before buying a stone or wearing it for astrological reasons.',
    category: 'Gemstones',
    publishedAt: '2026-11-18',
    readingTime: '5 min read',
    image: '/gem-pukhraj.jpg',
    imageAlt: 'A yellow gemstone shown as an example of traditional gemology',
    keywords: ['Vedic gemstones', 'astrological gemstone', 'gemstone buying guide'],
    sections: [
      { heading: 'Know the difference between tradition and evidence', paragraphs: [
        'In Vedic astrology, some traditions associate particular gemstones with planets. These associations are cultural and spiritual beliefs, not proven ways to change health, luck, or life outcomes. A stone should not be presented as a guaranteed solution.',
        'You may choose a gemstone for its colour, craft, or personal meaning. If you are considering one for astrological reasons, ask the practitioner to explain the tradition and why it may or may not fit your question.',
      ] },
      { heading: 'Check the stone and the price', paragraphs: [
        'Ask for the stone name, whether it has been treated, its weight, and any independent gem report that comes with it. Confirm the complete price, return terms, and whether a report can be checked with its issuing lab.',
        'A certificate describes certain gem details; it does not prove an astrological effect. Be cautious of pressure to buy quickly or claims that a costly stone is necessary to prevent harm.',
      ] },
      { heading: 'Take time before wearing it', paragraphs: [
        'There is no need to make a purchase during a consultation. Compare options, check your budget, and use a qualified gem professional for questions about authenticity or care.',
        'See the stones and tradition described on our Vedic gemology page. The choice to buy or wear a gem is always yours.',
      ] },
    ],
  },
  {
    slug: 'rudraksha-tradition-and-care',
    title: 'Rudraksha: Meaning, Selection, and Everyday Care',
    description: 'A simple introduction to Rudraksha in Hindu traditions, plus thoughtful questions to ask about sourcing and care.',
    category: 'Tradition & Practice',
    publishedAt: '2026-11-18',
    readingTime: '4 min read',
    image: '/gem-rudraksha.jpg',
    imageAlt: 'Rudraksha beads used in prayer and meditation traditions',
    keywords: ['Rudraksha beads', 'Rudraksha tradition', 'Rudraksha care'],
    sections: [
      { heading: 'A bead with a place in devotional practice', paragraphs: [
        'Rudraksha beads are used in several Hindu devotional and meditation traditions. People may wear a bead or use a mala during prayer. Customs differ, so advice can vary between families, communities, and teachers.',
        'Some sellers attach spiritual or astrological claims to particular bead types. These claims are not guarantees of health, protection, or success. You can value the tradition without treating a purchase as a promise of an outcome.',
      ] },
      { heading: 'Ask where it comes from', paragraphs: [
        'If you are buying a bead, ask about its origin, how it was checked, and what the seller means by any labels they use. Compare prices and request clear return terms before paying.',
        'A photograph or certificate may not answer every question about a bead. For authenticity and material details, seek an independent specialist rather than relying only on a spiritual claim from the seller.',
      ] },
      { heading: 'Care for it in a way that suits you', paragraphs: [
        'Keep a bead clean and dry, and follow the seller’s care guidance for any thread or metal setting. If wearing it does not suit your routine, you are free to choose another way to take part in a practice.',
        'Our gemology and Rudraksha page explains the items we discuss. Ask questions and take time before making a choice.',
      ] },
    ],
  },
  {
    slug: 'birth-time-accuracy-kundali-reading',
    title: 'How Important Is Birth Time for a Kundali Reading?',
    description: 'Find out why birth time is used in a Vedic chart, what to do when you are unsure, and how to discuss uncertainty openly.',
    category: 'Vedic Astrology',
    publishedAt: '2026-11-18',
    readingTime: '4 min read',
    image: '/service-kundali.jpg',
    imageAlt: 'Traditional birth chart notes prepared for a Kundali discussion',
    keywords: ['birth time for Kundali', 'birth time accuracy', 'Vedic birth chart'],
    sections: [
      { heading: 'Why the time is included', paragraphs: [
        'A Vedic birth chart is calculated for a date, time, and place. The ascendant and some house placements can shift during the day, so a more accurate time can help an astrologer apply the chosen chart method.',
        'This does not mean every interpretation is certain. Astrology is a traditional belief practice, and different practitioners may read the same chart in different ways.',
      ] },
      { heading: 'If your time is not exact', paragraphs: [
        'Share the range you know and explain where it came from, such as a family note or official record. Do not guess a precise minute just to complete the form.',
        'An astrologer may explain options for discussing an uncertain time, but these methods have limits. Ask how uncertainty affects the reading before relying on a detail.',
      ] },
      { heading: 'Bring the details you have', paragraphs: [
        'A full birthplace is useful because chart calculations depend on location and local time. If you do not know the exact time, you can still bring a clear question and ask what can reasonably be explored.',
        'Find more information on the Kundali reading page or read our birth chart guide.',
      ] },
    ],
  },
  {
    slug: 'marriage-matching-questions-for-couples',
    title: 'Kundali Matching: Questions Couples Can Discuss Together',
    description: 'Use a traditional compatibility reading as a starting point for honest conversations about values, family, and shared plans.',
    category: 'Marriage & Relationships',
    publishedAt: '2026-11-18',
    readingTime: '4 min read',
    image: '/acharya-ved-prakash-study.webp',
    imageAlt: 'Acharya Ved Prakash in a consultation setting',
    keywords: ['marriage Kundali matching', 'couples astrology', 'Guna Milan questions'],
    sections: [
      { heading: 'Make space for the people behind the charts', paragraphs: [
        'Kundali matching is one traditional way families may discuss compatibility. A score or chart comparison cannot tell you everything about a relationship, and it cannot replace the choices and conversations made by the two people involved.',
        'A reading should not be used to pressure either person. Consent, respect, communication, and how you handle everyday decisions matter in a partnership.',
      ] },
      { heading: 'Agree on the questions first', paragraphs: [
        'If both partners want a reading, talk about what you hope to understand. You might ask how the matching method works, what a score leaves out, or how different traditions interpret the same factor.',
        'You can also talk directly about family expectations, work, where you hope to live, money habits, and the kind of support each of you values. These practical topics deserve attention in their own right.',
      ] },
      { heading: 'Keep the decision with the couple', paragraphs: [
        'Ask the astrologer to explain uncertainty and avoid claims that a match guarantees a happy marriage or predicts a fixed outcome. Take time after the conversation to reflect together.',
        'Read our guide to Kundali matching beyond Guna Milan or visit the Kundali reading page.',
      ] },
    ],
  },
  {
    slug: 'daily-horoscope-as-a-reflection-practice',
    title: 'Daily Horoscope: A Gentle Way to Use It as Reflection',
    description: 'A balanced way to read a daily horoscope as a prompt for reflection without treating it as a forecast or instruction.',
    category: 'Astrology Basics',
    publishedAt: '2026-11-18',
    readingTime: '3 min read',
    image: '/vedic-sky.jpg',
    imageAlt: 'Open sky at sunrise, used as a calm visual for daily reflection',
    keywords: ['daily horoscope', 'astrology reflection', 'Vedic astrology guide'],
    sections: [
      { heading: 'Read with curiosity', paragraphs: [
        'A daily horoscope is a short astrology-based message. Many are written for a broad group, so they cannot account for every person’s chart or circumstances. Different astrologers may also use different methods.',
        'You can read one as a prompt to pause and notice what matters to you. It should not be treated as a certain prediction or a replacement for your own judgment.',
      ] },
      { heading: 'Keep important choices practical', paragraphs: [
        'For health, legal, safety, or money questions, consult the right qualified professional. A horoscope should never be used to delay urgent help or make someone afraid.',
        'If a message feels unhelpful, you can leave it aside. There is no need to buy something, change a plan, or take a remedy because of a short reading.',
      ] },
      { heading: 'Explore the larger tradition', paragraphs: [
        'A personal birth chart discussion has more context than a general sign-based note, though it remains an interpretation within a belief practice. Ask what the reading can and cannot address.',
        'Browse more Vedic astrology guides or learn about a one-to-one consultation.',
      ] },
    ],
  },
]

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
