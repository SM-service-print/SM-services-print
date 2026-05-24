import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border-2 border-dashed border-brand-blue/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-16 rounded-full border border-dashed border-brand-red/30"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue to-brand-red blur-3xl opacity-30 animate-pulse-glow" />
            <div className="relative glass-strong rounded-full p-6 shadow-[var(--shadow-premium)]">
              <Logo className="h-32 w-32 rounded-full" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <div className="font-display font-bold text-lg">SM Services Print</div>
              <div className="text-xs text-muted-foreground mt-1 tracking-widest uppercase">
                Premium experience loading…
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
