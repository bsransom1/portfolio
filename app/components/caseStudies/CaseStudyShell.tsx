import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import type { Project } from "../../lib/projects";
import { getProjectCardDisplay } from "../../lib/projectCardDisplay";
import Footer from "../layout/Footer";

export function CaseStudySection({
  title,
  children,
  wide = false,
}: {
  title: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <section className={`mb-16 px-6 md:mb-20 ${wide ? "mx-auto max-w-5xl" : "mx-auto max-w-3xl"}`}>
      <h2 className="mb-5 text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

export function CaseStudyBullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3 text-base leading-relaxed text-neutral-300 md:text-lg">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-1 shrink-0 font-mono text-sm text-neutral-600" aria-hidden>
            →
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyShell({
  project,
  lead,
  meta,
  children,
}: {
  project: Project;
  lead: string;
  /** Quiet chips under the lead (Role · Stack · Year). */
  meta?: { label: string; value: string }[];
  children: ReactNode;
}) {
  const display = getProjectCardDisplay(project.slug);
  const title = display?.displayName ?? project.title;
  const role = display?.roleLabel ?? project.type;

  return (
    <main className="min-h-screen bg-transparent">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 md:pt-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>
      </div>

      <header className="mx-auto mb-12 max-w-3xl px-6 md:mb-16">
        <div className="mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-1">
          {display?.logoSrc ? (
            <img
              src={display.logoSrc}
              alt=""
              className="h-8 w-auto max-h-8 max-w-[3.5rem] shrink-0 rounded-lg object-contain md:h-9 md:max-h-9 md:max-w-[4rem]"
              decoding="async"
            />
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
        </div>

        <p className="mb-5 text-sm text-neutral-500">{role}</p>

        <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">{lead}</p>

        {meta?.length ? (
          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400">
            {meta.map((m) => (
              <div key={m.label} className="inline-flex gap-1.5">
                <dt className="text-neutral-600">{m.label}</dt>
                <dd className="text-neutral-300">{m.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </header>

      {children}

      <Footer />
    </main>
  );
}
