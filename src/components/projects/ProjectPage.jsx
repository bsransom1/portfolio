import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';
import { useEffect } from 'react'; 


function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      title: "Mental Health as a Trivariate Function",
      url: "https://medium.com/@bradyransom/mental-health-as-a-trivariate-function-bc5fd9eadf96",
      category: "Psychology",
      image: "/images/articles/mental-health.jpg" // Optional
    },
    {
      title: "Correlations between OCD & suicidal behavior",
      url: "https://medium.com/@bradyransom/correlations-between-ocd-suicidal-behavior-51d140787260",
      category: "Mental Health",
      image: "/images/articles/ocd-study.jpg"
    },
    {
      title: "20 years of an undiagnosed anxiety disorder: what I've learned",
      url: "https://medium.com/@bradyransom/20-years-of-an-undiagnosed-anxiety-disorder-what-ive-learned-7ff2a9208dfd",
      category: "Personal Experience",
      image: "/images/articles/anxiety.jpg"
    },
    {
      title: "An analysis of how the brain is affected by drugs",
      url: "https://medium.com/@bradyransom/an-analysis-of-how-the-brain-is-affected-by-drugs-53371178148b",
      category: "Neuroscience",
      image: "/images/articles/brain.jpg"
    },
    {
      title: "How do the new Covid-19 vaccines work?",
      url: "https://theoutspoken.org/2021/07/28/how-do-the-new-covid-19-vaccines-work/",
      category: "Medicine",
      image: "/images/articles/vaccine.jpg"
    },
    {
      title: "How the Remarkable Strides of Solar Energy Reflect Technological Advancement",
      url: "https://theoutspoken.org/2021/06/15/how-the-remarkable-strides-of-solar-energy-reflect-technological-advancement/",
      category: "Technology",
      image: "/images/articles/solar.jpg"
    },
    {
      title: "How Dangerous Really is Nuclear Energy?",
      url: "https://theoutspoken.org/2021/05/13/how-dangerous-really-is-nuclear-energy/",
      category: "Energy",
      image: "/images/articles/nuclear.jpg"
    },
    {
      title: "NASA's Jet Propulsion Laboratory Successful Perseverance Mars Rover Provides Greater Advancement",
      url: "https://theoutspoken.org/2021/02/19/nasas-jet-propulsion-laboratory-successful-perseverance-mars-rover-provides-greater-advancement/",
      category: "Space",
      image: "/images/articles/nasa.jpg"
    },
    {
      title: "What Is Quantum Computing And How Will We Use It?",
      url: "https://theoutspoken.org/2021/02/12/what-is-quantum-computing-and-how-will-we-use-it/",
      category: "Computing",
      image: "/images/articles/quantum.jpg"
    }
  ];

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white">Project not found</h2>
      </div>
    );
  }

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    exit: { opacity: 0, y: -20 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (project.id === 'scientific-writing') {
    return (
      <motion.article 
        className="max-w-4xl mx-auto"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <motion.header 
          className="mb-8"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-bold mb-2 text-white">{project.title}</h1>
          <div className="flex gap-4 text-gray-400">
            <span>{project.role}</span>
            <span>{project.description}</span>
          </div>
        </motion.header>
  
        <motion.div 
          className="space-y-4"
          variants={staggerChildren}
        >
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-white/95 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-6">
                  <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="px-3 py-1 bg-gray-100 rounded-full">
                        {article.category}
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.article>
    );
  }

  if (project.id === 'lua') {
    return (
      <motion.article 
        className="max-w-4xl mx-auto"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <motion.header 
          className="mb-8"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-bold mb-2 text-white">{project.title}</h1>
          <div className="flex gap-4 text-gray-400">
            <span>{project.date}</span>
            <span>{project.role}</span>
            {project.industry && <span>{project.industry}</span>}
          </div>
        </motion.header>
  
        <motion.div 
          className="aspect-video relative mb-8"
          variants={fadeIn}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </motion.div>
  
        <motion.div 
          className="space-y-16"
          variants={staggerChildren}
        >
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-700">
                A 3-month research project aimed at targeting a gap within health informatics & providing a solution. Our
                area of exploration was the lack of efficacy of digital anxiety interventions amongst college student populations.
              </p>
            </motion.div>
          </motion.section>
  
          <motion.section 
            className="grid md:grid-cols-2 gap-8"
            variants={fadeIn}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-gray-700">
                Anxiety Disorder rates amongst college students are at all-time high. The current solutions lack
                personalization & user engagement.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-gray-700">
                We created a gamified anxiety regulator & education system, drawing inspiration from
                successful platforms like Duolingo.
              </p>
            </motion.div>
          </motion.section>
  
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-4 text-white">User Research</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-6">
                We began with conducting 20 user interviews to gain insight the current successes and pain points of existing DAIs. 
                Participants used 5 of the current leading products & provided feedback on metrics like efficacy, personability, & engagement.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <img 
                  src="/images/lua//surveys/survey-1.png" 
                  alt="Survey Questions"
                  className="rounded-lg shadow-sm w-full"
                />
                <img 
                  src="/images/lua//surveys/survey-2.png" 
                  alt="Survey Results"
                  className="rounded-lg shadow-sm w-full"
                />
              </div>
            </div>
          </motion.section>
  
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-4 text-white">Data Insights</h2>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="space-y-4">
                <li>
                  <span className="font-semibold">No score greater than 7/10</span> when asked "How personable did you feel your experience was?"
                </li>
                <li>
                  <span className="font-semibold">80% selected:</span> more personalization as an area for improvement
                </li>
                <li>
                  <span className="font-semibold">60% selected:</span> gamification for new features
                </li>
              </ul>
            </motion.div>
          </motion.section>
  
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-4 text-white">Low-Fidelity Mockups</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img 
                src="/images/lua/mockups/home.png" 
                alt="Home Screen Mockup"
                className="rounded-lg shadow-sm bg-white p-2 w-full"
              />
              <img 
                src="/images/lua/mockups/progress.png" 
                alt="Progress Screen Mockup"
                className="rounded-lg shadow-sm bg-white p-2 w-full"
              />
              <img 
                src="/images/lua/mockups/sessions.png" 
                alt="Profile Screen Mockup"
                className="rounded-lg shadow-sm bg-white p-2 w-full"
              />
              <img 
                src="/images/lua/mockups/profile.png" 
                alt="Sessions Screen Mockup"
                className="rounded-lg shadow-sm bg-white p-2 w-full"
              />
            </div>
          </motion.section>
  
          <motion.section variants={fadeIn} className="mt-16">
            <h2 className="text-2xl font-bold mb-4 text-white">Product Demo</h2>
            <div className="max-w-sm mx-auto rounded-[10px] overflow-hidden">
              <video
                className="w-full rounded-[10px]"
                controls
                playsInline
              >
                <source src="/videos/lua-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.section>
        </motion.div>
      </motion.article>
    );
  }

  if (project.id === 'hallmate') {
    return (
      <motion.article 
        className="max-w-4xl mx-auto"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <motion.header 
          className="mb-8"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-bold mb-2 text-white">{project.title}</h1>
          <div className="flex gap-4 text-gray-400">
            <span>{project.date}</span>
            <span>{project.role}</span>
            {project.industry && <span>{project.industry}</span>}
          </div>
        </motion.header>
  
        <motion.div 
          className="aspect-video relative mb-8"
          variants={fadeIn}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </motion.div>
  
        <motion.div 
          className="space-y-16"
          variants={staggerChildren}
        >
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-700">
                A comprehensive mobile application designed to revolutionize dorm life at colleges. This platform aims to foster 
                stronger community connections, streamline communication, and enhance the overall residential experience for 
                college students.
              </p>
            </motion.div>
          </motion.section>
  
          <motion.section 
            className="grid md:grid-cols-2 gap-8"
            variants={fadeIn}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-gray-700">
                Current dorm communities lack effective ways to connect and communicate. Students often feel isolated 
                and disconnected from their residential community, making it difficult to build meaningful relationships 
                and take full advantage of campus life opportunities.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-gray-700">
                HallMate provides an intuitive platform that connects students within their dorm communities, 
                facilitates event planning and participation, and creates a more engaging and inclusive residential 
                experience through features like community messaging, event coordination, and resource sharing.
              </p>
            </motion.div>
          </motion.section>
  
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-4 text-white">Low-Fidelity Mockups</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img 
                src="/images/hallmate/mockups/dorm.png" 
                alt="Home Screen Mockup"
                className="rounded-lg shadow-sm bg-white p-2 w-full"
              />
              <img 
                src="/images/hallmate/mockups/onboarding.png" 
                alt="Progress Screen Mockup"
                className="rounded-lg shadow-sm bg-white p-2 w-full"
              />
              <img 
                src="/images/hallmate/mockups/profile2.png" 
                alt="Profile Screen Mockup"
                className="rounded-lg shadow-sm bg-white p-2 w-full"
              />
              <img 
                src="/images/hallmate/mockups/post.png" 
                alt="Sessions Screen Mockup"
                className="rounded-lg shadow-sm bg-white p-2 w-full"
              />
            </div>
          </motion.section>
  
          <motion.section variants={fadeIn} className="mt-16">
            <h2 className="text-2xl font-bold mb-4 text-white">Product Demo</h2>
            <div className="max-w-sm mx-auto rounded-[10px] overflow-hidden">
              <video
                className="w-full rounded-[10px]"
                controls
                playsInline
              >
                <source src="/videos/hallmate-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.section>
        </motion.div>
      </motion.article>
    );
  }

  // Default template for other projects
  return (
    <motion.article 
      className="max-w-4xl mx-auto"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <motion.header 
        className="mb-8"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold mb-2 text-white">{project.title}</h1>
        <div className="flex gap-4 text-gray-400">
          <span>{project.date}</span>
          <span>{project.role}</span>
        </div>
      </motion.header>

      <motion.div 
        className="aspect-video relative mb-8"
        variants={fadeIn}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.p 
        className="text-gray-700 bg-white p-6 rounded-lg shadow-sm"
        variants={fadeIn}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {project.description}
      </motion.p>
    </motion.article>
  );
}

export default ProjectPage;