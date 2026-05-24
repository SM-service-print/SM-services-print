import { motion } from "framer-motion";
import { Printer, FileText, Car, MessageCircle, ArrowUpRight } from "lucide-react";
import { wa } from "@/lib/whatsapp";

const services = [
  {
    id: "printing",
    icon: Printer,
    title: "Impression",
    desc: "Impression numérique haute définition, affiches, bannières, cartes de visite et branding sur mesure.",
    color: "from-brand-red to-brand-orange",
    msg: "Bonjour, je souhaite me renseigner sur vos services d'impression.",
  },
  {
    id: "office",
    icon: FileText,
    title: "Bureautique",
    desc: "Traitement de texte, CV professionnels, photocopie, scan, reliure et présentations PowerPoint.",
    color: "from-brand-blue to-primary",
    msg: "Bonjour, je souhaite me renseigner sur vos services bureautiques.",
  },
  {
    id: "auto",
    icon: Car,
    title: "Automobile",
    desc: "Location de véhicules premium et assurance automobile complète avec assistance dédiée.",
    color: "from-primary to-brand-red",
    msg: "Bonjour, je souhaite me renseigner sur vos services automobiles.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gradient-red">
            Nos services
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-6xl font-bold tracking-tight">
            Trois pôles d'expertise,{" "}
            <span className="text-gradient">une même exigence</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Une suite complète de services pensée pour les professionnels et particuliers
            qui ne transigent pas sur la qualité.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.a
              key={s.id}
              href={`#${s.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-premium)] transition-all"
            >
              <div
                className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${s.color} opacity-30 blur-3xl group-hover:opacity-50 transition-opacity`}
              />
              <div
                className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-lg`}
              >
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>

              <div className="mt-8 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                  En savoir plus
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <a
                  href={wa(s.msg)}
                  target="_blank"
                  rel="noopener"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full bg-whatsapp text-white text-xs font-semibold hover:scale-105 transition-transform"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
