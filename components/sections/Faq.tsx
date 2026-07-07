import { faqs } from "@/content";

export function Faq() {
  return (
    <section data-pad style={{ maxWidth: 820, margin: "0 auto", padding: "40px 40px 100px" }}>
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <span style={{ fontSize: 11.5, letterSpacing: "2.6px", textTransform: "uppercase", color: "#c8a24c", fontWeight: 600 }}>Preguntas frecuentes</span>
        <h2 style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontWeight: 600, fontSize: 42, lineHeight: 1.1, margin: "14px 0 0", color: "#f7f3ea" }}>Antes de tu cita</h2>
      </div>
      {faqs.map((f) => (
        <details key={f.q} style={{ borderBottom: "1px solid rgba(200,162,76,.16)", padding: "22px 4px" }}>
          <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, fontSize: 17, fontWeight: 600, color: "#f5f1e8" }}>
            {f.q}
            <span className="chev" style={{ color: "#c8a24c", transition: "transform .3s", fontSize: 14 }}>▼</span>
          </summary>
          <p className="faq-a" style={{ margin: "14px 0 0", fontSize: 14.5, lineHeight: 1.65, color: "rgba(233,237,245,.68)" }}>{f.a}</p>
        </details>
      ))}
    </section>
  );
}
