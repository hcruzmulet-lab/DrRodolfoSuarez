# Landing Page — Dr. Rodolfo Suárez — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page, WhatsApp-first landing that promotes Dr. Rodolfo Suárez's ENT (otorrinolaringología) practice and drives patients to book consultations.

**Architecture:** Next.js App Router (TypeScript). One `content.ts` centralizes all editable data. One React component per section under `components/sections/`, shared primitives under `components/ui/`. A `waLink()` helper builds pre-filled WhatsApp deep links used by every CTA. Styling via Tailwind with brand tokens. Aesthetic: "editorial clínico" — bone/white background, big serif headings, clean sans body, institutional blue with gold as a thin accent only.

**Tech Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS, `next/font`, Vitest (unit tests for logic), Unsplash images, Vercel deploy.

## Global Constraints

- Language: Spanish (es) only. All copy in Spanish.
- Palette (Tailwind tokens): `azul` institutional blue `#1B3A5B`, `dorado` gold `#C6A15B`, `hueso` bone `#F7F4EF`, `tinta` near-black `#111318`. Gold is an ACCENT only (lines, icon strokes, underlines, borders) — never large fills of gold text on light.
- Fonts: serif for headings (`Cormorant Garamond`), sans for body (`Inter`) via `next/font/google`, exposed as CSS vars `--font-serif` / `--font-sans`.
- Conversion: primary CTA is WhatsApp. Every CTA uses `waLink(message)`; number lives only in `content.ts`.
- No backend, no DB, no form submission, no CMS, no i18n, no auth (YAGNI per spec).
- Mobile-first responsive. Accessible: semantic HTML, visible focus, contrast, tap targets ≥ 44px. Public skews 40+.
- Commit after every task. Conventional Commits.
- All user-facing content read from `content.ts` — no hardcoded copy inside section components except non-editable UI labels.

## File Structure

```
app/
  layout.tsx            # fonts, metadata, <html lang="es">, global WhatsApp float
  page.tsx              # assembles all sections in order
  globals.css           # Tailwind directives + base tokens
components/
  ui/
    Section.tsx         # section wrapper (id, padding, max-width)
    Button.tsx          # variant: primary (gold) | ghost | dark; renders <a> or <button>
    Card.tsx            # bordered card primitive
    WhatsAppButton.tsx  # CTA button that wraps Button + waLink
    WhatsAppFloat.tsx   # fixed floating WA button
    Icon.tsx            # thin line SVG icons (ear/nose/throat/check/etc.)
    Reveal.tsx          # scroll fade-in wrapper (IntersectionObserver)
  sections/
    Navbar.tsx
    Hero.tsx
    TrustBar.tsx
    About.tsx
    Services.tsx
    Symptoms.tsx
    Process.tsx
    Testimonials.tsx
    Clinics.tsx
    Faq.tsx
    FinalCta.tsx
    Footer.tsx
lib/
  whatsapp.ts           # waLink(message) helper
  whatsapp.test.ts      # Vitest unit tests
content.ts              # ALL editable data (typed)
public/
  logo.svg / logo.png   # brand logo (from user assets)
  logo-mark.png         # symbol only
tailwind.config.ts
```

---

### Task 1: Scaffold Next.js + Tailwind + brand tokens + fonts

**Files:**
- Create: project scaffold (`app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `tailwind.config.ts`, `package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`)
- Create: `.gitignore`

**Interfaces:**
- Produces: Tailwind tokens `azul`, `dorado`, `hueso`, `tinta`; CSS vars `--font-serif`, `--font-sans`; a booting Next.js app.

- [ ] **Step 1: Scaffold app**

Run:
```bash
cd /Users/henrycruzmulet/work/DrRodolfoSuarez
npx create-next-app@latest . --ts --tailwind --app --no-src-dir --import-alias "@/*" --eslint --use-npm --no-turbopack
```
If the prompt complains the directory is not empty (docs/ exists), accept/continue; do not delete `docs/`.

- [ ] **Step 2: Configure brand tokens in `tailwind.config.ts`**

Set `theme.extend`:
```ts
colors: {
  azul: { DEFAULT: "#1B3A5B", 900: "#12283F", 700: "#1B3A5B", 500: "#2E5980" },
  dorado: { DEFAULT: "#C6A15B", 600: "#B08E48", 300: "#E3CE9E" },
  hueso: "#F7F4EF",
  tinta: "#111318",
},
fontFamily: {
  serif: ["var(--font-serif)", "Georgia", "serif"],
  sans: ["var(--font-sans)", "system-ui", "sans-serif"],
},
```

- [ ] **Step 3: Wire fonts + base metadata in `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["500","600","700"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Dr. Rodolfo Suárez | Otorrinolaringología",
  description: "Atención especializada en oído, nariz y garganta. Agenda tu consulta por WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-hueso text-tinta font-sans antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 4: Replace `app/page.tsx` with a minimal placeholder**

```tsx
export default function Home() {
  return <main className="p-10 font-serif text-4xl text-azul">Dr. Rodolfo Suárez</main>;
}
```

- [ ] **Step 5: Verify build + dev boot**

Run: `npm run build`
Expected: build succeeds, no type errors.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js app with brand tokens and fonts"
```

---

### Task 2: `waLink()` WhatsApp helper (TDD)

**Files:**
- Create: `lib/whatsapp.ts`
- Test: `lib/whatsapp.test.ts`
- Modify: `package.json` (add Vitest + test script)

**Interfaces:**
- Produces: `waLink(message?: string): string` — returns `https://wa.me/<PHONE>?text=<url-encoded message>`; when message omitted, returns bare `https://wa.me/<PHONE>`. Reads phone from `content.ts` (`site.whatsapp` digits only, no `+`/spaces).

- [ ] **Step 1: Add Vitest**

Run: `npm i -D vitest` then add to `package.json` scripts: `"test": "vitest run"`.

- [ ] **Step 2: Write the failing test**

`lib/whatsapp.test.ts`:
```ts
import { describe, it, expect } from "vitest";
import { waLink } from "./whatsapp";

describe("waLink", () => {
  it("builds a bare link with no message", () => {
    expect(waLink()).toMatch(/^https:\/\/wa\.me\/\d+$/);
  });
  it("appends a url-encoded message", () => {
    const url = waLink("Hola, quiero una cita");
    expect(url).toContain("?text=");
    expect(url).toContain("Hola%2C%20quiero%20una%20cita");
  });
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `npm test`
Expected: FAIL — cannot resolve `./whatsapp`.

- [ ] **Step 4: Implement `lib/whatsapp.ts`**

```ts
import { site } from "@/content";

export function waLink(message?: string): string {
  const phone = site.whatsapp.replace(/\D/g, "");
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
```
Note: `content.ts` is created in Task 3; add a temporary minimal `content.ts` now exporting `export const site = { whatsapp: "5215512345678" };` so the test resolves. Task 3 replaces it fully (keeps `whatsapp`).

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test`
Expected: PASS (2 tests).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add waLink WhatsApp deep-link helper with tests"
```

---

### Task 3: `content.ts` — all site data (typed)

**Files:**
- Create/replace: `content.ts`

**Interfaces:**
- Produces the typed data object every section consumes. Exact shape below — later tasks import these names.

- [ ] **Step 1: Write `content.ts`**

```ts
export type Metric = { value: string; label: string };
export type Service = { id: string; icon: "oido" | "nariz" | "garganta" | "vertigo" | "ronquido" | "audio"; title: string; desc: string; waMessage: string };
export type Symptom = { icon: string; text: string };
export type Step = { n: number; title: string; desc: string };
export type Testimonial = { name: string; text: string; meta: string };
export type Clinic = { name: string; address: string; hours: string; mapsUrl: string; embedUrl: string };
export type Faq = { q: string; a: string };

export const site = {
  doctor: "Dr. Rodolfo Suárez",
  specialty: "Otorrinolaringología",
  whatsapp: "5215512345678", // EDITAR: número real, solo dígitos con código país
  phoneDisplay: "+52 55 1234 5678", // EDITAR
  email: "contacto@drrodolfosuarez.com", // EDITAR
  socials: { instagram: "#", facebook: "#" }, // EDITAR
  address: "Ciudad de México", // EDITAR
};

export const hero = {
  badge: "Otorrinolaringólogo certificado",
  title: "Respira, escucha y vive mejor.",
  subtitle: "Atención especializada en oído, nariz y garganta con un trato humano y cercano.",
  photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80", // EDITAR: foto real del doctor
  floatingCards: [
    { top: "+15 años", bottom: "de experiencia clínica" },
    { top: "Atención por WhatsApp", bottom: "Respuesta el mismo día" },
  ],
};

export const metrics: Metric[] = [
  { value: "+15", label: "Años de experiencia" },
  { value: "+8,000", label: "Pacientes atendidos" },
  { value: "+2,000", label: "Procedimientos realizados" },
  { value: "4.9★", label: "Calificación de pacientes" },
]; // EDITAR valores

export const about = {
  photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80", // EDITAR
  paragraphs: [
    "El Dr. Rodolfo Suárez es especialista en otorrinolaringología, dedicado al diagnóstico y tratamiento de las enfermedades del oído, la nariz y la garganta.",
    "Su enfoque combina precisión médica con un trato cercano: escucha, explica y acompaña a cada paciente en su proceso.",
  ], // EDITAR
  credentials: [
    "Médico Cirujano — Universidad (EDITAR)",
    "Especialidad en Otorrinolaringología (EDITAR)",
    "Miembro de la Sociedad Mexicana de Otorrinolaringología (EDITAR)",
    "Educación médica continua en cirugía endoscópica nasal (EDITAR)",
  ],
};

export const services: Service[] = [
  { id: "oido", icon: "oido", title: "Oído", desc: "Infecciones, tapones, pérdida auditiva y dolor de oído.", waMessage: "Hola, quiero información sobre una consulta de oído." },
  { id: "nariz", icon: "nariz", title: "Nariz y senos paranasales", desc: "Sinusitis, congestión crónica, desviación septal y alergias.", waMessage: "Hola, quiero información sobre una consulta de nariz/sinusitis." },
  { id: "garganta", icon: "garganta", title: "Garganta", desc: "Amigdalitis, ronquera, dolor al tragar y reflujo.", waMessage: "Hola, quiero información sobre una consulta de garganta." },
  { id: "vertigo", icon: "vertigo", title: "Vértigo y mareo", desc: "Diagnóstico y tratamiento del vértigo y trastornos del equilibrio.", waMessage: "Hola, quiero información sobre vértigo/mareo." },
  { id: "ronquido", icon: "ronquido", title: "Ronquido y apnea del sueño", desc: "Evaluación del ronquido y la apnea obstructiva del sueño.", waMessage: "Hola, quiero información sobre ronquido/apnea del sueño." },
  { id: "audio", icon: "audio", title: "Audiometría", desc: "Estudios auditivos para medir y cuidar tu audición.", waMessage: "Hola, quiero información sobre una audiometría." },
]; // EDITAR

export const symptoms: Symptom[] = [
  { icon: "ronquido", text: "¿Roncas fuerte o dejas de respirar al dormir?" },
  { icon: "vertigo", text: "¿Sientes mareos o vértigo con frecuencia?" },
  { icon: "nariz", text: "¿Congestión nasal que no cede?" },
  { icon: "oido", text: "¿Dolor de oído o sensación de oído tapado?" },
  { icon: "garganta", text: "¿Dolor de garganta recurrente o ronquera?" },
  { icon: "audio", text: "¿Notas que escuchas menos que antes?" },
]; // EDITAR

export const process: Step[] = [
  { n: 1, title: "Agenda por WhatsApp", desc: "Escríbenos y elige el horario que mejor te acomode." },
  { n: 2, title: "Valoración", desc: "El doctor evalúa tu caso y escucha tus síntomas con calma." },
  { n: 3, title: "Diagnóstico", desc: "Estudios precisos para entender el origen del problema." },
  { n: 4, title: "Tratamiento", desc: "Un plan claro y a tu medida para que te sientas mejor." },
];

export const testimonials: Testimonial[] = [
  { name: "María G.", text: "Por fin resolví años de sinusitis. Explicó todo con paciencia y el trato fue excelente.", meta: "Paciente de nariz" },
  { name: "Jorge R.", text: "Dejé de roncar después del tratamiento. Mi esposa y yo dormimos mejor.", meta: "Apnea del sueño" },
  { name: "Ana L.", text: "El vértigo me tenía muy limitada. Hoy hago mi vida normal. Muy agradecida.", meta: "Vértigo" },
]; // EDITAR: reemplazar por reseñas reales

export const clinics: Clinic[] = [
  {
    name: "Clínica Central (EDITAR)",
    address: "Av. Ejemplo 123, Col. Centro, Ciudad de México",
    hours: "Lun–Vie 9:00–19:00 · Sáb 9:00–14:00",
    mapsUrl: "https://maps.google.com/?q=Ciudad+de+Mexico",
    embedUrl: "https://www.google.com/maps?q=Ciudad+de+Mexico&output=embed",
  },
]; // EDITAR

export const faqs: Faq[] = [
  { q: "¿Aceptan seguros médicos?", a: "Sí. Escríbenos por WhatsApp con el nombre de tu aseguradora y te confirmamos la cobertura. (EDITAR)" },
  { q: "¿Qué incluye la primera consulta?", a: "Una valoración completa de tu caso, revisión clínica y un plan a seguir. (EDITAR)" },
  { q: "¿Atienden urgencias?", a: "Escríbenos por WhatsApp y te orientamos lo antes posible. (EDITAR)" },
  { q: "¿Cuánto cuesta la consulta?", a: "El costo depende del tipo de valoración. Pregúntanos por WhatsApp. (EDITAR)" },
];
```

- [ ] **Step 2: Verify types + tests still pass**

Run: `npx tsc --noEmit && npm test`
Expected: no type errors; waLink tests still PASS.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add centralized typed site content"
```

---

### Task 4: UI primitives — Section, Button, Card, Icon, Reveal

**Files:**
- Create: `components/ui/Section.tsx`, `Button.tsx`, `Card.tsx`, `Icon.tsx`, `Reveal.tsx`

**Interfaces:**
- Produces:
  - `Section({ id?, className?, children })` → `<section>` with `mx-auto max-w-6xl px-6 py-20 md:py-28`.
  - `Button({ href?, onClick?, variant, children, className? })` where `variant: "primary" | "ghost" | "dark"`; renders `<a>` when `href` set, else `<button>`. Primary = gold bg, tinta text; ghost = transparent, azul border/text; dark = azul bg, white text.
  - `Card({ children, className? })` → white card, subtle border `border-azul/10`, rounded-2xl.
  - `Icon({ name, className? })` where `name: "oido"|"nariz"|"garganta"|"vertigo"|"ronquido"|"audio"|"check"|"whatsapp"|"pin"|"clock"|"arrow"` → thin-stroke SVG, `stroke="currentColor"`, default gold via className.
  - `Reveal({ children, className? })` → client component, fades/translates children in on scroll via IntersectionObserver.

- [ ] **Step 1: Write `Section.tsx`**

```tsx
export function Section({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) {
  return <section id={id} className={`mx-auto max-w-6xl px-6 py-20 md:py-28 ${className}`}>{children}</section>;
}
```

- [ ] **Step 2: Write `Button.tsx`**

```tsx
import Link from "next/link";

type Props = {
  href?: string; onClick?: () => void; variant?: "primary" | "ghost" | "dark";
  children: React.ReactNode; className?: string; external?: boolean;
};
const styles = {
  primary: "bg-dorado text-tinta hover:bg-dorado-600",
  ghost: "bg-transparent text-azul border border-azul/30 hover:bg-azul/5",
  dark: "bg-azul text-white hover:bg-azul-900",
};
export function Button({ href, onClick, variant = "primary", children, className = "", external }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors min-h-11 ${styles[variant]} ${className}`;
  if (href) return external
    ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
    : <Link href={href} className={cls}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
```

- [ ] **Step 3: Write `Card.tsx`**

```tsx
export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-azul/10 bg-white p-6 shadow-[0_1px_3px_rgba(17,19,24,0.04)] ${className}`}>{children}</div>;
}
```

- [ ] **Step 4: Write `Icon.tsx`**

Implement an SVG map. Each icon is a 24x24 `<svg fill="none" stroke="currentColor" stroke-width="1.5">` with simple line paths. Provide all names listed in Interfaces. Example skeleton:
```tsx
const paths: Record<string, React.ReactNode> = {
  check: <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />,
  whatsapp: <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3z" strokeLinecap="round" strokeLinejoin="round" />,
  pin: <><path d="M12 21s7-5.3 7-11a7 7 0 10-14 0c0 5.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" strokeLinecap="round"/></>,
  arrow: <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />,
  oido: <path d="M8 15a4 4 0 118 0M6 12a6 6 0 1112 0c0 2-1 3-2.5 4S13 21 12 21" strokeLinecap="round" />,
  nariz: <path d="M14 4v7l2 3a3 3 0 01-3 4H9M11 4v6" strokeLinecap="round" strokeLinejoin="round" />,
  garganta: <path d="M12 3v6a4 4 0 01-4 4M12 9a4 4 0 004 4M9 21h6" strokeLinecap="round" />,
  vertigo: <path d="M4 12a8 8 0 018-8M20 12a8 8 0 01-8 8M9 12a3 3 0 116 0" strokeLinecap="round" />,
  ronquido: <path d="M3 15h8M13 9h5M15 12h4M4 12h4" strokeLinecap="round" />,
  audio: <path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2" strokeLinecap="round" />,
};
export function Icon({ name, className = "" }: { name: keyof typeof paths | string; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={`h-6 w-6 ${className}`}>{paths[name] ?? paths.check}</svg>;
}
```

- [ ] **Step 5: Write `Reveal.tsx`**

```tsx
"use client";
import { useEffect, useRef, useState } from "react";
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${className}`}>{children}</div>;
}
```

- [ ] **Step 6: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add UI primitives (Section, Button, Card, Icon, Reveal)"
```

---

### Task 5: WhatsApp CTA components — WhatsAppButton + WhatsAppFloat

**Files:**
- Create: `components/ui/WhatsAppButton.tsx`, `components/ui/WhatsAppFloat.tsx`

**Interfaces:**
- Consumes: `Button`, `Icon`, `waLink`.
- Produces:
  - `WhatsAppButton({ message?, variant?, children, className? })` → a `Button` (external link) to `waLink(message)` with a WhatsApp icon.
  - `WhatsAppFloat()` → fixed bottom-right floating circular WA button linking `waLink()`.

- [ ] **Step 1: Write `WhatsAppButton.tsx`**

```tsx
import { Button } from "./Button";
import { Icon } from "./Icon";
import { waLink } from "@/lib/whatsapp";

export function WhatsAppButton({ message, variant = "primary", children, className }:
  { message?: string; variant?: "primary" | "ghost" | "dark"; children: React.ReactNode; className?: string }) {
  return (
    <Button href={waLink(message)} external variant={variant} className={className}>
      <Icon name="whatsapp" className="h-4 w-4" />{children}
    </Button>
  );
}
```

- [ ] **Step 2: Write `WhatsAppFloat.tsx`**

```tsx
import { Icon } from "./Icon";
import { waLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105">
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
```

- [ ] **Step 3: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add WhatsApp CTA button and floating button"
```

---

### Task 6: Navbar

**Files:**
- Create: `components/sections/Navbar.tsx`

**Interfaces:**
- Consumes: `WhatsAppButton`, `site`.
- Produces: `<Navbar />` — sticky top nav; logo left (`/logo.svg` + doctor name), anchor links center/right (`#inicio #sobre #servicios #clinicas #contacto`), WhatsApp CTA right. Client component: adds a background/shadow after scrolling > 8px. Mobile: hides anchor links, keeps logo + CTA.

- [ ] **Step 1: Write `Navbar.tsx`**

```tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/content";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicios", label: "Servicios" },
  { href: "#clinicas", label: "Clínicas" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? "bg-hueso/90 backdrop-blur border-b border-azul/10 py-3" : "py-5"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <Image src="/logo-mark.png" alt="Logo Dr. Rodolfo Suárez" width={36} height={36} />
          <span className="font-serif text-lg font-semibold text-azul">{site.doctor}</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(l => <a key={l.href} href={l.href} className="text-sm text-tinta/70 hover:text-azul">{l.label}</a>)}
        </div>
        <WhatsAppButton message="Hola, quiero agendar una consulta." className="!py-2 !px-4 text-xs">Reservar</WhatsAppButton>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Mount temporarily in `page.tsx` and verify build**

Add `<Navbar />` above the placeholder. Run: `npm run build`. Expected: success. (If `/logo-mark.png` missing, build still passes; image fixed in Task 16.)

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add sticky navbar"
```

---

### Task 7: Hero

**Files:**
- Create: `components/sections/Hero.tsx`

**Interfaces:**
- Consumes: `hero`, `WhatsAppButton`, `Button`, `Card`, `next/image`.
- Produces: `<Hero />` with `id="inicio"`. Two-column on md+, stacked on mobile. Left: badge, serif H1 (`hero.title`), subtitle, two CTAs (WhatsApp primary + ghost "Conoce al doctor" → `#sobre`). Right: doctor photo in rounded frame + two floating `Card`s from `hero.floatingCards`. Bone background with a subtle gold radial/line accent.

- [ ] **Step 1: Write `Hero.tsx`**

```tsx
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { hero } from "@/content";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-40">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-dorado/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-dorado/40 px-4 py-1 text-xs uppercase tracking-widest text-azul">
            <span className="h-1.5 w-1.5 rounded-full bg-dorado" />{hero.badge}
          </span>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-azul md:text-6xl">{hero.title}</h1>
          <p className="mt-5 max-w-md text-lg text-tinta/70">{hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton message="Hola, quiero agendar una consulta.">Reservar por WhatsApp</WhatsAppButton>
            <Button href="#sobre" variant="ghost">Conoce al doctor</Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-azul/10">
            <Image src={hero.photo} alt="Dr. Rodolfo Suárez" fill className="object-cover" sizes="(max-width:768px) 100vw, 400px" priority />
          </div>
          <Card className="absolute -left-4 top-10 w-40 !p-4">
            <p className="font-serif text-2xl font-semibold text-azul">{hero.floatingCards[0].top}</p>
            <p className="text-xs text-tinta/60">{hero.floatingCards[0].bottom}</p>
          </Card>
          <Card className="absolute -bottom-4 right-0 w-52 !p-4">
            <p className="text-sm font-medium text-azul">{hero.floatingCards[1].top}</p>
            <p className="text-xs text-tinta/60">{hero.floatingCards[1].bottom}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Configure Unsplash in `next.config.mjs`**

```js
const nextConfig = { images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] } };
export default nextConfig;
```

- [ ] **Step 3: Mount in page, verify build**

Run: `npm run build`. Expected: success.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add hero section"
```

---

### Task 8: TrustBar (metrics)

**Files:**
- Create: `components/sections/TrustBar.tsx`

**Interfaces:**
- Consumes: `metrics`, `Reveal`.
- Produces: `<TrustBar />` — full-width azul band; 4-up grid (2-up on mobile) of metrics; big serif numbers in gold, labels in white/70.

- [ ] **Step 1: Write `TrustBar.tsx`**

```tsx
import { metrics } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar() {
  return (
    <div className="bg-azul">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal key={m.label} className={`text-center`}>
            <p className="font-serif text-4xl font-semibold text-dorado md:text-5xl">{m.value}</p>
            <p className="mt-2 text-sm text-white/70">{m.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Mount, verify build**

Run: `npm run build`. Expected: success.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add trust bar metrics section"
```

---

### Task 9: About

**Files:**
- Create: `components/sections/About.tsx`

**Interfaces:**
- Consumes: `about`, `site`, `Section`, `Icon`, `next/image`.
- Produces: `<About />` with `id="sobre"`. Two columns: photo left (rounded, gold corner accent), text right — eyebrow, serif heading, `about.paragraphs`, credentials list with gold check icons.

- [ ] **Step 1: Write `About.tsx`**

```tsx
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { about, site } from "@/content";

export function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-azul/10">
          <Image src={about.photo} alt={site.doctor} fill className="object-cover" sizes="(max-width:768px) 100vw, 400px" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-dorado-600">Sobre el especialista</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-azul">{site.doctor}</h2>
          {about.paragraphs.map((p, i) => <p key={i} className="mt-4 text-tinta/75">{p}</p>)}
          <ul className="mt-6 space-y-3">
            {about.credentials.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-tinta/80">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-dorado" />{c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Mount, verify build.** Run: `npm run build`. Expected: success.
- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add about section"
```

---

### Task 10: Services

**Files:**
- Create: `components/sections/Services.tsx`

**Interfaces:**
- Consumes: `services`, `Section`, `Card`, `Icon`, `WhatsAppButton`, `Reveal`.
- Produces: `<Services />` with `id="servicios"`. Section heading + subtitle, responsive grid (1/2/3 cols) of service `Card`s. Each card: gold outline icon, serif title, desc, "Consultar" WhatsApp link using `service.waMessage`.

- [ ] **Step 1: Write `Services.tsx`**

```tsx
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content";

export function Services() {
  return (
    <Section id="servicios" className="bg-hueso">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-dorado-600">Especialidades</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-azul">Cuidamos tu oído, nariz y garganta</h2>
        <p className="mt-3 text-tinta/70">Atención integral con diagnóstico preciso y tratamiento a tu medida.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Reveal key={s.id}>
            <Card className="flex h-full flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-dorado/30 text-dorado">
                <Icon name={s.icon} />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-azul">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-tinta/70">{s.desc}</p>
              <WhatsAppButton message={s.waMessage} variant="ghost" className="mt-5 self-start !py-2 !px-4 text-xs">Consultar</WhatsAppButton>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Mount, verify build.** Run: `npm run build`. Expected: success.
- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add services section with per-service WhatsApp CTAs"
```

---

### Task 11: Symptoms ("¿Cuándo consultar?")

**Files:**
- Create: `components/sections/Symptoms.tsx`

**Interfaces:**
- Consumes: `symptoms`, `Icon`, `WhatsAppButton`.
- Produces: `<Symptoms />` — azul-tinted or bone band with emotional heading; grid of symptom prompts each with a gold line icon; closing WhatsApp CTA. Full-bleed background, inner max-w-6xl.

- [ ] **Step 1: Write `Symptoms.tsx`**

```tsx
import { Icon } from "@/components/ui/Icon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { symptoms } from "@/content";

export function Symptoms() {
  return (
    <div className="bg-azul-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-dorado">¿Cuándo consultar?</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Si te suena familiar, es momento de revisarlo</h2>
          <p className="mt-4 text-white/70">Muchos síntomas cotidianos tienen solución. No los normalices.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {symptoms.map((s) => (
            <div key={s.text} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <Icon name={s.icon} className="mt-0.5 h-6 w-6 shrink-0 text-dorado" />
              <p className="text-sm text-white/90">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <WhatsAppButton message="Hola, tengo algunos síntomas y quiero una valoración.">Quiero una valoración</WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Mount, verify build.** Run: `npm run build`. Expected: success.
- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add symptoms engagement section"
```

---

### Task 12: Process

**Files:**
- Create: `components/sections/Process.tsx`

**Interfaces:**
- Consumes: `process`, `Section`, `Reveal`.
- Produces: `<Process />` — heading + 4-step horizontal (stacked on mobile) with big gold serif step numbers and a connecting line on desktop.

- [ ] **Step 1: Write `Process.tsx`**

```tsx
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/content";

export function Process() {
  return (
    <Section>
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-dorado-600">Cómo funciona</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-azul">Tu consulta en 4 pasos simples</h2>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-4">
        {process.map((s) => (
          <Reveal key={s.n}>
            <div className="relative">
              <span className="font-serif text-5xl font-semibold text-dorado/40">0{s.n}</span>
              <h3 className="mt-2 font-serif text-xl font-semibold text-azul">{s.title}</h3>
              <p className="mt-2 text-sm text-tinta/70">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Mount, verify build.** Run: `npm run build`. Expected: success.
- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add process steps section"
```

---

### Task 13: Testimonials

**Files:**
- Create: `components/sections/Testimonials.tsx`

**Interfaces:**
- Consumes: `testimonials`, `Section`, `Card`, `Reveal`.
- Produces: `<Testimonials />` — heading + 3-up grid of quote cards (gold quotation mark, text, name + meta).

- [ ] **Step 1: Write `Testimonials.tsx`**

```tsx
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/content";

export function Testimonials() {
  return (
    <Section className="bg-hueso">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-dorado-600">Testimonios</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-azul">Pacientes que ya viven mejor</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Reveal key={t.name}>
            <Card className="flex h-full flex-col">
              <span className="font-serif text-5xl leading-none text-dorado/50">“</span>
              <p className="mt-2 flex-1 text-tinta/80">{t.text}</p>
              <div className="mt-5">
                <p className="font-semibold text-azul">{t.name}</p>
                <p className="text-xs text-tinta/60">{t.meta}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Mount, verify build.** Run: `npm run build`. Expected: success.
- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add testimonials section"
```

---

### Task 14: Clinics

**Files:**
- Create: `components/sections/Clinics.tsx`

**Interfaces:**
- Consumes: `clinics`, `Section`, `Card`, `Icon`, `Button`.
- Produces: `<Clinics />` with `id="clinicas"`. Heading + grid of clinic cards: name, address (pin icon), hours (clock icon), embedded map iframe, "Cómo llegar" button (external → `mapsUrl`).

- [ ] **Step 1: Write `Clinics.tsx`**

```tsx
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { clinics } from "@/content";

export function Clinics() {
  return (
    <Section id="clinicas">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-dorado-600">Ubicaciones</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-azul">Encuéntranos</h2>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {clinics.map((c) => (
          <Card key={c.name} className="overflow-hidden !p-0">
            <iframe src={c.embedUrl} title={`Mapa ${c.name}`} loading="lazy" className="h-56 w-full border-0" />
            <div className="p-6">
              <h3 className="font-serif text-2xl font-semibold text-azul">{c.name}</h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-tinta/75"><Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-dorado" />{c.address}</p>
              <p className="mt-2 flex items-start gap-2 text-sm text-tinta/75"><Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-dorado" />{c.hours}</p>
              <Button href={c.mapsUrl} external variant="ghost" className="mt-5 !py-2 !px-4 text-xs">Cómo llegar</Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Mount, verify build.** Run: `npm run build`. Expected: success.
- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add clinics section with maps"
```

---

### Task 15: FAQ (accordion)

**Files:**
- Create: `components/sections/Faq.tsx`

**Interfaces:**
- Consumes: `faqs`, `Section`. Uses native `<details>/<summary>` (no JS state needed; accessible).
- Produces: `<Faq />` — heading + list of `<details>` items with gold plus/arrow indicator.

- [ ] **Step 1: Write `Faq.tsx`**

```tsx
import { Section } from "@/components/ui/Section";
import { faqs } from "@/content";

export function Faq() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs uppercase tracking-widest text-dorado-600">Preguntas frecuentes</p>
        <h2 className="mt-3 text-center font-serif text-4xl font-semibold text-azul">Resolvemos tus dudas</h2>
        <div className="mt-10 divide-y divide-azul/10 border-y border-azul/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-azul">
                {f.q}<span className="text-dorado transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-tinta/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Mount, verify build.** Run: `npm run build`. Expected: success.
- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add FAQ accordion section"
```

---

### Task 16: FinalCta + Footer

**Files:**
- Create: `components/sections/FinalCta.tsx`, `components/sections/Footer.tsx`

**Interfaces:**
- Consumes: `site`, `WhatsAppButton`, `Icon`, `next/image`.
- Produces:
  - `<FinalCta />` — full-width azul band, serif heading + big WhatsApp CTA.
  - `<Footer />` with `id="contacto"` — logo, doctor name/specialty, contact (phone/email/address with icons), social links, anchor nav, legal line. Dark azul-900 background.

- [ ] **Step 1: Write `FinalCta.tsx`**

```tsx
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <div className="bg-azul">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">Agenda tu consulta hoy</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">Da el primer paso para respirar, escuchar y vivir mejor. Te respondemos el mismo día.</p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton message="Hola, quiero agendar una consulta.">Reservar por WhatsApp</WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write `Footer.tsx`**

```tsx
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content";

export function Footer() {
  return (
    <footer id="contacto" className="bg-azul-900 text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo-mark.png" alt="Logo" width={40} height={40} />
            <div>
              <p className="font-serif text-lg font-semibold text-white">{site.doctor}</p>
              <p className="text-xs uppercase tracking-widest text-dorado">{site.specialty}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/60">Atención especializada en oído, nariz y garganta.</p>
        </div>
        <div>
          <p className="font-medium text-white">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Icon name="whatsapp" className="h-4 w-4 text-dorado" />{site.phoneDisplay}</li>
            <li>{site.email}</li>
            <li className="flex items-start gap-2"><Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-dorado" />{site.address}</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-white">Navegación</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-dorado">Sobre el doctor</a></li>
            <li><a href="#servicios" className="hover:text-dorado">Servicios</a></li>
            <li><a href="#clinicas" className="hover:text-dorado">Clínicas</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {site.doctor} — {site.specialty}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Add logo assets to `public/`**

Copy the user's logo files into `public/`. Use the standalone symbol as `logo-mark.png`:
```bash
cp "/Users/henrycruzmulet/.claude/image-cache/32dd11e8-3ee1-427e-a608-c567d4c256d7/3.png" public/logo-mark.png
cp "/Users/henrycruzmulet/.claude/image-cache/32dd11e8-3ee1-427e-a608-c567d4c256d7/2.png" public/logo-full.png
```
(EDITAR later with official brand SVG if available.)

- [ ] **Step 4: Mount, verify build.** Run: `npm run build`. Expected: success.
- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add final CTA and footer with logo assets"
```

---

### Task 17: Page assembly + SEO metadata + WhatsApp float

**Files:**
- Modify: `app/page.tsx`, `app/layout.tsx`

**Interfaces:**
- Consumes: every section component + `WhatsAppFloat`.
- Produces: final ordered page; Open Graph/Twitter metadata; global floating WhatsApp button.

- [ ] **Step 1: Assemble `app/page.tsx`**

```tsx
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Symptoms } from "@/components/sections/Symptoms";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Clinics } from "@/components/sections/Clinics";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Symptoms />
        <Process />
        <Testimonials />
        <Clinics />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
```

- [ ] **Step 2: Expand metadata in `app/layout.tsx`**

Replace `metadata` with:
```tsx
export const metadata: Metadata = {
  title: "Dr. Rodolfo Suárez | Otorrinolaringología",
  description: "Atención especializada en oído, nariz y garganta. Agenda tu consulta por WhatsApp con el Dr. Rodolfo Suárez.",
  openGraph: {
    title: "Dr. Rodolfo Suárez | Otorrinolaringología",
    description: "Atención especializada en oído, nariz y garganta. Agenda tu consulta por WhatsApp.",
    locale: "es_MX", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Dr. Rodolfo Suárez | Otorrinolaringología" },
};
```

- [ ] **Step 3: Verify build + tests.** Run: `npm run build && npm test`. Expected: build success, tests PASS.
- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: assemble full landing page with SEO metadata and WhatsApp float"
```

---

### Task 18: UX/UI polish pass + responsive/a11y verification

**Files:**
- Modify: any section needing adjustment after visual review.

**Interfaces:**
- Consumes: `ui-ux-pro-max` skill for review; `/run` skill to drive the app in a browser.

- [ ] **Step 1: Invoke `ui-ux-pro-max` (review action)** on the assembled page to check hierarchy, spacing, typography scale, contrast, and interaction states against the "editorial clínico" direction. Apply concrete fixes it recommends.

- [ ] **Step 2: Run the app and visually verify** via the `/run` skill (or `npm run dev`) at 3 widths: 375px (mobile), 768px (tablet), 1280px (desktop). Check: navbar compaction, hero stacking, floating cards not overlapping text on mobile, grids reflow, WhatsApp float not covering footer CTAs.

- [ ] **Step 3: Accessibility check.** Verify: `<html lang="es">`, one `<h1>`, heading order, all images have `alt`, focus visible on links/buttons, tap targets ≥ 44px, color contrast of gold-on-white text meets AA for body sizes (use gold only for large/accent text; if any gold body text fails, darken to `dorado-600` or switch to azul).

- [ ] **Step 4: Verify every WhatsApp CTA opens with correct pre-filled message** (hero, navbar, each service, symptoms, final CTA, float).

- [ ] **Step 5: Final build.** Run: `npm run build`. Expected: success, no warnings that block deploy.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "polish: responsive, accessibility, and UX refinements"
```

---

## Self-Review

**Spec coverage:**
- Navbar → Task 6 ✓ · Hero → Task 7 ✓ · TrustBar (impacto #1) → Task 8 ✓ · About → Task 9 ✓ · Services + per-service WA (impacto #2) → Task 10 ✓ · Symptoms (impacto #3) → Task 11 ✓ · Process → Task 12 ✓ · Testimonials (impacto #4) → Task 13 ✓ · Clinics → Task 14 ✓ · FAQ → Task 15 ✓ · FinalCta + Footer → Task 16 ✓ · WhatsApp float → Task 5/17 ✓ · content.ts single source → Task 3 ✓ · brand tokens/fonts → Task 1 ✓ · waLink → Task 2 ✓ · SEO/a11y/responsive → Task 17/18 ✓ · ui-ux-pro-max → Task 18 ✓.
- No spec requirement left without a task.

**Placeholder scan:** Content placeholders in `content.ts` are intentional (marked `EDITAR`) and are data, not plan gaps. No "TODO/TBD" left in plan steps.

**Type consistency:** `waLink(message?: string)` used consistently in Tasks 2/5/6/7/10/11/16. `site.whatsapp` digits-only consumed by `waLink`. `Service.icon` union matches `Icon` names. `Button` variants `primary|ghost|dark` used consistently. Section ids (`inicio/sobre/servicios/clinicas/contacto`) match navbar/footer anchors.
