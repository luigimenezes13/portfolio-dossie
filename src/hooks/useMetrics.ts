/**
 * useMetrics · busca /api/dossies/metrics.
 * Retorna loading, dados frescos e flag degraded.
 */
import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';

export interface MetricsData {
  github: {
    prsMerged: number;
    prsTotal: number;
    mergeRate: number;
    linhasAdicionadas: number;
    linhasRemovidas: number;
    linhasMovimentadas: number;
    codeReviews: number;
    sizeDiscipline: { below100: number; mid: number; above500: number };
  } | null;
  prMaturity: {
    medianaHoras: number;
    pctMenor24h: number;
    pctMenor72h: number;
    medianaLinhas: number;
    benchDORA: string;
  } | null;
  linear: {
    totalIssues: number;
    criticidade: number;
    timesAtendidos: number;
    criticidadePct: number;
    notaJira: string;
  } | null;
  consistencia: {
    throughputMensal: Array<{ month: string; prs: number }>;
  };
}

interface UseMetricsResult {
  data: MetricsData | null;
  loading: boolean;
  degraded: boolean;
  fetchedAt: string | null;
  durationMs: number | null;
  error: string | null;
}

export function useMetrics(): UseMetricsResult {
  const [state, setState] = useState<UseMetricsResult>({
    data: null,
    loading: true,
    degraded: false,
    fetchedAt: null,
    durationMs: null,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_URL}/api/dossies/metrics`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!json.success) throw new Error(json.error || 'API retornou success=false');
        if (cancelled) return;
        setState({
          data: json.data,
          loading: false,
          degraded: !!json.degraded,
          fetchedAt: json.fetchedAt,
          durationMs: json.duration_ms,
          error: json.degradedReason ?? null,
        });
        console.info(
          `[Metrics] ${json.degraded ? 'DEGRADED' : 'fresh'} em ${json.duration_ms}ms`
        );
      } catch (e) {
        if (cancelled) return;
        const msg = e instanceof Error ? e.message : String(e);
        console.warn('[Metrics] falhou:', msg);
        setState({
          data: null,
          loading: false,
          degraded: true,
          fetchedAt: null,
          durationMs: null,
          error: msg,
        });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
