import { Github, Linkedin, Twitter, Dribbble, Mail, MapPin, ArrowUpRight, Heart, MessageCircle } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Dribbble, href: "#", label: "Dribbble" },
];

export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative isolate overflow-hidden border-t border-border/60 pt-20 pb-10">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-gradient-glow opacity-50 blur-3xl" />
        <div className="absolute -bottom-24 left-[10%] h-56 w-56 rounded-full opacity-25 blur-3xl" style={{ background: "var(--violet)" }} />
        <div className="absolute -bottom-24 right-[10%] h-56 w-56 rounded-full opacity-25 blur-3xl" style={{ background: "var(--cyan)" }} />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <button onClick={() => go("home")} className="font-display text-2xl font-bold tracking-tight">
              <span className="text-gradient">sumaya</span>
              <span className="text-foreground">.dev</span>
            </button>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full-Stack Developer crafting modern, responsive, and scalable
              web experiences with clean code and thoughtful design.
            </p>
            <button
              onClick={() => go("contact")}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
            >
              Let's work together
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Navigate
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-y-2.5 text-sm md:grid-cols-1">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="group inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-px w-3 bg-border transition-all group-hover:w-5 group-hover:bg-gradient-primary" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
      <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=asumayaabdi702@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
>
  <span className="grid h-9 w-9 place-items-center rounded-xl border border-border transition-all group-hover:border-transparent group-hover:bg-gradient-primary group-hover:text-primary-foreground">
    <Mail className="h-4 w-4" />
  </span>
  asumayaabdi702@gmail.com
</a>
                
<a 
  href="https://wa.me/252613955250" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
>
  <span className="grid h-9 w-9 place-items-center rounded-xl border border-border transition-all group-hover:border-transparent group-hover:bg-gradient-primary group-hover:text-primary-foreground">
    <MessageCircle className="h-4 w-4" /> 
  </span>
  WhatsApp-ka La xiriir
</a>     </li>
              <li>
                <div className="inline-flex items-center gap-3 text-muted-foreground">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-border">
                    <MapPin className="h-4 w-4" />
                  </span>
                  Available worldwide · Remote
                </div>
              </li>
            </ul>

            <div className="mt-6 flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-elegant"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <div>
            © {new Date().getFullYear()}{" "}
            <span className="font-display font-semibold text-foreground">Sumaya</span>.
            All rights reserved.
          </div>
          <div className="inline-flex items-center gap-1.5">
            Crafted with <Heart className="h-3.5 w-3.5 fill-current text-cyan" /> & clean code.
          </div>
        </div>
      </div>
    </footer>
  );
}