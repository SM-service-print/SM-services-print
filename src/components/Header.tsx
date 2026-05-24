import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { wa } from "@/lib/whatsapp";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Impression", href: "#printing" },
  { label: "Bureautique", href: "#office" },
  { label: "Automobile", href: "#auto" },
  { label: "Galerie", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`glass-strong rounded-2xl flex items-center justify-between px-4 py-3 transition-all ${
            scrolled ? "shadow-[var(--shadow-card)]" : ""
          }`}
        >
          <a href="#hero" className="flex items-center gap-3 group">
            <Logo className="h-10 w-10 transition-transform group-hover:scale-110" />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-tight">SM Services Print</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Premium · Libreville
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute bottom-1 left-3 right-3 h-px bg-gradient-to-r from-brand-blue to-brand-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={wa("Bonjour, je souhaite obtenir des informations.")}
              target="_blank"
              rel="noopener"
              className="hidden md:inline-flex items-center gap-2 h-10 px-4 rounded-full bg-whatsapp text-white text-sm font-medium hover:shadow-[0_0_30px_-5px_var(--whatsapp)] transition-all hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center h-10 px-5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-all hover:scale-105"
            >
              Devis gratuit
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden h-10 w-10 rounded-full glass flex items-center justify-center"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden glass-strong mt-2 rounded-2xl p-4 flex flex-col gap-1"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-foreground/5"
                >
                  {l.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
