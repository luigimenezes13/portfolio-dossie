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
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent">
              Dossiê System
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-gray-400 mt-6 text-lg">
            Plataforma Profissional de Gerenciamento
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                <span className="text-2xl">🌐</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Status da API</h2>
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
                </div>
                <p className="text-gray-400 mt-4">Conectando com a API...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-950/50 border border-red-500/50 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <p className="font-bold text-red-400 mb-2">Erro de Conexão</p>
                    <p className="text-red-300 text-sm">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {!loading && !error && apiInfo && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 bg-green-950/30 border border-green-500/30 rounded-xl p-4">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold text-green-400">Conectado com Sucesso</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-black/50 border border-tertiary/20 rounded-lg p-4 flex justify-between items-center">
                    <span className="text-gray-400 font-medium">Mensagem</span>
                    <span className="text-white font-mono text-sm">{apiInfo.message}</span>
                  </div>

                  {apiInfo.version && (
                    <div className="bg-black/50 border border-tertiary/20 rounded-lg p-4 flex justify-between items-center">
                      <span className="text-gray-400 font-medium">Versão</span>
                      <span className="text-primary font-mono text-sm font-bold">{apiInfo.version}</span>
                    </div>
                  )}

                  {apiInfo.timestamp && (
                    <div className="bg-black/50 border border-tertiary/20 rounded-lg p-4 flex justify-between items-center">
                      <span className="text-gray-400 font-medium">Timestamp</span>
                      <span className="text-gray-300 font-mono text-xs">
                        {new Date(apiInfo.timestamp).toLocaleString('pt-BR')}
                      </span>
                    </div>
                  )}

                  {apiInfo.docs && (
                    <div className="bg-black/50 border border-tertiary/20 rounded-lg p-4 flex justify-between items-center">
                      <span className="text-gray-400 font-medium">Documentação</span>
                      <a
                        href={`https://dossie-backend.vercel.app${apiInfo.docs}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-tertiary underline font-mono text-sm transition-colors"
                      >
                        {apiInfo.docs}
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-6 bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary font-bold">🔗</span>
                    <span className="text-gray-400 text-sm font-medium">Endpoint Base</span>
                  </div>
                  <code className="text-primary font-mono text-sm break-all">
                    https://dossie-backend.vercel.app
                  </code>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                  <span className="text-2xl">⚡</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Stack Tecnológica</h2>
              </div>

              <div className="space-y-4">
                <div className="group hover:bg-tertiary/10 border border-transparent hover:border-tertiary/30 rounded-xl p-4 transition-all cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-tertiary rounded-lg flex items-center justify-center text-xl">
                      ⚛️
                    </div>
                    <div>
                      <h3 className="font-bold text-white">React 19</h3>
                      <p className="text-gray-400 text-sm">Framework Frontend</p>
                    </div>
                  </div>
                </div>

                <div className="group hover:bg-tertiary/10 border border-transparent hover:border-tertiary/30 rounded-xl p-4 transition-all cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-tertiary rounded-lg flex items-center justify-center text-xl">
                      📘
                    </div>
                    <div>
                      <h3 className="font-bold text-white">TypeScript</h3>
                      <p className="text-gray-400 text-sm">Tipagem Estática</p>
                    </div>
                  </div>
                </div>

                <div className="group hover:bg-tertiary/10 border border-transparent hover:border-tertiary/30 rounded-xl p-4 transition-all cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-tertiary rounded-lg flex items-center justify-center text-xl">
                      🎨
                    </div>
                    <div>
                      <h3 className="font-bold text-white">TailwindCSS</h3>
                      <p className="text-gray-400 text-sm">Estilização Moderna</p>
                    </div>
                  </div>
                </div>

                <div className="group hover:bg-tertiary/10 border border-transparent hover:border-tertiary/30 rounded-xl p-4 transition-all cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-tertiary rounded-lg flex items-center justify-center text-xl">
                      📡
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Axios</h3>
                      <p className="text-gray-400 text-sm">Cliente HTTP</p>
                    </div>
                  </div>
                </div>

                <div className="group hover:bg-tertiary/10 border border-transparent hover:border-tertiary/30 rounded-xl p-4 transition-all cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-tertiary rounded-lg flex items-center justify-center text-xl">
                      ⚡
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Vite</h3>
                      <p className="text-gray-400 text-sm">Build Tool Rápida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-secondary/30 to-black border border-tertiary/20 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
              <span className="text-2xl">📂</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Arquitetura do Projeto</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-black/50 border border-tertiary/20 rounded-xl p-4 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary text-xl">⚙️</span>
                <span className="font-mono text-xs text-gray-500">config/</span>
              </div>
              <h3 className="font-bold text-white text-sm mb-1">api.ts</h3>
              <p className="text-gray-400 text-xs">Configuração Axios</p>
            </div>

            <div className="bg-black/50 border border-tertiary/20 rounded-xl p-4 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary text-xl">📝</span>
                <span className="font-mono text-xs text-gray-500">types/</span>
              </div>
              <h3 className="font-bold text-white text-sm mb-1">api.ts</h3>
              <p className="text-gray-400 text-xs">Tipos TypeScript</p>
            </div>

            <div className="bg-black/50 border border-tertiary/20 rounded-xl p-4 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary text-xl">🔧</span>
                <span className="font-mono text-xs text-gray-500">services/</span>
              </div>
              <h3 className="font-bold text-white text-sm mb-1">api.service.ts</h3>
              <p className="text-gray-400 text-xs">Serviços da API</p>
            </div>

            <div className="bg-black/50 border border-tertiary/20 rounded-xl p-4 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary text-xl">🎣</span>
                <span className="font-mono text-xs text-gray-500">hooks/</span>
              </div>
              <h3 className="font-bold text-white text-sm mb-1">useApi.ts</h3>
              <p className="text-gray-400 text-xs">Hook Customizado</p>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-secondary/20 via-tertiary/20 to-secondary/20 border border-tertiary/20 rounded-full px-8 py-4">
            <p className="text-gray-400 text-sm">
              Desenvolvido com{' '}
              <span className="text-primary">❤</span>{' '}
              usando React + TypeScript + Tailwind
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
