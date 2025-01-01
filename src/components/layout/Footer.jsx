import { Instagram, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-transparent py-8 mt-20">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        <motion.div 
          className="bg-gray-900/50 backdrop-blur-sm px-8 py-4 rounded-full flex gap-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="/resume.pdf" 
            target="_blank"
            className="text-blue-200 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;