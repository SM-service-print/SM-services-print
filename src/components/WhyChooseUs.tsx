import { motion } from "framer-motion";
import { Zap, Award, Briefcase, Headphones, Cpu } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Rapidité", desc: "Livraisons et traitements express, sans compromis sur la qualité." },
  { icon: Award, title: "Qualité premium", desc: "Finitions haut de gamme et standards exigeants à chaque projet." },
  { icon: Briefcase, title: "Service professionnel", desc: "Une équipe experte et un accompagnement sur-mesure." },
  { icon: Headphones, title: "Support client", desc: "À votre écoute 6j/7, réponses claires et solutions rapides." },
  { icon: Cpu, title: "Équipements modernes", desc: "Machines de dernière génération pour des résultats impeccables." },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gradient">
            Pourquoi nous choisir
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight">
            L'excellence au service de <span className="text-gradient">vos projets</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ce qui fait la différence chez SM Services Print : une combinaison rare
            de rapidité, de qualité et de proximité client.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group glass-strong rounded-2xl p-7 hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-primary text-white shadow-[var(--shadow-glow)]">
                <r.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-display text-xl font-semibold">{r.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
