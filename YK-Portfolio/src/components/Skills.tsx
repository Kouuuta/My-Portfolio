import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './AnimatedText';
const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const skillCategories = [{
    title: 'Development',
    skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Express', 'GraphQL']
  }, {
    title: 'Design',
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design', 'Prototyping', 'Animation']
  }, {
    title: 'Tools',
    skills: ['Git', 'Docker', 'AWS', 'Firebase', 'Jest', 'Webpack']
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };
  return <section className="py-24 px-6 md:px-12 bg-[#111]" id="skills" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.span className="text-[#4ecca3] font-medium" initial={{
          opacity: 0
        }} animate={inView ? {
          opacity: 1
        } : {
          opacity: 0
        }} transition={{
          duration: 0.5
        }}>
            My Expertise
          </motion.span>
          <AnimatedText text="Skills & Technologies" className="text-3xl md:text-4xl font-bold mt-2 mb-6 justify-center" once={false} />
          <motion.p className="text-gray-300 max-w-2xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }}>
            I've worked with a variety of technologies and tools in the web
            development world. Here's an overview of my technical skill set.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => <motion.div key={index} className="bg-black p-6 rounded-lg border border-gray-800" initial={{
          opacity: 0,
          y: 30
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          y: -5,
          boxShadow: '0 10px 30px -15px rgba(78, 204, 163, 0.2)'
        }}>
              <h3 className="text-xl font-bold mb-4 text-[#4ecca3]">
                {category.title}
              </h3>
              <motion.ul className="space-y-3" variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                {category.skills.map((skill, skillIndex) => <motion.li key={skillIndex} className="flex items-center" variants={itemVariants}>
                    <span className="w-2 h-2 bg-[#4ecca3] rounded-full mr-3"></span>
                    <span>{skill}</span>
                  </motion.li>)}
              </motion.ul>
            </motion.div>)}
        </div>
        <motion.div className="mt-20 bg-[#0c0c0c] rounded-xl p-8 relative overflow-hidden" initial={{
        opacity: 0
      }} animate={inView ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        duration: 0.7,
        delay: 0.5
      }}>
          <motion.div className="absolute top-0 right-0 w-64 h-64 bg-[#4ecca3]/10 rounded-full -translate-y-1/2 translate-x-1/2" animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3]
        }} transition={{
          duration: 8,
          repeat: Infinity
        }} />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
            <motion.button className="px-6 py-3 bg-[#4ecca3] text-black font-medium rounded-full hover:bg-[#3db892] transition-colors" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Skills;