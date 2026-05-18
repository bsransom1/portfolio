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
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={slideUp}
            className="text-5xl md:text-6xl font-semibold text-black mb-8"
          >
            Get in Touch
          </motion.h1>
          
          <motion.p 
            variants={slideUp}
            className="text-xl text-gray-700 leading-relaxed mb-16"
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
                  className="group flex items-center gap-6 p-6 border border-gray-200 rounded-2xl hover:border-black transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-coral group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">{link.name}</h3>
                    <p className="text-gray-600 group-hover:text-black transition-colors">
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
            className="mt-16 p-8 bg-gray-50 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold text-black mb-4">Send a Message</h2>
            <p className="text-gray-600 mb-6">
              Or use the form below to send me a direct message.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-coral transition-colors"
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

