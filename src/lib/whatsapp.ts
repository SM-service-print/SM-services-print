export const WHATSAPP_NUMBERS = {
  office: "24174392437",
  printing: "24166582878",
  auto: "24166582878",
  default: "24166582878",
} as const;

export const PHONE_DISPLAY = {
  office: "+241 74 39 24 37",
  printing: "+241 66 58 28 78",
  auto: "+241 66 58 28 78",
  default: "+241 66 58 28 78",
} as const;

export const EMAIL = "empiresmservices@gmail.com";
export const ADDRESS = "Poste d'Akébé, non loin de la clinique Madi — Libreville, Gabon";
export const HOURS = "Lun – Sam · 8h00 – 19h00";

type Service = keyof typeof WHATSAPP_NUMBERS;

export const wa = (msg: string, service: Service = "default") =>
  `https://wa.me/${WHATSAPP_NUMBERS[service]}?text=${encodeURIComponent(msg)}`;
