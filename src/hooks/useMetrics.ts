/**
 * useMetrics — re-export do MetricsContext (fetch único compartilhado).
 * Mantido aqui pra compatibilidade de imports existentes.
 */
export { useMetrics, MetricsProvider } from '../contexts/MetricsContext';
export type { MetricsData, MetricsState } from '../contexts/MetricsContext';
