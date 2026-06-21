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
import { DossieProvider, useDossie, useDossieMeta } from './contexts/DossieContext';

function AppContent() {
  const dossie = useDossie();
  const meta = useDossieMeta();

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
      {/* Hint de fonte (dev only) */}
      {meta.source === 'mock' && import.meta.env.DEV && (
        <div className="fixed top-2 right-2 z-50 text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-amber-400/15 text-amber-400 border border-amber-400/30 rounded pointer-events-none">
          MOCK · {meta.error ?? 'sem API'}
        </div>
      )}

      <Hero />
      <Manifesto />
      <Timeline />
      <Numbers />

      {/* 05-10 · 6 capítulos GROWTH */}
      {dossie.growths.map((growth, i) => (
        <GrowthChapter key={growth.letra} index={i + 5} growth={growth} />
      ))}

      <Constante />
      <Academico />
      <VisaoFuturo />
      <PleitoPleno />
      <Assinatura />
    </main>
  );
}

function App() {
  return (
    <DossieProvider>
      <AppContent />
    </DossieProvider>
  );
}

export default App;
