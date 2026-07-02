import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/content";

export function Process() {
  return (
    <Section>
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-dorado-700">Cómo funciona</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-azul">Tu consulta en 4 pasos simples</h2>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-4">
        {process.map((s) => (
          <Reveal key={s.n}>
            <div className="relative">
              <span className="font-serif text-5xl font-semibold text-dorado/40">0{s.n}</span>
              <h3 className="mt-2 font-serif text-xl font-semibold text-azul">{s.title}</h3>
              <p className="mt-2 text-sm text-tinta/70">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
