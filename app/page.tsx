import Link from "next/link";

const services = ["Website redesigns", "AI automations"];

export default function HomePage() {
  return (
    <article>
      <h1 className="text-[22px] leading-[1.25] font-medium tracking-[-0.01em]">
        We craft websites worth showing off.
      </h1>

      <p className="mt-5 text-[color:var(--ink)]">
        Momentum is a design and engineering studio in Santa Clara (Silicon Valley).
        We redesign websites for companies that are sick off losing clients, 
        and we build AI automations for teams who shouldn't be doing
        the same thing twice. Two services. Both done well, or not at all.
      </p>

      <p className="mt-4 text-[color:var(--ink)]">
        We work with just a few clients at a time as focus is key. 
        We create a shared Slack and report all the progress two or three times a week.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a
          href="mailto:ttalkenov@gmail.com"
          className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-5 py-2 text-[14px] font-medium text-white hover:opacity-90 transition-opacity"
        >
          Email us
        </a>
        <a
          href="https://cal.com/temujin-mvgvvh/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[color:var(--ink)] px-5 py-2 text-[14px] font-medium text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white transition-colors"
        >
          Book a call
        </a>
      </div>

      <p className="mt-7 text-[color:var(--ink)]">
        <Link
          href="/process"
          className="underline decoration-[color:var(--line)] underline-offset-4 hover:decoration-[color:var(--ink)]"
        >
          Landing pages start from $5K
        </Link>
        . AI Automations are priced per project, as they all differ in complexities. 
        A typical project will take two to four months. 
        You can pause whenever you want.
      </p>

      <h2 className="mt-8 text-[color:var(--ink-muted)]">What we do</h2>
      <ul className="mt-3 space-y-1.5">
        {services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </article>
  );
}
