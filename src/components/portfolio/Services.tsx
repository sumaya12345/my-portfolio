import { Section } from "./Section";
import { Code2, Smartphone, Palette, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Code2, title: "Frontend Development", desc: "Production-grade React, TypeScript, and Next.js applications — fast, typed, and tested.", bullets: ["React · Next · TanStack", "TypeScript", "Performance & a11y"] },
  { icon: Smartphone, title: "Responsive Web Design", desc: "Pixel-perfect interfaces that adapt fluidly from 320px phones to ultrawide desktops.", bullets: ["Mobile-first", "Tailwind systems", "Cross-browser polish"] },
  { icon: Palette, title: "UI/UX Design", desc: "End-to-end product design from research and wireframes to polished design systems.", bullets: ["Figma & prototyping", "Design systems", "User research"] },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>How I can <span className="text-gradient">help</span></>}
      description="Three core ways I partner with founders and product teams to ship great work."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.title} className="reveal group relative overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-foreground" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-gradient-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}