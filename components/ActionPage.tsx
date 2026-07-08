const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@yourdomain.com';

export default function ActionPage({
  title,
  description,
  buttonLabel,
  subject
}: {
  title: string;
  description: string;
  buttonLabel: string;
  subject: string;
}) {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">{title}</h1>
      <p className="mt-4 text-slate-600">{description}</p>
      <a href={mailto} className="btn-secondary mt-6 inline-flex">
        {buttonLabel}
      </a>
    </div>
  );
}
