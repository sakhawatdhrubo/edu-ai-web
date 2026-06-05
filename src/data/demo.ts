// Demo data so screens render realistic {dynamic} content. Chapter Motion (গতি), 5 outcomes.
// Personalization profile drives tone/language/pace/modality across the mockup (Foundation §8).

export const student = {
  name: 'রিফাত',
  greetingTime: 'সন্ধ্যা', // শুভ সন্ধ্যা
  tone: 'friendly' as 'formal' | 'friendly' | 'playful',
  language: 'bangla' as 'bangla' | 'mixed' | 'english',
  pace: 'normal' as 'slow' | 'normal' | 'fast',
  modality: 'video' as 'video' | 'text' | 'example' | 'socratic' | 'animation',
  streakDays: 7,
  freezes: 2,
  dailyGoalSet: false,
};

export type Outcome = {
  id: string;
  bn: string;
  en: string;
  mastery: number; // 0..1
  attempts: number;
  transfer?: boolean;
};

// Spread across tiers to show MasteryBar/Ring/SkillTitle variety.
export const outcomes: Outcome[] = [
  { id: 'rest-motion', bn: 'স্থিতি ও গতি', en: 'rest & motion', mastery: 0.86, attempts: 24, transfer: true },
  { id: 'speed-velocity', bn: 'দ্রুতি ও বেগ', en: 'speed & velocity', mastery: 0.64, attempts: 18 },
  { id: 'acceleration', bn: 'ত্বরণ', en: 'acceleration', mastery: 0.42, attempts: 12 },
  { id: 'equations', bn: 'গতির সমীকরণ', en: 'equations of motion', mastery: 0.28, attempts: 7 },
  { id: 'graphs', bn: 'গতির লেখচিত্র', en: 'motion graphs', mastery: 0.15, attempts: 3 },
];

export const misconceptions = [
  { tag: 'দ্রুতি = বেগ', bn: 'দ্রুতি আর বেগ গুলিয়ে ফেলা (scalar vs vector)', freq: 5, repaired: false },
  { tag: 'ভর = ওজন', bn: 'ভর আর ওজন এক মনে করা', freq: 3, repaired: true },
  { tag: 'বল ছাড়া গতি নয়', bn: 'বল ছাড়া বস্তু চলতে পারে না — এই ভুল ধারণা', freq: 2, repaired: false },
];

// Top-3 daily directives (session chooser / dashboard), each with a WHY (transparency).
export const suggestions = [
  {
    bn: 'ত্বরণ — আরেকটু পাকা করি',
    why: 'গতকাল এখানে দুবার আটকে গিয়েছিলে, তাই আজ আবার ধরছি।',
    minutes: 12,
    kind: 'review',
  },
  {
    bn: 'গতির সমীকরণ — নতুন',
    why: 'দ্রুতি-বেগ ভালো হয়েছে, এবার পরের ধাপে যাওয়া যায়।',
    minutes: 18,
    kind: 'new',
  },
  {
    bn: 'দ্রুতি বনাম বেগ — ভুল ধারণা ঠিক করি',
    why: 'এই দুটো এখনো মাঝে মাঝে গুলিয়ে যাচ্ছে।',
    minutes: 8,
    kind: 'misconception',
  },
];

export const chapter = { bn: 'গতি', en: 'Motion', number: 2 };
