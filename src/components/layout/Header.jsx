import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <nav className="container mx-auto px-0 py-12">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link 
            to="/" 
            className="text-5xl font-bold inline-block text-blue-200 hover:text-white transition-colors"
          >
            B<span className="inline-block scale-x-[-1]">R</span>
          </Link>
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;