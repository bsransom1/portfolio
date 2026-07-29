"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { fadeIn, slideUp } from "./lib/animations";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center max-w-2xl"
        >
          <motion.h1
            variants={slideUp}
            className="text-9xl font-bold text-white mb-4"
          >
            404
          </motion.h1>
          
          <motion.h2
            variants={slideUp}
            className="text-3xl md:text-4xl font-semibold text-white mb-6"
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            variants={slideUp}
            className="text-lg text-neutral-400 mb-8"
          >
            Sorry, the page you're looking for doesn't exist or has been moved.
          </motion.p>
          
          <motion.div variants={slideUp}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

