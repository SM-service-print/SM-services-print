import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import heroBg from "@/assets/hero-bg.jpg";
import { wa } from "@/lib/whatsapp";

const stats = [
  { value: "10+", label: "Années d'expertise" },
  { value: "2 500+", label: "Clients satisfaits" },
  { value: "24/7", label: "Support dédié" },
  { value: "100%", label: "Qualité garantie" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 noise">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40 dark:opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-brand-blue/30 blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-brand-red/30 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand-orange" />
              <span className="text-xs font-medium tracking-wide">
                Multi-services premium · Libreville, Gabon 🇬🇦
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]"
            >
              L'excellence{" "}
              <span className="text-gradient">multi-service</span>
              <br />
              au service de <span className="text-gradient-red">votre image.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Votre Partenaire Multi-services Professionnel. Impression haute définition,
              bureautique, location de véhicules et assurance automobile — pensés pour les
              exigences des entreprises modernes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#services"
                className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background font-semibold hover:scale-105 transition-all shadow-[var(--shadow-premium)]"
              >
                Découvrir nos services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={wa("Bonjour SM Services Print, je souhaite avoir plus d'informations.")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-whatsapp text-white font-semibold hover:scale-105 transition-all hover:shadow-[0_0_40px_-5px_var(--whatsapp)]"
              >
                <MessageCircle className="h-4 w-4" />
                Contacter sur WhatsApp
              </a>
              <a
                href="#contact"
                className="inline-flex items-center h-12 px-6 rounded-full glass font-semibold hover:scale-105 transition-all"
              >
                Demander un devis
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-gradient font-display">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Logo showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 rounded-full border border-dashed border-foreground/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-24 rounded-full border border-dashed border-foreground/10"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue/30 via-brand-red/30 to-brand-orange/30 blur-3xl animate-pulse-glow" />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative glass-strong rounded-full p-10 shadow-[var(--shadow-premium)]"
              >
                <Logo className="h-64 w-64 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
