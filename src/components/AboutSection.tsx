import { Code2, Heart } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding bg-card">
    <div className="section-container">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center">
        About <span className="gradient-text">Me</span>
      </h2>

      <div className="mt-12 max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
          <Code2 size={16} /> Frontend Developer
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          I'm a passionate frontend developer who loves creating responsive, accessible, and user-friendly web applications.
          With a keen eye for design and strong problem-solving skills, I transform ideas into pixel-perfect interfaces.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          I enjoy working with modern technologies like React.js and Tailwind CSS to build clean, performant applications
          that delight users and solve real problems.
        </p>
        <blockquote className="flex items-center justify-center gap-2 text-sm italic text-primary font-medium pt-4">
          <Heart size={14} className="shrink-0" />
          "Code is poetry — every line tells a story."
        </blockquote>
      </div>
    </div>
  </section>
);

export default AboutSection;
