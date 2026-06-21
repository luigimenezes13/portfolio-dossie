/**
 * <Editable path="manifesto.tese" multiline> {children} </Editable>
 *
 * - Não-editMode: renderiza markdown bold (**texto** → vermelho).
 * - EditMode: vira contentEditable mostrando texto cru (com `**`).
 * - Visual: hover dashed underline, focus solid underline vermelho.
 */
import {
  useEffect,
  useRef,
  type ReactNode,
  type HTMLAttributes,
  type JSX,
} from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useEdit } from '../contexts/EditContext';
import { renderBoldRed } from '../lib/markdown-bold';

interface EditableProps extends HTMLAttributes<HTMLElement> {
  path: string;
  multiline?: boolean;
  as?: keyof JSX.IntrinsicElements;
  /** Default true: processa **bold** em vermelho no read mode. */
  markdown?: boolean;
  children: ReactNode;
}

export function Editable({
  path,
  multiline = false,
  as = 'span',
  markdown = true,
  children,
  className = '',
  ...rest
}: EditableProps) {
  const { editMode } = useAuth();
  const { updateField } = useEdit();
  const ref = useRef<HTMLElement | null>(null);

  // Sincroniza children -> DOM apenas quando NÃO está focado
  useEffect(() => {
    if (!ref.current) return;
    if (document.activeElement === ref.current) return;
    const text = typeof children === 'string' ? children : null;
    if (text !== null && ref.current.innerText !== text) {
      ref.current.innerText = text;
    }
  }, [children]);

  if (!editMode) {
    const Tag = as as 'span';
    // Read mode: aplica markdown bold se prop ligado e children é string
    if (markdown && typeof children === 'string') {
      return (
        <Tag className={className} {...rest}>
          {renderBoldRed(children)}
        </Tag>
      );
    }
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const Tag = as as 'span';

  return (
    <Tag
      ref={ref as React.RefObject<HTMLSpanElement>}
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => {
        const text = (e.target as HTMLElement).innerText;
        updateField(path, text);
      }}
      onKeyDown={(e) => {
        if (!multiline && e.key === 'Enter') {
          e.preventDefault();
          (e.target as HTMLElement).blur();
        }
        if (e.key === 'Escape') {
          e.preventDefault();
          if (typeof children === 'string' && ref.current) {
            ref.current.innerText = children;
          }
          (e.target as HTMLElement).blur();
        }
      }}
      className={`${className} editable-field`}
      {...rest}
    >
      {/* Edit mode: SEMPRE texto cru, sem markdown processado */}
      {children}
    </Tag>
  );
}
