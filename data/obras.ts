import { Obra } from "@/lib/types";

// Datos locales de ejemplo. Luego podrás reemplazar con Supabase.
export const obras: Obra[] = [
  {
    id: "obra-1",
    titulo: "Teleférico de Los Alcarrizos",
    descripcion: "Una inversión sin precedentes en infraestructura que está modernizando el Gran Santo Domingo, conectando a más de 400,000 personas, mejorando la calidad de vida y sentando las bases para una mayor competitividad del municipio.",
    inversion: "INVERSIÓN RD$ 6,698 MILLONES",
    ubicacion: {
    provincia: "Santo Domingo",
    municipio: "Los Alcarrizos",
    sector: "Los Alcarrizos",
    lat: 18.519795,
    lng: -70.010601
  },
    imagenes: [
    "/sd/telealcarizos.jpg"
  ]
  },
  {
    id: "obra-2",
    titulo: "Avenida San Isidro",
    descripcion: "Ampliación y remodelación de dos a ocho carriles de la avenida Coronel Rafael Tomás Fernández Domínguez (San Isidro).",
    inversion: "INVERSIÓN RD$ 2,400 MILLONES",
    ubicacion: {
    provincia: "Santo Domingo",
    municipio: "Santo Domingo Este",
    sector: "San Isidro",
    lat: 18.49022,
    lng: -69.821703
  },
    imagenes: [
    "/sd/sanisidro.jpg"
  ]
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
    lng: -69.866007
  },
    imagenes: [
    "/sd/ciudadjudicial.jpg"
  ]
  },
  {
    id: "obra-4",
    titulo: "Parque del Este y Centro Olímpico Juan Pablo Duarte",
    descripcion: "Remodelación de las instalaciones deportivas que serán utilizadas para los XXV Juegos Centroamericanos y del Caribe, Santo Domingo 2026.",
    inversion: "INVERSIÓN RD$ 3,700 MILLONES",
    ubicacion: {
    provincia: "Santo Domingo",
    municipio: "Santo Domingo Este",
    sector: "Parque del Este",
    lat: 18.480242,
    lng: -69.851138
  },
    imagenes: [
    "/sd/parqueeste.jpg"
  ]
  },
  {
    id: "obra-5",
    titulo: "Metro Línea 2C",
    descripcion: "Una inversión sin precedentes en infraestructura que está modernizando la metrópolis, mejorando la calidad de vida y sentando las bases para una mayor competitividad. Movilidad urbana integrada. Extensión Línea 2 del Metro (2C) llevará el sistema de transporte masivo hasta Los Alcarrizos, integrando a sus habitantes a todo el sistema de transporte masivo de la provincia.",
    inversion: "INVERSIÓN RD$ 29,850 MILLONES",
    ubicacion: {
    provincia: "Santo Domingo",
    municipio: "Los Alcarrizos",
    sector: "Los Alcarrizos",
    lat: 18.517479,
    lng: -70.009934
  },
    imagenes: [
    "/sd/rieles.jpg"
  ]
  },
];
