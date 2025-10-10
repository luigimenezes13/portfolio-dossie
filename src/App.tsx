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
  EmptyState
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
        const [apiData, dossiesData] = await Promise.all([
          ApiService.healthCheck(),
          DossieService.getAll() as Promise<DossiesResponse>
        ]);
        
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
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header dossie={dossie} />

        <div className="space-y-8">
          <ObjetivoSection objetivo={dossie.objetivo} />
          <TrajetoriaSection trajetoria={dossie.trajetoria} />
          <AtuacaoSection atuacaoResultados={dossie.atuacaoResultados} />
          <IniciativasSection iniciativasEstrategicas={dossie.iniciativasEstrategicas} />
          <ValorizacaoSection 
            propostaValorizacao={dossie.propostaValorizacao}
            referenciaMercado={dossie.referenciaMercado}
          />
          <PotencialSection potencialRetorno={dossie.potencialRetorno} />
          <ConclusaoSection conclusao={dossie.conclusao} />
        </div>

        <Footer apiInfo={apiInfo} dossie={dossie} />
      </div>
    </div>
  );
}

export default App;