import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/content";

export function Testimonials() {
  return (
    <Section className="bg-hueso">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-dorado-700">Testimonios</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-azul">Pacientes que ya viven mejor</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Reveal key={t.name}>
            <Card className="flex h-full flex-col">
              <span className="font-serif text-5xl leading-none text-dorado/50">"</span>
              <p className="mt-2 flex-1 text-tinta/80">{t.text}</p>
              <div className="mt-5">
                <p className="font-semibold text-azul">{t.name}</p>
                <p className="text-xs text-tinta/60">{t.meta}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
