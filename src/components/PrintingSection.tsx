import { motion } from "framer-motion";
import { Check, MessageCircle, Image as ImageIcon, FileText, Award, Palette } from "lucide-react";
import printingImg from "@/assets/printing.jpg";
import { wa } from "@/lib/whatsapp";

const features = [
  { icon: ImageIcon, title: "Impression numérique", desc: "Haute définition, couleurs éclatantes" },
  { icon: FileText, title: "Affiches & bannières", desc: "Tous formats, intérieur & extérieur" },
  { icon: Award, title: "Cartes de visite", desc: "Finitions premium personnalisées" },
  { icon: Palette, title: "Branding entreprise", desc: "Identité visuelle complète" },
];

export function PrintingSection() {
  return (
    <section id="printing" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-red/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-premium)]">
              <img src={printingImg} alt="Impression premium" className="w-full h-[520px] object-cover" loading="lazy" width={1280} height={896} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 shadow-[var(--shadow-premium)] max-w-[220px]"
            >
              <div className="text-3xl font-bold text-gradient-red font-display">2 500+</div>
              <div className="text-xs text-muted-foreground mt-1">
                Projets d'impression livrés cette année
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gradient-red">
              01 — Impression
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight">
              Donnez vie à vos visuels avec une qualité <span className="text-gradient-red">irréprochable</span>.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              De la carte de visite au panneau grand format, nous combinons technologie de
              pointe et savoir-faire artisanal pour des rendus qui marquent les esprits.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="glass rounded-2xl p-5 hover:scale-[1.02] transition-transform"
                >
                  <f.icon className="h-5 w-5 text-brand-red" />
                  <div className="mt-3 font-semibold">{f.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-2">
              {["Délais express disponibles", "Devis gratuit en 24h", "Livraison sur Libreville et région"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-brand-red" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={wa("Bonjour, je souhaite passer une commande d'impression.", "printing")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gradient-to-r from-brand-red to-brand-orange text-white font-semibold hover:scale-105 transition-all shadow-[var(--shadow-glow-red)]"
              >
                Commander une impression
              </a>
              <a
                href={wa("Bonjour, je souhaite me renseigner sur vos services d'impression.", "printing")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full glass font-semibold hover:scale-105 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
