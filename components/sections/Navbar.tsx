import { site, nav } from "@/content";
import { waLink } from "@/lib/whatsapp";
import { WaIcon } from "@/components/ui/WaIcon";

export function Navbar() {
  const wa = waLink(site.waMessage);
  return (
    <nav
      data-pad
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 40px", background: "rgba(6,17,31,.72)",
        backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(200,162,76,.16)",
      }}
    >
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: 13 }}>
        <span style={{
          display: "grid", placeItems: "center", width: 44, height: 44,
          border: "1.5px solid #c8a24c", borderRadius: "50%",
          fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontWeight: 700, fontSize: 20,
          color: "#c8a24c", letterSpacing: ".5px",
        }}>RS</span>
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontSize: 19, fontWeight: 600, letterSpacing: ".3px", color: "#f5f1e8" }}>{site.doctor}</span>
          <span style={{ fontSize: 10.5, letterSpacing: "2.4px", textTransform: "uppercase", color: "#c8a24c" }}>{site.specialty}</span>
        </span>
      </a>
      <div data-nav-links style={{ display: "flex", alignItems: "center", gap: 34 }}>
        {nav.map((n) => (
          <a key={n.href} href={n.href} style={{ fontSize: 13.5, fontWeight: 500, color: "rgba(233,237,245,.8)" }}>{n.label}</a>
        ))}
      </div>
      <a
        href={wa} target="_blank" rel="noopener noreferrer" className="nav-cta"
        style={{
          display: "inline-flex", alignItems: "center", gap: 9, padding: "11px 20px",
          background: "#25d366", color: "#052012", borderRadius: 100, fontWeight: 700,
          fontSize: 13.5, boxShadow: "0 8px 24px rgba(37,211,102,.28)",
        }}
      >
        <WaIcon size={17} />
        Agendar cita
      </a>
    </nav>
  );
}
