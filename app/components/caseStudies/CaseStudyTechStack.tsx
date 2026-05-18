"use client";

import { getCaseStudyStackTable, projectHasStackStrip, type StackItem } from "../feed/ProjectStackStrip";

function ColumnList({ items }: { items: StackItem[] }) {
  return (
    <ul className="m-0 list-none space-y-2 p-0">
      {items.map((item, i) => {
        const Icon = item.Icon;
        return (
          <li
            key={item.id}
            className={`flex gap-3 rounded-lg px-3 py-3 leading-snug sm:px-4 ${
              i % 2 === 0 ? "bg-white/70" : "bg-gray-50/80"
            }`}
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-black shadow-sm ring-1 ring-gray-200/80">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <span className="min-w-0 pt-0.5">
              <span className="font-semibold text-black">{item.title}</span>
              <span className="font-normal text-gray-600"> — {item.detail}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

type CaseStudyTechStackProps = {
  slug: string;
  /** Project brand color (hex) for accents */
  accentColor?: string;
};

/** Full stack in a styled front/back layout; overview row included inside the panel. */
export default function CaseStudyTechStack({ slug, accentColor }: CaseStudyTechStackProps) {
  if (!projectHasStackStrip(slug)) return null;
  const table = getCaseStudyStackTable(slug);
  if (!table) return null;

  const OverviewIcon = table.overview?.Icon;

  return (
    <div className="mt-10 border-t border-gray-200 pt-8">
      <div className="flex items-end justify-between gap-3">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Tech stack</h2>
        {accentColor ? (
          <span
            className="hidden h-2 w-16 rounded-full sm:block"
            style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
            aria-hidden
          />
        ) : null}
      </div>

      <div
        className="mt-5 overflow-hidden rounded-xl border border-gray-200/90 bg-white shadow-sm ring-1 ring-gray-100"
        style={
          accentColor
            ? {
                borderLeftWidth: 4,
                borderLeftColor: accentColor,
              }
            : undefined
        }
      >
        {table.overview && OverviewIcon ? (
          <div className="border-b border-gray-200/80 bg-gradient-to-br from-gray-50/95 via-white to-gray-50/40 px-5 py-5 sm:px-6 sm:py-5">
            <div className="flex gap-4 sm:gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-gray-200/80">
                <OverviewIcon className="h-5 w-5 text-black" aria-hidden />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-gray-500">
                  {slug === "lua" ? "Sprint overview" : "Architecture"}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-800">
                  <span className="font-semibold text-black">{table.overview.title}. </span>
                  {table.overview.detail}
                </p>
              </div>
            </div>
          </div>
        ) : null}

        <div className="grid md:grid-cols-2 md:divide-x md:divide-gray-100">
          <div className="border-b border-gray-100 md:border-b-0">
            <div
              className="border-b border-gray-200/80 px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-600 sm:px-6"
              style={accentColor ? { borderBottomColor: `${accentColor}33` } : undefined}
            >
              {table.leftHeader}
            </div>
            <div className="px-3 pb-4 pt-1 sm:px-5 sm:pb-5 sm:pt-2">
              <ColumnList items={table.frontend} />
            </div>
          </div>
          <div className="border-b-0">
            <div
              className="border-b border-gray-200/80 px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-600"
              style={accentColor ? { borderBottomColor: `${accentColor}33` } : undefined}
            >
              {table.rightHeader}
            </div>
            <div className="px-3 pb-4 pt-1 sm:px-5 sm:pb-5 sm:pt-2">
              <ColumnList items={table.backend} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
