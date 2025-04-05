import React, { useEffect, useRef } from "react";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
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
    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  const projects = [
    {
      title: "AI Study Assistant",
      description:
        "An intelligent study companion that uses machine learning to adapt to your learning style and help you master difficult concepts.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["React", "Python", "TensorFlow", "Firebase"],
      github: "#",
      demo: "#",
    },
    {
      title: "Smart Expense Tracker",
      description:
        "A financial management application that uses AI to categorize expenses and provide insights on spending habits.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      tags: ["React Native", "Node.js", "MongoDB", "Chart.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Virtual Reality Campus Tour",
      description:
        "An immersive VR experience that allows prospective students to explore university campuses from anywhere in the world.",
      image:
        "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["Unity", "C#", "WebXR", "Three.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Eco-Friendly Shopping Assistant",
      description:
        "A web application that helps consumers make environmentally conscious shopping decisions by providing sustainability ratings for products.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80",
      tags: ["React", "Express", "PostgreSQL", "REST API"],
      github: "#",
      demo: "#",
    },
  ];
  return (
    <section
      id="projects"
      className="py-20 bg-#111827 dark:bg-emerald-900/20 backdrop-blur-sm w-full"
    >
      <div className="container mx-auto px-6">
        <div
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-1 transition-all duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and learning opportunity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectRefs.current[index] = el)}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg opacity-0 translate-y-10 transition-all duration-1000 hover:shadow-2xl transform hover:-translate-y-2 group"
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="relative overflow-hidden h-48 md:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <GithubIcon className="h-5 w-5 mr-2" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLinkIcon className="h-5 w-5 mr-2" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
