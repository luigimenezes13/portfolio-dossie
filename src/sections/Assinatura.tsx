import { useDossie } from '../contexts/DossieContext';
import { Editable } from '../components/Editable';

export function Assinatura() {
  const DOSSIE = useDossie();
  return (
    <footer className="relative bg-dossie-deeper text-ink py-32 lg:py-40">
      <div className="dossie-container max-w-3xl text-center space-y-12">
        <div className="text-kicker text-[10px]">№ 15 · ASSINATURA</div>

        <blockquote className="space-y-8">
          <p
            className="font-editorial italic text-ink text-balance leading-relaxed"
            style={{ fontSize: 'clamp(24px, 4vw, 48px)', lineHeight: 1.35 }}
          >
            &ldquo;<Editable path="assinatura.tagline" multiline>{DOSSIE.assinatura.tagline}</Editable>&rdquo;
          </p>
          <cite className="text-kicker not-italic text-[11px] block">
            — <Editable path="assinatura.atribuicao">{DOSSIE.assinatura.atribuicao}</Editable>
          </cite>
        </blockquote>

        <div className="red-line-glow w-32 mx-auto opacity-60" />

        <div className="space-y-2 font-sans text-[13px] text-ink/45">
          {DOSSIE.assinatura.metadata.map((linha, i) => (
            <p key={i}>{linha}</p>
          ))}
        </div>

        {/* Volta pro topo (link sutil) */}
        <div className="pt-8 text-byline text-ink/30">
          <a href="#top" className="hover:text-primary transition-colors">↑ VOLTAR AO TOPO</a>
        </div>
      </div>
    </footer>
  );
}
