"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileText, Search } from "lucide-react";
import { siteSearch, type SiteSearchHit } from "../../lib/siteSearch";

function flattenHits(results: ReturnType<typeof siteSearch>): SiteSearchHit[] {
  return [...results.projects, ...results.articles];
}

export default function SiteHeader() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const results = useMemo(() => siteSearch(query), [query]);
  const flat = useMemo(() => flattenHits(results), [results]);
  const hasQuery = query.trim().length > 0;
  const hasResults = flat.length > 0;

  const clearBlurTimer = useCallback(() => {
    if (blurTimer.current) {
      clearTimeout(blurTimer.current);
      blurTimer.current = null;
    }
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  const dismissAndNavigate = useCallback(
    (hit: SiteSearchHit) => {
      setQuery("");
      close();
      if (hit.external) {
        window.open(hit.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(hit.href);
      }
    },
    [close, router]
  );

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) close();
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [close]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }
    if (!open || !hasQuery || !hasResults) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1 >= flat.length ? 0 : i + 1));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? flat.length - 1 : i - 1));
      return;
    }
    if (e.key === "Enter" && activeIndex >= 0 && flat[activeIndex]) {
      e.preventDefault();
      dismissAndNavigate(flat[activeIndex]);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white" style={{ borderColor: "#e0dfdc" }}>
      <div className="mx-auto flex h-[52px] max-w-[1128px] items-center justify-center px-4">
        <div className="flex max-w-full items-center justify-center gap-4 md:gap-5">
          <Link
            href="/"
            className="flex h-[34px] min-w-[44px] shrink-0 items-center justify-center rounded-[2px] bg-[#0A66C2] px-2 text-[18px] font-black leading-none tracking-tight text-white hover:bg-[#004182]"
            aria-label="Home"
          >
            <span className="inline-flex items-baseline gap-2">
              B
              <span className="inline-block scale-x-[-1]" aria-hidden>
                R
              </span>
            </span>
          </Link>

          <div className="flex min-w-0 items-center gap-1.5">
            <div
              ref={containerRef}
              className="relative min-w-0 w-[min(320px,calc(100vw-10.5rem))]"
            >
              <div
                className={`flex items-center gap-2 rounded-sm border bg-[#edf3f8] px-2 py-1 transition-shadow ${
                  open ? "border-[#0A66C2] shadow-sm ring-1 ring-[#0A66C2]/20" : "border-transparent"
                }`}
              >
                <Search className="h-4 w-4 shrink-0 text-[#666671]" aria-hidden />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  onFocus={() => {
                    clearBlurTimer();
                    setOpen(true);
                  }}
                  onBlur={() => {
                    blurTimer.current = setTimeout(() => setOpen(false), 120);
                  }}
                  placeholder="Search projects & writing…"
                  autoComplete="off"
                  aria-autocomplete="list"
                  aria-controls="site-search-results"
                  aria-expanded={open}
                  className="min-w-0 flex-1 bg-transparent py-0.5 text-sm text-[#191919] outline-none placeholder:text-[#666671]"
                />
              </div>

              {open && (
                <div
                  id="site-search-results"
                  role="listbox"
                  aria-label="Search results"
                  className="absolute left-0 right-0 top-[calc(100%+6px)] z-[60] max-h-[min(360px,50vh)] overflow-y-auto rounded-md border bg-white shadow-lg"
                  style={{ borderColor: "#e0dfdc" }}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {!hasQuery ? (
                    <p className="px-3 py-2.5 text-xs text-gray-500">Type to search projects and articles…</p>
                  ) : !hasResults ? (
                    <p className="px-3 py-2.5 text-sm text-gray-600">No matches for &ldquo;{query.trim()}&rdquo;</p>
                  ) : (
                    <div className="py-1">
                      {results.projects.length > 0 && (
                        <div>
                          <p className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                            Projects
                          </p>
                          <ul className="pb-1">
                            {results.projects.map((hit, i) => (
                              <li key={hit.id} role="presentation">
                                <SearchHitRow
                                  hit={hit}
                                  active={activeIndex === i}
                                  onSelect={() => dismissAndNavigate(hit)}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {results.articles.length > 0 && (
                        <div>
                          <p className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                            Writing
                          </p>
                          <ul className="pb-1">
                            {results.articles.map((hit, i) => (
                              <li key={hit.id} role="presentation">
                                <SearchHitRow
                                  hit={hit}
                                  active={activeIndex === results.projects.length + i}
                                  onSelect={() => dismissAndNavigate(hit)}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-[#666671] transition-colors hover:bg-[#edf3f8] hover:text-[#191919]"
              aria-label="Resume"
            >
              <FileText className="h-[1.125rem] w-[1.125rem]" strokeWidth={2.25} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function SearchHitRow({
  hit,
  active,
  onSelect,
}: {
  hit: SiteSearchHit;
  active: boolean;
  onSelect: () => void;
}) {
  const base =
    "flex w-full cursor-pointer flex-col px-3 py-2 text-left transition-colors border-l-2 border-transparent";
  const activeCls = active ? "bg-[#edf3f8] border-l-[#0A66C2]" : "hover:bg-gray-50";

  return (
    <button type="button" className={`${base} ${activeCls}`} onClick={onSelect}>
      <span className="line-clamp-2 text-sm font-medium text-[#191919]">{hit.title}</span>
      <span className="mt-0.5 text-xs text-gray-500">
        {hit.meta}
        {hit.external ? " · Opens in new tab" : ""}
      </span>
    </button>
  );
}
