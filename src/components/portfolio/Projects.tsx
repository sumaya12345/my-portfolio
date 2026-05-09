import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";
import ecom from "@/assets/project-ecommerce.jpg";
import hospital from "@/assets/project-hospital.jpg";
import portfolio from "@/assets/project-portfolio.jpg";
import dashboard from "@/assets/project-dashboard.jpg";

const projects = [
  { title: "Lumen — E-Commerce", desc: "A high-conversion storefront with Stripe checkout, AI-powered search, and a custom CMS.", image: ecom, tags: ["Next.js", "Stripe", "Shopify"] },
  { title: "Vital — Hospital Management", desc: "Patient records, scheduling, and analytics in a calm, accessible interface for busy clinicians.", image: hospital, tags: ["React", "TypeScript", "Tailwind"] },
  { title: "Studio — Portfolio Template", desc: "An award-winning portfolio template for creatives, with rich motion and a tasteful editorial layout.", image: portfolio, tags: ["Astro", "GSAP", "MDX"] },
  { title: "Pulse — Analytics Dashboard", desc: "Real-time metrics, segmentation, and drill-downs — designed for product teams that move fast.", image: dashboard, tags: ["React", "D3", "Supabase"] },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title={<>Recent <span className="text-gradient">projects</span></>}
      description="A handful of products I've designed and built recently."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="reveal group relative overflow-hidden rounded-3xl glass-strong transition-all duration-500 hover:-translate-y-1.5 hover:glow-violet"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={p.image} alt={p.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-90" />
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">{t}</span>
                ))}
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex gap-3">
                <a href="#" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105">
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
                <a href="#" className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-foreground transition-transform hover:scale-105">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}