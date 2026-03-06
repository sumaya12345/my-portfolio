import { Calendar, Code2, Users, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: "5+", label: "months Experience" },
  { icon: Code2, value: "5+", label: "Projects " },
  { icon: Award, value: "1+", label: "Certificate Won" },
];

const ExperienceSection = () => (
  <section
    id="experience"
    className="section-padding relative overflow-hidden"
    style={{
      background:
        "repeating-linear-gradient(135deg, transparent, transparent 35px, hsl(var(--muted) / 0.3) 35px, hsl(var(--muted) / 0.3) 36px)",
    }}
  >
    <div className="absolute inset-0 bg-background/70" />
    <div className="section-container relative z-10">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center uppercase tracking-wider">
        Experience
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {stats.map((s) => (
          <div key={s.label} className="text-center space-y-3">
            <s.icon size={32} className="mx-auto text-muted-foreground" />
            <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              {s.value}
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
