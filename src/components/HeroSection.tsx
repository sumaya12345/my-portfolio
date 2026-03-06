import { ArrowDown } from "lucide-react";

const features = [
  { title: "Performance", desc: "Optimized for speed and efficiency." },
  { title: "Reliability", desc: "Robust solutions built for stability." },
  { title: "Scalability", desc: "Designed to grow with your needs." },
  { title: "Innovation", desc: "Leveraging cutting-edge technologies." },
];

const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-28 relative overflow-hidden">
    {/* Subtle gradient orbs */}
    <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
    <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

    <div className="section-container w-full relative z-10">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground animate-fade-up">
          Hi, I'm{" "}
          <span className="gradient-text">Sumaya Abdi Ali.</span>
          <br />
          Building the future, one line of
          <br />
          code at a time.
        </h1>
        <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed animate-fade-up-delay-1">
          Passionate about crafting innovative web solutions with a focus on performance, security, and user experience.
        </p>
        <div className="flex justify-center gap-4 mt-8 animate-fade-up-delay-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-primary-foreground transition-opacity hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            View Projects <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-accent transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 animate-fade-up-delay-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl bg-card/60 backdrop-blur-sm border border-border p-5 hover:border-primary/40 transition-colors"
          >
            <h3 className="font-display text-sm font-semibold text-foreground">{f.title}</h3>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
