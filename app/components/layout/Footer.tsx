"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-transparent px-6 pb-8 pt-20"
    >
      <div className="mx-auto flex max-w-7xl justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-sm font-semibold text-black"
        >
          © {new Date().getFullYear()} Braden Ransom
        </motion.p>
      </div>
    </motion.footer>
  );
}
