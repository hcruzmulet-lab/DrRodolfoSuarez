import { process } from "@/content";

export function Process() {
  return (
    <section id="proceso" style={{ position: "relative", background: "linear-gradient(180deg,rgba(11,37,69,.4),rgba(6,17,31,0))", scrollMarginTop: 90 }}>
      <div data-pad style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 40px" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
          <span style={{ fontSize: 11.5, letterSpacing: "2.6px", textTransform: "uppercase", color: "#c8a24c", fontWeight: 600 }}>Así de fácil</span>
          <h2 style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontWeight: 600, fontSize: 46, lineHeight: 1.1, margin: "14px 0 0", color: "#f7f3ea" }}>Agenda tu cita en 3 pasos</h2>
        </div>
        <div data-3col style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
          {process.map((p) => (
            <div key={p.n} style={{ position: "relative", padding: "34px 28px", border: "1px solid rgba(200,162,76,.16)", borderRadius: 18, background: "rgba(6,17,31,.5)" }}>
              <div style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontSize: 56, fontWeight: 700, color: "rgba(200,162,76,.28)", lineHeight: 1, marginBottom: 8 }}>{p.n}</div>
              <h3 style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontSize: 24, fontWeight: 600, margin: "0 0 8px", color: "#f5f1e8" }}>{p.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(233,237,245,.66)", margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
