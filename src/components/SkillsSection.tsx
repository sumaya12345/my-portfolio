import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS / Tailwind", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "React.js", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "Git & GitHub", level: 80 },
];

const SkillsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding bg-card">
      <div className="section-container" ref={ref}>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mt-4 max-w-lg mx-auto">
          Technologies and tools I work with on a daily basis.
        </p>

        <div className="mt-12 max-w-xl mx-auto space-y-6">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-medium text-foreground">{s.name}</span>
                <span className="text-sm text-muted-foreground">{s.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: visible ? `${s.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
