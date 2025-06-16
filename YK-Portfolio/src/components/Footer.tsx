import React from 'react';
import { motion } from 'framer-motion';
const Footer = () => {
  return <footer className="py-8 px-6 md:px-12 bg-black border-t border-gray-800">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div className="text-2xl font-bold mb-4 md:mb-0" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }}>
            <span className="text-[#4ecca3]">Y</span>K
          </motion.div>
          <motion.div className="flex flex-wrap justify-center space-x-6" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => <motion.a href={`#${item.toLowerCase()}`} key={index} className="hover:text-[#4ecca3] transition-colors" whileHover={{
            scale: 1.1
          }}>
                  {item}
                </motion.a>)}
          </motion.div>
        </div>
        <motion.div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3
      }}>
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Yuta Koike. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed & Developed with <span className="text-[#4ecca3]">♥</span>
          </p>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;