import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    tech: "React, Tailwind, Stripe",
    img: project1,
    live: "#",
  },
  {
    title: "Portfolio Website",
    tech: "React, GSAP, Framer Motion",
    img: project2,
    live: "#",
  },
  {
    title: "Mobile App",
    tech: "React Native, Firebase",
    img: project3,
    live: "#",
  },
  {
    title: "Task Manager",
    tech: "React, TypeScript, Tailwind",
    img: project4,
    live: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="section-container">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center uppercase tracking-wider">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all"
          >
            <div className="aspect-video overflow-hidden relative flex items-center justify-center bg-muted p-6">
              <div className="relative w-28 h-28 rounded-xl overflow-hidden border border-border shadow-lg group-hover:scale-105 transition-transform duration-500">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              </div>
              <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-primary/20 text-primary border border-primary/30">
                Coming Soon
              </span>
            </div>
            <div className="p-5 text-center">
              <h3 className="font-display text-base font-semibold text-foreground uppercase tracking-wider">
                {p.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1.5">{p.tech}</p>
              <a
                href={p.live}
                className="mt-4 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
