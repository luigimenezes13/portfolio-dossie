/**
 * AuthContext · gerencia login via Google Identity Services.
 *
 * Estado:
 *   - user: dados do logado (email/name/picture)
 *   - idToken: JWT pra enviar nas requests
 *   - isAdmin: derivado (email === ADMIN_EMAIL)
 *   - editMode: derivado (isAdmin && URL tem ?edit=true)
 *
 * Comportamento:
 *   - Init: lê localStorage, valida exp do JWT
 *   - Login: dispara prompt do Google
 *   - Logout: limpa tudo
 */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import {
  decodeJwtPayload,
  initGoogleAuth,
  type GoogleUser,
} from '../lib/google-auth';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
// Aceita VITE_ADMIN_EMAILS (lista CSV) ou VITE_ADMIN_EMAIL (string) por retrocompat
const ADMIN_EMAILS: string[] = (
  import.meta.env.VITE_ADMIN_EMAILS ||
  import.meta.env.VITE_ADMIN_EMAIL ||
  'luigi.menezes@v4company.com'
)
  .split(',')
  .map((e: string) => e.trim().toLowerCase())
  .filter(Boolean);
const STORAGE_KEY = 'dossie.auth';

interface StoredAuth {
  idToken: string;
  user: GoogleUser;
}

interface AuthContextValue {
  user: GoogleUser | null;
  idToken: string | null;
  isAdmin: boolean;
  editMode: boolean;
  login: () => void;
  logout: () => void;
  initError: string | null;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function readStorage(): StoredAuth | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as StoredAuth;
    // Valida exp do JWT
    if (data.user.exp && data.user.exp * 1000 < Date.now()) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function isEditUrl(): boolean {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  return params.get('edit') === 'true';
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [stored, setStored] = useState<StoredAuth | null>(() => readStorage());
  const [initError, setInitError] = useState<string | null>(null);
  const [editParam] = useState<boolean>(() => isEditUrl());

  const handleCredential = useCallback((idToken: string) => {
    const payload = decodeJwtPayload<GoogleUser>(idToken);
    if (!payload?.email) {
      setInitError('Token Google inválido');
      return;
    }
    const auth: StoredAuth = { idToken, user: payload };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
    setStored(auth);
    setInitError(null);
  }, []);

  useEffect(() => {
    if (!CLIENT_ID) {
      setInitError('VITE_GOOGLE_CLIENT_ID não configurado');
      return;
    }
    if (!editParam) return; // Só init GIS no modo edit
    initGoogleAuth(CLIENT_ID, handleCredential).catch((e) => {
      setInitError(e instanceof Error ? e.message : String(e));
    });
  }, [editParam, handleCredential]);

  const login = useCallback(() => {
    if (!CLIENT_ID) {
      setInitError('GOOGLE_CLIENT_ID ausente');
      return;
    }
    // GIS.prompt já foi inicializado no useEffect; só dispara
    window.google?.accounts.id.prompt();
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setStored(null);
    window.google?.accounts.id.disableAutoSelect();
  }, []);

  const value = useMemo<AuthContextValue>(() => {
    const user = stored?.user ?? null;
    const isAdmin = !!user && ADMIN_EMAILS.includes(user.email.toLowerCase());
    const editMode = isAdmin && editParam;
    return {
      user,
      idToken: stored?.idToken ?? null,
      isAdmin,
      editMode,
      login,
      logout,
      initError,
    };
  }, [stored, editParam, login, logout, initError]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    return {
      user: null,
      idToken: null,
      isAdmin: false,
      editMode: false,
      login: () => {},
      logout: () => {},
      initError: 'AuthProvider não montado',
    };
  }
  return ctx;
}
