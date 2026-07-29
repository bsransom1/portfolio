"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Footer from "../components/layout/Footer";
import { articles } from "../lib/articles";

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Breadcrumb */}
      <div className="pt-8 pb-8 px-6 max-w-7xl mx-auto md:pt-10">
        <Link 
          href="/#work" 
          className="text-sm text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      {/* Articles */}
      <div className="pb-20 px-6 max-w-4xl mx-auto">
        <div className="space-y-4">
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block group"
            >
              <div className="bg-white/[0.03] rounded-xl p-4 border border-white/10 flex items-center gap-4 hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300">
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1 group-hover:opacity-70 transition-opacity">
                    {article.title}
                  </h3>
                  <p className="text-xs text-neutral-500 uppercase tracking-wide">
                    {article.category}
                  </p>
                </div>

                {/* External Link Icon */}
                <div className="flex-shrink-0">
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

