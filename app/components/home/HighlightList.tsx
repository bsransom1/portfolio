"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, CornerDownRight, X } from "lucide-react";
import {
  EDUCATION_HEADER,
  PREVIOUSLY_HIGHLIGHTS,
  type Highlight,
  type HighlightSegment,
} from "../../lib/homeHighlights";

function SegmentSpan({
  seg,
  onPhotoClick,
}: {
  seg: HighlightSegment;
  onPhotoClick?: (gallery: string[], startIndex: number) => void;
}) {
  if (seg.kind === "text") {
    return <span>{seg.value}</span>;
  }

  if (seg.kind === "photo") {
    const gallery = seg.gallery?.length ? seg.gallery : [seg.src];
    return (
      <span className="ml-1 inline-flex items-center -space-x-2">
        {gallery.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onPhotoClick?.([src], 0);
            }}
            style={{ zIndex: gallery.length - i }}
            className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/20 shadow-sm transition-transform hover:z-20 hover:scale-110 hover:border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:h-10 md:w-10"
            aria-label={`View ${seg.alt} photo ${i + 1}`}
          >
            <Image src={src} alt={`${seg.alt} ${i + 1}`} fill className="object-cover" sizes="40px" />
          </button>
        ))}
      </span>
    );
  }

  const sizeClass = seg.emblem
    ? seg.wide
      ? "h-[0.9em] w-auto object-contain"
      : "h-[1.15em] w-[1.15em] rounded-md object-cover"
    : "h-[1.35em] w-auto object-contain";

  const img = (
    <span className="inline-flex shrink-0 overflow-hidden rounded-md">
      <img src={seg.src} alt={seg.alt} className={sizeClass} decoding="async" />
    </span>
  );

  const mark = (
    <span className="inline-flex items-center gap-1.5">
      {img}
      {seg.label ? (
        <span className="font-semibold text-white">{seg.label}</span>
      ) : null}
    </span>
  );

  if (seg.href) {
    return (
      <a
        href={seg.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:opacity-90"
        aria-label={seg.alt}
        onClick={(e) => e.stopPropagation()}
      >
        {mark}
      </a>
    );
  }

  return mark;
}

function HighlightRow({
  item,
  onPhotoClick,
}: {
  item: Highlight;
  onPhotoClick: (gallery: string[], startIndex: number) => void;
}) {
  return (
    <li className="flex items-center gap-3 text-base text-neutral-300 md:text-lg">
      <CornerDownRight className="h-4 w-4 shrink-0 text-neutral-600 md:h-5 md:w-5" aria-hidden />
      <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1.5">
        {item.segments.map((seg, i) => (
          <SegmentSpan key={i} seg={seg} onPhotoClick={onPhotoClick} />
        ))}
      </span>
    </li>
  );
}

export default function HighlightList() {
  const [gallery, setGallery] = useState<string[] | null>(null);
  const [index, setIndex] = useState(0);

  const openGallery = (photos: string[], startIndex: number) => {
    setGallery(photos);
    setIndex(startIndex);
  };

  const close = () => setGallery(null);

  const prev = () => {
    if (!gallery) return;
    setIndex((i) => (i <= 0 ? gallery.length - 1 : i - 1));
  };

  const next = () => {
    if (!gallery) return;
    setIndex((i) => (i + 1 >= gallery.length ? 0 : i + 1));
  };

  const current = gallery?.[index] ?? null;
  const multi = (gallery?.length ?? 0) > 1;

  return (
    <>
      <div className="mt-12 max-w-full space-y-8 text-left">
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xl text-neutral-300 md:gap-x-5 md:text-2xl">
            {EDUCATION_HEADER.map((seg, i) => (
              <SegmentSpan key={i} seg={seg} />
            ))}
          </p>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 md:text-sm">
              Previously
            </p>
            <ul className="space-y-3.5">
              {PREVIOUSLY_HIGHLIGHTS.map((item) => (
                <HighlightRow key={item.id} item={item} onPhotoClick={openGallery} />
              ))}
            </ul>
          </div>
        </div>

      <AnimatePresence>
        {current && gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-8"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {multi ? (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-8"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-16"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            ) : null}

            <motion.div
              key={current}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[min(80vh,640px)] w-[min(92vw,900px)] overflow-hidden"
            >
              <Image
                src={current}
                alt="Enlarged photo"
                fill
                className="object-contain"
                sizes="900px"
                priority
              />
            </motion.div>

            {multi ? (
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-neutral-400">
                {index + 1} / {gallery.length}
              </p>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
