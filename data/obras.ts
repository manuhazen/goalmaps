import { Obra } from "@/lib/types";

// Datos locales de ejemplo. Luego podrás reemplazar con Supabase.
export const obras: Obra[] = [
  {
    id: "obra-1",
    titulo: "Teleférico de Los Alcarrizos",
    descripcion:
      "Una inversión sin precedentes en infraestructura que está modernizando el Gran Santo Domingo, conectando a más de 400,000 personas, mejorando la calidad de vida y sentando las bases para una mayor competitividad del municipio.",
    inversion: "INVERSIÓN RD$ 6,698 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
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
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
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
    region: "Gran Santo Domingo",
    tipo_de_obra: "Otros",
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
    titulo: "Parque del Este",
    descripcion:
      "Remodelación de las instalaciones deportivas que serán utilizadas para los XXV Juegos Centroamericanos y del Caribe, Santo Domingo 2026.",
    inversion: "INVERSIÓN RD$ 3,700 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Deportivos",
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
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
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
    region: "Región Norte",
    tipo_de_obra: "Infraestructura Vial",
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
    region: "Región Norte",
    tipo_de_obra: "Infraestructura Vial",
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
    region: "Región Norte",
    tipo_de_obra: "Infraestructura Vial",
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
    region: "Región Norte",
    tipo_de_obra: "Hídricos",
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
    region: "Región Norte",
    tipo_de_obra: "Otros",
    ubicacion: {
      provincia: "Santiago",
      municipio: "Santiago de los Caballeros",
      sector: "Hato del Yaque",
      lat: 19.446506,
      lng: -70.801597,
    },
    imagenes: ["/santiago/hatodelyaque.jpg"],
  },
  {
    id: "obra-12",
    titulo: "Metro Los Alcarrizos Línea 2c",
    descripcion: "Una inversión sin precedentes en infraestructura que está modernizando la metrópolis, mejorando la calidad de vida y sentando las bases para una mayor competitividad. Movilidad urbana integrada extensión línea 2 del metro (2c) llevará el sistema de transporte masivo hasta los alcarrizos, integrando a sus habitantes a todo el sistema de transporte masivo de la provincia. La línea 2c del metro de santo domingo (metro de los alcarrizos) está en etapa de pruebas dinámicas desde principios de agosto de 2025",
    inversion: "INVERSIÓN RD$ 29,850 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Oeste",
      sector: "Los Alcarrizos",
      lat: 18.51757571,
      lng: -70.00992377
    },
    imagenes: [
      "https://i.imgur.com/mWf96IM.jpeg"
    ]
  },
  {
    id: "obra-13",
    titulo: "Ampliación De Servicio Línea 1 Metro",
    descripcion: "Gracias al respaldo del gobierno dominicano y al financiamiento de la agencia francesa de desarrollo. La ampliación y entrega del pasillo de interconexión peatonal entre las líneas 1 y 2 incluyó también la adquisición de 24 nuevos trenes. Actualmente, el sistema opera con cuatro trenes de seis vagones cada uno, lo que garantiza mayor eficiencia y comodidad para los usuarios. Esta obra impactará directamente la movilidad, reducirá los tiempos de espera y contribuirá a descongestionar el tráfico en la zona, beneficiando a miles de ciudadanos.",
    inversion: "INVERSIÓN USD 260 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "Villa Mella",
      lat: 18.5467861,
      lng: -69.90114439
    },
    imagenes: [
      "https://i.imgur.com/dIlkAbR.jpeg"
    ]
  },
  {
    id: "obra-14",
    titulo: "Teleférico Sdo - Km9 Línea 3 (Duarte - Haina)",
    descripcion: "En desarrollo Línea 3 del sistema de cable aéreo para el transporte público masivo de pasajeros de santo domingo oeste. Tendrá una capacidad entre los 4,000 a 6,000 pasajeros por hora.",
    inversion: "INVERSIÓN RD$ 6,320 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "Duarte-Haina",
      lat: 18.52103717,
      lng: -70.01068453
    },
    imagenes: [
      "https://i.imgur.com/FJdHn1q.jpeg"
    ]
  },
  {
    id: "obra-15",
    titulo: "Proyecto Nuevo Domingo Savio",
    descripcion: "El proyecto incluye la construcción de una avenida, parques, instalaciones deportivas, una ciclovía, mejoramiento de servicios públicos como agua potable y alcantarillado, y la promoción de actividades culturales y recreativas, transformando la zona en un espacio más seguro e inclusivo.",
    inversion: "INVERSIÓN RD$ 5,086.5 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Distrito Nacional",
      municipio: "",
      sector: "Domingo Savio",
      lat: 18.49842229,
      lng: -69.87719468
    },
    imagenes: [
      "https://i.imgur.com/A8vwy03.jpeg"
    ]
  },
  {
    id: "obra-16",
    titulo: "Ciudad Sanitaria Dr. Luis Eduardo Aybar",
    descripcion: "Remodelación, reconstrucción y equipamiento hospital Materno infantil y hospital clinico quirúrgico - en desarrollo",
    inversion: "INVERSIÓN RD$ 1,339 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Salud",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "San Luis",
      lat: 18.49371223,
      lng: -69.89029009
    },
    imagenes: [
      "https://i.imgur.com/Jg0AOEV.jpeg"
    ]
  },
  {
    id: "obra-17",
    titulo: "Hospital Padre Billini",
    descripcion: "",
    inversion: "INVERSIÓN RD$ 2,175 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Salud",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "",
      lat: 18.47120139,
      lng: -69.88913859
    },
    imagenes: [
      "https://i.imgur.com/tPChvkI.jpeg"
    ]
  },
  {
    id: "obra-18",
    titulo: "Túnel Expreso Plaza De La Bandera",
    descripcion: "Financiamiento aerodom De la infraestructura Vial gsd- en desarrollo",
    inversion: "RD$ 6,000 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "",
      lat: 18.45006959,
      lng: -69.9730307
    },
    imagenes: [
      "https://i.imgur.com/2aBuPbd.jpeg"
    ]
  },
  {
    id: "obra-19",
    titulo: "Paso A Desnivel Expreso Isabel Aguiar",
    descripcion: "Financiamiento aerodom De la infraestructura Vial gsd- en desarrollo",
    inversion: "RD$ 2,880 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "",
      lat: 18.45308783,
      lng: -69.97885013
    },
    imagenes: [
      "https://i.imgur.com/SFS8DAp.jpeg"
    ]
  },
  {
    id: "obra-20",
    titulo: "Solución Avenida República De Colombia",
    descripcion: "Financiamiento aerodom- en desarrollo",
    inversion: "RD$ 10,000 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "",
      lat: 18.50698568,
      lng: -69.980203
    },
    imagenes: [
      "https://i.imgur.com/d0i2IrD.jpeg"
    ]
  },
  {
    id: "obra-21",
    titulo: "Circunvalación De Los Alcarrizos",
    descripcion: "En desarrollo",
    inversion: "RD$ 2,718 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Los Alcarrizos",
      sector: "Los Alcarrizos",
      lat: 18.51672402,
      lng: -70.01663164
    },
    imagenes: [
      "https://i.imgur.com/oVnbdXC.jpeg"
    ]
  },
  {
    id: "obra-22",
    titulo: "Ampliación Y Modernización Avenida Hípica",
    descripcion: "Ampliación y modernización de la avenida conocida como freddy beras goico (antes hípica) en santo domingo este.",
    inversion: "INVERSIÓN RD$ 700 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "",
      lat: 18.48086559,
      lng: -69.81579715
    },
    imagenes: [
      "https://i.imgur.com/cJR7jur.jpeg"
    ]
  },
  {
    id: "obra-23",
    titulo: "Ampliación Y Remodelación De Dos A Ocho Carriles Avenida Cnel. Fernández Domínguez San Isidro",
    descripcion: "Ampliación y remodelación de la avenida coronel rafael tomás fernández domínguez (san isidro)",
    inversion: "INVERSIÓN RD$ 2,400 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "San Isidro",
      lat: NaN,
      lng: -69.8131487
    },
    imagenes: [
      "https://i.imgur.com/JlUkusC.jpeg"
    ]
  },
  {
    id: "obra-24",
    titulo: "Ampliación Y Construcción Boca Chica Avenida Ecológica",
    descripcion: "Interconexión vial de esta avenida con autopista juan pablo ii, las américas y la circunvalación de santo domingo, impulsando el desarrollo vertiginoso del gran municipio sde.",
    inversion: "INVERSIÓN RD$ 6,332 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "Boca Chica",
      lat: 18.48412451,
      lng: -69.7513209
    },
    imagenes: [
      "https://i.imgur.com/u4I1gZz.jpeg"
    ]
  },
  {
    id: "obra-25",
    titulo: "Elevado De San Andrés Boca Chica",
    descripcion: "Beneficia a más de 160,000 personas, es considerada la primera de su tipo en el país por su diseño curvo tanto horizontal como vertical. Ha sido clave para mejorar la seguridad vial en un área que anteriormente era considerada crítica en términos de accidentes.",
    inversion: "INVERSIÓN USD$ 51 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "Boca Chica",
      lat: 18.45052869,
      lng: -69.65345174
    },
    imagenes: [
      "https://i.imgur.com/kOIgOJe.jpeg"
    ]
  },
  {
    id: "obra-26",
    titulo: "Construcción Distribuidor Haras Nacionales - Circunvalación Santo Domingo",
    descripcion: "",
    inversion: "INVERSIÓN RD$ 196 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "Haras Nacionales",
      lat: 18.60507547,
      lng: -69.9099711
    },
    imagenes: [
      "https://i.imgur.com/TMZdzGa.jpeg"
    ]
  },
  {
    id: "obra-27",
    titulo: "Construcción Distribuidor La Victoria - Circunvalación Santo Domingo",
    descripcion: "",
    inversion: "INVERSIÓN RD$ 125.3 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "La Victoria",
      lat: 18.6100518,
      lng: -69.85509797
    },
    imagenes: [
      "https://i.imgur.com/yejyspx.png"
    ]
  },
  {
    id: "obra-28",
    titulo: "Construcción Primer Anillo A 345 Mil Voltios Y Lineas De Transmisión 345/138 San Luis , Santo Domingo",
    descripcion: "Garantiza mayor flujo de potencia, estabilidad, continuidad y calidad en el suministro eléctrico en la provincia santo domingo y el distrito nacional y en las regiones norte y este del país Financiada por el banco de desarrollo kfw (kreditanstalt für wiederaufbau). diseño, suministro y montaje por la empresa alemana siemens.",
    inversion: "INVERSIÓN RD$ 2,410 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Sector Energético",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "San Luis",
      lat: 18.54374081,
      lng: -69.79665694
    },
    imagenes: [
      "https://i.imgur.com/BeDp67f.png"
    ]
  },
  {
    id: "obra-29",
    titulo: "Ampliación Acueducto Oriental, Barrera De Salinidad",
    descripcion: "Fase i rehabilitacion - completado Fase ii ampliacion - en desarrollo",
    inversion: "INVERSIÓN USD$ 151 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Hídricas",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "",
      lat: 18.5631855,
      lng: -69.77746925
    },
    imagenes: [
      "https://i.imgur.com/pFVR8dk.jpeg"
    ]
  },
  {
    id: "obra-30",
    titulo: "Hospital Dra. Evangelina Rodríguez Santo Domingo",
    descripcion: "La antigua maternidad del idss, es hoy el hospital de la mujer, dra. Evangelina rodriguez, fue sometido a una extensa renovación, equipamiento y remozamiento.",
    inversion: "INVERSIÓN +RD$ 500 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Salud",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "",
      lat: 18.46624392,
      lng: -69.91892432
    },
    imagenes: [
      "https://i.imgur.com/KPuDTG2.jpeg"
    ]
  },
  {
    id: "obra-31",
    titulo: "Vivienda Proyecto Ciudad Modelo Santo Domingo Norte",
    descripcion: "Construida sobre 123mil m2, la obra tiene un total de 1,760 unidades de apartamentos que incluyen 1,496 viviendas de 3 habitaciones y 264 de 2 habitaciones.",
    inversion: "INVERSIÓN + RD$ 4,500 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Vivienda",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "Ciudad Modelo",
      lat: 18.55801919,
      lng: -69.93134197
    },
    imagenes: [
      "https://i.imgur.com/wApVdmN.jpeg"
    ]
  },
  {
    id: "obra-32",
    titulo: "Vivienda Proyecto Hato Nuevo Santo Domingo Oeste",
    descripcion: "",
    inversion: "INVERSIÓN +RD$ 3,337 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Vivienda",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Oeste",
      sector: "Hato Nuevo",
      lat: 18.53822484,
      lng: -70.06430485
    },
    imagenes: [
      "https://i.imgur.com/QGekMty.jpeg"
    ]
  },
  {
    id: "obra-33",
    titulo: "Mi Vivienda Residencial Lolita Ii Santo Domingo Oeste",
    descripcion: "140 apartamentos que impacta directamente a 560 personas, mejorando su calidad de vida y acceso a una vivienda digna.",
    inversion: "INVERSIÓN RD$ 369 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Vivienda",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Oeste",
      sector: "",
      lat: 18.48660786,
      lng: -70.03386518
    },
    imagenes: [
      "https://i.imgur.com/Lmg2YhS.png"
    ]
  },
  {
    id: "obra-34",
    titulo: "Mi Vivienda Mived, San Luis Santo Domingo Este",
    descripcion: "",
    inversion: "INVERSIÓN RD$ 7,170 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Vivienda",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "San Luis",
      lat: 18.49082279,
      lng: -69.8248488
    },
    imagenes: [
      "https://i.imgur.com/wJ9ylLu.jpeg"
    ]
  },
  {
    id: "obra-35",
    titulo: "Vivienda Colinas Del Arroyo Ii Santo Domingo Norte",
    descripcion: "Mi vivienda colinas del arroyo ii, en santo domingo norte. Una superficie de 4,867.39 metros cuadrados y dispone de siete edificios. Cada edificación cuenta con cuatro niveles, divididos en ocho apartamentos de 65 metros cuadrados, para un total de 56 unidades.",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Vivienda",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "",
      lat: 18.53813474,
      lng: -69.94433812
    },
    imagenes: [
      "https://i.imgur.com/Fu3GFRE.jpeg"
    ]
  },
  {
    id: "obra-36",
    titulo: "Vivienda Boca Residence Boca Chica",
    descripcion: "72 apartamentos del proyecto boca residence, bajo el plan nacional de viviendas familia feliz.",
    inversion: "INVERSIÓN RD $182 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Vivienda",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "Boca Chica",
      lat: 18.45186667,
      lng: -69.64613274
    },
    imagenes: [
      "https://i.imgur.com/bFIZahO.jpeg"
    ]
  },
  {
    id: "obra-37",
    titulo: "Remozamiento Ciudad Colonial Santo Domingo",
    descripcion: "Programa integral de desarrollo turístico y urbano de la ciudad colonial de santo domingo o programa de revitalización (tu ciudad colonial) En desarrollo",
    inversion: "INVERSIÓN RD$ 5,400 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "Ciudad Colonial",
      lat: 18.47696338,
      lng: -69.88355325
    },
    imagenes: [
      "https://i.imgur.com/GV6FS7g.jpeg"
    ]
  },
  {
    id: "obra-38",
    titulo: "Ciudad Judicial Palacio De Justicia Santo Domingo Este",
    descripcion: "Construcción de la nueva sede judicial, la cual alojará a jueces, fiscales y personal de la defensoría del pueblo, en el municipio más poblado del país.",
    inversion: "INVERSIÓN RD$ 4,486 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "",
      lat: 18.49988769,
      lng: -69.86565599
    },
    imagenes: [
      "https://i.imgur.com/Xf6qJOa.jpeg"
    ]
  },
  {
    id: "obra-39",
    titulo: "Palacio De Justicia Santo Domingo Oeste",
    descripcion: "La cual alojará, las autoridades judiciales en el municipio-en desarrollo",
    inversion: "INVERSIÓN RD$ 1,852 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Oeste",
      sector: "",
      lat: 18.49826549,
      lng: -69.8653959
    },
    imagenes: [
      "https://i.imgur.com/2sk9Y09.jpeg"
    ]
  },
  {
    id: "obra-40",
    titulo: "Construcción Cristo Park Santo Domingo",
    descripcion: "Construcción del moderno parque ambiental cristo park, construido sobre los 1.5 km de la antigua cañada saneada de la tiradentes, que beneficiará a más de 350,000 personas.",
    inversion: "INVERSIÓN RD$ 560 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "Cristo Rey",
      lat: 18.50056403,
      lng: -69.93185394
    },
    imagenes: [
      "https://i.imgur.com/2JSsjYK.jpeg"
    ]
  },
  {
    id: "obra-41",
    titulo: "Conversión Colegio Maharishi En Un Moderno Parque Recreativo Y Deportivo",
    descripcion: "En desarrollo",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "",
      lat: 18.43406708,
      lng: -69.95714449
    },
    imagenes: [
      "https://i.imgur.com/uiedA9M.png"
    ]
  },
  {
    id: "obra-42",
    titulo: "Solución Entrada 3 Brazos Santo Domingo",
    descripcion: "",
    inversion: "INVERSIÓN RD$ 180 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Infraestructura Vial",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "",
      lat: 18.51791692,
      lng: -69.88045596
    },
    imagenes: [
      "https://i.imgur.com/PT6bUZf.jpeg"
    ]
  },
  {
    id: "obra-43",
    titulo: "Nueva Terminal Aila Aerodom",
    descripcion: "En desarrollo",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "",
      lat: 18.42966342,
      lng: -69.67092832
    },
    imagenes: [
      "https://i.imgur.com/Qvc5RzE.jpeg"
    ]
  },
  {
    id: "obra-44",
    titulo: "Viviendas Apartamentos Sobre Guajimía Cañada De Guajimía",
    descripcion: "Construcción 344, destinados a la reubicación de familias desplazadas del Proyecto de saneamiento pluvial y sanitario de la cañada de guajimía.",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Vivienda",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Oeste",
      sector: "",
      lat: 18.46734002,
      lng: -69.99153875
    },
    imagenes: [
      "https://i.imgur.com/9P7uoTp.jpeg"
    ]
  },
  {
    id: "obra-45",
    titulo: "Parque Del Este Y Centro Olímpico Juan Pablo Duarte Santo Domingo Este",
    descripcion: "Remodelación de las instalaciones deportivas que serán utilizadas para los xxv juegos centroamericanos y del caribe, santo domingo 2026",
    inversion: "INVERSIÓN RD$ 3,700 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "",
      lat: 18.75815164,
      lng: -69.83475464
    },
    imagenes: [
      "https://i.imgur.com/Y7I94tl.jpeg"
    ]
  },
  {
    id: "obra-46",
    titulo: "Construcción Centro De Atención Integral Para La Discapacidad (Caid) Santo Domingo Este",
    descripcion: "",
    inversion: "INVERSIÓN RD$ 631 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Salud",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "",
      lat: 18.50733563,
      lng: -69.85802998
    },
    imagenes: [
      "https://i.imgur.com/5LITf0f.jpeg"
    ]
  },
  {
    id: "obra-47",
    titulo: "Centro Tecnológico Ivelisse Prats Ramírez De Pérez",
    descripcion: "Ciudad juan bosch, Santo domingo este.",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Educación",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "Ciudad Juan Bosch",
      lat: 18.49485015,
      lng: -69.74773745
    },
    imagenes: [
      "https://i.imgur.com/sfijeST.jpeg"
    ]
  },
  {
    id: "obra-48",
    titulo: "Remodelación Estadio Olímpico Félix Sánchez Santo Domingo",
    descripcion: "",
    inversion: "INVERSIÓN RD$ 950 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "",
      lat: 18.48205327,
      lng: -69.91852444
    },
    imagenes: [
      "https://i.imgur.com/epS5oUb.jpeg"
    ]
  },
  {
    id: "obra-49",
    titulo: "Remodelación Palacio De Los Deportes Profesor Virgilio Travieso Soto Santo Domingo",
    descripcion: "En desarrollo Se encuentra en desarrollo de una profunda remodelación que permitirá en el futuro celebrar partidos de exhibición de la nba y otros eventos internacionales.",
    inversion: "INVERSIÓN RD$ 1,000 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "",
      lat: 18.47637718,
      lng: -69.91905598
    },
    imagenes: [
      "https://i.imgur.com/c6ieYPt.jpeg"
    ]
  },
  {
    id: "obra-50",
    titulo: "Remozamiento Pabellón De Esgrima Centro Olímpico",
    descripcion: "Esta obra beneficiará a cerca de 100 atletas de alto rendimiento que a partir de ahora practicarán esgrima en instalaciones de calidad, mejorando su rendimiento de cara a futuras competiciones internacionales.",
    inversion: "INVERSIÓN RD $37 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "",
      lat: 18.47712177,
      lng: -69.92040433
    },
    imagenes: [
      "https://i.imgur.com/Hqc8kGj.jpeg"
    ]
  },
  {
    id: "obra-51",
    titulo: "Campo De Tiro Con Arco Del Parque Del Este Santo Domingo Este",
    descripcion: "Fue construido un nuevo campo de tiro con gradas para capacidad de 456 personas, además de nuevas oficinas administrativas y una caseta para jueces.",
    inversion: "INVERSIÓN RD$ 43 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "",
      lat: 18.47950913,
      lng: -69.84558893
    },
    imagenes: [
      "https://i.imgur.com/IUWmhZO.jpeg"
    ]
  },
  {
    id: "obra-52",
    titulo: "Estadio De Softball Clodomiro García Colón Santo Domingo Este",
    descripcion: "Readecuación de dos gradas, techado de graderías, instalación de luminarias, construcción de sistema de riego, valla de retención, parqueos, además de remodelación del dogout, vestidores y baños.",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "",
      lat: 18.47573239,
      lng: -69.8643466
    },
    imagenes: [
      "https://i.imgur.com/PBd13nM.png"
    ]
  },
  {
    id: "obra-53",
    titulo: "Centro Nacional De Retención De Vehículos Circunvalación De Santo Domingo",
    descripcion: "Cenarve cuenta con un edificio administrativo, modernos talleres de mecánica y automotriz, dos estaciones de combustible, una unidad de la policía nacional y amplios depósitos diseñados para diferentes tipos de vehículos. Además, incluye oficinas, salones de reuniones, un dispensario médico, baños y cocina, consolidando un espacio funcional y completo.",
    inversion: "INVERSIÓN RD$ 625 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "",
      lat: 18.58946519,
      lng: -70.04436923
    },
    imagenes: [
      "https://i.imgur.com/4bJKVN0.jpeg"
    ]
  },
  {
    id: "obra-54",
    titulo: "Hospital Municipal Boca Chica",
    descripcion: "El hospital cuenta con emergencia, área de Trauma shock, observación, edificio de tuberculosis, áreas De imágenes, rayos x y mamografía.",
    inversion: "INVERSIÓN RD$ 362.3 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Salud",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "",
      lat: 18.44891976,
      lng: -69.63988845
    },
    imagenes: [
      "https://i.imgur.com/m36iBEh.jpeg"
    ]
  },
  {
    id: "obra-55",
    titulo: "Hospital General Dr. Marcelino Vélez Santana",
    descripcion: "La remodelación dispone de 60 camas de hospitalización, tres quirófanos, dos salas de parto, cuatro camas de recuperación, cinco camas de preparación, ocho cunas neonatales, 14 unidades de cuidados intensivos neonatal (ucin) internas, cinco externas y ocho ucin aisladas.",
    inversion: "INVERSIÓN RD$ 765 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Salud",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "",
      lat: 18.47299412,
      lng: -69.97096606
    },
    imagenes: [
      "https://i.imgur.com/6StURuH.jpeg"
    ]
  },
  {
    id: "obra-56",
    titulo: "Unidad Oncopediátrica Incart",
    descripcion: "El pabellón onco pediátrico uniendo voluntades atenderá por primera vez de manera diferenciada, a jóvenes y adolescentes hasta los 24 años, con un protocolo exclusivo para este grupo de pacientes.",
    inversion: "INVERSIÓN RD$ 419 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Salud",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "",
      lat: 18.46412799,
      lng: -69.90692801
    },
    imagenes: [
      "https://i.imgur.com/hl5SghQ.jpeg"
    ]
  },
  {
    id: "obra-57",
    titulo: "Hospital Mario Tolentino Dipp Santo Domingo Norte",
    descripcion: "Capacidad para 225 internos. Se construyó sobre 19,697 metros cuadrados y dispone de 203 camas para hospitalización y 19 consultorios de especialidades médicas.",
    inversion: "INVERSIÓN RD$ 2,800 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Salud",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "",
      lat: 18.54781803,
      lng: -69.88092084
    },
    imagenes: [
      "https://i.imgur.com/x4mnEzZ.png"
    ]
  },
  {
    id: "obra-58",
    titulo: "Remozamiento Techado Hospital Docente Dario Contreras Santo Domingo Este",
    descripcion: "",
    inversion: "INVERSIÓN RD$ 47 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Salud",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "",
      lat: 18.48755173,
      lng: -69.86292601
    },
    imagenes: [
      "https://i.imgur.com/hTtjQEx.png"
    ]
  },
  {
    id: "obra-59",
    titulo: "Gran Santo Domingo Modernización Pista Aeropuerto Fuerza Aérea San Isidro",
    descripcion: "El gobierno dominicano desarrolla un plan para impulsar la estrategia de mejora de las infraestructuras aeroportuarias de todo el país. • aeropuerto de cabo rojo, pedernales, a través de la dirección de alianzas público Privadas. • el aeropuerto doméstico osvaldo virgil, en la provincia de montecristi • un nuevo aeropuerto, el granero del sur, con un enfoque comercial en la zona De san juan de la maguana",
    inversion: "INVERSIÓN RD$ 2,800 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "San Isidro",
      lat: 18.97898783,
      lng: -70.02698619
    },
    imagenes: [
      "https://i.imgur.com/ZYC4Dnp.jpeg"
    ]
  },
  {
    id: "obra-60",
    titulo: "Hangar No.4 Mayor Tec. De Aviación Rafael Emilio Hernandez Beato",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "",
      lat: 18.49909229,
      lng: -69.76911787
    },
    imagenes: [
      "https://i.imgur.com/twrDsTA.jpeg"
    ]
  },
  {
    id: "obra-61",
    titulo: "Centro De Operaciones Cesmet Sede Del Ministerio De Defensa Santo Domingo",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "",
      lat: 18.51659369,
      lng: -69.91340504
    },
    imagenes: [
      "https://i.imgur.com/TehlnmQ.jpeg"
    ]
  },
  {
    id: "obra-62",
    titulo: "Escuela Básica Profesora Mercedes Jerez Beltrán La Victoria, Santo Domingo Norte",
    descripcion: "",
    inversion: "INVERSIÓN RD$ 145 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Educación",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "La Victoria",
      lat: 18.55302628,
      lng: -69.90002268
    },
    imagenes: [
      "https://i.imgur.com/mhTWMsO.jpeg"
    ]
  },
  {
    id: "obra-63",
    titulo: "Centro De Educación Special Fernando Arturo Ogando El Cercadillo, Santo Domingo Norte",
    descripcion: "Este centro cuenta con 19 aulas regulares y dos aulas de inicial para niños de tres a cinco años. Tiene capacidad para ofrecer educación a más de 800 niños.",
    inversion: "INVERSIÓN RD$ 155.6 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Educación",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "El mercadillo",
      lat: 18.78589264,
      lng: -70.01676733
    },
    imagenes: [
      "https://i.imgur.com/kv3U6Dv.png"
    ]
  },
  {
    id: "obra-64",
    titulo: "Liceo Experimental Uasd Marcos Del Rosario Mendoza Guerra",
    descripcion: "Un plantel educativo preuniversitario de unos 9 mil metros cuadrados, con 26 aulas que acoje a 950 estudiantes, un aula virtual, un laboratorios de informática, un laboratorio de ciencias, un salón multiuso que acoge un comedor con su cocina, oficinas administrativas y área deportiva.",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Educación",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "Guerra",
      lat: 18.52658586,
      lng: -69.73581427
    },
    imagenes: [
      "https://i.imgur.com/ogY74hU.jpeg"
    ]
  },
  {
    id: "obra-65",
    titulo: "Construcción Liceo Pedro Brand 1 (Liceo Justo Antonio Caba Javier)",
    descripcion: "",
    inversion: "INVERSIÓN RD$ 153 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Educación",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "",
      lat: 18.56422553,
      lng: -70.08524739
    },
    imagenes: [
      "https://i.imgur.com/kYwt3IE.jpeg"
    ]
  },
  {
    id: "obra-66",
    titulo: "Escuela Básica Rubén Darío",
    descripcion: "Chavón de los alcarrizos",
    inversion: "INVERSIÓN RD$ 111 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Educación",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Oeste",
      sector: "Los Alcarrizos",
      lat: 18.52474743,
      lng: -70.04705307
    },
    imagenes: [
      "https://i.imgur.com/lPYqZ3X.jpeg"
    ]
  },
  {
    id: "obra-67",
    titulo: "Escuela Primaria Rafael Kasse Acta Valdez",
    descripcion: "Cuenta con 27 aulas y tiene capacidad para 830 estudiantes.",
    inversion: "INVERSIÓN RD$ 155 MILLONES",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Educación",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "",
      lat: 18.52561237,
      lng: -70.04306634
    },
    imagenes: [
      "https://i.imgur.com/aAGxtRv.jpeg"
    ]
  },
  {
    id: "obra-68",
    titulo: "Escuela Primaria Facundo Lavatta Ramírez",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Educación",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "",
      lat: 18.66880196,
      lng: -70.10394462
    },
    imagenes: [
      "https://i.imgur.com/2LQIjua.png"
    ]
  },
  {
    id: "obra-69",
    titulo: "Destacamento Policía Nacional Las Cañitas Distrito Nacional",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "",
      sector: "Las Cañitas",
      lat: 18.5117708,
      lng: -69.89358593
    },
    imagenes: [
      "https://i.imgur.com/lkKzc4W.jpeg"
    ]
  },
  {
    id: "obra-70",
    titulo: "Destacamento Policía Nacional Barrio Las Ochocientas Distrito Nacional",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Oeste",
      sector: "Los Ríos",
      lat: 18.50207754,
      lng: -69.96242475
    },
    imagenes: [
      "https://i.imgur.com/1zCSoGp.jpeg"
    ]
  },
  {
    id: "obra-71",
    titulo: "Destacamento De La Policía Dirección Regional Santo Domingo Oeste",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Oeste",
      sector: "",
      lat: 18.48664703,
      lng: -69.90276989
    },
    imagenes: [
      "https://i.imgur.com/Oo9ye0U.jpeg"
    ]
  },
  {
    id: "obra-72",
    titulo: "Destacamento Policía Nacional Arroyo Hondo Ii Distrito Nacional",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "Arrollo Hondo II",
      lat: 18.50696113,
      lng: -69.94834852
    },
    imagenes: [
      "https://i.imgur.com/i9MQlJd.jpeg"
    ]
  },
  {
    id: "obra-73",
    titulo: "Destacamento Policía Nacional Ensanche Luperón Distrito Nacional",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "Ensanche Luperón",
      lat: 18.49781384,
      lng: -69.89744628
    },
    imagenes: [
      "https://i.imgur.com/flC4Ey7.jpeg"
    ]
  },
  {
    id: "obra-74",
    titulo: "Destacamento Policía Nacional Villa Mella San Felipe",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "Villa Mella",
      lat: 18.59075136,
      lng: -69.91956892
    },
    imagenes: [
      "https://i.imgur.com/sEFjBNv.jpeg"
    ]
  },
  {
    id: "obra-75",
    titulo: "Destacamento Policía Nacional Los Guaricanos Santo Domingo Norte",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "Los Guaricanos",
      lat: 18.54298745,
      lng: -69.93527606
    },
    imagenes: [
      "https://i.imgur.com/M5R4Av0.jpeg"
    ]
  },
  {
    id: "obra-76",
    titulo: "Destacamento Policía Nacional Distrito Nacional Villa María",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Distrito Nacional",
      sector: "Villa María",
      lat: 18.49469037,
      lng: -69.89819594
    },
    imagenes: [
      "https://i.imgur.com/P2mVwp2.jpeg"
    ]
  },
  {
    id: "obra-77",
    titulo: "Destacamento Policía Nacional Santo Domingo Norte Yaiba",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "Yaiba",
      lat: 18.55333159,
      lng: -69.90102487
    },
    imagenes: [
      "https://i.imgur.com/o5Da2Gf.jpeg"
    ]
  },
  {
    id: "obra-78",
    titulo: "Destacamento Policía Nacional Santo Domingo Punta Torrecilla",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "Punta Torrecilla",
      lat: 18.48211188,
      lng: -69.85632587
    },
    imagenes: [
      "https://i.imgur.com/MNPidJ6.jpeg"
    ]
  },
  {
    id: "obra-79",
    titulo: "Proyecto Cedi-Mujer",
    descripcion: "El proyecto ejecutado por el gabinete de política social ha materializado el diseño, la construcción, equipamiento y puesta en operación de dos centros de desarrollo integral para la mujer (cedi-mujer) con el objetivo de ofrecer, bajo un mismo techo, servicios integrales de atención, protección y empoderamiento de la mujer.",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Salud",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "",
      lat: 18.54782424,
      lng: -69.88029713
    },
    imagenes: [
      "https://i.imgur.com/yWTk3j0.jpeg"
    ]
  },
  {
    id: "obra-80",
    titulo: "Campo De Entrenamiento Militar 16 De Agosto Sierra Prieta, Santo Domingo Norte",
    descripcion: "",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Seguridad",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Norte",
      sector: "Sierra Prieta",
      lat: 18.65284187,
      lng: -69.97066758
    },
    imagenes: [
      "https://i.imgur.com/mUy1BK5.jpeg"
    ]
  },
  {
    id: "obra-81",
    titulo: "Cancino Estación De Transferencia",
    descripcion: "Estación de transferencia de residuos sólidos",
    inversion: "",
    region: "Gran Santo Domingo",
    tipo_de_obra: "Desarrollo Urbano",
    ubicacion: {
      provincia: "Santo Domingo",
      municipio: "Santo Domingo Este",
      sector: "Cancino",
      lat: 18.54037159,
      lng: -69.84536517
    },
    imagenes: [
      "https://i.imgur.com/irneFUh.png"
    ]
  },
];