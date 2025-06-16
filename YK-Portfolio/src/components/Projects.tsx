import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';
const projectsData = [{
  id: 1,
  title: 'E-commerce Platform',
  description: 'A modern e-commerce platform with dynamic product filtering and seamless checkout experience.',
  image: "/image.png",
  tags: ['React', 'Node.js', 'MongoDB']
}, {
  id: 2,
  title: 'Portfolio Website',
  description: 'A creative portfolio website with interactive elements and smooth animations.',
  image: "/image.png",
  tags: ['React', 'Framer Motion', 'Tailwind CSS']
}, {
  id: 3,
  title: 'Task Management App',
  description: 'A productivity app that helps users manage tasks with intuitive UI and real-time updates.',
  image: "/image.png",
  tags: ['React', 'Firebase', 'TypeScript']
}, {
  id: 4,
  title: 'Social Media Dashboard',
  description: 'A comprehensive dashboard for social media analytics with interactive charts.',
  image: "/image.png",
  tags: ['React', 'D3.js', 'Express']
}];
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const background = useTransform(x, [-100, 0, 100], ['#4ecca3', '#000000', '#4ecca3']);
  const handleDragEnd = (_, info) => {
    if (info.offset.x > 100 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (info.offset.x < -100 && activeIndex < projectsData.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };
  return <section className="py-24 px-6 md:px-12 bg-black" id="projects">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.span className="text-[#4ecca3] font-medium" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: false
        }}>
            My Work
          </motion.span>
          <AnimatedText text="Featured Projects" className="text-3xl md:text-4xl font-bold mt-2 mb-6 justify-center" once={false} />
          <motion.p className="text-gray-300 max-w-2xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: false
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }}>
            Explore some of my recent projects. Swipe or drag to navigate
            through the projects.
          </motion.p>
        </div>
        <div className="relative h-[600px] overflow-hidden" ref={constraintsRef}>
          <motion.div className="absolute inset-0" style={{
          background
        }} />
          <AnimatePresence initial={false}>
            <motion.div key={activeIndex} className="absolute inset-0 flex flex-col md:flex-row items-center p-6 md:p-10" drag="x" dragConstraints={{
            left: 0,
            right: 0
          }} dragElastic={0.2} onDragEnd={handleDragEnd} style={{
            x
          }} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.9
          }} transition={{
            duration: 0.5
          }}>
              <motion.div className="md:w-1/2 mb-8 md:mb-0" initial={{
              x: -50,
              opacity: 0
            }} animate={{
              x: 0,
              opacity: 1
            }} transition={{
              delay: 0.2,
              duration: 0.8
            }}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {projectsData[activeIndex].title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {projectsData[activeIndex].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projectsData[activeIndex].tags.map((tag, index) => <span key={index} className="px-3 py-1 bg-[#4ecca3]/20 text-[#4ecca3] rounded-full text-sm">
                      {tag}
                    </span>)}
                </div>
                <motion.button className="px-6 py-2 border border-[#4ecca3] text-[#4ecca3] rounded-full hover:bg-[#4ecca3] hover:text-black transition-colors" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  View Project
                </motion.button>
              </motion.div>
              <motion.div className="md:w-1/2 relative" initial={{
              x: 50,
              opacity: 0
            }} animate={{
              x: 0,
              opacity: 1
            }} transition={{
              delay: 0.2,
              duration: 0.8
            }}>
                <motion.div className="relative z-10" whileHover={{
                scale: 1.05,
                rotate: -2
              }} transition={{
                type: 'spring',
                stiffness: 300
              }}>
                  <img src={projectsData[activeIndex].image} alt={projectsData[activeIndex].title} className="rounded-lg shadow-2xl border border-gray-800" />
                  <div className="absolute inset-0 border-2 border-[#4ecca3] rounded-lg -m-3 z-[-1]"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
            {projectsData.map((_, index) => <motion.button key={index} className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-[#4ecca3]' : 'bg-gray-600'}`} onClick={() => setActiveIndex(index)} whileHover={{
            scale: 1.2
          }} />)}
          </div>
          <motion.div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer" onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)} whileHover={{
          scale: 1.2
        }} whileTap={{
          scale: 0.9
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.div>
          <motion.div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer" onClick={() => activeIndex < projectsData.length - 1 && setActiveIndex(activeIndex + 1)} whileHover={{
          scale: 1.2
        }} whileTap={{
          scale: 0.9
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Projects;