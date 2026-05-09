import { Section } from "./Section";
import { Monitor, Palette, Sparkles, Server } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const technicalCategories = [
  {
    title: "FRONTEND",
    icon: Monitor,
    skills: [
      { name: "html", level: 98 },
      { name: "css", level: 95 },
      { name: "js", level: 92 }
    ]
  },
  {
    title: "DESIGN",
    icon: Palette,
    skills: [
      { name: "Figma", level: 94 },
      { name: "UI/UX", level: 90 }
    ]
  },
  {
    title: "LIBRARIES & FRAMEWORKS",
    icon: Sparkles,
    skills: [
      { name: "React", level: 93 },
      { name: "tailwind css", level: 96 }
    ]
  },
  {
    title: "BACKEND",
    icon: Server,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 89 },
      { name: "mongodb", level: 85 },
      { name: "SQL", level: 86 }
    ]
  }
];

const softSkills = [
  "Communication", "Problem Solving", "Teamwork",
  "Time Management", "Adaptability", "Leadership"
];

const tools = [
  "VS Code", "Git & GitHub", "Vercel",
  "Postman", "Chrome DevTools", "npm/yarn"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export function Skills() {
  const [activeTab, setActiveTab] = useState("Technical Skills");

  return (
    <section id="skills" className="relative w-full overflow-hidden py-24 sm:py-32">
      {/* Background ambient glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="h-[40rem] w-[40rem] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <h2 className="mb-8 font-display text-4xl sm:text-5xl font-bold tracking-wider text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            SKILLS
          </h2>

          {/* Animated Tab Bar */}
          <div className="relative inline-flex items-center rounded-full bg-zinc-900/60 p-1.5 border border-white/5 backdrop-blur-md shadow-xl gap-1">
            {["Technical Skills", "Soft Skills", "Tools"].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 sm:px-8 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "text-zinc-400 hover:text-zinc-200"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 rounded-full bg-purple-800/40 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.4)] backdrop-blur-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content Area */}
        <div className="mx-auto max-w-5xl min-h-[400px]">
          <AnimatePresence mode="wait">

            {/* TECHNICAL SKILLS TAB */}
            {activeTab === "Technical Skills" && (
              <motion.div
                key="Technical Skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-x-24"
              >
                {technicalCategories.map((cat, idx) => (
                  <motion.div key={idx} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="flex flex-col items-center w-full">

                    {/* Category Icon with subtle floating */}
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ repeat: Infinity, duration: 4 + idx, ease: "easeInOut" }}
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-950/30 border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-sm"
                    >
                      <cat.icon
                        strokeWidth={1.5}
                        className="h-10 w-10 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                      />
                    </motion.div>

                    <h3 className="mb-8 font-display text-lg font-bold tracking-[0.2em] text-white/95 uppercase text-center">
                      {cat.title}
                    </h3>

                    {/* Progress Pills */}
                    <div className="flex w-full flex-col gap-3.5">
                      {cat.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="group relative flex h-[50px] w-full items-center justify-center overflow-hidden rounded-full border border-white/5 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                        >
                          <motion.div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-600/20 to-purple-400/5"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                          />
                          <div className="absolute left-0 top-0 h-full w-1 bg-purple-500/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <span className="relative z-10 text-[15px] font-medium tracking-[0.05em] text-zinc-300 transition-colors duration-300 group-hover:text-purple-100">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* SOFT SKILLS TAB */}
            {activeTab === "Soft Skills" && (
              <motion.div
                key="Soft Skills"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
              >
                {softSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="group relative flex h-16 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:bg-zinc-800/60 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="relative z-10 text-[15px] font-medium tracking-[0.05em] text-zinc-300 transition-colors duration-300 group-hover:text-purple-100">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* TOOLS TAB */}
            {activeTab === "Tools" && (
              <motion.div
                key="Tools"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
              >
                {tools.map((tool) => (
                  <motion.div
                    key={tool}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="group relative flex h-16 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:bg-zinc-800/60 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="relative z-10 text-[15px] font-medium tracking-[0.05em] text-zinc-300 transition-colors duration-300 group-hover:text-purple-100">
                      {tool}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}