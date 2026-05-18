"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Source_Serif_4, VT323, Space_Grotesk } from "next/font/google";
import { BadgeCheck, Instagram, Pencil } from "lucide-react";
import { LINKEDIN_CARD_BORDER, PROFILE_DISPLAY_NAME } from "../../lib/feed/linkedinFeedTheme";

const devRetro = VT323({
  weight: "400",
  subsets: ["latin"],
});

const writerSerif = Source_Serif_4({
  weight: "400",
  subsets: ["latin"],
});

const creatorSans = Space_Grotesk({
  weight: ["500", "600"],
  subsets: ["latin"],
});

function LogoThumb({
  src,
  sizes = "40px",
  padClass = "p-1.5",
}: {
  src: string;
  sizes?: string;
  padClass?: string;
}) {
  const cls = `object-contain ${padClass}`;
  if (src.endsWith(".svg")) {
    return <img src={src} alt="" className={`absolute inset-0 h-full w-full ${cls}`} />;
  }
  return <Image src={src} alt="" fill sizes={sizes} className={cls} />;
}

export default function ProfileHeroCard() {
  const [flipped, setFlipped] = useState(false);

  const handleFlipSurfaceClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a, [data-no-card-flip]")) return;
    setFlipped((prev) => !prev);
  };

  const previously = useMemo(
    () => [
      {
        role: "Software Engineer (Capstone Partner)",
        org: "Leidos",
        dates: "January '26 – Present",
        logoSrc: "/projects/logos/leidos.png",
      },
      {
        role: "UX Researcher",
        org: "Shades",
        dates: "Dec 2024 – Mar 2025",
        logoSrc: "/projects/shades.png",
      },
      {
        role: "UI Designer",
        org: "NOW Pass",
        dates: "Dec 2024 – Mar 2025",
        logoSrc: "/projects/now-pass-mark.svg",
      },
      {
        role: "Campus Partner",
        org: "Perplexity",
        dates: "Aug 2025 – Present",
        logoSrc: "/logos/Perplexity-Logo.png",
      },
    ],
    []
  );

  const leadership = useMemo(
    () => [
      {
        org: "Manifest @ UCI",
        title: "VP of Internal Affairs, Finance",
        dates: "Mar 2025 – Apr 2026",
        logoSrc: "/projects/manifest-mark.png",
      },
      {
        org: "Sigma Chi (Eta Sigma)",
        title:
          "VP of Risk Management & Alumni Relations, Socal Province Rep., 85th Grand Chapter Delegate",
        dates: "Apr 2023 – Mar 2025",
        logoSrc: "/projects/sigma-chi-mark.png",
      },
      {
        org: "IFC (Interfraternity Council)",
        title: "VP of Risk Management",
        dates: "Dec 2024 – Jan 2026",
        logoSrc: "/projects/ifc-mark.png",
        largeLogo: true,
      },
    ],
    []
  );

  const awards = useMemo(
    () =>
      [
        {
          title: "Stella Zhang NVC Finalist",
          sub: "Team RestWing",
          dates: "25-26'",
          logoSrc: "/profile/nvc.png",
          thumbBg: "bg-white",
        },
        {
          title: "Beall Butterworth Product Development Competition Semi-Finalist",
          sub: "Team FoundersSuite",
          dates: "25-26'",
          logoSrc: "/profile/bb_logo.png",
          thumbBg: "bg-black",
        },
        {
          title: "IFC Excellence In Risk Management Programming",
          dates: "24-25'",
          logoSrc: "/profile/sfl_logo.png",
          thumbBg: "bg-white",
          roundLogo: true,
        },
      ] as const,
    []
  );

  return (
    <div className="relative mx-auto w-full max-w-[782px]" style={{ perspective: "1400px" }}>
      <div
        className={`relative w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT */}
        <div
          role="presentation"
          onClick={handleFlipSurfaceClick}
          className="relative flex w-full min-w-0 cursor-pointer flex-col items-center overflow-visible rounded-lg border bg-white px-5 py-6 text-center shadow-sm md:px-7 md:py-7 [backface-visibility:hidden]"
          style={{ borderColor: LINKEDIN_CARD_BORDER }}
        >
          {!flipped ? (
            <p
              className={`${devRetro.className} pointer-events-none absolute right-3 top-3 z-10 max-w-[10rem] text-right text-[10px] leading-tight tracking-wide text-black md:right-4 md:top-4 md:max-w-none md:text-xs`}
            >
              click anywhere to flip!
            </p>
          ) : null}

          <div className="mb-4 flex justify-center md:mb-5">
            <div className="h-[200px] w-[200px] shrink-0 overflow-hidden rounded-full border-[5px] border-gray-200 bg-gray-200 shadow-md md:h-[220px] md:w-[220px]">
              <Image
                src="/projects/headshot.jpg"
                alt={PROFILE_DISPLAY_NAME}
                width={220}
                height={220}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <h1 className="text-2xl font-semibold tracking-tight text-[rgba(0,0,0,0.9)] md:text-3xl">
              {PROFILE_DISPLAY_NAME}
            </h1>
            <BadgeCheck className="h-6 w-6 shrink-0 text-[#0A66C2] md:h-7 md:w-7" aria-label="Verified" />
            <span className="text-sm text-gray-600 md:text-base">(He/Him)</span>
          </div>

          <p className="mt-1 text-center text-base text-[rgba(0,0,0,0.9)] md:text-lg">
            <span className="inline text-[rgba(0,0,0,0.9)]">
              <a
                href="https://github.com/bsransom1"
                target="_blank"
                rel="noopener noreferrer"
                className={`${devRetro.className} relative text-[1.12em] uppercase tracking-[0.14em] text-[#134d36] no-underline transition-all duration-300 ease-out [text-shadow:0_0_1px_rgba(0,90,55,0.35)] hover:text-[#00c46b] hover:[text-shadow:0_0_12px_rgba(0,220,130,0.55),0_0_2px_rgba(0,255,160,0.4)] active:text-[#009955] md:text-[1.2em]`}
                aria-label="GitHub profile"
              >
                Developer
              </a>
              ,{" "}
              <span className={`${creatorSans.className} inline-flex items-baseline font-semibold tracking-[-0.01em]`}>
                C
                <a
                  href="https://www.instagram.com/bsransom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-[0.08em] inline-flex items-center justify-center align-baseline text-[rgba(0,0,0,0.88)] transition-all duration-200 ease-out hover:scale-125 hover:text-[#E4405F] hover:drop-shadow-[0_0_0.35em_rgba(228,64,95,0.35)] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2] active:scale-110 md:mx-[0.1em]"
                  aria-label="Instagram"
                >
                  <Instagram
                    className="relative top-[0.08em] h-[0.78em] w-[0.78em] shrink-0 md:top-[0.06em] md:h-[0.82em] md:w-[0.82em]"
                    strokeWidth={3.4}
                    aria-hidden
                  />
                </a>
                ntent Creator
              </span>
              ,{" "}
              <span className={`${writerSerif.className} tracking-[0.01em]`}>
                Wr
                <Link
                  href="/writing"
                  className="mx-[0.02em] inline-flex items-center justify-center align-baseline text-[rgba(0,0,0,0.88)] transition-all duration-200 ease-out hover:scale-125 hover:text-[#0A66C2] hover:drop-shadow-[0_0_0.35em_rgba(10,102,194,0.35)] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2] active:scale-110 md:mx-[0.03em]"
                  aria-label="Writing"
                >
                  <Pencil
                    className="relative top-[0.04em] h-[0.7em] w-[0.7em] shrink-0 -rotate-45 md:h-[0.74em] md:w-[0.74em]"
                    strokeWidth={3.4}
                    aria-hidden
                  />
                </Link>
                ter
              </span>
            </span>
          </p>

          <p className="mt-2.5 text-sm text-gray-600 md:text-base">
            Irvine, CA ·{" "}
            <Link href="/contact" className="font-semibold text-[#0A66C2] hover:underline">
              Contact info
            </Link>
          </p>

          <p className="mt-1 flex flex-wrap items-center justify-center gap-x-0">
            <a
              href="https://www.linkedin.com/in/brady-ransom/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#0A66C2] hover:underline md:text-base"
            >
              500+ connections
            </a>
            <span className="ml-1 inline-block text-[0.7rem] leading-none md:ml-1.5 md:text-[0.8rem]" aria-hidden>
              😛
            </span>
          </p>

          {/* Restored suite — clicks don’t flip the card */}
          <div
            data-no-card-flip
            className="mt-4 flex flex-wrap items-center justify-center gap-2 md:mt-5 md:gap-2.5"
          >
            <span className="inline-flex cursor-default select-none items-center justify-center rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#004182] md:px-5 md:text-base">
              Open to
            </span>
            <span className="inline-flex cursor-default select-none items-center justify-center rounded-full border border-[#0A66C2] bg-white px-4 py-2 text-sm font-semibold text-[#0A66C2] transition-colors duration-150 hover:bg-[#f0f7ff] md:px-5 md:text-base">
              Add section
            </span>
            <span className="inline-flex cursor-default select-none items-center justify-center rounded-full border border-[#0A66C2] bg-white px-4 py-2 text-sm font-semibold text-[#0A66C2] transition-colors duration-150 hover:bg-[#f0f7ff] md:px-5 md:text-base">
              Enhance profile
            </span>
            <span className="inline-flex cursor-default select-none items-center justify-center rounded-full border border-gray-600 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors duration-150 hover:bg-gray-50 md:px-5 md:text-base">
              Resources
            </span>
          </div>
        </div>

        {/* BACK */}
        <div
          role="presentation"
          onClick={handleFlipSurfaceClick}
          className="absolute inset-0 flex max-h-full w-full min-w-0 cursor-pointer flex-col items-stretch overflow-y-auto overscroll-contain rounded-lg border bg-white px-5 py-6 text-left shadow-sm [-webkit-overflow-scrolling:touch] [backface-visibility:hidden] [transform:rotateY(180deg)] touch-pan-y md:px-7 md:py-7"
          style={{ borderColor: LINKEDIN_CARD_BORDER }}
        >
          {flipped ? (
            <p
              className={`${devRetro.className} pointer-events-none sticky top-0 z-10 mb-2 ml-auto w-full max-w-[10rem] text-right text-[10px] leading-tight tracking-wide text-black md:absolute md:right-4 md:top-4 md:mb-0 md:max-w-none md:text-xs`}
            >
              click anywhere to flip!
            </p>
          ) : null}

          <div className="w-full min-h-0 flex-1 pb-4 pt-2 md:pb-5 md:pt-11">
            <div className="flex w-full flex-col gap-3.5 md:gap-4">
              <div className="grid w-full grid-cols-1 gap-3.5 md:grid-cols-2 md:items-stretch md:gap-4">
              <section
                className="flex h-full min-h-0 flex-col rounded-2xl border border-gray-200/75 bg-gradient-to-b from-white/70 via-white/55 to-slate-50/35 p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[6px] md:p-5"
              >
                <header className="mb-3.5 flex items-end gap-3 md:mb-4">
                  <h2 className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Experience
                  </h2>
                  <div
                    className="h-px min-w-[2rem] flex-1 bg-gradient-to-r from-gray-200/90 via-[#edf3f8]/90 to-transparent"
                    aria-hidden
                  />
                </header>

                <ul className="grid list-none gap-2">
                  {previously.map((item, rowIdx) => (
                    <li key={item.role}>
                      <div className="relative flex gap-3 rounded-xl border border-gray-200/60 bg-white/45 px-3 py-2.5 shadow-[0_1px_3px_rgba(15,23,42,0.05)] backdrop-blur-[4px] md:gap-3.5 md:py-3">
                        <div className="min-w-0 flex-1">
                          <p className="text-[15px] font-semibold leading-snug tracking-tight text-gray-950 md:text-base">
                            {item.role}
                          </p>
                          <p className="mt-0.5 text-[11px] font-normal leading-relaxed text-gray-500 md:text-xs">
                            <span>{item.org}</span>
                            <span className="mx-1.5 text-gray-300">·</span>
                            <span className="tabular-nums text-gray-500/90">{item.dates}</span>
                          </p>
                        </div>
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-gray-200/85 bg-white shadow-[0_1px_4px_rgba(15,23,42,0.08)] md:h-14 md:w-14">
                          <LogoThumb src={item.logoSrc} sizes="56px" padClass="p-1" />
                        </div>
                      </div>
                      {rowIdx < previously.length - 1 ? (
                        <div className="mx-auto my-0.5 h-px w-[92%] bg-gradient-to-r from-transparent via-gray-100 to-transparent" aria-hidden />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>

                <section
                  className="flex h-full min-h-0 flex-col rounded-2xl border border-gray-200/75 bg-gradient-to-b from-white/70 via-white/55 to-slate-50/35 p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[6px] md:p-5"
                >
                  <header className="mb-3.5 flex items-end gap-3 md:mb-4">
                    <h2 className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Leadership
                    </h2>
                    <div
                      className="h-px min-w-[2rem] flex-1 bg-gradient-to-r from-gray-200/90 via-[#edf3f8]/90 to-transparent"
                      aria-hidden
                    />
                  </header>

                  <ul className="grid list-none gap-2">
                    {leadership.map((l, idx) => (
                      <li key={`${l.org}-${l.title}-${idx}`}>
                        <div className="relative flex gap-3 rounded-xl border border-gray-200/60 bg-white/45 px-3 py-2.5 shadow-[0_1px_3px_rgba(15,23,42,0.05)] backdrop-blur-[4px] md:gap-3.5 md:py-3">
                          <div className="min-w-0 flex-1">
                            <p className="text-[15px] font-semibold leading-snug tracking-tight text-gray-950 md:text-base">
                              {l.title}
                            </p>
                            <p className="mt-0.5 text-[11px] font-normal leading-relaxed text-gray-500 md:text-xs">
                              <span>{l.org}</span>
                              <span className="mx-1.5 text-gray-300">·</span>
                              <span className="tabular-nums text-gray-500/90">{l.dates}</span>
                            </p>
                          </div>
                          {"logoSrc" in l && l.logoSrc ? (
                            <div
                              className={
                                "largeLogo" in l && l.largeLogo
                                  ? "relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-gray-200/85 bg-white shadow-[0_1px_4px_rgba(15,23,42,0.08)] md:h-14 md:w-14"
                                  : "relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-gray-200/85 bg-white shadow-[0_1px_4px_rgba(15,23,42,0.08)] md:h-10 md:w-10"
                              }
                            >
                              <LogoThumb
                                src={l.logoSrc}
                                sizes={"largeLogo" in l && l.largeLogo ? "56px" : "40px"}
                                padClass={"largeLogo" in l && l.largeLogo ? "p-1" : "p-1.5"}
                              />
                            </div>
                          ) : null}
                        </div>
                        {idx < leadership.length - 1 ? (
                          <div className="mx-auto my-0.5 h-px w-[92%] bg-gradient-to-r from-transparent via-gray-100 to-transparent" aria-hidden />
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section
                className="flex w-full min-h-0 flex-col rounded-2xl border border-gray-200/75 bg-gradient-to-b from-white/70 via-white/55 to-slate-50/35 p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[6px] md:p-5"
              >
                  <header className="mb-3.5 flex items-end gap-3 md:mb-4">
                    <h2 className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Awards &amp; Competitions
                    </h2>
                    <div
                      className="h-px min-w-[2rem] flex-1 bg-gradient-to-r from-gray-200/90 via-[#edf3f8]/90 to-transparent"
                      aria-hidden
                    />
                  </header>

                  <ul className="grid list-none gap-2">
                    {awards.map((a, idx) => (
                      <li key={`${a.title}-${idx}`}>
                        <div className="relative flex gap-3 rounded-xl border border-gray-200/60 bg-white/45 px-3 py-2.5 shadow-[0_1px_3px_rgba(15,23,42,0.05)] backdrop-blur-[4px] md:gap-3.5 md:py-3">
                          <div className="min-w-0 flex-1">
                            <p className="text-[15px] font-semibold leading-snug tracking-tight text-gray-950 md:text-base">{a.title}</p>
                            {"sub" in a && a.sub ? (
                              <p className="mt-0.5 text-[11px] font-normal leading-relaxed text-gray-500 md:text-xs">
                                <span>{a.sub}</span>
                                {"dates" in a && a.dates ? (
                                  <>
                                    <span className="mx-1.5 text-gray-300">·</span>
                                    <span className="tabular-nums text-gray-500/90">{a.dates}</span>
                                  </>
                                ) : null}
                              </p>
                            ) : "dates" in a && a.dates ? (
                              <p className="mt-0.5 text-[11px] font-normal leading-relaxed text-gray-500 md:text-xs">
                                <span className="tabular-nums text-gray-500/90">{a.dates}</span>
                              </p>
                            ) : null}
                          </div>
                          <div
                            className={`relative h-12 w-12 shrink-0 overflow-hidden border border-gray-200/85 shadow-[0_1px_4px_rgba(15,23,42,0.08)] md:h-14 md:w-14 ${"roundLogo" in a && a.roundLogo ? "rounded-full" : "rounded-lg"} ${a.thumbBg}`}
                          >
                            <LogoThumb src={a.logoSrc} sizes="56px" padClass="p-1" />
                          </div>
                        </div>
                        {idx < awards.length - 1 ? (
                          <div className="mx-auto my-0.5 h-px w-[92%] bg-gradient-to-r from-transparent via-gray-100 to-transparent" aria-hidden />
                        ) : null}
                      </li>
                    ))}
                  </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
