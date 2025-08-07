import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Value() {
  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries and exploring new possibilities in every project."
    },
    {
      title: "Quality",
      description: "Delivering excellence through attention to detail and best practices."
    },
    {
      title: "Collaboration",
      description: "Working together to create solutions that exceed expectations."
    }
  ];

  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: '-100px', once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
        ease: [0.25, 0.8, 0.25, 1], // easeOutCubic
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1], // smoother
      }
    }
  };

  return (
    <section
      id="values"
      aria-label="Core values section"
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col items-start justify-center bg-neutral-200 dark:bg-black transition-colors px-6 sm:px-8 py-12 sm:py-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-col items-start justify-center text-left max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="flex flex-col"
            >
              <h3 className="font-gambarino text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-orange-600 dark:text-orange-600">
                {value.title}
              </h3>
              <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}