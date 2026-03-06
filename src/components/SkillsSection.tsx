import { useState } from "react";
import { Monitor, Palette, Sparkles, Server } from "lucide-react";

const tabs = ["Technical Skills", "Soft Skills", "Tools"];

const technicalCategories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["React",  "TypeScript", "Tailwind"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma",  "UI/UX", ],
  },
  {
    icon: Sparkles,
    title: "Animation",
    skills: [ "CSS", "tailwind css" ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js",  "mongodb", "Express"],
  },
];

const softSkills = ["Communication", "Problem Solving", "Teamwork", "Time Management", "Adaptability", "Leadership"];
const tools = ["VS Code", "Git & GitHub", "Vercel", "Postman", "Chrome DevTools", "npm/yarn"];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section-padding bg-card">
      <div className="section-container">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center uppercase tracking-wider">
          Skills
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-muted border border-border">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="mt-12">
          {activeTab === 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalCategories.map((cat) => (
                <div key={cat.title} className="text-center space-y-4">
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
                </div>
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="text-center text-sm text-muted-foreground py-3 px-4 rounded-lg bg-background border border-border hover:border-primary/40 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="text-center text-sm text-muted-foreground py-3 px-4 rounded-lg bg-background border border-border hover:border-primary/40 transition-colors"
                >
                  {tool}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
