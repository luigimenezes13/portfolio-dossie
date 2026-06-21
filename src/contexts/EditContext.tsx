/**
 * EditContext · estende o DossieContext com:
 *   - estado local mutável do dossiê
 *   - updateField(path, value) — atualiza UI + enfileira save
 *   - saveStatus: idle | saving | saved | error
 *   - debounce 800ms
 *
 * Quando NÃO autenticado, o dossiê vem do DossieContext (read-only).
 * Quando autenticado em editMode, o dossiê vem do estado local mutado.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { setByPath } from '../lib/path-utils';
import { useAuth } from './AuthContext';
import { useDossie, useDossieSetter } from './DossieContext';
import type { Dossie } from '../content/dossie';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';

interface EditContextValue {
  dossie: Dossie;
  updateField: (path: string, value: unknown) => void;
  saveStatus: SaveStatus;
  saveError: string | null;
  flushSave: () => void;
}

const EditContext = createContext<EditContextValue | null>(null);

const DEBOUNCE_MS = 800;

export function EditProvider({ children }: { children: ReactNode }) {
  const remote = useDossie();
  const setRemote = useDossieSetter();
  const { idToken, editMode } = useAuth();

  const [localDossie, setLocalDossie] = useState<Dossie>(remote);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
  const [saveError, setSaveError] = useState<string | null>(null);

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingPayload = useRef<Dossie | null>(null);

  // Reset local quando remote muda (depois de reload)
  useEffect(() => {
    setLocalDossie(remote);
  }, [remote]);

  const flushSave = useCallback(async () => {
    if (!pendingPayload.current) return;
    if (!idToken) {
      setSaveStatus('error');
      setSaveError('Sem token de autenticação');
      return;
    }
    const payload = pendingPayload.current;
    pendingPayload.current = null;

    setSaveStatus('saving');
    try {
      const res = await fetch(`${API_URL}/api/dossies/${payload.id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${idToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody.error || `HTTP ${res.status}`);
      }
      setSaveStatus('saved');
      setSaveError(null);
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (e) {
      setSaveStatus('error');
      setSaveError(e instanceof Error ? e.message : String(e));
    }
  }, [idToken]);

  const updateField = useCallback(
    (path: string, value: unknown) => {
      setLocalDossie((prev) => {
        const next = setByPath(prev, path, value);
        pendingPayload.current = next;
        // Sincroniza com DossieContext pra que useDossie() das seções veja a mudança
        setRemote(next);

        if (saveTimer.current) clearTimeout(saveTimer.current);
        saveTimer.current = setTimeout(() => {
          flushSave();
        }, DEBOUNCE_MS);

        return next;
      });
    },
    [flushSave, setRemote]
  );

  return (
    <EditContext.Provider
      value={{ dossie: localDossie, updateField, saveStatus, saveError, flushSave }}
    >
      {/* Indicador de save */}
      {editMode && <SaveIndicator status={saveStatus} error={saveError} />}
      {children}
    </EditContext.Provider>
  );
}

export function useEdit(): EditContextValue {
  const ctx = useContext(EditContext);
  if (!ctx) throw new Error('useEdit deve estar dentro de <EditProvider>');
  return ctx;
}

// =========================================================
// SaveIndicator
// =========================================================
function SaveIndicator({ status, error }: { status: SaveStatus; error: string | null }) {
  if (status === 'idle') return null;
  const text =
    status === 'saving' ? '💾 salvando...' :
    status === 'saved' ? '✓ salvo' :
    `✗ ${error ?? 'erro'}`;
  const cls =
    status === 'saving' ? 'text-amber-400 border-amber-400/40' :
    status === 'saved' ? 'text-green-400 border-green-400/40' :
    'text-red-400 border-red-400/40';
  return (
    <div
      className={`fixed top-4 right-4 z-50 font-mono text-[11px] uppercase tracking-widest px-3 py-1.5 bg-dossie-card border ${cls} rounded-md backdrop-blur-card`}
    >
      {text}
    </div>
  );
}
