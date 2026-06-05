// Mastery → Bangla skill-title mapping. Students NEVER see raw floats (Foundation §1/§2).
// Tier boundaries 0.2 / 0.4 / 0.6 / 0.8 (FEATURE_BACKLOG Tier 2 "Bangla Skill-Level Titles").

export type Tier = {
  title: string;
  index: number; // 0..4
  // color role for the bar/ring — always paired with title text + icon, never color alone
  tone: 'faint' | 'struggle' | 'info' | 'mastery';
};

const TIERS: Tier[] = [
  { title: 'অনুসন্ধানী', index: 0, tone: 'faint' },
  { title: 'শিক্ষানবিস', index: 1, tone: 'struggle' },
  { title: 'অনুশীলনকারী', index: 2, tone: 'info' },
  { title: 'দক্ষ', index: 3, tone: 'mastery' },
  { title: 'মাস্টার', index: 4, tone: 'mastery' },
];

export function tierFor(mastery: number): Tier {
  if (mastery >= 0.8) return TIERS[4];
  if (mastery >= 0.6) return TIERS[3];
  if (mastery >= 0.4) return TIERS[2];
  if (mastery >= 0.2) return TIERS[1];
  return TIERS[0];
}

export const ALL_TIERS = TIERS;

// Bangla numerals for student-facing counts (streak, question index).
const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
export function bnNum(n: number | string): string {
  return String(n).replace(/[0-9]/g, (d) => BN_DIGITS[+d]);
}
