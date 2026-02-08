/* NeuPrint DOM helpers (browser-only)
   - Minimal, stable utilities shared by legacy-style modules
   - No exports: attaches to window.NPDOM to avoid bundler/module edge cases
*/

;(function () {
  if (typeof window === 'undefined') return

  function $(id) {
    return document.getElementById(String(id))
  }

  function esc(v) {
    return String(v ?? '').replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
    })
  }

  function setText(id, value) {
    var el = $(id)
    if (el) el.textContent = String(value ?? '')
  }

  function setHTML(id, html) {
    var el = $(id)
    if (el) el.innerHTML = String(html ?? '')
  }

  function clamp01(x) {
    var n = Number(x)
    if (!Number.isFinite(n)) return 0
    return Math.max(0, Math.min(1, n))
  }

  function fmt2(x) {
    var n = Number(x)
    if (!Number.isFinite(n)) return '0.00'
    return n.toFixed(2)
  }

  window.NPDOM = window.NPDOM || {}
  window.NPDOM.$ = window.NPDOM.$ || $
  window.NPDOM.esc = window.NPDOM.esc || esc
  window.NPDOM.setText = window.NPDOM.setText || setText
  window.NPDOM.setHTML = window.NPDOM.setHTML || setHTML
  window.NPDOM.clamp01 = window.NPDOM.clamp01 || clamp01
  window.NPDOM.fmt2 = window.NPDOM.fmt2 || fmt2
})()
