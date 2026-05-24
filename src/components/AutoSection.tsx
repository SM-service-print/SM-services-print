import { motion } from "framer-motion";
import { useState } from "react";
import { Car, Shield, MessageCircle, Check, Phone, Headphones, Zap, ImageOff } from "lucide-react";
import { wa } from "@/lib/whatsapp";

const vehicles = [
  { name: "Inconnu", category: "Véhicule", price: "0 F", available: true },
  { name: "Inconnu", category: "Véhicule", price: "0 F", available: true },
  { name: "Inconnu", category: "Véhicule", price: "0 F", available: true },
];

const insurances = [
  { icon: Shield, title: "Tous risques", desc: "Couverture intégrale, dommages, vol, incendie." },
  { icon: Headphones, title: "Assistance 24/7", desc: "Dépannage et remorquage à toute heure." },
  { icon: Zap, title: "Indemnisation rapide", desc: "Procédure simplifiée, traitement express." },
  { icon: Check, title: "Garanties personnalisées", desc: "Formules ajustées à votre profil." },
];

export function AutoSection() {
  const [tab, setTab] = useState<"rental" | "insurance">("rental");

  return (
    <section id="auto" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute -z-10 top-20 right-0 h-[400px] w-[400px] rounded-full bg-brand-blue/15 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gradient-red">
            03 — Automobile
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Souhaitez-vous <span className="text-gradient">louer un véhicule</span> ou{" "}
            <span className="text-gradient-red">souscrire une assurance</span> ?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Une mobilité haut de gamme et une protection sur mesure, sous le même toit.
          </p>
        </motion.div>

        <div className="mt-10 inline-flex glass-strong rounded-full p-1.5">
          <button
            onClick={() => setTab("rental")}
            className={`relative px-6 h-11 rounded-full text-sm font-semibold transition-all ${
              tab === "rental" ? "bg-foreground text-background" : "text-muted-foreground"
            }`}
          >
            <Car className="h-4 w-4 inline mr-2" />
            Location de véhicules
          </button>
          <button
            onClick={() => setTab("insurance")}
            className={`relative px-6 h-11 rounded-full text-sm font-semibold transition-all ${
              tab === "insurance" ? "bg-foreground text-background" : "text-muted-foreground"
            }`}
          >
            <Shield className="h-4 w-4 inline mr-2" />
            Assurance auto
          </button>
        </div>

        {tab === "rental" ? (
          <motion.div
            key="rental"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {vehicles.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-premium)] transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <ImageOff className="h-10 w-10 text-muted-foreground/40" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 glass rounded-full px-3 py-1 text-xs font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                    Bientôt disponible
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {v.category}
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold">{v.name}</div>
                  <div className="mt-2 text-sm text-gradient-red font-semibold">{v.price}</div>
                  <a
                    href={wa(`Bonjour, je souhaite réserver le véhicule : ${v.name}.`, "auto")}
                    target="_blank"
                    rel="noopener"
                    className="mt-5 w-full inline-flex justify-center items-center gap-2 h-11 rounded-full bg-foreground text-background font-semibold hover:scale-[1.02] transition-transform"
                  >
                    Réserver maintenant
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="insurance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {insurances.map((ins, i) => (
              <motion.div
                key={ins.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-strong rounded-3xl p-6 hover:shadow-[var(--shadow-premium)] transition-all"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-primary text-white">
                  <ins.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold text-lg">{ins.title}</div>
                <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{ins.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <a
            href={wa("Bonjour, je souhaite contacter le service automobile.", "auto")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background font-semibold hover:scale-105 transition-all shadow-[var(--shadow-premium)]"
          >
            <MessageCircle className="h-4 w-4" />
            Contacter le service automobile
          </a>
          <a
            href="tel:+24166582878"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full glass font-semibold hover:scale-105 transition-all"
          >
            <Phone className="h-4 w-4" />
            Appeler maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
