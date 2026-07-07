const SECTIONS = [
  { id: 'summary', label: 'Summary' },
  { id: 'specs', label: 'Specs' },
  { id: 'scores', label: 'Scores' },
  { id: 'battery', label: 'Battery' },
  { id: 'anc', label: 'Noise Cancelling' },
  { id: 'comfort', label: 'Comfort' },
  { id: 'sound', label: 'Sound' },
  { id: 'calls', label: 'Calls' },
  { id: 'travel', label: 'Travel' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'best-for', label: 'Best For' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'alternatives', label: 'Alternatives' }
];

// A single, comprehensive comparison page with jump links instead of
// splitting "A vs B Battery", "A vs B Gaming", etc. into separate thin
// pages — avoids keyword cannibalization while still covering every intent.
export default function JumpNav() {
  return (
    <nav className="no-scrollbar -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
      {SECTIONS.map((s) => (
        <a key={s.id} href={`#${s.id}`} className="pill flex-shrink-0 hover:bg-slate-200">
          {s.label}
        </a>
      ))}
    </nav>
  );
}
