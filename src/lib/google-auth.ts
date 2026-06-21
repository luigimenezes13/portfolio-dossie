/**
 * Wrapper sobre Google Identity Services (GIS).
 *
 * Carrega o script async do <head> (já inserido no index.html). Expõe:
 *   - initGoogleAuth(clientId, onCredential)
 *   - promptGoogleSignIn()
 */

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
            auto_select?: boolean;
            cancel_on_tap_outside?: boolean;
            use_fedcm_for_prompt?: boolean;
          }) => void;
          prompt: (
            momentListener?: (notification: GoogleNotification) => void
          ) => void;
          renderButton: (
            parent: HTMLElement,
            options: {
              type?: 'standard' | 'icon';
              theme?: 'outline' | 'filled_blue' | 'filled_black';
              size?: 'small' | 'medium' | 'large';
              shape?: 'rectangular' | 'pill' | 'circle' | 'square';
              text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
              logo_alignment?: 'left' | 'center';
              width?: number;
            }
          ) => void;
          disableAutoSelect: () => void;
        };
      };
    };
  }
}

interface GoogleNotification {
  isDisplayMoment?: () => boolean;
  isSkippedMoment?: () => boolean;
  isDismissedMoment?: () => boolean;
  getMomentType?: () => string;
  getDismissedReason?: () => string;
  getSkippedReason?: () => string;
  getNotDisplayedReason?: () => string;
}

let initPromise: Promise<void> | null = null;

export async function waitForGoogle(): Promise<void> {
  if (window.google?.accounts?.id) return;
  return new Promise((resolve, reject) => {
    let elapsed = 0;
    const interval = setInterval(() => {
      if (window.google?.accounts?.id) {
        clearInterval(interval);
        resolve();
      } else if ((elapsed += 100) > 10000) {
        clearInterval(interval);
        reject(new Error('GIS script não carregou em 10s'));
      }
    }, 100);
  });
}

/**
 * Idempotente · garante que initialize() rodou apenas uma vez.
 * Retorna a mesma promise pra todos os callers (evita race condition
 * entre AuthContext e AuthBadge).
 */
export function initGoogleAuth(
  clientId: string,
  onCredential: (idToken: string) => void
): Promise<void> {
  if (initPromise) return initPromise;
  initPromise = (async () => {
    await waitForGoogle();
    window.google!.accounts.id.initialize({
      client_id: clientId,
      callback: (resp) => onCredential(resp.credential),
      auto_select: false,
      cancel_on_tap_outside: true,
    });
  })();
  return initPromise;
}

/**
 * Aguarda o init terminar antes de renderizar o botão.
 * GIS exige initialize() antes de renderButton().
 */
export async function renderGoogleButton(parent: HTMLElement): Promise<void> {
  if (initPromise) await initPromise;
  await waitForGoogle();
  if (!window.google?.accounts?.id) return;
  window.google.accounts.id.renderButton(parent, {
    type: 'standard',
    theme: 'filled_black',
    size: 'medium',
    shape: 'pill',
    text: 'signin_with',
  });
}

export function promptGoogleSignIn(): void {
  window.google?.accounts.id.prompt();
}

export function disableAutoSelect(): void {
  window.google?.accounts.id.disableAutoSelect();
}

/**
 * Decode JWT payload (id_token) sem validar assinatura.
 * Apenas pra exibição de UI (nome/picture). Backend valida de verdade.
 */
export function decodeJwtPayload<T = Record<string, unknown>>(idToken: string): T | null {
  try {
    const [, payload] = idToken.split('.');
    const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export interface GoogleUser {
  email: string;
  name?: string;
  picture?: string;
  email_verified?: boolean;
  exp?: number;
}
