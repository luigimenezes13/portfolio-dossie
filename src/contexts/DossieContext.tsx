/**
 * DossieContext — provê o dossiê do Luigi ao app inteiro.
 * Tenta carregar via API (VITE_API_URL); se falhar, cai no mock local
 * (`../content/dossie`) pra não quebrar dev sem backend.
 */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { DOSSIE as MOCK_DOSSIE, type Dossie as DossieType } from '../content/dossie';

interface DossieContextValue {
  dossie: DossieType;
  source: 'api' | 'mock';
  loading: boolean;
  error: string | null;
}

const DossieContext = createContext<DossieContextValue | null>(null);

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';

/**
 * Merge: API tem o shape principal (id, colaborador, growths, ...), mas alguns
 * campos só existem no mock (avatares dos personagens, que são URLs de assets
 * importados via Vite). Fazemos um merge profundo dos avatares.
 */
function mergeAvatarsFromMock(apiDossie: DossieType, mock: DossieType): DossieType {
  const merged: DossieType = JSON.parse(JSON.stringify(apiDossie));

  // Map de avatar URL por iniciais (vindo do mock)
  const avatarMap: Record<string, string> = {};
  const stakeholderMap: Record<string, string> = {};
  mock.growths.forEach((g) => {
    g.provas.forEach((p) => {
      if (p.avatar?.url && p.avatar.iniciais) {
        avatarMap[p.avatar.iniciais] = p.avatar.url;
      }
      if (p.stakeholders) {
        p.stakeholders.forEach((s) => {
          if (s.url && s.iniciais) {
            stakeholderMap[s.iniciais] = s.url;
          }
        });
      }
    });
  });

  // Hidrata avatares no objeto vindo da API
  merged.growths.forEach((g) => {
    g.provas.forEach((p) => {
      if (p.avatar && !p.avatar.url && avatarMap[p.avatar.iniciais]) {
        p.avatar.url = avatarMap[p.avatar.iniciais];
      }
      if (p.stakeholders) {
        p.stakeholders.forEach((s) => {
          if (!s.url && stakeholderMap[s.iniciais]) {
            s.url = stakeholderMap[s.iniciais];
          }
        });
      }
    });
  });

  return merged;
}

export function DossieProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DossieContextValue>({
    dossie: MOCK_DOSSIE,
    source: 'mock',
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_URL}/api/dossies`);
        if (!res.ok) throw new Error(`API retornou ${res.status}`);
        const json = await res.json();
        if (!json.success || !json.data?.[0]) throw new Error('Payload inválido da API');
        if (cancelled) return;

        const merged = mergeAvatarsFromMock(json.data[0], MOCK_DOSSIE);
        setState({ dossie: merged, source: 'api', loading: false, error: null });
        console.info('[Dossiê] carregado da API:', API_URL);
      } catch (err) {
        if (cancelled) return;
        const msg = err instanceof Error ? err.message : 'Erro desconhecido';
        console.warn('[Dossiê] API falhou, usando mock local. Motivo:', msg);
        setState({ dossie: MOCK_DOSSIE, source: 'mock', loading: false, error: msg });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return <DossieContext.Provider value={state}>{children}</DossieContext.Provider>;
}

/**
 * Hook usado nas seções. Retorna o dossiê ativo (API com fallback mock).
 * Para compatibilidade com o código existente que importa `DOSSIE` direto,
 * exportamos também um proxy via `useDossie()` que sempre retorna o objeto.
 */
export function useDossie(): DossieType {
  const ctx = useContext(DossieContext);
  if (!ctx) {
    // Sem provider: retorna mock (modo testes/storybook)
    return MOCK_DOSSIE;
  }
  return ctx.dossie;
}

export function useDossieMeta(): Omit<DossieContextValue, 'dossie'> {
  const ctx = useContext(DossieContext);
  if (!ctx) {
    return { source: 'mock', loading: false, error: null };
  }
  return { source: ctx.source, loading: ctx.loading, error: ctx.error };
}
