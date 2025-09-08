export type Ubicacion = {
  provincia: string;
  municipio: string;
  sector?: string;
  lat: number;
  lng: number;
};

export type Obra = {
  id: string;
  titulo: string;
  descripcion?: string;
  inversion: string;
  region: string;
  tipo_de_obra: string;
  ubicacion: Ubicacion;
  imagenes?: string[];
  videos?: string[];
};

export function progresoObra(
  fechaInicioISO: string,
  fechaEntregaISO: string
): number {
  const inicio = new Date(fechaInicioISO).getTime();
  const entrega = new Date(fechaEntregaISO).getTime();
  const ahora = Date.now();
  if (Number.isNaN(inicio) || Number.isNaN(entrega) || entrega <= inicio)
    return 0;
  const total = entrega - inicio;
  const transcurrido = Math.min(Math.max(ahora - inicio, 0), total);
  return Math.round((transcurrido / total) * 100);
}
