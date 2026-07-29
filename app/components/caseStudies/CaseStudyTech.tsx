"use client";

import { getHomepageStackStripItems, getProjectStackItems } from "../feed/ProjectStackStrip";

/** Compact stack chips for case studies. */
export function CaseStudyStack({ slug }: { slug: string }) {
  const items = getHomepageStackStripItems(slug);
  const fallback = getProjectStackItems(slug)?.filter((i) => i.caseStudyColumn !== "overview") ?? [];
  const list = items.length ? items : fallback.slice(0, 6);
  if (!list.length) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {list.map((item) => {
        const Icon = item.Icon;
        return (
          <li
            key={item.id}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-neutral-200"
          >
            <Icon className="h-3.5 w-3.5 shrink-0 text-neutral-400" aria-hidden />
            <span>{item.title}</span>
          </li>
        );
      })}
    </ul>
  );
}

/** Mono UML / sequence diagram block. */
export function CaseStudyUml({
  title,
  diagram,
}: {
  title?: string;
  diagram: string;
}) {
  return (
    <figure className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 md:p-5">
      {title ? (
        <figcaption className="mb-3 text-[0.65rem] font-semibold uppercase tracking-wider text-neutral-500">
          {title}
        </figcaption>
      ) : null}
      <pre className="font-mono text-[11px] leading-relaxed text-neutral-400 md:text-xs whitespace-pre">
        {diagram}
      </pre>
    </figure>
  );
}
