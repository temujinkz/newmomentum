import type { Metadata } from "next";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Momentum — Design studio",
  description:
    "Momentum is a small studio designing clean, considered websites for ambitious teams.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto w-full max-w-[360px] px-5 py-10 sm:py-14">
          <MainNav />
          {children}
          <SiteFooter />
        </main>
      </body>
    </html>
  );
}
