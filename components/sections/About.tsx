import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { about, site } from "@/content";

export function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-azul/10">
          <Image src={about.photo} alt={site.doctor} fill className="object-cover" sizes="(max-width:768px) 100vw, 400px" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-dorado-600">Sobre el especialista</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-azul">{site.doctor}</h2>
          {about.paragraphs.map((p, i) => <p key={i} className="mt-4 text-tinta/75">{p}</p>)}
          <ul className="mt-6 space-y-3">
            {about.credentials.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-tinta/80">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-dorado" />{c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
