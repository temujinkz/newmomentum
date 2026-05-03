"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Index" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="mb-10 flex items-center gap-4 sm:mb-14">
      <Link href="/" aria-label="Momentum — home" className="shrink-0">
        <Image
          src="/logo.png"
          alt="Momentum"
          width={56}
          height={42}
          priority
          className="h-9 w-auto"
        />
      </Link>
      <nav aria-label="Primary">
        <ul className="flex items-center gap-4 text-[15px]">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "text-[color:var(--ink)] font-medium"
                      : "text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
