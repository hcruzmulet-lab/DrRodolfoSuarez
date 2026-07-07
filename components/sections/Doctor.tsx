import { site, doctor } from "@/content";
import { waLink } from "@/lib/whatsapp";
import { WaIcon } from "@/components/ui/WaIcon";

export function Doctor() {
  const wa = waLink(site.waMessage);
  return (
    <section id="doctor" data-pad style={{ maxWidth: 1240, margin: "0 auto", padding: "100px 40px", scrollMarginTop: 90 }}>
      <div data-doc style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 60, alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: -14, border: "1px solid rgba(200,162,76,.3)", borderRadius: 22 }} />
          <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", aspectRatio: "5 / 6", background: "#0b2545", boxShadow: "0 30px 70px rgba(0,0,0,.5)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/dr-rodolfo-retrato.jpg" alt="Dr. Rodolfo Suárez, otorrinolaringólogo" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
          </div>
          <div style={{ position: "absolute", bottom: -26, right: -20, background: "#c8a24c", color: "#06111f", borderRadius: 14, padding: "16px 20px", boxShadow: "0 20px 40px rgba(200,162,76,.3)" }}>
            <div style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontSize: 30, fontWeight: 700, lineHeight: 1 }}>18+</div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".5px", textTransform: "uppercase" }}>años cuidando pacientes</div>
          </div>
        </div>
        <div>
          <span style={{ fontSize: 11.5, letterSpacing: "2.6px", textTransform: "uppercase", color: "#c8a24c", fontWeight: 600 }}>Conoce a tu especialista</span>
          <h2 style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontWeight: 600, fontSize: 46, lineHeight: 1.1, margin: "14px 0 20px", color: "#f7f3ea" }}>{site.doctor}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(233,237,245,.75)", margin: "0 0 18px" }}>
            Otorrinolaringólogo y cirujano con más de 18 años de trayectoria. Su enfoque combina la <strong style={{ color: "#f5f1e8", fontWeight: 600 }}>precisión médica</strong> con un trato humano y cercano: escuchar primero, explicar con claridad y tratar con la tecnología adecuada para cada caso.
          </p>
          <div data-2col style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "28px 0 30px" }}>
            {doctor.credentials.map((c) => (
              <div key={c.bold} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                <span style={{ color: "#c8a24c", fontSize: 17 }}>✦</span>
                <span style={{ fontSize: 13.5, lineHeight: 1.4, color: "rgba(233,237,245,.8)" }}><strong style={{ color: "#f5f1e8" }}>{c.bold}</strong>{c.text}</span>
              </div>
            ))}
          </div>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 26px", background: "#25d366", color: "#052012", borderRadius: 100, fontWeight: 700, fontSize: 15, boxShadow: "0 12px 30px rgba(37,211,102,.3)" }}>
            <WaIcon size={18} />
            Hablar con el Dr. Suárez
          </a>
        </div>
      </div>
    </section>
  );
}
