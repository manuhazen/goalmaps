import { Obra } from "@/lib/types";

// Datos locales de ejemplo. Luego podrás reemplazar con Supabase.
export const obras: Obra[] = [
  {
    id: "obra-1",
    titulo: "Teleférico de Los Alcarrizos",
    descripcion:
      "Una inversión sin precedentes en infraestructura que está modernizando el Gran Santo Domingo, conectando a más de 400,000 personas, mejorando la calidad de vida y sentando las bases para una mayor competitividad del municipio.",
    inversion: "INVERSIÓN RD$ 6,698 MILLONES",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Los Alcarrizos",
      sector: "Los Alcarrizos",
      lat: 18.519795,
      lng: -70.010601,
    },
    imagenes: ["/sd/alcarizos.jpg"],
  },
  {
    id: "obra-2",
    titulo: "Avenida San Isidro",
    descripcion:
      "Ampliación y remodelación de dos a ocho carriles de la avenida Coronel Rafael Tomás Fernández Domínguez (San Isidro).",
    inversion: "INVERSIÓN RD$ 2,400 MILLONES",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "San Isidro",
      lat: 18.49022,
      lng: -69.821703,
    },
    imagenes: ["/sd/sanisidro.jpg"],
  },
  {
    id: "obra-3",
    titulo: "Ciudad Judicial Palacio de Justicia",
    descripcion: "Construcción de la nueva sede judicial.",
    inversion: "INVERSIÓN RD$ 2,110 MILLONES",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "Ciudad Judicial",
      lat: 18.497933,
      lng: -69.866007,
    },
    imagenes: ["/sd/ciudadjudicial.jpg"],
  },
  {
    id: "obra-4",
    titulo: "Parque del Este y Centro Olímpico Juan Pablo Duarte",
    descripcion:
      "Remodelación de las instalaciones deportivas que serán utilizadas para los XXV Juegos Centroamericanos y del Caribe, Santo Domingo 2026.",
    inversion: "INVERSIÓN RD$ 3,700 MILLONES",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "Parque del Este",
      lat: 18.480242,
      lng: -69.851138,
    },
    imagenes: ["/sd/parqueeste.jpg"],
  },
  {
    id: "obra-5",
    titulo: "Metro Línea 2C",
    descripcion:
      "Una inversión sin precedentes en infraestructura que está modernizando la metrópolis, mejorando la calidad de vida y sentando las bases para una mayor competitividad. Movilidad urbana integrada. Extensión Línea 2 del Metro (2C) llevará el sistema de transporte masivo hasta Los Alcarrizos, integrando a sus habitantes a todo el sistema de transporte masivo de la provincia.",
    inversion: "INVERSIÓN RD$ 29,850 MILLONES",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Los Alcarrizos",
      sector: "Los Alcarrizos",
      lat: 18.517479,
      lng: -70.009934,
    },
    imagenes: ["/sd/rieles.jpg"],
  },
  {
    id: "obra-7",
    titulo: "Monorriel Santiago de los Caballeros",
    descripcion:
      "Construcción del primer Monorriel del Caribe con 13km de longitud.",
    inversion: "INVERSIÓN RD$ 33,000 MILLONES",
    ubicacion: {
      provincia: "Santiago",
      municipio: "Santiago de los Caballeros",
      sector: "Centro",
      lat: 19.456628,
      lng: -70.707028,
    },
    imagenes: ["/santiago/monoriel.jpg"],
  },
  {
    id: "obra-8",
    titulo: "Teleférico Santiago",
    descripcion:
      "Sistema de 6.5 km integrado al Monorriel para transformar la movilidad urbana.",
    inversion: "INVERSIÓN RD$ 6,500 MILLONES",
    ubicacion: {
      provincia: "Santiago",
      municipio: "Santiago de los Caballeros",
      sector: "Centro",
      lat: 19.456306,
      lng: -70.707063,
    },
    imagenes: ["/santiago/telefericosantiago.jpg"],
  },
  {
    id: "obra-9",
    titulo: "Circunvalación Norte",
    descripcion:
      "Para conectar Tamboril con Cienfuegos y mantenimiento a esta importante vía.",
    inversion: "INVERSIÓN RD$ 2,126 MILLONES",
    ubicacion: {
      provincia: "Santiago",
      municipio: "Santiago de los Caballeros",
      sector: "Circunvalación Norte",
      lat: 19.456306,
      lng: -70.707063,
    },
    imagenes: ["/santiago/circunvalacion.jpg"],
  },
  {
    id: "obra-10",
    titulo: "Saneamiento Arroyo Gurabo Santiago",
    descripcion:
      "Arroyo Gurabo: estamos llevando agua potable, saneamiento y espacios de recreación sana para todas las comunidades que habitan en la zona.",
    inversion: "INVERSIÓN RD$ 1,392 MILLONES",
    ubicacion: {
      provincia: "Santiago",
      municipio: "Santiago de los Caballeros",
      sector: "Arroyo Gurabo",
      lat: 19.480518,
      lng: -70.687312,
    },
    imagenes: ["/santiago/arroyo.jpg"],
  },
  {
    id: "obra-11",
    titulo: "Vivienda Hato del Yaque",
    descripcion:
      "Mi Vivienda Hato del Yaque beneficia a más de 4 mil personas que vivían en condiciones de vulnerabilidad a las orillas de cañadas y ríos de Arroyo Gurabo.",
    inversion: "INVERSIÓN RD$ 2,700 MILLONES",
    ubicacion: {
      provincia: "Santiago",
      municipio: "Santiago de los Caballeros",
      sector: "Hato del Yaque",
      lat: 19.446506,
      lng: -70.801597,
    },
    imagenes: ["/santiago/hatodelyaque.jpg"],
  },
];
