import Link from "next/link";

const services = ["Website redesigns", "AI automations"];

export default function HomePage() {
  return (
    <article>
      <h1 className="text-[22px] leading-[1.25] font-medium tracking-[-0.01em]">
        We make websites worth showing
        <br />
        off, and we make work disappear.
      </h1>

      <p className="mt-5 text-[color:var(--ink)]">
        Momentum is a design and engineering studio in Santa Clara. We
        redesign websites for founders who've outgrown the off-the-shelf
        look, and we build AI automations for teams who shouldn't be doing
        the same thing twice. Two services. Both done well, or not at all.
      </p>

      <p className="mt-4 text-[color:var(--ink)]">
        We work with a few clients at a time, in a shared Slack or Telegram
        channel, with progress two or three times a week. No status calls.
        No decks about decks. The work shows up, you react to it, we keep
        going.
      </p>

      <div className="mt-7">
        <a
          href="mailto:ttalkenov@gmail.com"
          className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-5 py-2 text-[14px] font-medium text-white hover:opacity-90 transition-opacity"
        >
          Email us
        </a>
      </div>

      <p className="mt-7 text-[color:var(--ink)]">
        <Link
          href="/process"
          className="underline decoration-[color:var(--line)] underline-offset-4 hover:decoration-[color:var(--ink)]"
        >
          Landing pages from $1K
        </Link>
        . Automations priced per project, because pretending otherwise would
        be insulting. Most engagements run three to six weeks. Pause or
        cancel between sprints. No retainers, no contracts that read like
        mortgages.
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
