import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send, Twitter, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });

  // 1. Habka WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "252613955250"; // Lambarkaaga oo saxan
    const text = `Salama Sumaya!%0A*Magaca:* ${form.firstName} ${form.lastName}%0A*Subject:* ${form.subject}%0A*Fariinta:* ${form.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  // 2. Habka Email (Web3Forms)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "HALKAN_GELI_KEY_GAAGA", // <--- KEY-GAAGA HALKAN DHIG
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        toast({ title: "Fariinta waa la diray!", description: "Email-kaagu si guul leh ayuu iigu soo dhacay." });
        setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        throw new Error();
      }
    } catch (err) {
      toast({ title: "Error!", description: "Fariinta lama diri karin, fadlan mar kale isku day.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="section-container relative z-10">
        <p className="text-center text-muted-foreground max-w-lg mx-auto mb-10">
          Ready to start your next project? Let's discuss how I can help bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">First Name</label>
                  <input
                    type="text" required value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Last Name</label>
                  <input
                    type="text" required value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    placeholder="Your Surname"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email</label>
                <input
                  type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Subject</label>
                <input
                  type="text" required value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message</label>
                <textarea
                  rows={4} required value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundImage: "var(--gradient-hero)" }}
                >
                  {isSubmitting ? "Sending..." : "Send Email"} <Send size={16} />
                </button>
                
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border border-green-500 text-green-500 hover:bg-green-500/10 transition-colors"
                >
                  WhatsApp <MessageCircle size={16} />
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground">Contact Information</h3>
            <div className="space-y-3">
              {[
                { icon: Mail, label: "Email", value: "sumayaupdyrizak@gmail.com" },
                { icon: Phone, label: "Phone", value: "+252 613-955-250" },
                { icon: MapPin, label: "Location", value: "Mogadishu, Somalia" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;