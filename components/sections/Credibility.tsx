import { credibility } from "@/content";

export function Credibility() {
  return (
    <section style={{ borderTop: "1px solid rgba(var(--gold-rgb),.14)", borderBottom: "1px solid rgba(var(--gold-rgb),.14)", background: "linear-gradient(180deg,rgba(var(--surface-rgb),.35),transparent)" }}>
      <div data-3col data-pad style={{ maxWidth: 1240, margin: "0 auto", padding: "26px 40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
        {credibility.map((c) => (
          <div key={c.strong} style={{ display: "flex", alignItems: "center", gap: 13 }}>
            <span style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontSize: 26, color: "var(--gold)" }}>✦</span>
            <div style={{ fontSize: 13.5, lineHeight: 1.35, color: "rgba(var(--text-rgb),.82)" }}>
              <strong style={{ color: "var(--text-strong)" }}>{c.strong}</strong><br />{c.rest}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
