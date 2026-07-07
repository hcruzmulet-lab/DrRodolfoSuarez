import { testimonials } from "@/content";

export function Testimonials() {
  return (
    <section id="testimonios" data-pad style={{ maxWidth: 1240, margin: "0 auto", padding: "100px 40px", scrollMarginTop: 90 }}>
      <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 52px" }}>
        <span style={{ fontSize: 11.5, letterSpacing: "2.6px", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Lo que dicen los pacientes</span>
        <h2 style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontWeight: 600, fontSize: 46, lineHeight: 1.1, margin: "14px 0 0", color: "var(--heading)" }}>Confianza que se siente</h2>
      </div>
      <div data-3col style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
        {testimonials.map((t) => (
          <figure key={t.name} style={{ margin: 0, padding: "32px 28px", border: "1px solid rgba(var(--gold-rgb),.16)", borderRadius: 18, background: "linear-gradient(160deg,rgba(var(--surface-rgb),.5),rgba(var(--surface-rgb),.12))" }}>
            <div style={{ color: "var(--gold)", fontSize: 15, letterSpacing: "2px", marginBottom: 16 }}>★★★★★</div>
            <blockquote style={{ margin: "0 0 22px", fontSize: 15.5, lineHeight: 1.65, color: "rgba(var(--text-rgb),.85)", fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: "50%", background: "var(--panel)", border: "1px solid rgba(var(--gold-rgb),.3)", fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", color: "var(--gold)", fontWeight: 600 }}>{t.initials}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-strong)" }}>{t.name}</div>
                <div style={{ fontSize: 12, color: "rgba(var(--text-rgb),.55)" }}>{t.place}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
