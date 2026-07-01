import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { hero } from "@/content";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-40">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-dorado/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-dorado/40 px-4 py-1 text-xs uppercase tracking-widest text-azul">
            <span className="h-1.5 w-1.5 rounded-full bg-dorado" />{hero.badge}
          </span>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-azul md:text-6xl">{hero.title}</h1>
          <p className="mt-5 max-w-md text-lg text-tinta/70">{hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton message="Hola, quiero agendar una consulta.">Reservar por WhatsApp</WhatsAppButton>
            <Button href="#sobre" variant="ghost">Conoce al doctor</Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-azul/10">
            <Image src={hero.photo} alt="Dr. Rodolfo Suárez" fill className="object-cover" sizes="(max-width:768px) 100vw, 400px" priority />
          </div>
          <Card className="absolute -left-4 top-10 w-40 !p-4">
            <p className="font-serif text-2xl font-semibold text-azul">{hero.floatingCards[0].top}</p>
            <p className="text-xs text-tinta/60">{hero.floatingCards[0].bottom}</p>
          </Card>
          <Card className="absolute -bottom-4 right-0 w-52 !p-4">
            <p className="text-sm font-medium text-azul">{hero.floatingCards[1].top}</p>
            <p className="text-xs text-tinta/60">{hero.floatingCards[1].bottom}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
