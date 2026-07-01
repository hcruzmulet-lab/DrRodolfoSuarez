import { Section } from "@/components/ui/Section";
import { faqs } from "@/content";

export function Faq() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs uppercase tracking-widest text-dorado-600">Preguntas frecuentes</p>
        <h2 className="mt-3 text-center font-serif text-4xl font-semibold text-azul">Resolvemos tus dudas</h2>
        <div className="mt-10 divide-y divide-azul/10 border-y border-azul/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-azul">
                {f.q}<span className="text-dorado transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-tinta/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
