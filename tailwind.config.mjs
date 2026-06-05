/** @type {import('tailwindcss').Config} */
// Tokens map to CSS variables defined in src/styles/global.css (light + .dark).
// Semantic names per Design Foundation §2. Never reference raw "blue-500" in chapters.
const v = (name) => `var(--color-${name})`;

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: v('primary'), ink: v('primary-ink'), soft: v('primary-soft') },
        mastery: { DEFAULT: v('mastery'), soft: v('mastery-soft') },
        struggle: { DEFAULT: v('struggle'), soft: v('struggle-soft') },
        info: { DEFAULT: v('info'), soft: v('info-soft') },
        danger: { DEFAULT: v('danger') },
        surface: { DEFAULT: v('surface'), raised: v('surface-raised'), sunken: v('surface-sunken') },
        ink: { DEFAULT: v('ink'), muted: v('ink-muted'), faint: v('ink-faint') },
        border: v('border'),
        focus: v('focus-ring'),
      },
      fontFamily: {
        bn: ['Noto Sans Bengali', 'SolaimanLipi', 'Hind Siliguri', 'sans-serif'],
        en: ['Noto Sans Bengali', 'Inter', 'system-ui', 'sans-serif'],
        num: ['Inter', 'Noto Sans Bengali', 'sans-serif'],
      },
      fontSize: {
        // token: [size, line-height] — narrow-screen scale, Foundation §3
        display: ['1.75rem', { lineHeight: '1.4' }], // 28
        h1: ['1.5rem', { lineHeight: '1.45' }], // 24
        h2: ['1.25rem', { lineHeight: '1.5' }], // 20
        question: ['1.25rem', { lineHeight: '1.7' }], // 20, large for legibility
        body: ['1rem', { lineHeight: '1.7' }], // 16, never below
        label: ['0.875rem', { lineHeight: '1.6' }], // 14
        meta: ['0.75rem', { lineHeight: '1.5' }], // 12, non-essential only
      },
      borderRadius: {
        card: '14px',
        sheet: '20px',
        pill: '999px',
      },
      spacing: {
        topbar: '56px',
        bottomnav: '64px',
        actionbar: '72px',
      },
      maxWidth: {
        phone: '390px', // primary design canvas; content column on desktop
      },
      boxShadow: {
        card: '0 1px 2px rgba(31,36,41,0.06), 0 2px 8px rgba(31,36,41,0.05)',
        sheet: '0 -8px 30px rgba(31,36,41,0.18)',
      },
    },
  },
  plugins: [],
};
