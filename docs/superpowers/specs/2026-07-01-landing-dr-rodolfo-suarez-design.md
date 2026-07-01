# Landing Page — Dr. Rodolfo Suárez (Otorrinolaringología)

**Fecha:** 2026-07-01
**Objetivo:** Landing de una sola página para promocionar la especialidad del Dr. Rodolfo Suárez (otorrinolaringólogo) y atraer pacientes a las consultas de sus clínicas. Acción de conversión dominante: **reservar por WhatsApp**.

## Marca (Manual de Marca)

- **Concepto:** profesionalismo, precisión médica, confianza, atención especializada en oído, nariz y garganta.
- **Paleta:**
  - Azul institucional — confianza y seguridad médica.
  - Dorado elegante — prestigio y calidad premium.
  - Negro — elegancia y presencia visual.
  - (Añadido de diseño) Blanco/hueso como fondo base.
- **Tipografía:** Principal serif elegante y moderna (títulos); Secundaria sans serif limpia (cuerpo).
- **Tono:** profesional, humano, moderno y cercano.
- **Logo:** perfil de cabeza (oído/nariz/garganta) dentro de dos anillos azul + dorado. Assets del usuario en `/Users/henrycruzmulet/Downloads/` (logo con texto y símbolo suelto).

## Dirección estética elegida: A — Editorial clínico

Fondo blanco/hueso, mucho espacio en blanco, títulos serif grandes + cuerpo sans limpio. Azul institucional como color de confianza; **dorado solo como acento fino** (líneas, iconos de contorno, subrayados, bordes). Se toma la *estructura* de la referencia MedMe (hero con doctor + tarjetas flotantes, prueba social) pero con lenguaje visual propio de la marca — **sin morado, sin glassmorphism pesado**. Resultado: premium, médico serio y accesible, legible para público 40+.

Rechazadas: B (dark premium — menos accesible/legible), C (glass tipo MedMe — se ve "template", poco distintivo).

## Stack técnico

- **Framework:** Next.js (App Router, React, TypeScript).
- **Estilos:** Tailwind CSS con tokens de marca (azul institucional, dorado, hueso, negro) en `tailwind.config`.
- **Fuentes:** una serif elegante (títulos) + una sans limpia (cuerpo) vía `next/font`. Candidatas: Cormorant Garamond / Playfair Display (serif) + Inter / Manrope (sans). Selección final durante implementación.
- **Contenido:** un único archivo `content.ts` (o `content/site.ts`) que centraliza TODOS los datos editables: bio, credenciales, métricas, servicios, síntomas, proceso, testimonios, clínicas, FAQ, contacto, links WhatsApp. El cliente edita un solo archivo.
- **Estructura de componentes:** una componente por sección en `components/sections/`, componentes compartidos (Button, Card, Section, WhatsAppButton) en `components/ui/`.
- **Imágenes:** fotos de doctor / apoyo desde Unsplash (placeholders realistas hasta tener fotos reales del doctor). Logo del usuario en `public/`.
- **Deploy:** Vercel.

## WhatsApp — mecánica de conversión

- Número de WhatsApp centralizado en `content.ts`.
- Helper `waLink(mensaje)` que genera `https://wa.me/<num>?text=<encoded>`.
- Cada CTA relevante abre WhatsApp con **mensaje pre-escrito y contextual** (ej. por servicio: "Hola, quiero información sobre *Vértigo / mareo*").
- Botón flotante WhatsApp fijo (esquina inferior derecha), visible en todo el scroll.

## Estructura de secciones (orden final aprobado)

1. **Navbar** — logo izquierda; nav ancla (Inicio · Sobre · Servicios · Clínicas · Contacto); botón dorado "Reservar por WhatsApp" a la derecha. Sticky, se compacta al hacer scroll.
2. **Hero** — izquierda: badge fino ("Otorrinolaringólogo certificado"), título serif grande orientado a promesa ("Respira, escucha y vive mejor"), subtítulo 1 línea, 2 CTAs (WhatsApp primario dorado + "Conoce al doctor" ghost). Derecha: foto del doctor recortada + tarjetas flotantes reales (años de experiencia; tarjeta "Atención por WhatsApp" con número). Fondo hueso con textura sutil de líneas y acento dorado.
3. **Barra de confianza** — fila de métricas (años exp · pacientes atendidos · procedimientos · calificación), números grandes en serif. *Impacto #1.*
4. **Sobre el doctor** — foto + bio en tono humano/cercano; credenciales (universidad, certificaciones, membresías) en lista con checks dorados.
5. **Servicios** — grid de tarjetas (oído / nariz / garganta, o procedimientos: sinusitis, vértigo, ronquido/apnea, amigdalectomía, audiometría, etc.). Cada tarjeta: icono de contorno dorado, título, 1 línea, "Consultar" → WhatsApp con mensaje del servicio. *Impacto #2.*
6. **Síntomas / "¿Cuándo consultar?"** — enganche emocional: lista de síntomas cotidianos ("¿Roncas fuerte?", "¿Mareos frecuentes?", "¿Congestión que no cede?") que normalizan el dolor y empujan a agendar. *Impacto #3.*
7. **Proceso** — 3–4 pasos ("Agenda por WhatsApp → Valoración → Diagnóstico → Tratamiento"). Baja fricción.
8. **Testimonios** — grid/carrusel de reseñas de pacientes (placeholders realistas, claramente editables). Prueba social. *Impacto #4.*
9. **Clínicas** — tarjetas por ubicación: dirección, horario, mapa embed, botón "Cómo llegar". Soporta múltiples clínicas.
10. **FAQ** — acordeón (seguros, primera consulta, urgencias, precios). Reduce objeciones.
11. **CTA final** — banda azul institucional full-width con dorado, "Agenda tu consulta hoy" + botón WhatsApp grande.
12. **Footer** — logo, contacto, redes, horario, aviso legal, links ancla.

**Extra fijo:** botón flotante de WhatsApp (esquina inferior derecha), siempre visible.

## Contenido — estrategia de datos

Todo el contenido vive en `content.ts`. Donde el usuario no ha dado texto exacto, se usan **placeholders realistas** (marcados para editar) en español, coherentes con otorrinolaringología. El usuario marcó como disponibles: bio + foto, lista de servicios, clínicas + direcciones, contacto + reservas — pero los valores concretos se rellenan como placeholders hasta que los provea.

## No-objetivos (YAGNI)

- Sin backend, base de datos ni panel de administración.
- Sin formulario con envío a servidor (conversión = WhatsApp). Un formulario podría añadirse después como fase separada.
- Sin blog, sin i18n (solo español), sin autenticación.
- Sin CMS — el contenido se edita en `content.ts`.

## Criterios de éxito

- Página responsive (móvil primero; público consulta mucho desde móvil).
- CTA de WhatsApp visible en todo momento y contextual por sección.
- Estética distintiva (editorial clínico), fiel a la marca (azul + dorado + serif), no "template genérico".
- Todo el contenido editable desde un solo archivo.
- Buen rendimiento y SEO base (meta tags, Open Graph, imágenes optimizadas, texto alt).
- Accesibilidad razonable (contraste, foco, semántica, tap targets) — pacientes 40+.

## Diseño UX/UI

Durante la implementación se consultará el skill `ui-ux-pro-max` para afinar layout, tipografía, jerarquía y estados de interacción coherentes con la dirección "editorial clínico".
