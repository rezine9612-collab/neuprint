// Global typings for NeuPrint legacy browser globals.
// This file is intentionally lightweight to keep Vercel typecheck green.

export {}

declare global {
  interface Window {
    // Legacy entrypoints used by report HTML / embed flows
    setReport?: (reportObject: any) => void
    renderNeuPrint?: (reportObject: any) => void

    // Debug / state globals (legacy)
    report?: any
    REPORT?: any

    // External charts hook (optional)
    NPCharts?: {
      renderAll?: (reportObject: any) => void
      [k: string]: any
    }

    // Feature flags
    NP_DISABLE_INTERNAL_CHARTS?: boolean
  }
}
