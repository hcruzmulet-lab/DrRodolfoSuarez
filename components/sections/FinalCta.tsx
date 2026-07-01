import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <div className="bg-azul">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">Agenda tu consulta hoy</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">Da el primer paso para respirar, escuchar y vivir mejor. Te respondemos el mismo día.</p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton message="Hola, quiero agendar una consulta.">Reservar por WhatsApp</WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
