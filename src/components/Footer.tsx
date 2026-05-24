import { Logo } from "./Logo";
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone } from "lucide-react";
import { wa, EMAIL, PHONE_DISPLAY, ADDRESS } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[800px] rounded-full bg-brand-blue/30 blur-[120px]" />
      <div className="absolute -bottom-40 right-0 h-80 w-[600px] rounded-full bg-brand-red/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo className="h-12 w-12" />
              <div>
                <div className="font-display font-bold text-lg">SM Services Print</div>
                <div className="text-xs text-background/60 uppercase tracking-widest">
                  Premium Multi-services
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-background/70 max-w-md">
              Votre partenaire de confiance pour l'impression, la bureautique et l'automobile.
              Excellence, rapidité et qualité au service de vos projets.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label="Réseau social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4">Services</div>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#printing" className="hover:text-background">Impression</a></li>
              <li><a href="#office" className="hover:text-background">Bureautique</a></li>
              <li><a href="#auto" className="hover:text-background">Location auto</a></li>
              <li><a href="#auto" className="hover:text-background">Assurance</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> {EMAIL}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> Bureautique : {PHONE_DISPLAY.office}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> Imprimerie · Auto : {PHONE_DISPLAY.printing}
              </li>
              <li className="text-background/60 text-xs">{ADDRESS}</li>
              <li>
                <a
                  href={wa("Bonjour SM Services Print.")}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 mt-2 px-4 h-9 rounded-full bg-whatsapp text-white text-xs font-semibold"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <div>© {new Date().getFullYear()} SM Services Print. Tous droits réservés.</div>
          <div>Made with excellence in Gabon 🇬🇦</div>
        </div>
      </div>
    </footer>
  );
}
