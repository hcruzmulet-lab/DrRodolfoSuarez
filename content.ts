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
