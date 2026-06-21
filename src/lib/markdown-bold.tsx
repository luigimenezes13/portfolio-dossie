/**
 * Converte `**texto**` em <strong className="text-primary"> texto </strong>.
 * Markdown mínimo só pra destaque — sem suporte a outras tags.
 *
 * Usado em campos de texto livre do dossiê. No modo edição, o `Editable`
 * mostra o texto cru (com asteriscos) pra preservar o conteúdo na edição.
 */
import type { ReactNode } from 'react';

export function renderBoldRed(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-primary font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
