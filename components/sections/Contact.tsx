import { site } from "@/content";
import { waLink } from "@/lib/whatsapp";
import { WaIcon } from "@/components/ui/WaIcon";

export function Contact() {
  const wa = waLink(site.waMessage);
  return (
    <section id="contacto" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#0b2545,#06111f)", borderTop: "1px solid rgba(200,162,76,.18)", scrollMarginTop: 70 }}>
      <div style={{ position: "absolute", top: -80, right: -60, width: 420, height: 420, background: "radial-gradient(circle,rgba(200,162,76,.18),transparent 60%)", filter: "blur(20px)", animation: "floaty 10s ease-in-out infinite" }} />
      <div data-doc data-pad style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 40px", position: "relative", display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 60, alignItems: "center" }}>
        <div>
          <span style={{ fontSize: 11.5, letterSpacing: "2.6px", textTransform: "uppercase", color: "#c8a24c", fontWeight: 600 }}>Da el primer paso</span>
          <h2 style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontWeight: 600, fontSize: 52, lineHeight: 1.06, margin: "14px 0 18px", color: "#f7f3ea" }}>Tu bienestar<br />empieza hoy</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(233,237,245,.72)", maxWidth: 440, margin: "0 0 30px" }}>No dejes que las molestias de oído, nariz o garganta sigan robándote calidad de vida. Escríbeme y agenda tu cita en minutos.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ display: "inline-flex", alignItems: "center", gap: 11, padding: "18px 30px", background: "#25d366", color: "#052012", borderRadius: 100, fontWeight: 800, fontSize: 16, boxShadow: "0 16px 40px rgba(37,211,102,.35)" }}>
            <WaIcon size={21} />
            Agendar por WhatsApp
          </a>
          <div style={{ marginTop: 22, fontSize: 13, color: "rgba(233,237,245,.55)" }}>o llama al <strong style={{ color: "#e0c88a" }}>{site.phoneDisplay}</strong></div>
        </div>
        <div style={{ border: "1px solid rgba(200,162,76,.22)", borderRadius: 18, overflow: "hidden", background: "rgba(6,17,31,.5)" }}>
          <div style={{ position: "relative", height: 190, background: "#0b2545" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Ubicación en Quito" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(6,17,31,.85),rgba(6,17,31,.15))" }} />
            <div style={{ position: "absolute", left: 20, bottom: 16, display: "flex", alignItems: "center", gap: 8, color: "#f5f1e8" }}>
              <span style={{ color: "#c8a24c", fontSize: 20 }}>◈</span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>Av. Amazonas · {site.city}</span>
            </div>
          </div>
          <div style={{ padding: "24px 26px", display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ color: "#c8a24c", fontSize: 17 }}>◈</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#f5f1e8", marginBottom: 2 }}>Dirección</div>
                <div style={{ fontSize: 13.5, color: "rgba(233,237,245,.68)", lineHeight: 1.5 }}>{site.address.line1}<br />{site.address.line2}</div>
              </div>
            </div>
            <div style={{ height: 1, background: "rgba(200,162,76,.14)" }} />
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ color: "#c8a24c", fontSize: 17 }}>◷</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#f5f1e8", marginBottom: 2 }}>Horarios</div>
                <div style={{ fontSize: 13.5, color: "rgba(233,237,245,.68)", lineHeight: 1.5 }}>{site.hours[0]}<br />{site.hours[1]}</div>
              </div>
            </div>
            <div style={{ height: 1, background: "rgba(200,162,76,.14)" }} />
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ color: "#c8a24c", fontSize: 17 }}>✆</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#f5f1e8", marginBottom: 2 }}>WhatsApp / Teléfono</div>
                <div style={{ fontSize: 13.5, color: "rgba(233,237,245,.68)" }}>{site.phoneDisplay}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
