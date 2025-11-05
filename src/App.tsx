import { useEffect, useState } from 'react';
import { ApiService, DossieService } from './services/api.service';
import type { ApiResponse, Dossie, DossiesResponse } from './types/api';
import {
  Header,
  ObjetivoSection,
  TrajetoriaSection,
  AtuacaoSection,
  IniciativasSection,
  ValorizacaoSection,
  PotencialSection,
  ConclusaoSection,
  Footer,
  LoadingScreen,
  ErrorScreen,
  EmptyState,
  RealizacoesProfissionaisSection,
  RealizacoesAcademicasSection,
  VisaoFuturoSection
} from './components';

function App() {
  const [apiInfo, setApiInfo] = useState<ApiResponse | null>(null);
  const [dossie, setDossie] = useState<Dossie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const startTime = Date.now();
        
        const [apiData, dossiesData] = await Promise.all([
          ApiService.healthCheck(),
          DossieService.getAll() as Promise<DossiesResponse>
        ]);
        
        const elapsedTime = Date.now() - startTime;
        const minimumLoadingTime = 2500;
        const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);
        
        await new Promise(resolve => setTimeout(resolve, remainingTime));
        
        setApiInfo(apiData);
        setDossie(dossiesData.data?.[0] || null);
        setError(null);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Erro ao conectar com a API';
        setError(errorMessage);
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (!dossie) {
    return <EmptyState />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <Header dossie={dossie} />

        <main className="space-y-16 md:space-y-20" role="main" aria-label="Conteúdo principal do dossiê">
          <ObjetivoSection objetivo={dossie.objetivo} />
          <TrajetoriaSection trajetoria={dossie.trajetoria} />
          
          {/* Use new RealizacoesProfissionais if available, fallback to old AtuacaoResultados */}
          {dossie.realizacoesProfissionais ? (
            <RealizacoesProfissionaisSection realizacoesProfissionais={dossie.realizacoesProfissionais} />
          ) : dossie.atuacaoResultados ? (
            <AtuacaoSection atuacaoResultados={dossie.atuacaoResultados} />
          ) : null}
          
          {dossie.realizacoesAcademicas && (
            <RealizacoesAcademicasSection realizacoesAcademicas={dossie.realizacoesAcademicas} />
          )}
          
          <IniciativasSection iniciativasEstrategicas={dossie.iniciativasEstrategicas} />
          
          {dossie.visaoFuturo && (
            <VisaoFuturoSection visaoFuturo={dossie.visaoFuturo} />
          )}
          
          {/* EfetivacaoSection removido */}
          
          {/* Fallback to old structure if new efetivacao not available */}
          {!dossie.efetivacao && dossie.propostaValorizacao && dossie.referenciaMercado && (
            <ValorizacaoSection 
              propostaValorizacao={dossie.propostaValorizacao}
              referenciaMercado={dossie.referenciaMercado}
            />
          )}
          
          {!dossie.efetivacao && dossie.potencialRetorno && (
            <PotencialSection potencialRetorno={dossie.potencialRetorno} />
          )}
          
          <ConclusaoSection conclusao={dossie.conclusao} />
        </main>

        <Footer apiInfo={apiInfo} dossie={dossie} />
      </div>
    </div>
  );
}

export default App;