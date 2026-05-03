import Image from "next/image";

const shots = [
  { src: "/work/swiftbox.jpg", alt: "Swiftbox", w: 2862, h: 1670 },
  { src: "/work/articulate.jpg", alt: "Articulate AI", w: 2876, h: 1752 },
  { src: "/work/qapal.jpg", alt: "Qapal", w: 2874, h: 1766 },
];

export default function WorkPage() {
  return (
    <article className="space-y-4">
      {shots.map((s) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={s.w}
          height={s.h}
          sizes="(min-width: 640px) 360px, 100vw"
          className="h-auto w-full rounded-md border border-[color:var(--line)]"
        />
      ))}
    </article>
  );
}
