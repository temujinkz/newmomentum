const steps = [
  {
    n: "001",
    title: "Align",
    body: "We get the boring part right first. Goals, users, the parts of the brief you haven't said out loud yet. Moodboards, flows, wireframes. None of it glamorous. All of it the reason the rest works.",
  },
  {
    n: "002",
    title: "Direct",
    body: "We design the screens that do the heaviest lifting first and agree on a visual direction with you. Nothing else gets built until you're happy with where it's going.",
  },
  {
    n: "003",
    title: "Build",
    body: "Every screen, every state, every edge case, treated like the homepage. Internal reviews catch what we'd otherwise miss. By the end, there's nothing left for someone else to figure out.",
  },
  {
    n: "004",
    title: "Polish",
    body: "The last ten percent that nobody notices and everybody feels. Tightened type, real interactions, files your engineers can open without sighing.",
  },
];

export default function ProcessPage() {
  return (
    <article>
      <h1 className="text-[22px] leading-[1.25] font-medium tracking-[-0.01em]">
        How the work
        <br />
        actually goes.
      </h1>

      <p className="mt-5 text-[color:var(--ink)]">
        Day one, we open a Slack or Telegram channel and start. You hear
        from us two or three times a week, with progress, questions, and
        things that need your eyes. You always know where it is. You never
        get a surprise invoice. That's most of the trick.
      </p>

      <div className="mt-8 space-y-7">
        {steps.map((step) => (
          <section key={step.n}>
            <h2 className="text-[color:var(--ink-muted)]">
              <span>{step.n}</span> <span>{step.title}</span>
            </h2>
            <p className="mt-2">{step.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
