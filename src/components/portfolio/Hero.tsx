import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Mail,
  Sparkles,
  Code2,
  Figma,
  Palette,
  Wind,
  Github,
} from "lucide-react";

const TITLES = [
  "Full-Stack Developer",
  "UI/UX Designer",
];

function useTypewriter(words: string[], typeMs = 70, holdMs = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), holdMs);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((n) => n + 1);
      return;
    }
    const t = setTimeout(
      () =>
        setText((cur) =>
          del ? cur.slice(0, -1) : word.slice(0, cur.length + 1),
        ),
      del ? typeMs / 2 : typeMs,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, typeMs, holdMs]);

  return text;
}

function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0,
      h = 0,
      dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let parts: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(80, Math.floor((w * h) / 16000));
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
        a: Math.random() * 0.6 + 0.2,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      // particles
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(186, 200, 255, ${p.a})`;
        ctx.fill();
      }
      // connecting lines
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i],
            b = parts[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            const o = 1 - Math.sqrt(d2) / 120;
            ctx.strokeStyle = `rgba(168, 130, 255, ${o * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden
    />
  );
}

export function Hero() {
  const typed = useTypewriter(TITLES);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setMx(x);
      setMy(y);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const px = (k: number) => `translate3d(${mx * k}px, ${my * k}px, 0)`;

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern" />
        <ParticleField />

        {/* radial top glow */}
        <div className="absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-gradient-glow blur-3xl animate-pulse-glow" />

        {/* moving blobs */}
        <div
          className="absolute left-[-12%] top-1/4 h-80 w-80 rounded-full opacity-40 blur-3xl animate-float"
          style={{ background: "var(--violet)", transform: px(-22) }}
        />
        <div
          className="absolute right-[-8%] top-1/3 h-96 w-96 rounded-full opacity-30 blur-3xl animate-float-slow"
          style={{ background: "var(--cyan)", transform: px(22) }}
        />
        <div
          className="absolute bottom-[-10%] left-1/3 h-72 w-72 rounded-full opacity-25 blur-3xl animate-float"
          style={{
            background: "var(--blue)",
            animationDelay: "2s",
            transform: px(-14),
          }}
        />

        {/* animated rings */}
        <svg
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
          width="900"
          height="900"
          viewBox="0 0 900 900"
        >
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.65 0.24 295)" />
              <stop offset="100%" stopColor="oklch(0.82 0.16 200)" />
            </linearGradient>
          </defs>
          <g
            fill="none"
            stroke="url(#ring)"
            strokeWidth="1"
            style={{ transform: px(-6), transformOrigin: "center" }}
          >
            <circle cx="450" cy="450" r="180" />
            <circle cx="450" cy="450" r="280" strokeDasharray="4 8" />
            <circle cx="450" cy="450" r="380" />
          </g>
        </svg>
      </div>

      {/* Floating tech icons */}
      <FloatingIcons px={px} />

      <div className="mx-auto w-full max-w-6xl px-5">
        <div
          className="reveal mx-auto max-w-3xl text-center"
          style={{ transform: px(-4) }}
        >
          <div
            className="glass mx-auto mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ background: "var(--cyan)" }}
              />
            </span>
            Available for freelance · Q3 2026
            <Sparkles className="h-3.5 w-3.5 text-cyan" />
          </div>

          <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Hello, I'm
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Sumaya<span className="animate-blink text-gradient">.</span>
          </h1>

          {/* Typewriter subtitle */}
          <div className="mt-6 flex h-9 items-center justify-center text-lg font-medium text-foreground/90 sm:text-xl">
            <span className="text-muted-foreground">I'm a&nbsp;</span>
            <span className="text-gradient font-semibold">{typed}</span>
            <span
              className="ml-0.5 inline-block h-5 w-[2px] animate-blink bg-gradient-primary sm:h-6"
              aria-hidden
            />
          </div>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I design and build fast, accessible, and visually striking web
            experiences — bridging pixel-perfect interfaces with elegant code.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -z-0 animate-pulse-glow bg-gradient-primary opacity-50 blur-2xl" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="glass group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:scale-105 hover:border-foreground/20"
            >
              <Mail className="h-4 w-4 transition-transform group-hover:-rotate-12" />
              Hire Me
            </button>
          </div>

          {/* stats */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4">
            {[
              { v: "10+", l: "Projects" },
              { v: "1y", l: "Experience" },
              { v: "10+", l: "Happy clients" },
            ].map((s) => (
              <div
                key={s.l}
                className="glass rounded-2xl px-4 py-5 transition-transform hover:-translate-y-1"
              >
                <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                  {s.v}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-border p-1.5">
          <span className="block h-2 w-1 rounded-full bg-gradient-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function FloatingIcons({ px }: { px: (k: number) => string }) {
  const items = [
    { Icon: Code2, cls: "left-[8%] top-[22%]", k: -18, d: "0s" },
    { Icon: Figma, cls: "right-[10%] top-[18%]", k: 18, d: "1.2s" },
    { Icon: Palette, cls: "left-[12%] bottom-[22%]", k: -12, d: "0.6s" },
    { Icon: Wind, cls: "right-[8%] bottom-[28%]", k: 14, d: "1.8s" },
    { Icon: Github, cls: "right-[22%] top-[50%]", k: 10, d: "2.4s" },
  ];
  return (
    <>
      {items.map(({ Icon, cls, k, d }, i) => (
        <div
          key={i}
          className={`pointer-events-none absolute hidden md:block ${cls}`}
          style={{ transform: px(k) }}
        >
          <div
            className="glass animate-float grid h-12 w-12 place-items-center rounded-2xl text-foreground/80 shadow-elegant"
            style={{ animationDelay: d }}
          >
            <Icon className="h-5 w-5" />
          </div>
        </div>
      ))}
    </>
  );
}
