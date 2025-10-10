export const environment = {
  apiUrl: import.meta.env.VITE_API_URL || 'https://dossie-backend.vercel.app',
  appName: import.meta.env.VITE_APP_NAME || 'Dossiê',
  appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',
  environment: import.meta.env.VITE_APP_ENVIRONMENT || 'production',
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
} as const;

export default environment;
