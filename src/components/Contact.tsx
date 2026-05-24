import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { wa, EMAIL, ADDRESS, HOURS, PHONE_DISPLAY } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  message: z.string().trim().min(5, "Message trop court").max(1000),
});

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.6 6.3a4.8 4.8 0 0 1-3.8-1.9c-.5-.7-.8-1.5-.9-2.4h-3.4v13.5a2.7 2.7 0 0 1-2.7 2.7 2.7 2.7 0 1 1 0-5.4c.3 0 .5 0 .8.1V9.2c-.3 0-.5-.1-.8-.1a6.3 6.3 0 1 0 6.3 6.3V8.7a8.2 8.2 0 0 0 4.7 1.5V6.8c-.1 0-.1 0-.2-.5z" />
  </svg>
);

const socials = [
  { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: TikTokIcon, label: "TikTok", href: "https://tiktok.com" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: MessageCircle, label: "WhatsApp", href: wa("Bonjour SM Services Print.") },
];

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message envoyé ! Nous vous répondrons rapidement.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gradient-red">
            Contact & Support
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Parlons de votre <span className="text-gradient">prochain projet</span>.
          </h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: EMAIL },
              { icon: Phone, label: "Bureautique", value: PHONE_DISPLAY.office },
              { icon: Phone, label: "Imprimerie · Auto", value: PHONE_DISPLAY.printing },
              { icon: MapPin, label: "Adresse", value: ADDRESS },
              { icon: Clock, label: "Horaires", value: HOURS },
            ].map((c) => (
              <div key={c.label} className="glass-strong rounded-2xl p-5 flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-brand-blue to-brand-red text-white flex items-center justify-center">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 font-semibold">{c.value}</div>
                </div>
              </div>
            ))}

            <div className="glass-strong rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Suivez-nous
              </div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={s.label}
                    className="h-11 w-11 rounded-full glass flex items-center justify-center hover:scale-110 hover:shadow-[var(--shadow-glow)] transition-all"
                  >
                    <s.Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-[200px] shadow-[var(--shadow-card)]">
              <iframe
                title="Carte"
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.4530%2C0.3950%2C9.4630%2C0.4020&layer=mapnik&marker=0.3984076%2C9.4580889"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 shadow-[var(--shadow-premium)]"
          >
            <h3 className="font-display text-2xl font-bold">Envoyez-nous un message</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Notre équipe vous répond sous 24h.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Nom complet
                </label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full h-12 px-4 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-brand-red transition"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full h-12 px-4 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-brand-red transition"
                  placeholder="vous@email.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-brand-red transition resize-none"
                placeholder="Décrivez votre projet…"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-to-r from-brand-blue via-primary to-brand-red text-white font-semibold hover:scale-[1.02] transition-transform shadow-[var(--shadow-glow)] disabled:opacity-60"
            >
              {loading ? "Envoi en cours…" : (
                <>
                  Envoyer le message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
