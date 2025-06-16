import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './AnimatedText';
const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });
  const contactInfo = [{
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>,
    text: 'yuta.koike@example.com',
    link: 'mailto:yuta.koike@example.com'
  }, {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>,
    text: '+81 90 1234 5678',
    link: 'tel:+81901234567'
  }, {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>,
    text: 'Tokyo, Japan',
    link: '#'
  }];
  const socialLinks = [{
    name: 'GitHub',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
  }, {
    name: 'LinkedIn',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
  }, {
    name: 'Twitter',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
  }, {
    name: 'Dribbble',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
        </svg>
  }];
  return <section className="py-24 px-6 md:px-12 bg-[#111]" id="contact" ref={ref}>
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
            Get in Touch
          </motion.span>
          <AnimatedText text="Contact Me" className="text-3xl md:text-4xl font-bold mt-2 mb-6 justify-center" once={false} />
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
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out through any of the following
            channels.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => <motion.a href={item.link} key={index} className="bg-black p-6 rounded-lg border border-gray-800 flex flex-col items-center text-center" initial={{
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
              <motion.div className="w-12 h-12 bg-[#4ecca3]/10 rounded-full flex items-center justify-center text-[#4ecca3] mb-4" whileHover={{
            scale: 1.1,
            backgroundColor: 'rgba(78, 204, 163, 0.2)'
          }}>
                {item.icon}
              </motion.div>
              <p>{item.text}</p>
            </motion.a>)}
        </div>
        <motion.div className="flex justify-center space-x-6" initial={{
        opacity: 0
      }} animate={inView ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        duration: 0.7,
        delay: 0.5
      }}>
          {socialLinks.map((link, index) => <motion.a href="#" key={index} className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-gray-800" whileHover={{
          scale: 1.1,
          backgroundColor: '#4ecca3',
          color: '#000',
          borderColor: '#4ecca3'
        }} whileTap={{
          scale: 0.95
        }}>
              {link.icon}
            </motion.a>)}
        </motion.div>
      </div>
    </section>;
};
export default Contact;