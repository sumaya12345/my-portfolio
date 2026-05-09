import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("light");
    setLight(root.classList.contains("light"));
  };

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
            scrolled ? "glass-strong shadow-elegant" : "bg-transparent",
          )}
        >
          <button
            onClick={() => go("home")}
            className="font-display text-lg font-bold tracking-tight"
          >
            <span className="text-gradient">sumaya</span>
            <span className="text-foreground">.dev</span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  active === l.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-gradient-primary opacity-20" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-all hover:bg-secondary hover:scale-110"
            >
              {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "mx-auto mt-3 max-w-6xl px-5 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="glass-strong flex flex-col gap-1 rounded-2xl p-3">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={cn(
                "rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors",
                active === l.id
                  ? "bg-gradient-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary",
              )}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}