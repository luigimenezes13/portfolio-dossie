import { useEffect, useState } from 'react';
import { ApiService } from './services/api.service';
import type { ApiResponse } from './types/api';

function App() {
  const [apiInfo, setApiInfo] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApiInfo = async () => {
      try {
        setLoading(true);
        const data = await ApiService.healthCheck();
        setApiInfo(data);
        setError(null);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Erro ao conectar com a API';
        setError(errorMessage);
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchApiInfo();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            React + TypeScript + Tailwind
          </h1>
          <p className="text-gray-600">Integrado com API Backend 🚀</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <span className="text-2xl">🌐</span>
            Status da API
          </h2>
          
          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              <p className="font-semibold">❌ Erro ao conectar com a API</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          )}

          {!loading && !error && apiInfo && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-2xl">✅</span>
                <span className="font-semibold text-gray-700">Conectado com sucesso!</span>
              </div>
              
              <div className="bg-white rounded-lg p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Mensagem:</span>
                  <span className="text-gray-800">{apiInfo.message}</span>
                </div>
                
                {apiInfo.version && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Versão:</span>
                    <span className="text-gray-800 font-mono text-sm">{apiInfo.version}</span>
                  </div>
                )}
                
                {apiInfo.timestamp && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Timestamp:</span>
                    <span className="text-gray-800 font-mono text-xs">
                      {new Date(apiInfo.timestamp).toLocaleString('pt-BR')}
                    </span>
                  </div>
                )}

                {apiInfo.docs && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Documentação:</span>
                    <a 
                      href={`https://dossie-backend.vercel.app${apiInfo.docs}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {apiInfo.docs}
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>API URL:</strong> <code className="bg-blue-100 px-2 py-1 rounded">https://dossie-backend.vercel.app</code>
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-3 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Estrutura do Projeto</h2>
          
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="text-2xl">⚡</span>
            <span>Vite para build ultra-rápido</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="text-2xl">⚛️</span>
            <span>React 19 com TypeScript</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="text-2xl">🎨</span>
            <span>TailwindCSS para estilização</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="text-2xl">📡</span>
            <span>Axios para requisições HTTP</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Arquivos da API</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-500">📁</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-xs">src/config/api.ts</code>
              <span className="text-gray-500 text-xs">- Configuração do Axios</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">📁</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-xs">src/types/api.ts</code>
              <span className="text-gray-500 text-xs">- Tipos TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">📁</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-xs">src/services/api.service.ts</code>
              <span className="text-gray-500 text-xs">- Serviços da API</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">📁</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-xs">src/hooks/useApi.ts</code>
              <span className="text-gray-500 text-xs">- Hook customizado</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Edite <code className="bg-gray-100 px-2 py-1 rounded text-xs">src/App.tsx</code> para começar
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
