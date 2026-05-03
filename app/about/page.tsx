export default function AboutPage() {
  return (
    <article>
      <h1 className="text-[22px] leading-[1.25] font-medium tracking-[-0.01em]">
        Built by people who'd rather
        <br />
        be making the thing.
      </h1>

      <div className="mt-5 space-y-4">
        <p>
          We started Momentum because most studios are slow, most agencies
          are bloated, and most freelancers ghost. We wanted a third option.
          The sharpest team of designers and engineers we could put in one
          room, working on a few projects at a time, with their names on the
          result.
        </p>
        <p>
          Our clients are founders, operators, and product teams. Some are
          pre-seed, still figuring out what they're building. Some are
          companies you already use. We don't change the way we work
          depending on which one you are.
        </p>
        <p>
          We're in Santa Clara, but the work happens wherever you are,
          asynchronously, mostly written down. If you're building something
          you actually care about, send us a note. We read everything.
        </p>
      </div>

      <p className="mt-10 text-[color:var(--ink-muted)]">
        <a
          href="mailto:ttalkenov@gmail.com"
          className="text-[color:var(--ink)] underline decoration-[color:var(--line)] underline-offset-4 hover:decoration-[color:var(--ink)]"
        >
          ttalkenov@gmail.com
        </a>
        <br />
        Founder
      </p>
    </article>
  );
}
