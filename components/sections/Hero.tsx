import { site, heroStats } from "@/content";
import { waLink } from "@/lib/whatsapp";
import { WaIcon } from "@/components/ui/WaIcon";

export function Hero() {
  const wa = waLink(site.waMessage);
  return (
    <header id="top" style={{ position: "relative", overflow: "hidden", minHeight: 760, display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/dr-rodolfo-hero.jpg" alt="Dr. Rodolfo Suárez, otorrinolaringólogo" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "72% 18%" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(100deg,#06111f 0%,#06111f 26%,rgba(6,17,31,.82) 42%,rgba(6,17,31,.4) 60%,rgba(9,20,40,.55) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to top,#06111f 1%,transparent 26%)" }} />
      <div style={{ position: "absolute", top: "10%", right: "7%", width: 360, height: 360, zIndex: 1, background: "radial-gradient(circle,rgba(200,162,76,.16),transparent 62%)", filter: "blur(18px)", pointerEvents: "none", animation: "floaty 9s ease-in-out infinite" }} />

      <div data-pad style={{ position: "relative", zIndex: 3, maxWidth: 1240, margin: "0 auto", padding: "150px 40px 80px", width: "100%" }}>
        <div data-hero style={{ maxWidth: 560 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "7px 16px", border: "1px solid rgba(200,162,76,.4)", borderRadius: 100, fontSize: 11.5, letterSpacing: "2px", textTransform: "uppercase", color: "#e0c88a", marginBottom: 26 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#25d366", boxShadow: "0 0 0 0 rgba(37,211,102,.6)", animation: "ringpulse 2s infinite" }} />
            Atención el mismo día · {site.city}
          </span>
          <h1 data-h1 style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontWeight: 600, fontSize: 74, lineHeight: 1.02, letterSpacing: "-.5px", margin: "0 0 22px", color: "#f7f3ea" }}>
            Escucha, respira<br />y vive{" "}
            <em style={{ fontStyle: "italic", background: "linear-gradient(100deg,#c8a24c,#f0dca0,#c8a24c)", backgroundSize: "220% auto", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", animation: "shimmer 5s linear infinite" }}>sin límites</em>.
          </h1>
          <p style={{ fontSize: 17.5, lineHeight: 1.65, color: "rgba(233,237,245,.72)", maxWidth: 480, margin: "0 0 34px" }}>
            Diagnóstico preciso y trato humano para tu <strong style={{ color: "#e9edf5", fontWeight: 600 }}>oído, nariz y garganta</strong>. Más de 18 años devolviéndoles a los pacientes de {site.city} la tranquilidad de sentirse bien.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 26px", background: "#25d366", color: "#052012", borderRadius: 100, fontWeight: 700, fontSize: 15, boxShadow: "0 14px 34px rgba(37,211,102,.32)" }}>
              <WaIcon size={19} />
              Agendar por WhatsApp
            </a>
            <a href="#servicios" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "16px 26px", border: "1px solid rgba(200,162,76,.42)", color: "#f5f1e8", borderRadius: 100, fontWeight: 600, fontSize: 15 }}>
              Ver servicios
              <span style={{ animation: "bob 1.6s ease-in-out infinite", display: "inline-block" }}>↓</span>
            </a>
          </div>
          <div data-stats style={{ display: "flex", gap: 30, alignItems: "center" }}>
            {heroStats.map((s, i) => (
              <div key={s.label} style={{ display: "contents" }}>
                {i > 0 && <div style={{ width: 1, height: 38, background: "rgba(200,162,76,.25)" }} />}
                <div>
                  <div style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontSize: 34, fontWeight: 600, color: "#c8a24c", lineHeight: 1 }}>
                    {s.value}{s.star && <span style={{ fontSize: 18 }}>★</span>}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(233,237,245,.6)", letterSpacing: ".4px" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
