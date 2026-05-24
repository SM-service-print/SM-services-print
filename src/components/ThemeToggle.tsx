import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Basculer le thème"
      className="relative h-10 w-10 rounded-full glass flex items-center justify-center transition-all hover:scale-105 hover:shadow-[var(--shadow-glow)]"
    >
      {dark ? <Sun className="h-4 w-4 text-brand-orange" /> : <Moon className="h-4 w-4 text-brand-blue" />}
    </button>
  );
}
