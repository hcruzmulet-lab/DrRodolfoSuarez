import { site } from "@/content";

export function waLink(message?: string): string {
  const phone = site.whatsapp.replace(/\D/g, "");
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
