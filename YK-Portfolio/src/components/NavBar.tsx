import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 transition-all duration-300 hover:scale-105">
          YK
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
              {link.name}
            </a>)}
        </div>
        <button onClick={toggleMenu} className="md:hidden text-gray-700 dark:text-gray-200" aria-label="Toggle menu">
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 py-2" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>)}
          </div>
        </div>}
    </nav>;
}