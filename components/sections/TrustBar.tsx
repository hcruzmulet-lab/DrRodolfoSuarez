import { metrics } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar() {
  return (
    <div className="bg-azul">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        {metrics.map((m) => (
          <Reveal key={m.label} className="text-center">
            <p className="font-serif text-4xl font-semibold text-dorado md:text-5xl">{m.value}</p>
            <p className="mt-2 text-sm text-white/70">{m.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
