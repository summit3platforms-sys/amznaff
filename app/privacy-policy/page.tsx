import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How The Comparison Report collects, uses, and protects information from visitors.',
  alternates: canonical('/privacy-policy')
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-400">
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="mt-6 space-y-6 text-slate-600">
        <section>
          <p>
            The Comparison Report (&quot;we,&quot; &quot;us,&quot; or &quot;this site&quot;) publishes independent
            product comparisons and buying guides, and earns commission through affiliate links, including as a
            participant in the Amazon Services LLC Associates Program. This policy explains what information we
            collect when you visit, how it&apos;s used, and the choices available to you. It applies to this website
            only and not to any third-party site you reach through a link from here.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Information we collect</h2>
          <p>We keep data collection to what&apos;s needed to run and understand the site. Specifically:</p>
          <p className="mt-3">
            <strong className="text-slate-800">Account information:</strong> none. This site has no user
            registration, login, or accounts, so we don&apos;t collect or store usernames, passwords, or profile
            data.
          </p>
          <p className="mt-3">
            <strong className="text-slate-800">Technical and usage data:</strong> like most websites, our hosting
            infrastructure automatically logs standard technical data when you visit — things like IP address,
            approximate location derived from it, browser and device type, referring page, pages viewed, and time
            spent on the site. This is typical web server and analytics data used in aggregate to understand traffic
            and improve content; it isn&apos;t used to build individual profiles.
          </p>
          <p className="mt-3">
            <strong className="text-slate-800">Information you submit directly:</strong> our{' '}
            <a href="/contact" className="text-brand-600 hover:underline">
              contact form
            </a>{' '}
            doesn&apos;t transmit or store your message on our servers. Submitting it opens your own email
            application with the message pre-filled, and you choose whether to send it. Anything you send that way
            goes directly to our inbox as a normal email, the same as if you&apos;d written to us yourself.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">How we use information</h2>
          <p>We use the data described above to:</p>
          <p className="mt-3">
            operate and maintain the site; understand which pages and comparisons are useful so we can improve them;
            detect and prevent abuse, spam, or security issues; and respond to messages you send us. We do not sell
            personal information, and we do not use visitor data to build advertising profiles for third parties.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Cookies &amp; tracking technologies</h2>
          <p>
            This site may use cookies for basic analytics and to support Amazon&apos;s affiliate tracking, so we can
            get credit when a purchase follows a link from here. We don&apos;t use cookies for third-party
            advertising, and we don&apos;t sell cookie or tracking data. Full details on what&apos;s set, by whom,
            and how to control it live on our{' '}
            <a href="/cookie-policy" className="text-brand-600 hover:underline">
              Cookie Policy
            </a>{' '}
            page. You can block or delete cookies in your browser settings at any time; doing so may affect some
            site functionality but won&apos;t prevent you from reading content.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Amazon affiliate links &amp; third-party sites</h2>
          <p>
            As an Amazon Associate we earn from qualifying purchases, and other outbound links on this site may also
            be affiliate links. Clicking one takes you to a third-party retailer&apos;s site, which sets its own
            cookies and collects information under its own privacy policy — we don&apos;t control that collection
            and aren&apos;t responsible for it. See our{' '}
            <a href="/affiliate-disclosure" className="text-brand-600 hover:underline">
              Affiliate Disclosure
            </a>{' '}
            for how these relationships work and how they do (and don&apos;t) affect our recommendations. More
            generally, once you leave this site through any link, the destination site&apos;s privacy practices
            govern your information, not ours.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Service providers</h2>
          <p>
            We rely on third-party infrastructure — our hosting provider and, if enabled, analytics tools — to run
            this site and understand traffic. These providers may process technical data described above (like IP
            address and pages visited) on our behalf, under their own security and privacy practices. We don&apos;t
            share this data with providers for purposes beyond operating and improving the site.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Data retention</h2>
          <p>
            Because we don&apos;t maintain accounts or store form submissions on our servers, there&apos;s little
            personal data for us to retain. Aggregate technical/traffic logs are kept only as long as useful for the
            purposes described above, then discarded or further anonymized. Any email you send us directly is
            retained like normal correspondence, for as long as needed to address it.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Your choices &amp; rights</h2>
          <p>
            You can browse this entire site without submitting any personal information. Beyond that, you can: block
            or clear cookies in your browser at any time (see our{' '}
            <a href="/cookie-policy" className="text-brand-600 hover:underline">
              Cookie Policy
            </a>{' '}
            for specifics); manage Amazon&apos;s own tracking preferences through your Amazon account settings, since
            affiliate cookies are set by Amazon, not by us; and contact us if you have questions about data collected
            through this site or want us to delete correspondence you&apos;ve sent. Depending on where you live —
            for example, the EU, UK, or California — local law may give you additional rights over personal
            information, such as the right to request access to or deletion of data held about you. Given how little
            we collect, most such requests will have little to act on, but you&apos;re welcome to reach out and
            we&apos;ll respond.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Do Not Track</h2>
          <p>
            Some browsers offer a &quot;Do Not Track&quot; setting. There&apos;s no industry-standard way sites are
            required to respond to it yet, so this site does not currently change its behavior based on that signal.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Children&apos;s privacy</h2>
          <p>
            This site is intended for a general audience and is not directed at children under 13. We do not
            knowingly collect personal information from children under 13. If you believe a child has provided us
            information, contact us and we&apos;ll remove it.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">International visitors</h2>
          <p>
            This site is operated from and intended primarily for visitors in the United States. If you access it
            from outside the U.S., your information (to the limited extent described above) may be processed on
            servers located in the U.S. or wherever our hosting and service providers operate.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Changes to this policy</h2>
          <p>
            We may update this policy as the site evolves. Material changes will be reflected by updating the
            &quot;Last updated&quot; date at the top of this page. Continued use of the site after an update means
            you accept the revised policy.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Related policies</h2>
          <p>
            This privacy policy works alongside our{' '}
            <a href="/cookie-policy" className="text-brand-600 hover:underline">
              Cookie Policy
            </a>
            ,{' '}
            <a href="/affiliate-disclosure" className="text-brand-600 hover:underline">
              Affiliate Disclosure
            </a>
            , and{' '}
            <a href="/terms" className="text-brand-600 hover:underline">
              Terms of Use
            </a>
            . Together they cover how the site handles data, discloses commercial relationships, and sets terms for
            use.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-slate-900">Contact</h2>
          <p>
            Questions about this policy or how your information is handled?{' '}
            <a href="/contact" className="text-brand-600 hover:underline">
              Contact us
            </a>{' '}
            and we&apos;ll get back to you.
          </p>
        </section>
      </div>
    </div>
  );
}
