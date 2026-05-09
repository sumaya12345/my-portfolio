import profile from "@/assets/susu.jpeg";
import { Section } from "./Section";
import { MapPin, Briefcase, Coffee } from "lucide-react";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Crafting digital products with <span className="text-gradient">care</span></>}
    >
      <div className="grid items-center gap-10 md:grid-cols-5">
        <div className="reveal md:col-span-2">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-30 blur-2xl" />
            <div className="glass-strong relative overflow-hidden rounded-3xl p-2">
              <img
                src={profile}
                alt="Portrait of Sumaya"
                width={768}
                height={896}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 glass-strong flex items-center gap-3 rounded-2xl p-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: "var(--cyan)" }} />
                </span>
                <div className="text-xs">
                  <div className="font-semibold">Open to work</div>
                  <div className="text-muted-foreground">Remote · worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal space-y-5 md:col-span-3">
          <p className="text-lg leading-relaxed text-foreground/90">
            Passionate{" "}
            <span className="text-gradient font-semibold">Full-Stack Developer</span>{" "}
            with 1 year of experience building responsive, modern, and
            user-friendly web applications.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Focused on creating clean UI, smooth user experiences, and scalable
            web solutions — bridging thoughtful design with robust engineering
            from frontend to backend.
          </p>

          <ul className="grid gap-3 pt-2 sm:grid-cols-3">
            {[
              { icon: MapPin, label: "Based in", value: "Remote" },
              { icon: Briefcase, label: "Experience", value: "1 year" },
              { icon: Coffee, label: "Fueled by", value: "Espresso" },
            ].map((i) => (
              <li key={i.label} className="glass rounded-2xl p-4">
                <i.icon className="h-4 w-4 text-cyan" />
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {i.label}
                </div>
                <div className="font-semibold">{i.value}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}