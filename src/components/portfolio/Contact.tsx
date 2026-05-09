import { Section } from "./Section";
import { Github, Linkedin, Mail, Send, Twitter, Dribbble } from "lucide-react";
import { useState } from "react";

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input required {...props} className="w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30" />
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient">great</span></>}
      description="Have a project in mind? Drop me a line — I usually respond within a day."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="reveal space-y-4 lg:col-span-2">
          <a href="mailto:hello@alexcarter.dev" className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><Mail className="h-5 w-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
              <div className="font-medium">hello@Sumaya.dev</div>
            </div>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary"><Github className="h-5 w-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</div>
              <div className="font-medium">@sumaya1234</div>
            </div>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary"><Linkedin className="h-5 w-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</div>
              <div className="font-medium">in/sumaya</div>
            </div>
          </a>
          <div className="flex gap-2 pt-2">
            {[Github, Linkedin, Twitter, Dribbble].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:scale-110 hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="reveal glass-strong space-y-4 rounded-3xl p-6 sm:p-8 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your Name" />
            <Field label="Email" name="email" type="email" placeholder="Your Email " />
          </div>
          <Field label="Subject" name="subject" placeholder="Project inquiry" />
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea required name="message" rows={5} placeholder="Tell me about your project..." className="w-full resize-none rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]">
            {sent ? "Message sent ✓" : "Send message"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </Section>
  );
}