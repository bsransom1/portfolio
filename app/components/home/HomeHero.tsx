import Image from "next/image";
import HighlightList from "./HighlightList";

const NAME = "Braden Ransom";
const TITLE = "Software Engineer/Designer";

function ResumeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M200-200v-560 179-19 400Zm80-240h221q2-22 10-42t20-38H280v80Zm0 160h157q17-20 39-32.5t46-20.5q-4-6-7-13t-5-14H280v80Zm0-320h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v258q-14-26-34-46t-46-33v-179H200v560h202q-1 6-1.5 12t-.5 12v56H200Zm409-229q-29-29-29-71t29-71q29-29 71-29t71 29q29 29 29 71t-29 71q-29 29-71 29t-71-29ZM480-120v-56q0-24 12.5-44.5T528-250q36-15 74.5-22.5T680-280q39 0 77.5 7.5T832-250q23 9 35.5 29.5T880-176v56H480Z" />
    </svg>
  );
}

const brandSocials = [
  {
    href: "https://www.linkedin.com/in/brady-ransom/",
    label: "LinkedIn",
    iconSrc: "/LinkedIn_icon.svg.webp",
  },
  {
    href: "https://github.com/bsransom1",
    label: "GitHub",
    iconSrc: "/github_logo_icon_229278.webp",
  },
  {
    href: "https://www.instagram.com/bsransom/",
    label: "Instagram",
    iconSrc: "/Instagram_Icon.webp",
  },
];

export default function HomeHero() {
  return (
    <section className="flex min-h-dvh w-full items-center justify-center px-6 py-16">
      <div className="mx-auto w-fit max-w-full">
        <div className="flex items-center gap-6 md:gap-8">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-lg md:h-36 md:w-36">
            <Image
              src="/projects/headshot.jpg"
              alt={NAME}
              fill
              sizes="144px"
              className="object-cover"
              priority
            />
          </div>
          <div className="min-w-0 text-left">
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{NAME}</h1>
            <p className="mt-2 text-base text-neutral-400 md:text-xl">{TITLE}</p>
            <div className="mt-4 flex items-center gap-2.5">
              {brandSocials.map(({ href, label, iconSrc }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 hover:opacity-90 md:h-11 md:w-11"
                >
                  <img src={iconSrc} alt="" className="h-full w-full object-cover" decoding="async" />
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Résumé"
                className="inline-flex h-10 w-10 items-center justify-center text-neutral-200 transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-white md:h-11 md:w-11"
              >
                <ResumeIcon className="h-10 w-10 md:h-11 md:w-11" />
              </a>
            </div>
          </div>
        </div>

        <HighlightList />
      </div>
    </section>
  );
}
