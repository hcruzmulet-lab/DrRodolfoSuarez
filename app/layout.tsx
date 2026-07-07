import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Rodolfo Suárez | Otorrinolaringología en Quito",
  description:
    "Diagnóstico preciso y trato humano para oído, nariz y garganta. +15 años de experiencia en Quito. Agenda tu cita por WhatsApp con el Dr. Rodolfo Suárez.",
  openGraph: {
    title: "Dr. Rodolfo Suárez | Otorrinolaringología en Quito",
    description:
      "Diagnóstico preciso y trato humano para oído, nariz y garganta. Agenda tu cita por WhatsApp.",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rodolfo Suárez | Otorrinolaringología en Quito",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#top" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
