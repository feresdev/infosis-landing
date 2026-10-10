export interface ImagenGaleria {
  src: string;
  alt: string;
  nombre: string;
  grupo:
    | "XV EXPOCIENCIA 2026"
    | "INFOSIS BUILD FEST 2026"
    | "Capacitación"
    | "Laboratorios";
}

const actividadesRecientes: ImagenGaleria[] = [
  ...[13, 14, 2, 3, 5, 6, 7, 8, 9, 10, 17, 18, 16, 4, 1, 15, 11, 12].map(
    (numero) => ({
      src: `/galeria/expociencia-2026/expociencia-2026-${String(numero).padStart(2, "0")}.webp`,
      alt: "Registro fotográfico de la XV EXPOCIENCIA 2026.",
      nombre: "XV EXPOCIENCIA 2026 · Registro de la feria",
      grupo: "XV EXPOCIENCIA 2026" as const,
    }),
  ),
  ...[
    [2, 7],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
  ].map(([dia, numero]) => ({
    src: `/galeria/build-fest-2026/build-fest-2026-dia-${dia}-${String(numero).padStart(2, "0")}.webp`,
    alt: "Registro fotográfico del INFOSIS BUILD FEST 2026.",
    nombre: `INFOSIS BUILD FEST 2026 · Día ${dia} · ${dia === 1 ? "Workshop" : "Challenge"}`,
    grupo: "INFOSIS BUILD FEST 2026" as const,
  })),
];

export const galeriaInstitucional: ImagenGaleria[] = [
  ...actividadesRecientes,
  ...[1, 6, 8, 9, 10, 11].map((indice) => ({
    src: `/laboratorios/capacitacion/capacitacion-${String(indice).padStart(2, "0")}.webp`,
    alt: `Actividad de capacitación tecnológica ${indice} en la Dirección de Carrera de Informática y Sistemas.`,
    nombre: `Actividad de capacitación ${indice}`,
    grupo: "Capacitación" as const,
  })),
  ...[1, 2, 3, 4, 5, 6].map((indice) => ({
    src: `/laboratorios/computo/laboratorio-${String(indice).padStart(2, "0")}.webp`,
    alt: `Práctica en el laboratorio de cómputo ${indice} de la FICH · UAGRM.`,
    nombre: `Práctica en el laboratorio de cómputo ${indice}`,
    grupo: "Laboratorios" as const,
  })),
  ...[2, 3, 4, 5].map((indice) => ({
    src: `/laboratorios/hardware/hardware-${String(indice).padStart(2, "0")}.webp`,
    alt: `Práctica de hardware y redes ${indice} del Laboratorio de Hardware y Redes.`,
    nombre: `Práctica de hardware y redes ${indice}`,
    grupo: "Laboratorios" as const,
  })),
];
