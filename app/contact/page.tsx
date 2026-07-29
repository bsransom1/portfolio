"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Footer from "../components/layout/Footer";
import { fadeIn, slideUp, staggerContainer } from "../lib/animations";

export default function ContactPage() {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:bsransom@uci.edu",
      icon: Mail,
      label: "bsransom@uci.edu"
    },
    {
      name: "GitHub",
      href: "https://github.com/bsransom1",
      icon: Github,
      label: "github.com/bsransom1"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/brady-ransom/",
      icon: Linkedin,
      label: "linkedin.com/in/brady-ransom"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/bradenransom",
      icon: Twitter,
      label: "@bradysransom"
    }
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
            Get in Touch
          </motion.h1>
          
          <motion.p 
            variants={slideUp}
            className="text-xl text-neutral-300 leading-relaxed mb-16"
          >
            I'm always interested in hearing about new projects, creative ideas, 
            or opportunities to collaborate. Feel free to reach out through any of 
            the channels below.
          </motion.p>

          {/* Social Links */}
          <motion.div variants={slideUp} className="space-y-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-6 p-6 border border-white/10 rounded-2xl hover:border-white/30 transition-all hover:bg-white/[0.03]"
                >
                  <div className="w-12 h-12 rounded-full bg-white/[0.06] text-neutral-200 flex items-center justify-center group-hover:bg-white/[0.12] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{link.name}</h3>
                    <p className="text-neutral-400 group-hover:text-white transition-colors">
                      {link.label}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div 
            variants={slideUp}
            className="mt-16 p-8 bg-white/[0.03] border border-white/10 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Send a Message</h2>
            <p className="text-neutral-400 mb-6">
              Or use the form below to send me a direct message.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/[0.04] text-white placeholder:text-neutral-500 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/[0.04] text-white placeholder:text-neutral-500 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/[0.04] text-white placeholder:text-neutral-500 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

