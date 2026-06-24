import { useEffect } from 'react';
import { initLenis, destroyLenis, ScrollTrigger } from './lib/motion';
import { Hero } from './sections/Hero';
import { Manifesto } from './sections/Manifesto';
import { Timeline } from './sections/Timeline';
import { Numbers } from './sections/Numbers';
import { GrowthChapter } from './sections/GrowthChapter';
import { Constante } from './sections/Constante';
import { Academico } from './sections/Academico';
import { VisaoFuturo } from './sections/VisaoFuturo';
import { PleitoPleno } from './sections/PleitoPleno';
import { Assinatura } from './sections/Assinatura';
import { DossieProvider, useDossieMeta } from './contexts/DossieContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { EditProvider, useEdit } from './contexts/EditContext';
import { MetricsProvider } from './contexts/MetricsContext';
import { AuthBadge } from './components/AuthBadge';

function AppContent() {
  const { dossie } = useEdit();
  const meta = useDossieMeta();
  const { editMode } = useAuth();

  useEffect(() => {
    initLenis();
    const t = setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => {
      clearTimeout(t);
      destroyLenis();
    };
  }, []);

  return (
    <main className="bg-dossie-default text-ink min-h-screen">
      {/* Mock badge (dev only) */}
      {meta.source === 'mock' && import.meta.env.DEV && (
        <div className="fixed top-2 right-2 z-50 text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-amber-400/15 text-amber-400 border border-amber-400/30 rounded pointer-events-none">
          MOCK · {meta.error ?? 'sem API'}
        </div>
      )}

      {/* Banner de modo edição */}
      {editMode && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-primary/10 border-b border-primary/40 backdrop-blur-card text-center py-1.5 text-[11px] font-mono uppercase tracking-widest text-primary">
          🔓 MODO EDIÇÃO · clique em qualquer texto pra editar · auto-save 800ms
        </div>
      )}

      <Hero />
      <Manifesto />
      <Timeline />
      <Numbers />

      {dossie.growths.map((growth, i) => (
        <GrowthChapter key={growth.letra} index={i + 5} growth={growth} />
      ))}

      <Constante />
      <Academico />
      <VisaoFuturo />
      <PleitoPleno />
      <Assinatura />

      <AuthBadge />
    </main>
  );
}

function App() {
  return (
    <DossieProvider>
      <AuthProvider>
        <EditProvider>
          <MetricsProvider>
            <AppContent />
          </MetricsProvider>
        </EditProvider>
      </AuthProvider>
    </DossieProvider>
  );
}

export default App;
