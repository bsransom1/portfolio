import { motion, useAnimationControls } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect } from 'react';
import ProjectGrid from './home/ProjectGrid';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sentence = "Hi! I'm Brady, a product designer & scientific communicator.";
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.02
      }
    });
  }, [controls]);

  const isInPhrase = (index, char) => {
    const productDesignerStart = sentence.indexOf('product');
    const productDesignerEnd = productDesignerStart + 'product designer'.length;
    const scientificStart = sentence.indexOf('scientific');
    const scientificEnd = scientificStart + 'scientific communicator'.length;

    return (index >= productDesignerStart && index < productDesignerEnd) ||
           (index >= scientificStart && index < scientificEnd);
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center max-w-4xl mx-auto text-center space-y-12 -mt-20">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={controls}
        >
          {sentence.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.2,
                delay: index * 0.03
              }}
              className={isInPhrase(index, char) ? 'text-blue-200' : 'inherit'}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.a 
          href="#projects"
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 text-lg text-white/80 hover:text-blue-200 group cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          whileHover={{ y: 5 }}
        >
          View Projects 
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.a>
      </section>
      <div id="projects">
        <ProjectGrid />
      </div>
    </>
  );
}

export default Home;