"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/content";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicios", label: "Servicios" },
  { href: "#clinicas", label: "Clínicas" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? "bg-hueso/90 backdrop-blur border-b border-azul/10 py-3" : "py-5"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <Image src="/logo-mark.png" alt="Logo Dr. Rodolfo Suárez" width={36} height={36} />
          <span className="font-serif text-lg font-semibold text-azul">{site.doctor}</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(l => <a key={l.href} href={l.href} className="text-sm text-tinta/70 hover:text-azul">{l.label}</a>)}
        </div>
        <WhatsAppButton message="Hola, quiero agendar una consulta." className="!py-2 !px-4 text-xs">Reservar</WhatsAppButton>
      </nav>
    </header>
  );
}
