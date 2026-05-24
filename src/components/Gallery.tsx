import { motion } from "framer-motion";
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g5 from "@/assets/gallery/g5.jpg";
import g6 from "@/assets/gallery/g6.jpg";
import g7 from "@/assets/gallery/g7.jpg";

const items = [
  { src: g1, label: "Pack mariage Classique" },
  { src: g2, label: "Packs mariage Premium & Luxe" },
  { src: g3, label: "Cadres photo grand format" },
  { src: g4, label: "Impressions numériques" },
  { src: g5, label: "Gadgets personnalisés" },
  { src: g6, label: "Portrait artistique" },
  { src: g7, label: "Tableau photo souvenir" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gradient">
            Galerie
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Nos affiches & <span className="text-gradient">réalisations</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Découvrez nos offres et exemples concrets de ce que nous réalisons.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] bg-muted/30 flex items-center justify-center aspect-[4/5]"
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-sm font-semibold text-background">{it.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
