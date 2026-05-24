import { motion } from "framer-motion";
import { FileText, FileCheck, Copy, Presentation, BookOpen, FileSignature, MessageCircle } from "lucide-react";
import officeImg from "@/assets/office.jpg";
import { wa } from "@/lib/whatsapp";

const services = [
  { icon: FileText, title: "Traitement de texte", desc: "Saisie et mise en forme professionnelles", msg: "Bonjour, je souhaite demander un service de traitement de texte." },
  { icon: FileCheck, title: "CV professionnels", desc: "Création et refonte de CV impactants", msg: "Bonjour, je souhaite créer ou refaire mon CV." },
  { icon: Copy, title: "Photocopie & Scan", desc: "Numérisation et reproduction haute qualité", msg: "Bonjour, j'ai besoin d'un service de photocopie / scan." },
  { icon: Presentation, title: "Présentations PowerPoint", desc: "Slides modernes et persuasifs", msg: "Bonjour, je souhaite réaliser une présentation PowerPoint." },
  { icon: BookOpen, title: "Reliure", desc: "Reliure spirale, thermique, à chaud", msg: "Bonjour, j'ai besoin d'un service de reliure." },
  { icon: FileSignature, title: "Mise en forme", desc: "Documents officiels et rapports", msg: "Bonjour, je souhaite un service de mise en forme de documents." },
];

export function OfficeSection() {
  return (
    <section id="office" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gradient">
            02 — Bureautique
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Un catalogue complet pour <span className="text-gradient">tous vos documents</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Une équipe experte à votre disposition pour traiter, mettre en forme et finaliser
            tous vos documents professionnels avec rapidité et précision.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-[1fr_1.4fr] gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-premium)] min-h-[400px]"
          >
            <img src={officeImg} alt="Espace bureautique" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={896} />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group glass-strong rounded-2xl p-6 hover:shadow-[var(--shadow-card)] transition-all flex flex-col"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-primary text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold">{s.title}</div>
                <div className="text-sm text-muted-foreground mt-1 flex-1">{s.desc}</div>
                <a
                  href={wa(s.msg, "office")}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex items-center gap-2 h-9 px-4 rounded-full bg-[#25D366]/10 text-[#25D366] font-medium text-sm w-fit hover:bg-[#25D366]/20 hover:scale-105 transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
