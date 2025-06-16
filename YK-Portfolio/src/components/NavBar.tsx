import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScroll, setLastScroll] = useState(0);
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (currentScroll > lastScroll && currentScroll > 400) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScroll(currentScroll);
    };
    // Check for dark mode preference
    if (localStorage.darkMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.darkMode = !darkMode;
    document.documentElement.classList.toggle('dark');
  };
  const navItems = [{
    title: 'Services',
    badge: '13',
    dropdown: [{
      title: 'Web Design',
      description: 'Deliver your business to a wider audience'
    }, {
      title: 'Craft CMS',
      description: 'The most reliable way to build a website'
    }, {
      title: 'Branding',
      description: "Creating brands you're proud of"
    }, {
      title: 'SEO',
      description: 'Get your brand seen online'
    }, {
      title: 'Shopify',
      description: 'Custom Shopify store in 4 weeks'
    }]
  }, {
    title: 'Work'
  }, {
    title: 'About',
    dropdown: [{
      title: 'About us',
      description: 'An award winning agency in Manchester'
    }, {
      title: 'Meet the Team',
      description: 'Putting faces to names'
    }, {
      title: 'Culture',
      description: 'How we do things around here'
    }, {
      title: 'Testimonials',
      description: 'What our clients say about us'
    }]
  }, {
    title: 'Blog'
  }, {
    title: 'Contact'
  }];
  return <header className={`fixed top-0 left-0 w-full flex justify-center z-30 pointer-events-auto transition-all duration-300
      ${menu ? 'rounded-2xl' : 'rounded-3xl'} 
      ${scrolled ? 'bg-black/90 backdrop-blur-md' : ''} 
      ${scrollDirection === 'down' && lastScroll > 400 ? '-translate-y-16 lg:-translate-y-28' : 'translate-y-0'}
      font-['Oldschool_Grotesk',ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,'Noto_Sans',sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji']`}>
      <div className="w-full transition-transform transform duration-1000">
        <div className="ml-2 relative z-10 lg:ml-4 lg:mr-6">
          <a href="/" className={`transition-none ${darkMode ? 'text-white' : 'text-gray-600'}`}>
            <span className="sr-only">Logo</span>
            <div className="text-xl font-bold">
              <span className="text-[#4ecca3]">Y</span>K
            </div>
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden lg:inline-flex">
          <ul className="flex space-x-7 xl:space-x-10">
            {navItems.map((item, index) => <li key={index} className="relative">
                {item.badge && <div className="absolute -top-3 -right-4 pointer-events-none rounded-full z-20 bg-[#4ecca3] text-gray-600 text-xs pt-px px-1.5 leading-tighter tracking-tight">
                    {item.badge}
                  </div>}
                <motion.a href={`/${item.title.toLowerCase()}`} className={`font-light leading-tight transition-none ${darkMode ? 'text-white' : 'text-gray-600'}`} onMouseEnter={() => setActiveDropdown(item.dropdown ? index : null)} whileHover={{
              scale: 1.05
            }}>
                  {item.title}
                </motion.a>
                {item.dropdown && activeDropdown === index && <div className="absolute top-10 pt-8 left-2/3 z-50 transform -translate-x-1/3">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 min-w-[280px]">
                      <div className="w-3 h-3 bg-white dark:bg-gray-800 absolute -top-1.5 left-1/3 -translate-x-1/2 rotate-45" />
                      {item.dropdown.map((dropdownItem, idx) => <motion.a key={idx} href={`/${dropdownItem.title.toLowerCase().replace(/\s+/g, '-')}`} className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: idx * 0.1
                }}>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {dropdownItem.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {dropdownItem.description}
                          </div>
                        </motion.a>)}
                    </div>
                  </div>}
              </li>)}
          </ul>
        </nav>
        {/* Right side buttons */}
        <div className="pr-2 inline-flex items-center relative z-10 lg:space-x-2">
          {/* Dark mode toggle */}
          <button onClick={toggleDarkMode} className={`inline-flex w-10 h-12 items-center justify-center transition-none ${darkMode ? 'text-white' : 'text-gray-600'}`}>
            {darkMode ? <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M280 24V0h-48v112h48V24zm157 84.9l17-17L420 58l-17 17-45.3 45.3-17 17 33.9 33.9 17-17 45.2 45.2 17 17 33.9-34-17-17-45.3-45.3zM108.9 75L92 58 58 92l17 17 45.3 45.3 17 17 33.9-33.9-17-17L108.9 75zM24 232H0v48h112v-48H24zm400 0h-24v48h112v-48h-88zM154.2 391.8l17-17-33.9-33.9-17 17L75 403.1 58 420l34 34 17-17 45.2 45.2 17 17 33.9-34-17-17-45.3-45.3zM280 424v-24h-48v112h48v-88zm-24-56a112 112 0 100-224 112 112 0 100 224z" />
              </svg> : <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M287.6 41.2c-82.8 21.2-144 96.5-144 186 0 106 85.8 192 191.5 192 16.8 0 33.1-2.2 48.6-6.2-40.6 41.4-97.2 67-159.8 67C100.3 480 0 379.7 0 256S100.3 32 224 32c22.1 0 43.5 3.2 63.6 9.2z" />
              </svg>}
          </button>
          {/* Mobile menu button */}
          <button onClick={() => setMenu(!menu)} className="lg:hidden inline-flex items-center justify-center w-10 h-12">
            <div className="flex w-5 h-3.5 flex-col items-start justify-between">
              <motion.div className="w-full h-0.5 bg-current" animate={{
              rotate: menu ? 45 : 0,
              translateY: menu ? 6 : 0
            }} />
              <motion.div className="w-full h-0.5 bg-current" animate={{
              opacity: menu ? 0 : 1
            }} />
              <motion.div className="w-full h-0.5 bg-current" animate={{
              rotate: menu ? -45 : 0,
              translateY: menu ? -6 : 0
            }} />
            </div>
          </button>
          {/* Start project button (desktop) */}
          <div className="hidden lg:flex">
            <motion.a href="/start-project" className="inline-flex items-center px-5 py-2 bg-[#4ecca3] text-gray-900 rounded-full font-medium" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              Start a project
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
              </svg>
            </motion.a>
          </div>
        </div>
        {/* Mobile menu */}
        {menu && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} className="w-full lg:hidden px-4 py-6">
            <ul className="space-y-4">
              {navItems.map((item, index) => <motion.li key={index} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.1
          }}>
                  <a href={`/${item.title.toLowerCase()}`} className="text-2xl font-light">
                    {item.title}
                    {item.badge && <span className="ml-2 text-sm bg-[#4ecca3] text-gray-900 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>}
                  </a>
                </motion.li>)}
              <motion.li initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: navItems.length * 0.1
          }}>
                <a href="/start-project" className="inline-flex items-center px-5 py-2 bg-[#4ecca3] text-gray-900 rounded-full font-medium mt-4">
                  Start a project
                  <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                  </svg>
                </a>
              </motion.li>
            </ul>
          </motion.div>}
      </div>
    </header>;
};
export default Navbar;