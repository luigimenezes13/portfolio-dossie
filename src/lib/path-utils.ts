/**
 * Path utils · get/set valor em objeto aninhado usando dotted+bracket notation.
 *
 * Suportado:
 *   'manifesto.tese'
 *   'growths[2].provas[0].corpo'
 *   'visaoFuturo[1].profissional[0]'
 */

function tokenize(path: string): (string | number)[] {
  const tokens: (string | number)[] = [];
  const re = /\.?([^.[\]]+)|\[(\d+)\]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(path)) !== null) {
    if (m[1] !== undefined) tokens.push(m[1]);
    else if (m[2] !== undefined) tokens.push(Number(m[2]));
  }
  return tokens;
}

export function getByPath<T = unknown>(obj: unknown, path: string): T | undefined {
  const tokens = tokenize(path);
  let cur: unknown = obj;
  for (const t of tokens) {
    if (cur == null) return undefined;
    cur = (cur as Record<string | number, unknown>)[t];
  }
  return cur as T;
}

/**
 * Imutável: retorna cópia rasa+caminho clonado com `value` no path.
 * (Resto da árvore mantém referências — performant pra React.)
 */
export function setByPath<T>(obj: T, path: string, value: unknown): T {
  const tokens = tokenize(path);
  if (tokens.length === 0) return obj;

  const clone = Array.isArray(obj) ? [...obj] : { ...(obj as object) };
  let cursor: Record<string | number, unknown> = clone as Record<string | number, unknown>;

  for (let i = 0; i < tokens.length - 1; i++) {
    const t = tokens[i];
    const next = cursor[t];
    const cloned = Array.isArray(next) ? [...next] : { ...(next as object) };
    cursor[t] = cloned;
    cursor = cloned as Record<string | number, unknown>;
  }
  cursor[tokens[tokens.length - 1]] = value;
  return clone as T;
}
