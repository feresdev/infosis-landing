export interface Carrera {
  id: string;
  ruta: string;
  nombre: string;
  resumen: string;
  imagenesHero: { src: string; alt: string; nombre: string }[];
  areas: string[];
  aplicaciones?: string[];
  archivoMalla: string;
}

export const carreras: Carrera[] = [
  {
    id: "informatica",
    ruta: "/carreras/informatica",
    nombre: "Ingeniería Informática",
    resumen:
      "Formación en software, inteligencia artificial, datos, redes y seguridad.",
    imagenesHero: [
      {
        src: "/laboratorios/computo/laboratorio-01.webp",
        alt: "Estudiantes en el laboratorio de cómputo.",
        nombre: "Laboratorio de cómputo",
      },
      {
        src: "/laboratorios/computo/laboratorio-02.webp",
        alt: "Práctica de computación en laboratorio.",
        nombre: "Práctica de computación",
      },
      {
        src: "/laboratorios/capacitacion/capacitacion-06.webp",
        alt: "Estudiantes durante una capacitación tecnológica.",
        nombre: "Capacitación tecnológica",
      },
    ],
    areas: [
      "Programación y desarrollo de software",
      "Inteligencia artificial y aprendizaje automático",
      "Redes, seguridad e infraestructura",
      "Datos y sistemas de información",
    ],
    aplicaciones: [
      "Desarrollo de software y aplicaciones",
      "Inteligencia artificial y ciencia de datos",
      "Redes, ciberseguridad e infraestructura",
      "Empresas, investigación e innovación tecnológica",
    ],
    archivoMalla: "/documentos/malla-ingenieria-informatica.pdf",
  },
  {
    id: "sistemas",
    ruta: "/carreras/sistemas",
    nombre: "Ingeniería en Sistemas",
    resumen:
      "Formación en software, sistemas de información, redes y gestión tecnológica.",
    imagenesHero: [
      {
        src: "/heroes/comunidad-fich.webp",
        alt: "Comunidad universitaria en una actividad institucional.",
        nombre: "Comunidad universitaria",
      },
      {
        src: "/heroes/clase-universitaria.webp",
        alt: "Clase universitaria de informática y sistemas.",
        nombre: "Clase universitaria",
      },
      {
        src: "/laboratorios/capacitacion/capacitacion-08.webp",
        alt: "Actividad de capacitación tecnológica.",
        nombre: "Capacitación tecnológica",
      },
    ],
    areas: [
      "Desarrollo de software",
      "Datos y sistemas de información",
      "Redes y sistemas operativos",
      "Gestión y toma de decisiones",
    ],
    aplicaciones: [
      "Desarrollo de software y sistemas de información",
      "Gestión tecnológica y toma de decisiones",
      "Redes, telecomunicaciones y soporte",
      "Sector productivo, entidades y consultoría tecnológica",
    ],
    archivoMalla: "/documentos/malla-ingenieria-sistemas.pdf",
  },
];
