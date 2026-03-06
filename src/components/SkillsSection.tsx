import { useState } from "react";
import { Monitor, Palette, Sparkles, Server } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Technical Skills", "Soft Skills", "Tools"];

const technicalCategories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["html", "css",  "js",],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma",  "UI/UX", ],
  },
  {
    icon: Sparkles,
    title: "Libraries & Frameworks",
    skills: [ "React", "tailwind css", "node.js" ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [ "mongodb", "Express"],
  },
];

const softSkills = ["Communication", "Problem Solving", "Teamwork", "Time Management", "Adaptability", "Leadership"];
const tools = ["VS Code", "Git & GitHub", "Vercel", "Postman", "Chrome DevTools", "npm/yarn"];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
   <section id="skills" className="section-padding bg-card">
  <div className="section-container">
    {/* Cinwaanka oo kor ka soo dhacaya */}
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center uppercase tracking-wider"
    >
      Skills
    </motion.h2>

    {/* Tabs Animation */}
    <div className="flex justify-center mt-8">
      <div className="inline-flex items-center gap-1 p-1 rounded-full bg-muted border border-border">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`relative text-sm font-medium px-5 py-2 rounded-full transition-all ${
              activeTab === i ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {/* Kani waa animation-ka badhanka marka la dhufto (Sliding effect) */}
            {activeTab === i && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary rounded-full shadow-md -z-10"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            {tab}
          </button>
        ))}
      </div>
    </div>

    {/* Tab content oo leh Fade iyo Slide effect */}
    <div className="mt-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
              {technicalCategories.map((cat, index) => (
                <motion.div 
                  key={cat.title} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center space-y-4"
                >
                  <cat.icon size={36} className="mx-auto text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground uppercase tracking-wider">
                    {cat.title}
                  </h3>
                  <div className="space-y-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="text-sm text-muted-foreground py-1.5 px-3 rounded-lg bg-background border border-border"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center text-sm text-muted-foreground py-3 px-4 rounded-lg bg-background border border-border hover:border-primary/40 transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center text-sm text-muted-foreground py-3 px-4 rounded-lg bg-background border border-border hover:border-primary/40 transition-colors cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</section>
  );
};

export default SkillsSection;
