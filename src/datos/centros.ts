export interface Responsable {
  nombre: string;
  telefono: string;
}

export interface Centro {
  nombre: string;
  sigla?: string;
  resumen: string;
  etiquetaContacto?: string;
  logo: string;
  imagen: string;
  textoAlternativoImagen: string;
  responsables: Responsable[];
}

export const centros: Centro[] = [
  {
    nombre: "Laboratorio de Cómputo",
    logo: "/centro-computo.webp",
    resumen:
      "Espacio para prácticas, cursos presenciales y actividades académicas con equipos informáticos.",
    imagen: "/laboratorios/computo/laboratorio-02.webp",
    textoAlternativoImagen:
      "Vista del Laboratorio de Cómputo con sus estaciones de trabajo.",
    responsables: [
      { nombre: "Joseph Estalin Moscoso Flores", telefono: "76030479" },
      { nombre: "Valery Rulieta Nina", telefono: "74544045" },
    ],
  },
  {
    nombre: "Laboratorio de Hardware y Redes",
    logo: "/centro-hardware.webp",
    resumen:
      "Reparación y mantenimiento de equipos, instalación de software, configuración de redes, respaldo de datos y soporte TIC.",
    etiquetaContacto: "Contactar sus servicios",
    imagen: "/laboratorios/hardware/hardware-04.webp",
    textoAlternativoImagen:
      "Estudiantes revisan componentes de computadoras durante una práctica de hardware.",
    responsables: [
      { nombre: "Leandro Gabriel García Arancibia", telefono: "68917597" },
      { nombre: "Tommy Manabu Quispe Ayaviri", telefono: "73133951" },
    ],
  },
  {
    nombre: "Centro de Investigación y Capacitación",
    logo: "/centro-capacitacion.webp",
    resumen:
      "Impulsa proyectos de investigación y capacitación en informática y sistemas mediante cursos y actividades especializadas.",
    imagen: "/laboratorios/capacitacion/capacitacion-06.webp",
    textoAlternativoImagen:
      "Estudiantes participan en una sesión de capacitación en un laboratorio de cómputo.",
    responsables: [
      { nombre: "Julio Cesar Toledo Vaca", telefono: "68942185" },
      { nombre: "Niurka Diana Cedelo Canido", telefono: "76660753" },
    ],
  },
];
