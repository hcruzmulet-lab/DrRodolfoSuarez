// Contenido editable de la landing. Cambia los textos aquí sin tocar el diseño.

export type Location = { name: string; detail: string; area: string };

export const site = {
  doctor: "Dr. Rodolfo Suárez",
  specialty: "Otorrinolaringología",
  city: "Quito",
  whatsapp: "593998480519", // solo dígitos con código país
  phoneDisplay: "+593 99 848 0519",
  waMessage: "Hola Dr. Rodolfo, quiero agendar una cita de otorrinolaringología.",
  locations: [
    { name: "Edificio Fortune Plaza", detail: "Piso 7 · Consultorio 710", area: "Av. Eloy Alfaro y Alemania, sector La Carolina · Quito" },
    { name: "ProEstética Ebenezer", detail: "Isla Española y Av. Río Coca · Quito", area: "" },
  ] as Location[],
  hours: ["Según disponibilidad de agenda"],
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
  { value: "+18", label: "años de experiencia" },
  { value: "8.000+", label: "pacientes atendidos" },
  { value: "5.0", star: true, label: "valoración de pacientes" },
];

export type Credibility = { strong: string; rest: string };
export const credibility: Credibility[] = [
  { strong: "Formación internacional", rest: "Cuba · Universidad Tech" },
  { strong: "Atención el mismo día", rest: "agenda ágil por WhatsApp" },
  { strong: "Tecnología de punta", rest: "endoscopia y audiometría" },
  { strong: "Trato humano y cercano", rest: "+8.000 pacientes felices" },
];

export type Service = { n: string; tag: string; title: string; desc: string };
export const services: Service[] = [
  { n: "01", tag: "General", title: "Consulta integral de ORL", desc: "Diagnóstico y tratamiento de enfermedades de oído, nariz y garganta en niños y adultos. Identificamos la causa y ofrecemos el mejor tratamiento." },
  { n: "02", tag: "Oído", title: "Valoración auditiva", desc: "Diagnóstico de hipoacusia, tapones de cerumen, tinnitus y daño por ruido. Detectar a tiempo previene complicaciones futuras." },
  { n: "03", tag: "Oído", title: "Otitis y enfermedades del oído", desc: "Tratamiento de infecciones, dolor, zumbidos y molestias del oído. Diagnóstico rápido para aliviar lo que no te deja tranquilo." },
  { n: "04", tag: "Vértigo", title: "Diagnóstico y tratamiento del vértigo", desc: "Vértigo posicional, laberintitis, neuritis vestibular y enfermedad de Ménière. Evaluación integral para tratar el origen del mareo." },
  { n: "05", tag: "Nariz", title: "Sinusitis y problemas nasales", desc: "Congestión crónica, rinitis, desviación del tabique. Recupera la libertad de respirar profundo, de día y de noche." },
  { n: "06", tag: "Nariz", title: "Alergias y problemas nasales", desc: "Rinitis alérgica, estornudos, picazón y secreción constante. Tratamientos personalizados para respirar mejor y controlar los síntomas." },
  { n: "07", tag: "Nariz", title: "Hipertrofia de cornetes", desc: "Reducción por coablación, radiofrecuencia o infiltración: procedimientos mínimamente invasivos para mejorar la respiración." },
  { n: "08", tag: "Nariz", title: "Cirugía nasal", desc: "Procedimientos mínimamente invasivos, con menos dolor y recuperación más rápida, apoyados en la última tecnología." },
  { n: "09", tag: "Garganta", title: "Faringe y garganta", desc: "Faringitis, irritación crónica, molestias al tragar y criocirugía de afecciones crónicas de la garganta, con seguimiento cercano." },
  { n: "10", tag: "Sueño", title: "Ronquido y apnea del sueño", desc: "Estudio del sueño y tratamiento del ronquido y la apnea para que descanses de verdad y recuperes tu energía." },
  { n: "11", tag: "Cirugía", title: "Cirugías de ORL", desc: "Septoplastia, rinoplastia funcional y estética, cirugía de cornetes y senos, amigdalectomía y más, con evaluación individualizada." },
  { n: "12", tag: "Estética", title: "Aplicación de Botox", desc: "Tratamiento médico-estético para reducir líneas de expresión y arrugas. Apariencia fresca y natural, sin cirugía." },
];

export const doctor = {
  intro:
    "Otorrinolaringólogo y cirujano con más de 18 años de trayectoria. Su enfoque combina la precisión médica con un trato humano y cercano: escuchar primero, explicar con claridad y tratar con la tecnología adecuada para cada caso.",
  credentials: [
    { bold: "Medicina", text: " — Instituto Superior de Ciencias Médicas de Santiago de Cuba" },
    { bold: "Especialidad en ORL", text: " — Facultad de Ciencias Médicas de Holguín" },
    { bold: "Fellow", text: " en Audiología y Trastornos del Equilibrio — Universidad de Holguín" },
    { bold: "Maestría en ORL", text: " — Universidad Tecnológica TECH" },
  ],
};

export type Step = { n: string; title: string; desc: string };
export const process: Step[] = [
  { n: "01", title: "Escríbenos por WhatsApp", desc: "Cuéntanos tu molestia y te responderemos a la brevedad para agendar tu cita, sin intermediarios ni formularios eternos." },
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
  { q: "¿Cómo agendamos una cita?", a: "Solo escríbenos por WhatsApp con el botón de esta página. Te respondemos a la brevedad para coordinar día y hora, muchas veces para el mismo día." },
  { q: "¿Atienden niños?", a: "Sí. Atendemos pacientes de todas las edades, incluyendo otitis, amigdalitis y problemas respiratorios frecuentes en niños." },
  { q: "¿Dónde estamos ubicados?", a: "Tenemos dos consultorios en Quito: Edificio Fortune Plaza, piso 7, consultorio 710 (Av. Eloy Alfaro y Alemania, La Carolina) y ProEstética Ebenezer (Isla Española y Av. Río Coca). En la sección de contacto encontrarás la ubicación." },
  { q: "¿Realizan cirugías?", a: "Sí, realizamos cirugía nasal, de amígdalas y otros procedimientos ORL con técnicas mínimamente invasivas y seguimiento cercano." },
];
