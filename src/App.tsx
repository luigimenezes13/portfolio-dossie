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
import { DOSSIE } from './content/dossie';

function App() {
  useEffect(() => {
    initLenis();
    const t = setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      clearTimeout(t);
      destroyLenis();
    };
  }, []);

  return (
    <main className="bg-dossie-default text-white min-h-screen">
      {/* 01 */}
      <Hero />

      {/* 02 */}
      <Manifesto />

      {/* 03 */}
      <Timeline />

      {/* 04 */}
      <Numbers />

      {/* 05-10 · 6 capítulos GROWTH */}
      {DOSSIE.growths.map((growth, i) => (
        <GrowthChapter key={growth.letra} index={i + 5} growth={growth} />
      ))}

      {/* 11 */}
      <Constante />

      {/* 12 */}
      <Academico />

      {/* 13 */}
      <VisaoFuturo />

      {/* 14 */}
      <PleitoPleno />

      {/* 15 */}
      <Assinatura />
    </main>
  );
}

export default App;
