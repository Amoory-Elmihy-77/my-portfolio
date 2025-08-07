import { motion } from "framer-motion";

const workExperiences = [
  {
    company: "Digital Egypt Pioneers (DEBI)",
    role: "Full Stack .NET Web Developer",
    period: "November 2024 - May 2025",
    description:
      "Completed and achieved the core learning outcomes in the Digital Egypt Pioneers Program under the Software Development track, specializing in Full Stack .NET Web Development.",
  },
  {
    company: "National Telecommunication Institute (NTI)",
    role: "MEAN Stack Web Development Trainee",
    period: "August – September, 2024",
    description:
      "Completed 120-hour MEAN Stack training covering full-stack development, freelancing, project management, and personal branding.",
  },
  {
    company: "GDG Delta",
    role: "Hackathon",
    period: "December 2024",
    description:
      "Participated in Devfest Mansoura Hackathon 2024 The Biggest Hackathon in Delta as a competitor from QuinTech Team and Finished as a Top 10.",
  },
];

const positionsOfResponsibility: unknown | object[] = [];

export default function Background() {
  return (
    <section
      id="background"
      className="min-h-screen w-full flex flex-col items-start justify-center bg-neutral-200 dark:bg-black transition-colors px-6 sm:px-8 py-12 sm:py-8"
      aria-labelledby="experience-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start justify-center text-left max-w-4xl mx-auto w-full"
      >
        <div className="space-y-32 w-full">
          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-gambarino text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-orange-600 dark:text-orange-600">
              WORK EXPERIENCE
            </h3>
            <div className="flex flex-col gap-8">
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-row items-start gap-4"
                >
                  <div className="space-y-2">
                    <div className="text-base text-orange-600 dark:text-orange-600 font-mono">
                      {exp.company}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white leading-tight">
                      {exp.role}
                    </div>
                    <div className="flex flex-row items-center font-mono gap-4 text-xs text-orange-600 dark:text-orange-600 mb-1">
                      <span>{exp.period}</span>
                    </div>
                    <div className="text-neutral-800 font-mono dark:text-neutral-300 text-sm max-w-2xl leading-relaxed">
                      {exp.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Positions of Responsibility Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {positionsOfResponsibility.length > 0 && (
              <>
                <h3 className="font-gambarino text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-orange-600 dark:text-orange-600">
                  POSITIONS OF RESPONSIBILITY
                </h3>
                <div className="flex flex-col gap-8">
                  {positionsOfResponsibility.map((pos, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex flex-row items-start gap-4"
                    >
                      <div className="space-y-2">
                        <div className="text-base text-orange-600 dark:text-orange-600 font-mono">
                          {pos.organization}
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white leading-tight">
                          {pos.role}
                        </div>
                        <div className="flex flex-row items-center font-mono gap-4 text-xs text-orange-600 dark:text-orange-600 mb-1">
                          <span>{pos.period}</span>
                        </div>
                        <div className="text-neutral-800 font-mono dark:text-neutral-300 text-sm max-w-2xl leading-relaxed">
                          {pos.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
