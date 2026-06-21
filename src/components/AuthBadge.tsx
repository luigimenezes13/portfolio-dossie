/**
 * AuthBadge · canto inferior esquerdo, só aparece com ?edit=true.
 * Não logado: botão "Entrar com Google" (renderizado pelo GIS)
 * Logado: avatar + nome + sair
 */
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { renderGoogleButton } from '../lib/google-auth';

function isEditUrl(): boolean {
  if (typeof window === 'undefined') return false;
  return new URLSearchParams(window.location.search).get('edit') === 'true';
}

export function AuthBadge() {
  const { user, isAdmin, logout, initError } = useAuth();
  const btnContainer = useRef<HTMLDivElement>(null);
  const editParam = isEditUrl();
  const [renderError, setRenderError] = useState<string | null>(null);
  const [renderedOk, setRenderedOk] = useState(false);

  useEffect(() => {
    if (!editParam) return;
    if (user) return;
    if (!btnContainer.current) return;
    (async () => {
      try {
        await renderGoogleButton(btnContainer.current!);
        setRenderedOk(true);
      } catch (e) {
        setRenderError(e instanceof Error ? e.message : String(e));
      }
    })();
  }, [editParam, user]);

  if (!editParam) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2 items-start font-sans">
      {!user && (
        <div className="bg-dossie-card border border-dossie-rule rounded-md p-3 shadow-lg backdrop-blur-card max-w-[280px]">
          <div className="text-microcopy text-[10px] mb-2">MODO EDIÇÃO</div>
          <div ref={btnContainer} />

          {!renderedOk && !renderError && !initError && (
            <div className="text-[10px] text-ink/40 mt-1">aguardando Google…</div>
          )}
          {initError && (
            <div className="mt-2 text-[10px] text-red-400">⚠ {initError}</div>
          )}
          {renderError && (
            <div className="mt-2 text-[10px] text-red-400">⚠ {renderError}</div>
          )}
        </div>
      )}

      {user && (
        <div className="bg-dossie-card border border-dossie-rule rounded-md p-2 shadow-lg backdrop-blur-card flex items-center gap-3">
          {user.picture && (
            <img
              src={user.picture}
              alt={user.name ?? user.email}
              className="w-7 h-7 rounded-full border border-dossie-rule"
            />
          )}
          <div className="flex flex-col">
            <span className="text-[11px] text-ink font-medium leading-tight">{user.name ?? user.email}</span>
            <span className={`text-[9px] uppercase tracking-widest ${isAdmin ? 'text-green-400' : 'text-red-400'}`}>
              {isAdmin ? '● ADMIN' : '⨯ SEM PERMISSÃO'}
            </span>
          </div>
          <button
            onClick={logout}
            className="text-[10px] text-ink/60 hover:text-primary uppercase tracking-widest px-2 py-1 border-l border-dossie-rule"
          >
            sair
          </button>
        </div>
      )}
    </div>
  );
}
