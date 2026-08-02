"use client";

import { motion, useAnimationFrame, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/** Personal photos — scrolls left → right. */
const PHOTOS_LTR = [
  "/photos/photo1.jpeg",
  "/photos/photo9.png",
  "/photos/photo2.jpeg",
  "/photos/photo10.png",
  "/photos/photo3.jpeg",
  "/photos/photo11.png",
  "/photos/photo4.jpeg",
  "/photos/photo12.png",
  "/photos/photo5.jpeg",
  "/photos/photo13.png",
  "/photos/photo6.jpeg",
  "/photos/photo14.png",
  "/photos/photo7.jpeg",
  "/photos/photo8.jpeg",
];

/** Travel / nature set — scrolls right → left. */
const PHOTOS_RTL = [
  "/photos/travel/photo9.png",
  "/photos/travel/photo10.png",
  "/photos/travel/photo11.png",
  "/photos/travel/photo12.png",
  "/photos/travel/photo13.png",
  "/photos/travel/photo14.png",
  "/photos/travel/photo15.png",
  "/photos/travel/photo16.png",
  "/photos/travel/photo17.png",
];

const SPEED = 0.05;
const CARD_W = 200;
const GAP = 16;
const CARD_STEP = CARD_W + GAP;

function MarqueeRow({
  photos,
  direction,
  onSelect,
}: {
  photos: string[];
  direction: "ltr" | "rtl";
  onSelect: (photos: string[], index: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    const el = trackRef.current;
    if (!el) return;

    const oneSetWidth = CARD_STEP * photos.length;
    const progress = (t * SPEED) % oneSetWidth;
    const x = direction === "ltr" ? -oneSetWidth + progress : -progress;

    el.style.transform = `translateX(${x}px)`;
  });

  const multiplied = [...photos, ...photos, ...photos, ...photos, ...photos];

  return (
    <div className="relative overflow-hidden bg-transparent">
      <div ref={trackRef} className="flex items-center py-3 will-change-transform">
        {multiplied.map((src, i) => {
          const photoIndex = i % photos.length;
          return (
            <motion.div
              key={`${src}-${i}`}
              whileHover={{ y: -4 }}
              onClick={() => onSelect(photos, photoIndex)}
              className="relative mr-4 h-[280px] w-[200px] shrink-0 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
            >
              <Image
                src={src}
                alt={`Photo ${photoIndex + 1}`}
                fill
                className="object-cover"
                sizes="200px"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function PhotoGallery() {
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
      <section className="pt-24 pb-2 md:pt-32 md:pb-3" aria-label="Photo gallery">
        <div className="space-y-2">
          <MarqueeRow photos={PHOTOS_LTR} direction="ltr" onSelect={openGallery} />
          <MarqueeRow photos={PHOTOS_RTL} direction="rtl" onSelect={openGallery} />
        </div>
      </section>

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
              className="relative h-[570px] w-[400px] max-w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-2xl"
            >
              <Image
                src={current}
                alt="Enlarged photo"
                fill
                className="object-cover"
                sizes="400px"
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
