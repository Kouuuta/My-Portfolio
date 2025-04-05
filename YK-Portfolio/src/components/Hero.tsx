import React, { useEffect, useRef } from "react";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const name = nameRef.current;
    if (title && subtitle && name) {
      title.style.opacity = "0";
      subtitle.style.opacity = "0";
      title.style.transform = "translateY(20px)";
      subtitle.style.transform = "translateY(20px)";
      setTimeout(() => {
        title.style.transition = "opacity 1s ease, transform 1s ease";
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
        setTimeout(() => {
          subtitle.style.transition = "opacity 1s ease, transform 1s ease";
          subtitle.style.opacity = "1";
          subtitle.style.transform = "translateY(0)";
        }, 500);
      }, 300);
    }
  }, []);
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center px-6"
    >
      <div className="text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-800 dark:text-white"
        >
          Hi, I'm{" "}
          <span
            ref={nameRef}
            className="animate-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-900 to-green-600 dark:from-emerald-400 dark:via-emerald-400 dark:to-green-300"
          >
            Yuta Koike
          </span>
        </h1>
        <h2
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8"
        >
          <span className="typed-text"> 3rd year Computer Science Student</span>
        </h2>
        <div
          className="flex justify-center space-x-6 mb-12 opacity-0 animate-fadeIn"
          style={{
            animationDelay: "1s",
            animationFillMode: "forwards",
          }}
        >
          <a
            href="#"
            className="p-3 rounded-full border-2 border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/20"
            aria-label="GitHub"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full border-2 border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/20"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a
            href="#contact"
            className="p-3 rounded-full border-2 border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/20"
            aria-label="Email"
          >
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
        <div className="relative mt-8">
          <a
            href="#about"
            className="inline-block opacity-0 animate-fadeIn animate-bounce-slow"
            style={{
              animationDelay: "1.5s",
              animationFillMode: "forwards",
              animationIterationCount: "infinite",
              animationDuration: "3s",
            }}
            aria-label="Scroll down"
          >
            <div className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <ArrowDownIcon className="h-8 w-8 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors" />
            </div>
          </a>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div
              className="w-12 h-12 rounded-full border border-emerald-500/30 dark:border-emerald-400/30 animate-ping-slow opacity-0"
              style={{
                animationDelay: "1.8s",
                animationFillMode: "forwards",
              }}
            ></div>
            <div
              className="w-16 h-16 rounded-full border border-emerald-500/20 dark:border-emerald-400/20 animate-ping-slow opacity-0"
              style={{
                animationDelay: "2s",
                animationFillMode: "forwards",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="floating-particle left-[10%] top-[20%] bg-emerald-400/20 dark:bg-emerald-400/30 w-8 h-8"></div>
        <div className="floating-particle left-[85%] top-[15%] bg-green-400/20 dark:bg-green-400/30 w-6 h-6 animation-delay-300"></div>
        <div className="floating-particle left-[20%] top-[70%] bg-emerald-300/20 dark:bg-emerald-300/30 w-10 h-10 animation-delay-500"></div>
        <div className="floating-particle left-[75%] top-[65%] bg-green-300/20 dark:bg-green-300/30 w-12 h-12 animation-delay-700"></div>
        <div className="floating-particle left-[50%] top-[30%] bg-emerald-500/20 dark:bg-emerald-500/30 w-7 h-7 animation-delay-1000"></div>
      </div>
    </section>
  );
}
