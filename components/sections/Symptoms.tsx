import { Icon } from "@/components/ui/Icon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { symptoms } from "@/content";

export function Symptoms() {
  return (
    <div className="bg-azul-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-dorado">¿Cuándo consultar?</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Si te suena familiar, es momento de revisarlo</h2>
          <p className="mt-4 text-white/70">Muchos síntomas cotidianos tienen solución. No los normalices.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {symptoms.map((s) => (
            <div key={s.text} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <Icon name={s.icon} className="mt-0.5 h-6 w-6 shrink-0 text-dorado" />
              <p className="text-sm text-white/90">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <WhatsAppButton message="Hola, tengo algunos síntomas y quiero una valoración.">Quiero una valoración</WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
