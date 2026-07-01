import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["500","600","700"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Dr. Rodolfo Suárez | Otorrinolaringología",
  description: "Atención especializada en oído, nariz y garganta. Agenda tu consulta por WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-hueso text-tinta font-sans antialiased">{children}</body>
    </html>
  );
}
