import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "A responsive admin dashboard with analytics, product management, and real-time data visualization.",
    img: project1,
    tech: ["React", "Tailwind CSS", "Recharts"],
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    desc: "A clean weather application with location-based forecasts, interactive maps, and weekly predictions.",
    img: project2,
    tech: ["React", "API Integration", "CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Task Manager",
    desc: "A kanban-style task management tool with drag-and-drop, labels, and team collaboration features.",
    img: project3,
    tech: ["React", "TypeScript", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Recipe Sharing App",
    desc: "A social platform for sharing and discovering recipes with beautiful food photography grids.",
    img: project4,
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    github: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="section-container">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center">
        My <span className="gradient-text">Projects</span>
      </h2>
      <p className="text-center text-muted-foreground mt-4 max-w-lg mx-auto">
        A selection of projects I've built to sharpen my skills and solve interesting problems.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {projects.map((p) => (
          <div key={p.title} className="group rounded-xl bg-card border border-border overflow-hidden card-shadow">
            <div className="aspect-video overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <a href={p.live} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity">
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a href={p.github} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={14} /> Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
