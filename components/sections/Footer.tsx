import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content";

export function Footer() {
  return (
    <footer id="contacto" className="bg-azul-900 text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo-mark.png" alt="Logo" width={40} height={40} />
            <div>
              <p className="font-serif text-lg font-semibold text-white">{site.doctor}</p>
              <p className="text-xs uppercase tracking-widest text-dorado">{site.specialty}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/60">Atención especializada en oído, nariz y garganta.</p>
        </div>
        <div>
          <p className="font-medium text-white">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Icon name="whatsapp" className="h-4 w-4 text-dorado" />{site.phoneDisplay}</li>
            <li>{site.email}</li>
            <li className="flex items-start gap-2"><Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-dorado" />{site.address}</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-white">Navegación</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-dorado">Sobre el doctor</a></li>
            <li><a href="#servicios" className="hover:text-dorado">Servicios</a></li>
            <li><a href="#clinicas" className="hover:text-dorado">Clínicas</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {site.doctor} — {site.specialty}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
