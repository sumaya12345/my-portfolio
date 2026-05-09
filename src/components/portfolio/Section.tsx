import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}