import React from 'react';

// ---------------------------------------------------------------------------
// Minimal, dependency-free Markdown -> JSX renderer for guide content.
// Deliberately supports only what guide-writing actually needs so it stays
// small and predictable: #/##/### headings, blank-line-separated
// paragraphs, "- " bullet lists, **bold**, *italic*, and [text](url) links
// (internal links render as next/link-free <a> — fine for the low volume
// of guide content this powers).
// ---------------------------------------------------------------------------

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Order matters: links first, then bold, then italic — a single combined
  // regex pass keeps overlapping matches (e.g. a bold word inside a link)
  // from being mangled by sequential replacement.
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      const isInternal = match[2].startsWith('/');
      nodes.push(
        <a
          key={`${keyPrefix}-${i++}`}
          href={match[2]}
          className="text-brand-600 hover:underline"
          {...(isInternal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {match[1]}
        </a>
      );
    } else if (match[3] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}-${i++}`}>{match[3]}</strong>);
    } else if (match[4] !== undefined) {
      nodes.push(<em key={`${keyPrefix}-${i++}`}>{match[4]}</em>);
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export function renderMarkdown(markdown: string): React.ReactNode {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === '') {
      i++;
      continue;
    }

    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2];
      const props = { key: key++, className: headingClass(level) };
      const content = renderInline(text, `h${key}`);
      blocks.push(
        level === 1 ? <h1 {...props}>{content}</h1> :
        level === 2 ? <h2 {...props}>{content}</h2> :
        level === 3 ? <h3 {...props}>{content}</h3> :
        <h4 {...props}>{content}</h4>
      );
      i++;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ''));
        i++;
      }
      blocks.push(
        <ul key={key++} className="list-disc space-y-1.5 pl-5">
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item, `li${key}-${idx}`)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Paragraph: collect lines until a blank line or the start of a new block
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== '' && !/^(#{1,6})\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i])) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(<p key={key++}>{renderInline(paraLines.join(' '), `p${key}`)}</p>);
  }

  return blocks;
}

function headingClass(level: number): string {
  if (level === 1) return 'mb-4 text-2xl font-extrabold text-slate-900';
  if (level === 2) return 'mb-2 mt-8 text-lg font-bold text-slate-900';
  if (level === 3) return 'mb-2 mt-6 text-base font-bold text-slate-900';
  return 'mb-2 mt-4 text-sm font-bold text-slate-900';
}
