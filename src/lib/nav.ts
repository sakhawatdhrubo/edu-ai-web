// Internal-link helper. Prefixes paths with Astro's configured base (import.meta.env.BASE_URL) so
// navigation works both locally (base '/') and on a GitHub Pages project site (base '/edu-ai-web/').
// Usage: <a href={url('/c/dashboard')}>. Pass '/' (or nothing) for the home page.
const BASE = import.meta.env.BASE_URL;

export function url(path: string = '/'): string {
  if (path === '/' || path === '') return BASE;
  const b = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  return b + (path.startsWith('/') ? path : '/' + path);
}
