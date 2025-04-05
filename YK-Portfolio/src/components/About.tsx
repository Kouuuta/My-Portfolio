import { useEffect, useRef } from "react";
import { UserIcon, CodeIcon, BookOpenIcon, BriefcaseIcon } from "lucide-react";
export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
  return (
    <section
      id="about"
      className="py-20 bg-#111827 dark:bg-emerald-900/20 backdrop-blur-sm w-full"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div
            ref={imageRef}
            className="md:w-1/2 mb-10 md:mb-0 opacity-0 translate-y-10 transition-all duration-1000"
          >
            <div className="relative mx-auto max-w-lg">
              <div className="relative">
                <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full bg-emerald-400/20 rounded-3xl transform rotate-6"></div>
                <div className="absolute -z-10 -top-8 -left-8 w-full h-full bg-emerald-600/20 rounded-3xl transform -rotate-6"></div>
                <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden border-4 border-emerald-500/50 dark:border-emerald-400/50 shadow-2xl mx-auto transform transition-all duration-700 hover:scale-[1.02] hover:shadow-emerald-500/30 dark:hover:shadow-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-emerald-600/20">
                  <img
                    src="Yuta.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-emerald-500 dark:bg-emerald-400 p-5 rounded-full shadow-lg animate-pulse backdrop-blur-md">
                  <UserIcon className="h-10 w-10 text-white dark:text-emerald-900" />
                </div>
                <div className="absolute -top-6 -left-6 p-4 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-xl backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-emerald-400 to-green-500 p-3 rounded-full">
                    <CodeIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-xl animate-bounce-slow backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-2 rounded-full">
                    <BookOpenIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/4 -right-8 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-xl animate-bounce-slow backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-400 p-2 rounded-full">
                    <BriefcaseIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={sectionRef}
            className="md:w-1/2 opacity-0 translate-y-10 transition-all duration-1000"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-emerald-900 dark:text-emerald-100">
              About{" "}
              <span className="animate-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-600 to-green-500 dark:from-emerald-300 dark:via-emerald-400 dark:to-green-400">
                Me
              </span>
            </h2>
            <div className="space-y-6 backdrop-blur-sm bg-white/40 dark:bg-gray-800/40 rounded-2xl p-6 shadow-xl">
              <p className="text-lg text-emerald-900 dark:text-emerald-100 leading-relaxed">
                I'm{" "}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Yuta Koike
                </span>
              </p>
              <p className="text-lg text-emerald-800 dark:text-emerald-200 leading-relaxed"></p>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 text-emerald-800 dark:text-emerald-200">
                What drives me
              </h3>
              <div className="flex flex-wrap gap-4">
                {["Fast Learner", "Team Player", "Creative Thinker"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="flex items-center px-5 py-3 bg-emerald-100/50 dark:bg-emerald-900/50 backdrop-blur-sm rounded-full text-emerald-800 dark:text-emerald-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/20"
                    >
                      <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-3"></span>
                      <span className="text-sm md:text-base font-medium">
                        {skill}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
