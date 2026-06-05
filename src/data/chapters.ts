// Chapter registry — drives the hub index grid + per-chapter routing. Mirrors the 13 screen-chapters
// of full_app_student_ui_journey.md. `mode` = which nav context the chapter lives in (Foundation §6).
// Names are deliberately plain/friendly (no jargon like "Socratic"/"Modality"/"Placement") so a
// non-technical reviewer or student reads them at a glance. Slugs stay stable (URLs).

export type Chapter = {
  num: number;
  slug: string;
  en: string; // english chapter title (plain language)
  bn: string; // bangla chapter title
  blurb: string; // one-line bangla description for the index card
  icon: string;
  mode: 'hub' | 'takeover'; // nav context
  screens: number; // approx screen count shown on the page
};

export const chapters: Chapter[] = [
  {
    num: 1,
    slug: 'entry',
    en: 'Getting Started',
    bn: 'শুরু করা',
    blurb: 'স্বাগতম, ভাষা-টোন বাছাই, লক্ষ্য — সহজ শুরু (অ্যাকাউন্ট গৌণ)।',
    icon: '🚪',
    mode: 'takeover',
    screens: 5,
  },
  {
    num: 2,
    slug: 'placement',
    en: 'First Check',
    bn: 'শুরুর জায়গা ঠিক করা',
    blurb: 'প্রথম যাচাই — ভয়হীন, নম্বরহীন; কোথা থেকে শুরু করলে সহজ হয় তা দেখি।',
    icon: '🎯',
    mode: 'takeover',
    screens: 4,
  },
  {
    num: 3,
    slug: 'dashboard',
    en: 'Home',
    bn: 'আজকের পড়া',
    blurb: 'আজকের পড়া, দক্ষতার ধাপ, ধারাবাহিকতা — দিনের শুরুর জায়গা।',
    icon: '📖',
    mode: 'hub',
    screens: 4,
  },
  {
    num: 4,
    slug: 'chooser',
    en: "Today's Plan",
    bn: 'আজ কী পড়ব',
    blurb: 'আজ কী পড়ব — সেরা ৩টি পরামর্শ, প্রতিটির পেছনে কারণ।',
    icon: '🧭',
    mode: 'hub',
    screens: 3,
  },
  {
    num: 5,
    slug: 'core-loop',
    en: 'A Learning Session',
    bn: 'পড়ার সময়',
    blurb: 'প্রশ্ন → আত্মবিশ্বাস → উত্তর → সহায়তা — শেখার মূল অংশ।',
    icon: '🔁',
    mode: 'takeover',
    screens: 6,
  },
  {
    num: 6,
    slug: 'modalities',
    en: 'Ways to Learn',
    bn: 'বোঝার ধরন',
    blurb: 'ভিডিও / লেখা / উদাহরণ / প্রশ্ন / অ্যানিমেশন — অগ্রগতি অটুট।',
    icon: '🎬',
    mode: 'takeover',
    screens: 3,
  },
  {
    num: 7,
    slug: 'socratic',
    en: 'Learning by Questions',
    bn: 'প্রশ্ন করে শেখা',
    blurb: 'প্রশ্ন করে করে বোঝানো — তুমি নিজেই উত্তরে পৌঁছাও।',
    icon: '💬',
    mode: 'takeover',
    screens: 3,
  },
  {
    num: 8,
    slug: 'adaptive',
    en: "When You're Stuck",
    bn: 'আটকে গেলে সাহায্য',
    blurb: 'ইঙ্গিত, আবার বুঝিয়ে দেওয়া, ভুল ধারণা ঠিক করা — আটকে গেলে পাশে।',
    icon: '🪜',
    mode: 'takeover',
    screens: 4,
  },
  {
    num: 9,
    slug: 'mock-exam',
    en: 'Practice Exam',
    bn: 'অনুশীলন পরীক্ষা',
    blurb: 'আসল পরীক্ষার মহড়া — সময়, সূত্রের তালিকা, নিরিবিলি।',
    icon: '📝',
    mode: 'takeover',
    screens: 4,
  },
  {
    num: 10,
    slug: 'teach-back',
    en: 'Explain It Yourself',
    bn: 'নিজে বুঝিয়ে বলা',
    blurb: 'নিজের ভাষায় বুঝিয়ে দাও — সবচেয়ে গভীর শেখা।',
    icon: '🗣️',
    mode: 'takeover',
    screens: 3,
  },
  {
    num: 11,
    slug: 'progress',
    en: 'My Progress',
    bn: 'আমার অগ্রগতি',
    blurb: 'অগ্রগতির ছবি, যাচাই-ব্যাজ, যাত্রার গল্প — সংখ্যা নয়, ছবি।',
    icon: '📈',
    mode: 'hub',
    screens: 4,
  },
  {
    num: 12,
    slug: 'companion',
    en: 'Your Companion',
    bn: 'সঙ্গী',
    blurb: 'মন খারাপ বা চাপে? সহানুভূতির কণ্ঠ — পড়া নয়, পাশে থাকা।',
    icon: '🤝',
    mode: 'hub',
    screens: 3,
  },
  {
    num: 13,
    slug: 'cross-cutting',
    en: 'App Basics',
    bn: 'অ্যাপ যেভাবে চলে',
    blurb: 'অফলাইন, লোডিং, ত্রুটি, সেটিংস, ডার্ক মোড — সব জায়গার আচরণ।',
    icon: '⚙️',
    mode: 'hub',
    screens: 6,
  },
];

export const chapterBySlug = (slug: string) => chapters.find((c) => c.slug === slug);
export const nextChapter = (slug: string) => {
  const i = chapters.findIndex((c) => c.slug === slug);
  return i >= 0 && i < chapters.length - 1 ? chapters[i + 1] : undefined;
};
export const prevChapter = (slug: string) => {
  const i = chapters.findIndex((c) => c.slug === slug);
  return i > 0 ? chapters[i - 1] : undefined;
};
