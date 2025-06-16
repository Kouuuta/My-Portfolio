import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScroll, setLastScroll] = useState(0);
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (Math.abs(currentScroll - lastScroll) > 10) {
        if (currentScroll > lastScroll && currentScroll > 1000) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        setLastScroll(currentScroll);
      }
    };

    if (localStorage.getItem("darkMode") === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    {
      title: "Services",
      badge: "13",
      dropdown: [
        {
          title: "Web Design",
          description: "Deliver your business to a wider audience",
        },
        {
          title: "Craft CMS",
          description: "The most reliable way to build a website",
        },
        { title: "Branding", description: "Creating brands you're proud of" },
        { title: "SEO", description: "Get your brand seen online" },
        { title: "Shopify", description: "Custom Shopify store in 4 weeks" },
      ],
    },
    { title: "Work" },
    {
      title: "About",
      dropdown: [
        {
          title: "About us",
          description: "An award winning agency in Manchester",
        },
        { title: "Meet the Team", description: "Putting faces to names" },
        { title: "Culture", description: "How we do things around here" },
        { title: "Testimonials", description: "What our clients say about us" },
      ],
    },
    { title: "Blog" },
    { title: "Contact" },
  ];

  return (
    <motion.header
      className={`fixed top-4 left-0 w-full z-50 transition-all duration-500 ease-out
        ${
          scrollDirection === "down" && lastScroll > 200
            ? "-translate-y-full"
            : "translate-y-0"
        }
        font-['Oldschool_Grotesk',ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,'Noto_Sans',sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji']`}
      initial={false}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <motion.div
        className={`mx-auto transition-all duration-700 ease-out ${
          scrolled ? "max-w-4xl mt-4 px-4" : "max-w-full px-0"
        }`}
        layout
      >
        <motion.div
          className={`relative flex items-center justify-between h-16 transition-all duration-700 ease-out ${
            scrolled
              ? "bg-black/80 backdrop-blur-xl rounded-full px-6 shadow-2xl border border-white/10"
              : "bg-transparent px-6"
          } ${darkMode ? "text-white" : "text-gray-800"}`}
          layout
        >
          {/* Logo */}
          <motion.div className="flex-shrink-0 z-10" layout>
            <a href="/" className="transition-colors duration-300">
              <span className="sr-only">Shape Logo</span>
              <div className="text-2xl font-bold">
                YK<span className="text-[#4ecca3]">.</span>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav className="hidden lg:flex items-center space-x-8" layout>
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.badge && (
                  <motion.div
                    className="absolute -top-2 -right-3 bg-[#4ecca3] text-black text-xs rounded-full px-2 py-0.5 font-medium z-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.badge}
                  </motion.div>
                )}

                <motion.a
                  href={`/${item.title.toLowerCase()}`}
                  className={`relative font-medium transition-colors duration-300 hover:text-[#4ecca3] ${
                    darkMode
                      ? "text-white hover:text-[#4ecca3]"
                      : "text-gray-700 hover:text-[#4ecca3]"
                  }`}
                  onMouseEnter={() =>
                    setActiveDropdown(item.dropdown ? index : null)
                  }
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {item.title}
                </motion.a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === index && (
                    <motion.div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 min-w-[300px] border border-gray-100 dark:border-gray-800">
                        <div className="w-3 h-3 bg-white dark:bg-gray-900 absolute -top-1.5 left-1/2 transform -translate-x-1/2 rotate-45 border-l border-t border-gray-100 dark:border-gray-800" />
                        {item.dropdown.map((dropdownItem, idx) => (
                          <motion.a
                            key={idx}
                            href={`/${dropdownItem.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <div className="font-semibold text-gray-900 dark:text-white group-hover:text-[#4ecca3] transition-colors">
                              {dropdownItem.title}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {dropdownItem.description}
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.nav>

          {/* Right side controls */}
          <motion.div className="flex items-center space-x-3 z-10" layout>
            {/* Dark mode toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode
                  ? "text-yellow-400 hover:bg-white/10"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setMenu(!menu)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-current rounded-full"
                  animate={{
                    rotate: menu ? 45 : 0,
                    translateY: menu ? 10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-current rounded-full"
                  animate={{ opacity: menu ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-current rounded-full"
                  animate={{
                    rotate: menu ? -45 : 0,
                    translateY: menu ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            className={`lg:hidden absolute top-full left-0 w-full mt-2 px-4`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className={`rounded-2xl p-6 ${
                scrolled
                  ? "bg-black/90 backdrop-blur-xl border border-white/10"
                  : "bg-white dark:bg-gray-900"
              } shadow-2xl`}
            >
              <nav className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={`/${item.title.toLowerCase()}`}
                      className={`block text-xl font-medium py-2 transition-colors ${
                        darkMode
                          ? "text-white hover:text-[#4ecca3]"
                          : "text-gray-900 hover:text-[#4ecca3]"
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      {item.title}
                      {item.badge && (
                        <span className="ml-3 text-sm bg-[#4ecca3] text-black px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <a
                    href="/start-project"
                    className="inline-flex items-center px-6 py-3 bg-[#4ecca3] text-black rounded-full font-semibold"
                    onClick={() => setMenu(false)}
                  >
                    Start a project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
