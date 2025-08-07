import profileImg from "../assets/worksImgs/about.jpg";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function About() {
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
      id="about"
      className="min-h-screen w-full flex flex-col items-start justify-center bg-neutral-200 dark:bg-black text-neutral-900 dark:text-white transition-colors px-6 sm:px-8 py-12 sm:py-8"
      aria-labelledby="about-title"
    >
      <div className="flex flex-col w-full max-w-7xl mx-auto py-24">
        {/* Center: Bio */}
        <div className="w-full flex items-start justify-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-sm sm:text-base font-mono text-justify leading-relaxed flex flex-col items-center gap-6"
          >
            <motion.img
              src={profileImg}
              alt="My Profile"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-50 h-50 sm:w-80 sm:80 rounded-full border-4 border-orange-500 object-cover shadow-xl"
            />

            <p>
              I'm a Computer Science student specializing in Web Development,
              passionate React.js developer building dynamic, user-friendly web
              apps. I turn ideas into high-performance, visually stunning
              websites.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
