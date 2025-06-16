import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './AnimatedText';
const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-[#111] -z-10" />
      {/* Animated circles */}
      <motion.div className="absolute w-96 h-96 rounded-full bg-[#4ecca3]/10 -z-10" animate={{
      x: [0, 50, -50, 0],
      y: [0, -50, 50, 0],
      scale: [1, 1.1, 0.9, 1]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: 'reverse'
    }} style={{
      top: '20%',
      left: '10%'
    }} />
      <motion.div className="absolute w-64 h-64 rounded-full bg-[#4ecca3]/5 -z-10" animate={{
      x: [0, -30, 30, 0],
      y: [0, 30, -30, 0],
      scale: [1, 0.9, 1.1, 1]
    }} transition={{
      duration: 15,
      repeat: Infinity,
      repeatType: 'reverse'
    }} style={{
      bottom: '15%',
      right: '15%'
    }} />
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={controls} variants={{
        visible: {
          opacity: 1,
          y: 0
        },
        hidden: {
          opacity: 0,
          y: 20
        }
      }} transition={{
        duration: 0.5
      }} className="mb-4">
          <span className="text-[#4ecca3] font-medium">Hello, I'm</span>
        </motion.div>
        <div className="mb-6">
          <AnimatedText text="Yuta Koike" className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-2" />
          <AnimatedText text="Building digital experiences that matter." className="text-xl md:text-2xl text-gray-300 mt-4" />
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={controls} variants={{
        visible: {
          opacity: 1,
          y: 0
        },
        hidden: {
          opacity: 0,
          y: 20
        }
      }} transition={{
        duration: 0.5,
        delay: 0.6
      }} className="mt-12">
          <motion.button className="px-8 py-3 bg-[#4ecca3] text-black font-medium rounded-full mr-4 hover:bg-[#3db892] transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            View Projects
          </motion.button>
          <motion.button className="px-8 py-3 border border-white rounded-full font-medium hover:bg-white/5 transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            Contact Me
          </motion.button>
        </motion.div>
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop'
      }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </section>;
};
export default Hero;