import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { PrintingSection } from "@/components/PrintingSection";
import { OfficeSection } from "@/components/OfficeSection";
import { AutoSection } from "@/components/AutoSection";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SM Services Print — Impression, Bureautique & Automobile Premium" },
      {
        name: "description",
        content:
          "SM Services Print : votre partenaire multi-services à Libreville, Gabon. Impression haute définition, bureautique professionnelle, location de véhicules et assurance automobile.",
      },
      { property: "og:title", content: "SM Services Print — Premium Multi-services" },
      {
        property: "og:description",
        content:
          "Impression, bureautique et automobile haut de gamme. Excellence et rapidité au service de vos projets.",
      },
      { property: "og:image", content: "/logo.jpeg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.jpeg" },
    ],
    links: [{ rel: "icon", href: "/logo.jpeg" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Loader />
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <PrintingSection />
        <OfficeSection />
        <AutoSection />
        <Gallery />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" richColors />
    </div>
  );
}
