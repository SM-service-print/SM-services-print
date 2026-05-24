import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { wa } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={wa("Bonjour SM Services Print, je souhaite avoir des informations.")}
      target="_blank"
      rel="noopener"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-whatsapp text-white shadow-[0_10px_40px_-5px_var(--whatsapp)] flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Contacter sur WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />
      <MessageCircle className="h-6 w-6 relative" />
    </motion.a>
  );
}
