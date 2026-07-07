// Server component: native <details>/<summary> needs no client JS, keeping
// these FAQ-rich comparison pages fast and fully crawlable.
export default function FaqAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="card divide-y divide-slate-100">
      {faqs.map((faq, i) => (
        <details key={i} className="group p-4 open:bg-slate-50">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
            {faq.question}
            <span className="ml-4 flex-shrink-0 text-slate-400 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
