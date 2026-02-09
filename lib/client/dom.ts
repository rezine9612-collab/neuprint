/* NeuPrint DOM helpers (browser-only)
   - Minimal, stable utilities shared by legacy-style modules
   - Exported for TypeScript modules, and also attached to window.NPDOM for legacy scripts
*/

export function $(id: any): HTMLElement | null {
  if (typeof document === 'undefined') return null
  return document.getElementById(String(id))
}

export function esc(v: any): string {
  return String(v ?? '').replace(/[&<>"']/g, function (ch) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch as any] as string
  })
}

export function setText(id: any, value: any): void {
  const el = $(id)
  if (el) el.textContent = String(value ?? '')
}

export function setHTML(id: any, html: any): void {
  const el = $(id)
  if (el) el.innerHTML = String(html ?? '')
}

export function clamp01(x: any): number {
  const n = Number(x)
  if (!Number.isFinite(n)) return 0
  return Math.max(0, Math.min(1, n))
}

export function fmt2(x: any): string {
  const n = Number(x)
  if (!Number.isFinite(n)) return '0.00'
  return n.toFixed(2)
}

// Attach for legacy access
if (typeof window !== 'undefined') {
  ;(window as any).NPDOM = (window as any).NPDOM || {}
  const NPDOM = (window as any).NPDOM
  NPDOM.$ = NPDOM.$ || $
  NPDOM.esc = NPDOM.esc || esc
  NPDOM.setText = NPDOM.setText || setText
  NPDOM.setHTML = NPDOM.setHTML || setHTML
  NPDOM.clamp01 = NPDOM.clamp01 || clamp01
  NPDOM.fmt2 = NPDOM.fmt2 || fmt2
}
