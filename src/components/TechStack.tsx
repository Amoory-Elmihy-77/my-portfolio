import HTML from "../assets/stacks/html5-original-logo.svg";
import CSS from "../assets/stacks/css3-original-logo.svg";
import JavaScript from "../assets/stacks/javascript-logo.svg";
import TypeScript from "../assets/stacks/typescript-icon-logo.svg";
import Bootstrap from "../assets/stacks/bootstrap-original-wordmark-logo.svg";
import Tailwind from "../assets/stacks/tailwindcss-original-logo.svg";
import ReactIcon from "../assets/stacks/react-original-logo.svg";
import NextJS from "../assets/stacks/nextjs-icon-logo.svg";
import NodeJS from "../assets/stacks/nodejs-original-wordmark-logo.svg";
import Cpp from "../assets/stacks/c-plusplus-logo.svg";
import Git from "../assets/stacks/git-icon-logo.svg";
import GitHub from "../assets/stacks/github-original-wordmark-logo.svg";
import VSCode from "../assets/stacks/visual-studio-code-logo.svg";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const stacks = [
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "JavaScript", icon: JavaScript },
  { name: "TypeScript", icon: TypeScript },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "React.js", icon: ReactIcon },
  { name: "Next.js", icon: NextJS },
  { name: "Node.js", icon: NodeJS },
  { name: "C++", icon: Cpp },
  { name: "Git", icon: Git },
  { name: "GitHub", icon: GitHub },
  { name: "VS Code", icon: VSCode },
];

export default function TechStack() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      id="tech-stack"
      className=" m-auto w-4/5 min-h-screen flex flex-col items-center justify-center text-neutral-900 dark:text-white px-6 sm:px-8 py-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          My Tech Stack
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-center items-center"
        >
          {stacks.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-2 w-full h-32 sm:h-36 bg-[#1e1e2e] dark:bg-[#1e1e2e] rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-14 h-14 mb-2 fill-white"
              />
              <p className="text-sm sm:text-base font-medium text-white">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
