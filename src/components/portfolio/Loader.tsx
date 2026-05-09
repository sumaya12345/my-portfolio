import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] grid place-items-center bg-background transition-all duration-700",
        done ? "pointer-events-none opacity-0" : "opacity-100",
      )}
      aria-hidden={done}
    >
      <div className="text-center">
        <div className="relative mx-auto h-16 w-16">
          <div
            className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-violet"
            style={{ animationDuration: "1.2s" }}
          />
          <div
            className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-b-cyan"
            style={{ animationDuration: "1.6s", animationDirection: "reverse" }}
          />
          <div className="absolute inset-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-primary" />
        </div>
        <div className="mt-5 font-display text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Loading
        </div>
      </div>
    </div>
  );
}