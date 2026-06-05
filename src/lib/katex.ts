import katex from 'katex';

// Render math to HTML at build time. ASCII math is a banned trust-defect (Foundation §3).
export function renderMath(tex: string, displayMode = false): string {
  return katex.renderToString(tex, {
    displayMode,
    throwOnError: false,
    output: 'htmlAndMathml',
    strict: 'ignore',
  });
}
