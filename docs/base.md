# Base institucional — Dirección de Carrera de Informática y Sistemas

Este documento define el contenido publicado y la arquitectura de información del sitio institucional de la **Dirección de Carrera de Informática y Sistemas**, dependiente de la Facultad Integral del Chaco (FICH) de la Universidad Autónoma Gabriel René Moreno (UAGRM).

El sitio presenta dos carreras con sus nombres oficiales:

1. **Ingeniería Informática**.
2. **Ingeniería en Sistemas**.

FICH y UAGRM identifican la dependencia académica e institucional. La entidad principal del sitio es la Dirección de Carrera de Informática y Sistemas.

## Identidad institucional

- **Sitio:** `https://www.infosist.org/`.
- **Dirección:** Dirección de Carrera de Informática y Sistemas.
- **Dependencia:** Facultad Integral del Chaco · Universidad Autónoma Gabriel René Moreno.
- **Ubicación:** Av. Humberto Suárez Roca, Camiri, Bolivia.
- **Correo:** `c_informatica.fich@uagrm.edu.bo`.
- **WhatsApp de consulta:** `https://wa.me/59176660753`.
- **TikTok:** `https://www.tiktok.com/@infosis.uagrm.fich`.
- **Repositorio:** `https://github.com/infosis-fich/infosis-landing`.

## Arquitectura del sitio

El sitio combina una portada institucional y fichas estáticas para cada carrera. El contenido se mantiene en módulos tipados de TypeScript y las páginas se generan con Astro en modo estático.

El contenido comparte un contenedor centrado de hasta 1180 px, con márgenes adaptables para pantallas pequeñas. La identidad visual utiliza fondos oscuros, azul institucional, celeste, degradados, circuitos y curvas diagonales.

### Navegación principal

- Carreras.
- Centros.
- Vida universitaria.
- Eventos.
- Admisión.

### Orden de la portada

1. Portada institucional.
2. Oferta académica.
3. Centros y laboratorios.
4. Más oportunidades.
5. Galería institucional, con prioridad para actividades recientes.
6. Admisión.

## 1. Portada institucional

La portada presenta a la Dirección de Carrera de Informática y Sistemas con:

- Carrusel automático de imágenes cada seis segundos.
- Flechas laterales.
- Indicadores circulares.
- Escudo institucional.
- Circuitos decorativos.
- Accesos a la oferta académica y a las actividades.

El componente reutilizable es `src/components/CarruselHero.astro`.

## 2. Oferta académica

Las carreras se presentan en tarjetas equivalentes y en este orden:

1. Ingeniería Informática.
2. Ingeniería en Sistemas.

Sus rutas son:

- `/carreras/informatica`.
- `/carreras/sistemas`.

Las fichas individuales incluyen:

- Ruta de navegación.
- Carrusel hero propio.
- Resumen de la carrera.
- Áreas de formación.
- Proyección profesional.
- Malla curricular HTML organizada por semestre.
- Enlace al PDF oficial.
- Modalidades de titulación.

### Ingeniería Informática

La información publicada contempla formación y ámbitos relacionados con:

- Programación y desarrollo de software.
- Inteligencia artificial y aprendizaje automático.
- Redes, seguridad e infraestructura.
- Datos y sistemas de información.
- Desarrollo de software y aplicaciones.
- Inteligencia artificial y ciencia de datos.
- Investigación, innovación y emprendimiento tecnológico.

### Ingeniería en Sistemas

La información publicada contempla formación y ámbitos relacionados con:

- Desarrollo de software.
- Datos y sistemas de información.
- Redes y sistemas operativos.
- Gestión y toma de decisiones.
- Empresas e instituciones públicas y privadas.
- Entidades financieras y aseguradoras.
- Telecomunicaciones.
- Sector agropecuario e industrial.
- Emprendimientos y consultoría tecnológica.

## 3. Mallas curriculares

Cada carrera dispone de una malla HTML y un PDF:

- `public/documentos/malla-ingenieria-informatica.pdf`.
- `public/documentos/malla-ingenieria-sistemas.pdf`.

La representación HTML:

- Agrupa materias por semestre.
- Mantiene dos columnas en escritorio.
- Abre inicialmente los dos primeros semestres.
- Sincroniza la apertura y el cierre de cada par horizontal.
- Numera las materias dentro de cada semestre.
- Permite consultar cada semestre mediante elementos accesibles `details`.

El componente responsable es `src/components/secciones/MallaCurricular.astro`.

## 4. Centros y laboratorios

Cada centro se presenta con logo, imagen, descripción, responsables y botones de contacto por WhatsApp.

### Laboratorio de Cómputo

Espacio para prácticas, cursos presenciales y actividades académicas.

Responsables:

- Joseph Estalin Moscoso Flores.
- Valery Rulieta Nina.

### Laboratorio de Hardware y Redes

Espacio para mantenimiento de equipos, soporte de software y redes, respaldo de datos y asesoría TIC.

Responsables:

- Leandro Gabriel García Arancibia.
- Tommy Manabu Quispe Ayaviri.

### Centro de Investigación y Capacitación

Espacio para investigación y capacitación en informática y sistemas mediante proyectos y cursos.

Responsables:

- Julio Cesar Toledo Vaca.
- Niurka Diana Cedelo Canido.

Los datos de centros se mantienen en `src/datos/centros.ts` y sus tarjetas en `src/components/TarjetaCentro.astro`.

## 5. Más oportunidades

La sección presenta oportunidades complementarias de la vida universitaria:

- Convenios interinstitucionales y pasantías.
- Aulas equipadas con tecnología multimedia.
- Seguro universitario.
- Comedor.
- Biblioteca.
- Seminarios y cursos.

La sección se implementa en `src/components/secciones/SeccionVidaUniversitaria.astro`.

## 6. Galería institucional

La galería utiliza imágenes WebP optimizadas y prioriza el registro fotográfico de las actividades recientes. Se organiza en cinco carruseles independientes distribuidos en dos columnas:

- XV EXPOCIENCIA 2026.
- INFOSIS BUILD FEST 2026.

- Formación y capacitación.
- Laboratorio de cómputo, hardware y redes.

Cada grupo muestra una imagen grande, permite cambiar entre sus imágenes con flechas y abre el visor reutilizable `src/components/VisorImagenes.astro`.

Las fotografías recientes se encuentran en `public/galeria/`, con nombres normalizados y formato WebP. Los datos se mantienen en `src/datos/galeria.ts` y la sección en `src/components/secciones/SeccionGaleria.astro`.

## 7. Modalidades de titulación

Las modalidades publicadas son comunes a las dos carreras:

- **Técnico Superior:** proyecto de grado técnico, monografía y pasantía.
- **Licenciatura:** tesis de grado, proyecto de grado, trabajo dirigido y examen de grado (seminario o diplomado).
- **Graduación directa:** excelencia académica y buen rendimiento o desempeño.

Los datos se mantienen en `src/datos/titulacion.ts`.

## 8. Admisión

La sección de admisión dirige a consultas por WhatsApp mediante un mensaje prellenado para solicitar información oficial sobre el proceso de ingreso a ambas carreras.

El correo institucional se reserva para contacto institucional y no se utiliza como canal principal de admisión.

## Recursos visuales

Los recursos se organizan de la siguiente manera:

```text
public/
├── documentos/
│   ├── malla-ingenieria-informatica.pdf
│   └── malla-ingenieria-sistemas.pdf
├── galeria/
│   ├── build-fest-2026/
│   └── expociencia-2026/
├── heroes/
├── laboratorios/
│   ├── capacitacion/
│   ├── computo/
│   └── hardware/
├── centro-capacitacion.png
├── centro-computo.png
├── centro-hardware.png
├── escudo-infosis.png
├── portada.webp
├── patrones/
└── robots.txt
```

Las fotografías se sirven en WebP con nombres normalizados. El escudo y los logos conservan PNG para mantener la transparencia. Las imágenes de tarjetas y galerías usan carga diferida; las imágenes hero forman parte de la carga inicial.

## SEO y accesibilidad

El layout central administra:

- Títulos y descripciones específicas por ruta.
- Canonical absoluto sobre `https://www.infosist.org`.
- Open Graph y Twitter Cards.
- Localización `es_BO`.
- Datos estructurados de la Dirección y del sitio.
- Favicon y color de tema.
- Sitemap generado por `@astrojs/sitemap`.
- `robots.txt`.

La interfaz incorpora:

- Textos alternativos y etiquetas ARIA.
- Navegación por teclado.
- Foco visible.
- Encabezados y landmarks semánticos.
- Soporte para `prefers-reduced-motion`.
- Diseño responsive.

## Implementación

El proyecto utiliza Astro con salida estática, Tailwind CSS 4 y TypeScript. Los componentes, rutas, secciones y datos se nombran en español.

```text
src/
├── components/
├── datos/
├── pages/
└── styles/
```

Los módulos de datos se mantienen en `src/datos/`, las secciones reutilizables en `src/components/secciones/` y las fichas se generan desde `src/pages/carreras/[slug].astro`.

## Validación y desarrollo

```bash
corepack enable
pnpm install
pnpm dev
```

La aplicación queda disponible en `http://localhost:4321`.

```bash
pnpm check
pnpm build
pnpm preview
```

## Producción

```bash
pnpm build
```

El resultado se genera en `dist/` y se publica como sitio estático.

## Licencia

El código del proyecto se distribuye bajo la licencia [MIT](../LICENSE).

Los logotipos institucionales, marcas, fotografías, documentos académicos y demás recursos conservan sus respectivas condiciones de uso.
