/**
 * AuthBadge · canto inferior esquerdo, só aparece com ?edit=true.
 * Não logado: botão "Entrar com Google"
 * Logado: avatar + nome + sair
 */
import { useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { renderGoogleButton, waitForGoogle } from '../lib/google-auth';

function isEditUrl(): boolean {
  if (typeof window === 'undefined') return false;
  return new URLSearchParams(window.location.search).get('edit') === 'true';
}

export function AuthBadge() {
  const { user, isAdmin, logout, initError } = useAuth();
  const btnContainer = useRef<HTMLDivElement>(null);
  const editParam = isEditUrl();

  useEffect(() => {
    if (!editParam) return;
    if (user) return;
    if (!btnContainer.current) return;
    (async () => {
      await waitForGoogle();
      if (btnContainer.current) renderGoogleButton(btnContainer.current);
    })();
  }, [editParam, user]);

  if (!editParam) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2 items-start font-sans">
      {!user && (
        <div className="bg-dossie-card border border-dossie-rule rounded-md p-3 shadow-lg backdrop-blur-card">
          <div className="text-microcopy text-[10px] mb-2">MODO EDIÇÃO</div>
          <div ref={btnContainer} />
          {initError && (
            <div className="mt-2 text-[10px] text-red-400">{initError}</div>
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
