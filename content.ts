// Contenido editable de la landing. Cambia los textos aquí sin tocar el diseño.

export const site = {
  doctor: "Dr. Rodolfo Suárez",
  specialty: "Otorrinolaringología",
  city: "Quito",
  whatsapp: "593991234567", // EDITAR: número real, solo dígitos con código país
  phoneDisplay: "+593 99 123 4567", // EDITAR
  waMessage: "Hola Dr. Rodolfo, quiero agendar una cita de otorrinolaringología.",
  address: {
    line1: "Av. Amazonas N34-120 y Av. Atahualpa",
    line2: "Edif. Médico, piso 3 · Quito, Ecuador",
  },
  hours: ["Lun – Vie · 09h00 a 18h00", "Sáb · 09h00 a 13h00"],
};

export const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#doctor", label: "El Doctor" },
  { href: "#proceso", label: "Cómo agendar" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export type HeroStat = { value: string; star?: boolean; label: string };
export const heroStats: HeroStat[] = [
  { value: "+15", label: "años de experiencia" },
  { value: "8.000+", label: "pacientes atendidos" },
  { value: "5.0", star: true, label: "valoración de pacientes" },
];

export type Credibility = { strong: string; rest: string };
export const credibility: Credibility[] = [
  { strong: "Formación internacional", rest: "USFQ · Universidad Central" },
  { strong: "Atención el mismo día", rest: "agenda ágil por WhatsApp" },
  { strong: "Tecnología de punta", rest: "endoscopia y audiometría" },
  { strong: "Trato humano y cercano", rest: "+8.000 pacientes felices" },
];

export type Service = { n: string; tag: string; title: string; desc: string };
export const services: Service[] = [
  { n: "01", tag: "Oído", title: "Audiología y pérdida auditiva", desc: "Audiometrías completas, evaluación de hipoacusia y adaptación de soluciones para que vuelvas a escuchar con claridad." },
  { n: "02", tag: "Oído", title: "Otitis y enfermedades del oído", desc: "Tratamiento de infecciones, dolor, zumbidos y vértigo. Diagnóstico rápido para aliviar las molestias que no te dejan tranquilo." },
  { n: "03", tag: "Nariz", title: "Sinusitis y problemas nasales", desc: "Congestión crónica, rinitis, desviación del tabique. Recupera la libertad de respirar profundo, de día y de noche." },
  { n: "04", tag: "Nariz", title: "Cirugía endoscópica nasal", desc: "Procedimientos mínimamente invasivos, con menos dolor y recuperación más rápida, apoyados en la última tecnología." },
  { n: "05", tag: "Garganta", title: "Amígdalas y garganta", desc: "Faringitis recurrente, amigdalitis y problemas de voz. Evaluación y cirugía cuando es necesario, con seguimiento cercano." },
  { n: "06", tag: "Sueño", title: "Ronquido y apnea del sueño", desc: "Estudio del sueño y tratamiento del ronquido y la apnea para que descanses de verdad y recuperes tu energía." },
];

export const doctor = {
  intro:
    "Otorrinolaringólogo y cirujano con más de 15 años de trayectoria. Su enfoque combina la precisión médica con un trato humano y cercano: escuchar primero, explicar con claridad y tratar con la tecnología adecuada para cada caso.",
  credentials: [
    { bold: "Medicina", text: " — Universidad Central del Ecuador" },
    { bold: "Especialidad ORL", text: " — USFQ, Quito" },
    { bold: "Fellow", text: " en cirugía endoscópica nasal" },
    { bold: "Miembro", text: " Sociedad Ecuatoriana de ORL" },
  ],
};

export type Step = { n: string; title: string; desc: string };
export const process: Step[] = [
  { n: "01", title: "Escríbeme por WhatsApp", desc: "Cuéntame brevemente tu molestia. Te respondo personalmente, sin intermediarios ni formularios eternos." },
  { n: "02", title: "Elige día y hora", desc: "Coordinamos tu cita según tu disponibilidad. Muchas veces, para el mismo día." },
  { n: "03", title: "Diagnóstico y tratamiento", desc: "Evaluación completa, explicación clara y un plan a tu medida. Sales sabiendo exactamente qué sigue." },
];

export type Testimonial = { initials: string; name: string; place: string; quote: string };
export const testimonials: Testimonial[] = [
  { initials: "MA", name: "María Andrade", place: "Paciente · Quito", quote: "Después de años con sinusitis, por fin volví a respirar bien. El Dr. Suárez explica todo con paciencia y sin apuros." },
  { initials: "JC", name: "Jorge Cabrera", place: "Paciente · Cumbayá", quote: "Mi hijo tenía otitis a repetición. Nos atendió el mismo día y el cambio fue inmediato. Totalmente recomendado." },
  { initials: "LT", name: "Lucía Torres", place: "Paciente · Quito", quote: "La cirugía nasal fue mucho más sencilla de lo que imaginaba. Profesional, humano y con una recuperación rapidísima." },
];

export type Faq = { q: string; a: string };
export const faqs: Faq[] = [
  { q: "¿Cómo agendo una cita?", a: "Solo escríbeme por WhatsApp con el botón de esta página. Te respondo personalmente para coordinar día y hora, muchas veces para el mismo día." },
  { q: "¿Atiendes niños?", a: "Sí. Atiendo pacientes de todas las edades, incluyendo otitis, amigdalitis y problemas respiratorios frecuentes en niños." },
  { q: "¿Dónde está el consultorio?", a: "En la Av. Amazonas N34-120 y Av. Atahualpa, Quito. En la sección de contacto encontrarás la ubicación y los horarios de atención." },
  { q: "¿Trabajas con seguros médicos?", a: "Trabajo con las principales aseguradoras del país. Escríbeme por WhatsApp con el nombre de tu seguro y te confirmo la cobertura." },
  { q: "¿Realizas cirugías?", a: "Sí, realizo cirugía endoscópica nasal, de amígdalas y otros procedimientos ORL con técnicas mínimamente invasivas y seguimiento cercano." },
];
