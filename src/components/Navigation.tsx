import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import resume from "../assets/resume.pdf";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => entry.isIntersecting && setActiveSection(entry.target.id)
      );
    }, options);
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((sec) => observer.current?.observe(sec));
    return () => sections.forEach((sec) => observer.current?.unobserve(sec));
  }, []);

  const isActive = (section: string) => activeSection === section;
  const navLinkClass = (section: string) =>
    `block text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-md font-gambarino tracking-tight leading-none ${
      isActive(section)
        ? "!text-orange-600 dark:!text-orange-600 font-medium"
        : ""
    }`;
  const mobileNavLinkClass = (section: string) =>
    `block text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-xl font-gambarino tracking-tight leading-none ${
      isActive(section)
        ? "!text-orange-600 dark:!text-orange-600 font-medium"
        : ""
    }`;

  // Framer Motion variants
  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeIn",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <>
      {/* Mobile/Tablet Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed top-0 left-0 right-0 h-screen bg-neutral-200 dark:bg-black z-[100]"
          >
            <motion.div className="h-full flex flex-col justify-center items-start px-8 pb-8">
              <div className="space-y-6 w-full">
                {[
                  "intro",
                  "about",
                  "tech-stack",
                  "work",
                  "values",
                  "background",
                  "contact",
                ].map((sec) => (
                  <motion.a
                    key={sec}
                    href={`#${sec}`}
                    variants={linkVariants}
                    className={
                      `${mobileNavLinkClass(
                        sec
                      )} py-1 pl-2 pr-6 relative transition-all flex items-center justify-between` +
                      (isActive(sec)
                        ? " !text-orange-600 dark:!text-orange-600 font-medium"
                        : " hover:pl-3")
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{sec.charAt(0).toUpperCase() + sec.slice(1)}</span>
                  </motion.a>
                ))}
                {/* Divider above Resume */}
                <div className="border-t border-neutral-300 dark:border-neutral-800 pt-4 mt-2 w-full">
                  <motion.a
                    href={resume}
                    download
                    variants={linkVariants}
                    onClick={() => setIsMenuOpen(false)}
                    className="underline decoration-dotted underline-offset-2 text-neutral-500 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-600 transition-colors text-xl font-gambarino tracking-tight leading-none flex items-center gap-1 pt-2"
                  >
                    Resume*
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed left-0 top-0 h-screen w-64 z-[101] hidden lg:flex flex-col"
      >
        <div className="p-8 flex flex-col h-full">
          <a
            href="#intro"
            className="text-xl font-gambarino text-orange-600 dark:text-orange-600 hover:text-orange-800 dark:hover:text-orange-800 transition-colors tracking-tight leading-none"
          >
            A.
          </a>
          <div className="flex-1 flex flex-col justify-center space-y-4">
            {[
              "intro",
              "about",
              "tech-stack",
              "work",
              "values",
              "background",
              "contact",
            ].map((sec) => (
              <motion.a
                key={sec}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                href={`#${sec}`}
                className={navLinkClass(sec)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </motion.a>
            ))}
            <motion.a
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              href={resume}
              download
              className="underline decoration-dotted underline-offset-2 text-neutral-500 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-600 transition-colors text-md font-gambarino tracking-tight leading-none flex items-center gap-1"
            >
              Resume*
            </motion.a>
          </div>
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-8"
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Top Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:hidden fixed top-0 left-0 right-0 z-[101] flex items-center justify-between px-6 py-4 bg-gradient-to-b from-neutral-200 to-transparent dark:from-black dark:to-transparent"
      >
        <a
          href="#intro"
          className="text-xl font-gambarino text-orange-600 dark:text-orange-600 hover:text-orange-800 dark:hover:text-orange-800 transition-colors tracking-tight leading-none"
        >
          A.
        </a>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-neutral-900 dark:text-white p-1"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>
    </>
  );
}
