import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content";

export function Services() {
  return (
    <Section id="servicios" className="bg-hueso">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-dorado-600">Especialidades</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-azul">Cuidamos tu oído, nariz y garganta</h2>
        <p className="mt-3 text-tinta/70">Atención integral con diagnóstico preciso y tratamiento a tu medida.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Reveal key={s.id}>
            <Card className="flex h-full flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-dorado/30 text-dorado">
                <Icon name={s.icon} />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-azul">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-tinta/70">{s.desc}</p>
              <WhatsAppButton message={s.waMessage} variant="ghost" className="mt-5 self-start !py-2 !px-4 text-xs">Consultar</WhatsAppButton>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
