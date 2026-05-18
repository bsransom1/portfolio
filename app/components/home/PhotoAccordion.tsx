"use client";

import { motion, useAnimationFrame, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const photos = [
  "/photos/photo1.jpeg",
  "/photos/photo8.jpeg",
  "/photos/photo3.jpeg",
  "/photos/photo4.jpeg",
  "/photos/photo5.jpeg",
  "/photos/photo6.jpeg",
  "/photos/photo7.jpeg",
];

const SPEED = 0.05;
const CARD_W = 200;
const GAP = 16;
const CARD_STEP = CARD_W + GAP;

const DEFAULT_SECTION = "pt-8 pb-16 md:pt-12 md:pb-20";

interface PhotoAccordionProps {
  sectionClassName?: string;
}

export default function PhotoAccordion({ sectionClassName }: PhotoAccordionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useAnimationFrame((t) => {
    const el = trackRef.current;
    if (!el) return;

    const oneSetWidth = CARD_STEP * photos.length;

    const progress = (t * SPEED) % oneSetWidth;
    const x = -oneSetWidth + progress;

    el.style.transform = `translateX(${x}px)`;
  });

  const PhotoTile = ({ src, i }: { src: string; i: number }) => (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={() => setSelectedPhoto(src)}
      className="relative shrink-0 w-[200px] h-[280px] overflow-hidden cursor-pointer rounded-xl border border-gray-200 bg-white shadow-sm mr-4"
    >
      <Image src={src} alt={`Photo ${i + 1}`} fill className="object-cover" sizes="200px" />
    </motion.div>
  );

  const multiplied = [...photos, ...photos, ...photos, ...photos, ...photos];

  return (
    <>
      <section className={sectionClassName ?? DEFAULT_SECTION} aria-label="Photo gallery">
        <div className="mx-auto max-w-[1128px] px-4">
        </div>
        <div className="relative overflow-hidden bg-transparent">
          <div ref={trackRef} className="flex items-center will-change-transform py-3">
            {multiplied.map((src, i) => (
              <PhotoTile key={`${src}-${i}`} src={src} i={i % photos.length} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[400px] h-[570px] overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg"
            >
              <Image
                src={selectedPhoto}
                alt="Enlarged photo"
                fill
                className="object-cover"
                sizes="400px"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
