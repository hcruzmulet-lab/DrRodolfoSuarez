import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["500","600","700"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Dr. Rodolfo Suárez | Otorrinolaringología",
  description: "Atención especializada en oído, nariz y garganta. Agenda tu consulta por WhatsApp con el Dr. Rodolfo Suárez.",
  openGraph: {
    title: "Dr. Rodolfo Suárez | Otorrinolaringología",
    description: "Atención especializada en oído, nariz y garganta. Agenda tu consulta por WhatsApp.",
    locale: "es_MX", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Dr. Rodolfo Suárez | Otorrinolaringología" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-hueso text-tinta font-sans antialiased">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-azul focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
