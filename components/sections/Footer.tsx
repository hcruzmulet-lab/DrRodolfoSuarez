import { site, nav } from "@/content";

export function Footer() {
  const footLinks = nav.filter((n) => n.href !== "#proceso");
  return (
    <footer style={{ borderTop: "1px solid rgba(200,162,76,.16)", background: "#0a121e" }}>
      <div data-pad style={{ maxWidth: 1240, margin: "0 auto", padding: "44px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.png" alt="Logo Dr. Rodolfo Suárez" width={44} height={44} style={{ display: "block" }} />
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: "#f5f1e8" }}>{site.doctor}</div>
            <div style={{ fontSize: 10.5, letterSpacing: "2px", textTransform: "uppercase", color: "#c8a24c" }}>{site.specialty} · {site.city}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 26, fontSize: 13, color: "rgba(233,237,245,.6)" }}>
          {footLinks.map((n) => (
            <a key={n.href} href={n.href} className="foot-link">{n.label}</a>
          ))}
        </div>
        <div style={{ fontSize: 12, color: "rgba(233,237,245,.4)" }}>© 2026 · Todos los derechos reservados</div>
      </div>
    </footer>
  );
}
