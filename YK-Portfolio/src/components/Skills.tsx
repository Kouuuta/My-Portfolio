import React, { useEffect, useRef } from "react";
import { CodeIcon, ServerIcon, DatabaseIcon, BrainIcon } from "lucide-react";
export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    skillRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      skillRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  const skills = [
    {
      category: "Frontend",
      icon: (
        <CodeIcon className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />
      ),
      items: [
        {
          name: "React",
          level: 90,
        },
        {
          name: "JavaScript",
          level: 85,
        },
        {
          name: "HTML/CSS",
          level: 95,
        },
        {
          name: "TypeScript",
          level: 80,
        },
      ],
    },
    {
      category: "Backend",
      icon: (
        <ServerIcon className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />
      ),
      items: [
        {
          name: "Node.js",
          level: 85,
        },
        {
          name: "Express",
          level: 80,
        },
        {
          name: "Python",
          level: 75,
        },
        {
          name: "Java",
          level: 70,
        },
      ],
    },
    {
      category: "Database",
      icon: (
        <DatabaseIcon className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />
      ),
      items: [
        {
          name: "MongoDB",
          level: 85,
        },
        {
          name: "MySQL",
          level: 80,
        },
        {
          name: "PostgreSQL",
          level: 75,
        },
        {
          name: "Firebase",
          level: 85,
        },
      ],
    },
    {
      category: "Other",
      icon: (
        <BrainIcon className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />
      ),
      items: [
        {
          name: "Git",
          level: 90,
        },
        {
          name: "Docker",
          level: 75,
        },
        {
          name: "AWS",
          level: 70,
        },
        {
          name: "UI/UX Design",
          level: 80,
        },
      ],
    },
  ];
  return (
    <section
      id="skills"
      className="py-20 bg-#111827 dark:bg-emerald-900/20 backdrop-blur-sm w-full"
    >
      <div className="container mx-auto px-6">
        <div
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">
            My{" "}
            <span className="animate-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-600 to-green-500 dark:from-emerald-300 dark:via-emerald-400 dark:to-green-400">
              Skills
            </span>
          </h2>
          <p className="text-emerald-800 dark:text-emerald-200 max-w-2xl mx-auto">
            A diverse set of skills developed throughout my journey as a
            computer science student.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              ref={(el) => (skillRefs.current[groupIndex] = el)}
              className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl shadow-lg p-6 opacity-0 translate-y-10 transition-all duration-1000 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10"
              style={{
                transitionDelay: `${groupIndex * 200}ms`,
              }}
            >
              <div className="flex items-center mb-6">
                {skillGroup.icon}
                <h3 className="text-xl font-semibold ml-3 text-emerald-800 dark:text-emerald-200">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-emerald-700 dark:text-emerald-300">
                        {skill.name}
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-emerald-100 dark:bg-emerald-900/50 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-green-500 dark:from-emerald-500 dark:to-green-400 transition-all duration-1000 ease-out"
                        style={{
                          width: "0%",
                          animation: "growWidth 1.5s ease-out forwards",
                          animationDelay: `${
                            (groupIndex * 4 + index) * 200 + 500
                          }ms`,
                        }}
                        data-width={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
