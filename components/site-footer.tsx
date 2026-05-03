import { LocalTime } from "@/components/local-time";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[color:var(--line)] pt-5 text-[13px] text-[color:var(--ink-muted)] sm:mt-20">
      <p>
        Santa Clara, USA — <LocalTime />
      </p>
    </footer>
  );
}
