"use client";

import { useRef } from "react";
import { site, services } from "@/content";
import { waLink } from "@/lib/whatsapp";

export function Services() {
  const wa = waLink(site.waMessage);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scroll: 0, moved: false });

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const amt = Math.min(el.clientWidth * 0.85, 700) * dir;
    const start = el.scrollLeft;
    const max = el.scrollWidth - el.clientWidth;
    const target = Math.max(0, Math.min(max, start + amt));
    const dur = 460;
    const t0 = performance.now();
    const ease = (p: number) => 1 - Math.pow(1 - p, 3);
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      el.scrollLeft = start + (target - start) * ease(p);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    drag.current = { active: true, startX: e.clientX, scroll: el.scrollLeft, moved: false };
    el.style.cursor = "grabbing";
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const el = e.currentTarget;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.scroll - dx;
  };
  const onUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.cursor = "grab";
    drag.current.active = false;
  };
  const onCardClick = (e: React.MouseEvent) => {
    if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); }
  };

  const arrowBtn: React.CSSProperties = {
    display: "grid", placeItems: "center", width: 50, height: 50, borderRadius: "50%",
    border: "1px solid rgba(var(--gold-rgb),.45)", background: "transparent", color: "var(--gold)",
    fontSize: 22, cursor: "pointer",
  };

  return (
    <section id="servicios" data-pad style={{ maxWidth: 1240, margin: "0 auto", padding: "100px 40px 40px", scrollMarginTop: 90 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 30, flexWrap: "wrap", marginBottom: 44 }}>
        <div style={{ maxWidth: 620 }}>
          <span style={{ fontSize: 11.5, letterSpacing: "2.6px", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Especialidades</span>
          <h2 style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontWeight: 600, fontSize: 48, lineHeight: 1.08, margin: "14px 0 0", color: "var(--heading)" }}>Cuidado integral de oído,<br />nariz y garganta</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
          <p style={{ maxWidth: 340, fontSize: 15, lineHeight: 1.6, color: "rgba(var(--text-rgb),.66)", margin: 0 }}>Desde un simple tapón de cera hasta cirugía avanzada, cada tratamiento se adapta a ti. <span style={{ color: "var(--gold-2)", whiteSpace: "nowrap" }}>Desliza para explorar →</span></p>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => scrollBy(-1)} aria-label="Anterior" className="icon-btn" style={arrowBtn}>‹</button>
            <button onClick={() => scrollBy(1)} aria-label="Siguiente" className="icon-btn" style={arrowBtn}>›</button>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: -40, top: 0, bottom: 16, width: 70, zIndex: 3, pointerEvents: "none", background: "linear-gradient(90deg,var(--bg),transparent)" }} />
        <div style={{ position: "absolute", right: -40, top: 0, bottom: 16, width: 70, zIndex: 3, pointerEvents: "none", background: "linear-gradient(270deg,var(--bg),transparent)" }} />
        <div
          ref={trackRef} data-track
          onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}
          style={{ display: "flex", gap: 20, overflowX: "auto", scrollSnapType: "x mandatory", padding: "10px 2px 26px", cursor: "grab", scrollbarWidth: "none" }}
        >
          {services.map((s) => (
            <a
              key={s.n} href={wa} target="_blank" rel="noopener noreferrer" onClick={onCardClick} className="svc-card"
              style={{
                flex: "0 0 330px", scrollSnapAlign: "start", position: "relative", display: "block",
                padding: "34px 30px 30px", border: "1px solid rgba(var(--gold-rgb),.16)", borderRadius: 18,
                background: "linear-gradient(160deg,rgba(var(--surface-rgb),.55),rgba(var(--surface-rgb),.1))", overflow: "hidden", userSelect: "none",
              }}
            >
              <div style={{ position: "absolute", top: 2, right: 18, fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontSize: 94, fontWeight: 700, lineHeight: 1, color: "rgba(var(--gold-rgb),.09)", pointerEvents: "none" }}>{s.n}</div>
              <div style={{ position: "relative", display: "inline-block", padding: "5px 12px", border: "1px solid rgba(var(--gold-rgb),.35)", borderRadius: 100, fontSize: 10.5, letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold-2)", marginBottom: 58 }}>{s.tag}</div>
              <h3 style={{ position: "relative", fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontSize: 25, fontWeight: 600, margin: "0 0 10px", color: "var(--text-strong)" }}>{s.title}</h3>
              <p style={{ position: "relative", fontSize: 14, lineHeight: 1.6, color: "rgba(var(--text-rgb),.66)", margin: "0 0 18px" }}>{s.desc}</p>
              <span style={{ position: "relative", fontSize: 13, fontWeight: 700, color: "var(--gold-2)" }}>Consultar →</span>
              <div style={{ position: "absolute", left: 0, bottom: 0, height: 3, width: "100%", background: "linear-gradient(90deg,var(--gold),rgba(var(--gold-rgb),0))" }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
