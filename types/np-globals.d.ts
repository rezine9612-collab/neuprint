// Global declarations for legacy DOM-driven NeuPrint modules.
// These keep TypeScript happy while we gradually migrate legacy scripts to true TS modules.

declare const REPORT: any;

interface Window {
  REPORT?: any;
  NPCharts?: any;
  NP_DISABLE_INTERNAL_CHARTS?: any;
  Chart?: any;
  renderNeuPrint?: (report: any) => void;
  __np_sigAnimRAF?: number | null;
}
