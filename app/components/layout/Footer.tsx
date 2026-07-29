"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-transparent px-6 pb-10 pt-6"
    >
      <div className="mx-auto max-w-[1040px]">
        <p className="text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Braden Ransom
        </p>
      </div>
    </motion.footer>
  );
}
