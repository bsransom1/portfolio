"use client";

import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import { fadeIn, slideUp, staggerContainer } from "../lib/animations";

export default function AboutPage() {
  const skills = [
    "UI/UX Design",
    "Product Design",
    "Design Systems",
    "User Research",
    "Prototyping",
    "Frontend Development",
    "React & Next.js",
    "TypeScript",
    "TailwindCSS",
    "Figma",
    "Framer",
    "Content Strategy"
  ];

  const tools = [
    "Figma",
    "Adobe Creative Suite",
    "Framer",
    "Principle",
    "VS Code",
    "Git & GitHub"
  ];

  return (
    <main className="min-h-screen bg-transparent">
      <div className="pt-8 pb-20 px-6 max-w-4xl mx-auto md:pt-10">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-sm md:p-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={slideUp}
            className="text-5xl md:text-6xl font-semibold text-white mb-8"
          >
            About Me
          </motion.h1>
          
          <motion.div variants={slideUp} className="space-y-6 text-lg text-neutral-300 leading-relaxed mb-16">
            <p>
              I'm Braden Ransom, a multidisciplinary designer and developer passionate about creating 
              digital experiences that feel intuitive, beautiful, and purposeful.
            </p>
            
            <p>
              My work sits at the intersection of design and technology. I believe the best products 
              are built when aesthetic sensibility meets technical craftsmanship. Whether I'm designing 
              a user interface, writing code, or crafting content, I strive to bridge these disciplines.
            </p>
            
            <p>
              With a background in UX design and frontend development, I've worked on projects ranging 
              from mobile applications to design systems, always with an eye toward meaningful user outcomes 
              and sustainable solutions.
            </p>
            
            <p>
              When I'm not designing or coding, you'll find me exploring design systems, experimenting 
              with new tools, or writing about the craft of digital product development.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={slideUp} className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-white/[0.06] text-neutral-200 rounded-full text-sm font-medium hover:bg-white/[0.12] hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div variants={slideUp}>
            <h2 className="text-3xl font-semibold text-white mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 border border-white/15 text-neutral-200 rounded-full text-sm font-medium hover:border-white/40 transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

