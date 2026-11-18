export const SIGNS = [
  { en: 'Aries', hi: 'मेष', glyph: '♈', prompts: [
    ['Choose one priority and give it your attention before adding something new.', 'Be direct about what you need in a conversation, and make room for the other person too.', 'Review a spending choice before you commit to it.', 'A short pause between tasks may help you reset your pace.'],
    ['A small, deliberate step may serve you better than a rushed start.', 'Listen first if a conversation feels tense; you can share your view once you understand theirs.', 'Check the details before agreeing to a new expense.', 'Make a little time for movement or fresh air.'],
  ], luckyNumber: '9', luckyColour: 'Warm red' },
  { en: 'Taurus', hi: 'वृषभ', glyph: '♉', prompts: [
    ['Steady progress matters more than rushing through your work.', 'A familiar gesture of care can make a conversation feel easier.', 'Take a look at recurring expenses and decide what still feels worthwhile.', 'Keep a routine that helps you feel grounded, with space to rest.'],
    ['Finish one practical task before taking on another.', 'Say what would help you feel supported rather than expecting someone to guess.', 'Give yourself time to compare options before buying.', 'Choose a calm activity that lets you slow down.'],
  ], luckyNumber: '6', luckyColour: 'Soft green' },
  { en: 'Gemini', hi: 'मिथुन', glyph: '♊', prompts: [
    ['Write down your main idea before sharing it in a busy discussion.', 'Ask a clear question instead of filling in the gaps yourself.', 'Compare the full terms before choosing between options.', 'A quiet moment away from notifications may help you focus.'],
    ['Keep your notes short and make the next task easy to start.', 'A little extra listening may help you understand what someone is asking for.', 'Check the small print on an upcoming commitment.', 'Take a break from screens when you can.'],
  ], luckyNumber: '5', luckyColour: 'Light yellow' },
  { en: 'Cancer', hi: 'कर्क', glyph: '♋', prompts: [
    ['Set a manageable boundary around your time so you can finish what is already in front of you.', 'Let someone know what kind of support would feel useful.', 'Review a shared plan so everyone understands the next step.', 'Make time for a familiar comfort and notice what helps you feel settled.'],
    ['Keep your priorities realistic instead of saying yes to everything.', 'A kind, direct conversation may make expectations clearer.', 'Give yourself time to consider a financial choice without pressure.', 'Rest is a useful part of caring for yourself.'],
  ], luckyNumber: '2', luckyColour: 'Silver' },
  { en: 'Leo', hi: 'सिंह', glyph: '♌', prompts: [
    ['Choose one thing you would like to finish and give it your attention.', 'Show warmth and stay curious about another person’s point of view.', 'Pause before an impulse purchase and check your priorities.', 'Pick an activity because it feels enjoyable, not because it is another target.'],
    ['Share your idea clearly and acknowledge the help you receive.', 'A thoughtful check-in can mean more than a quick answer.', 'Look over a plan before you agree to spend.', 'Leave a little room for rest in a busy day.'],
  ], luckyNumber: '1', luckyColour: 'Gold' },
  { en: 'Virgo', hi: 'कन्या', glyph: '♍', prompts: [
    ['A short list can help you sort urgent tasks from the ones that can wait.', 'Say what is on your mind without needing every detail to be perfect first.', 'Check dates and terms on an upcoming bill or commitment.', 'Fresh air or a simple meal can be a good place to start.'],
    ['Decide what “done for today” looks like before adding more work.', 'A simple, honest question may clear up a misunderstanding.', 'Keep track of the details that matter and avoid overthinking the rest.', 'Choose one routine that makes the day feel a little easier.'],
  ], luckyNumber: '5', luckyColour: 'Olive' },
  { en: 'Libra', hi: 'तुला', glyph: '♎', prompts: [
    ['Name the decision that needs attention and the information you still need.', 'A fair conversation makes room for both people to speak and be heard.', 'Agree on expectations before making a shared commitment.', 'A change of setting or a few calm minutes may help restore your focus.'],
    ['Take a moment to weigh your options without rushing to an answer.', 'A clear boundary can help keep a relationship respectful.', 'Review the practical details of a shared expense.', 'Balance your schedule with a little unscheduled time.'],
  ], luckyNumber: '6', luckyColour: 'Rose' },
  { en: 'Scorpio', hi: 'वृश्चिक', glyph: '♏', prompts: [
    ['Focus on what you can confirm instead of trying to solve every unknown at once.', 'Share a concern gently, without assuming the other person’s intent.', 'Keep a careful record of a choice that needs follow-up.', 'Give yourself room to think, then choose one supportive next step.'],
    ['A private task may benefit from a clear first step and a realistic deadline.', 'Ask a question before acting on an assumption.', 'Take time to review a commitment before signing or paying.', 'A quiet break can help you feel more settled.'],
  ], luckyNumber: '8', luckyColour: 'Deep red' },
  { en: 'Sagittarius', hi: 'धनु', glyph: '♐', prompts: [
    ['An interesting idea still needs a practical next step. Write down what you could test.', 'Make room for a shared plan, even if you picture the details differently.', 'Check the full cost before agreeing to something exciting.', 'A walk or a change in routine may feel refreshing.'],
    ['Learn a little more before choosing a direction.', 'A good conversation can include curiosity as well as honesty.', 'Consider your budget before making a spontaneous purchase.', 'Try a simple activity that helps you reset.'],
  ], luckyNumber: '3', luckyColour: 'Warm gold' },
  { en: 'Capricorn', hi: 'मकर', glyph: '♑', prompts: [
    ['Break a large task into one step you can finish and review today.', 'Show that you are listening; a calm check-in can help.', 'Consider the longer-term effect before taking on a new commitment.', 'Rest is part of a steady routine. Leave some time unplanned if you can.'],
    ['A clear plan may help you make progress without stretching your day too far.', 'Say what you appreciate as well as what you need.', 'Review a budget or plan before adding a new expense.', 'Make room to pause between responsibilities.'],
  ], luckyNumber: '8', luckyColour: 'Charcoal' },
  { en: 'Aquarius', hi: 'कुंभ', glyph: '♒', prompts: [
    ['A different approach may help. Share it clearly and invite practical feedback.', 'Respect each other’s need for space while being clear about plans.', 'Research an option carefully and avoid decisions made under pressure.', 'Choose a simple activity that helps you reconnect with the present.'],
    ['An unusual idea may become more useful when you break it into steps.', 'Ask what the other person means before deciding how to respond.', 'Take time to compare choices against your real needs.', 'A little time outdoors may help clear your head.'],
  ], luckyNumber: '4', luckyColour: 'Sky blue' },
  { en: 'Pisces', hi: 'मीन', glyph: '♓', prompts: [
    ['Put an open-ended idea into a few concrete steps so it is easier to begin.', 'Kindness and clear words can sit together. Say what you hope for without overpromising.', 'Note what you know and what still needs checking before deciding.', 'A quiet moment may help you notice what you need today.'],
    ['Keep one task simple and give yourself a clear stopping point.', 'Listen with care, and be honest about what you can offer.', 'Ask for details if a financial choice feels unclear.', 'A little downtime can help you gather your thoughts.'],
  ], luckyNumber: '7', luckyColour: 'Sea green' },
] as const
