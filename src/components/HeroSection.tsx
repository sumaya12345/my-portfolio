import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.png";

const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-16">
    <div className="section-container w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4 animate-fade-up">
            Hello, I'm
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground animate-fade-up-delay-1">
            Sumaya Abdi Ali
          </h1>
          <h2 className="font-display text-xl sm:text-2xl font-medium mt-2 gradient-text animate-fade-up-delay-1">
            Frontend Developer
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md leading-relaxed animate-fade-up-delay-2">
            Building beautiful and responsive web interfaces that bring ideas to life with clean code and modern design.
          </p>
          <div className="flex gap-4 mt-8 animate-fade-up-delay-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              View My Work <ArrowDown size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors">
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center animate-fade-up">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-full bg-accent" />
            <img src={profileImg} alt="Sumaya Abdi Ali" className="relative z-10 w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
