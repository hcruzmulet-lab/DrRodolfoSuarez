import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { clinics } from "@/content";

export function Clinics() {
  return (
    <Section id="clinicas">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-dorado-600">Ubicaciones</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-azul">Encuéntranos</h2>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {clinics.map((c) => (
          <Card key={c.name} className="overflow-hidden !p-0">
            <iframe src={c.embedUrl} title={`Mapa ${c.name}`} loading="lazy" className="h-56 w-full border-0" />
            <div className="p-6">
              <h3 className="font-serif text-2xl font-semibold text-azul">{c.name}</h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-tinta/75"><Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-dorado" />{c.address}</p>
              <p className="mt-2 flex items-start gap-2 text-sm text-tinta/75"><Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-dorado" />{c.hours}</p>
              <Button href={c.mapsUrl} external variant="ghost" className="mt-5 !py-2 !px-4 text-xs">Cómo llegar</Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
