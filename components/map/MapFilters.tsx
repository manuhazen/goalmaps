"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ProvinciasCombobox } from "@/components/map/ProvinciasCombobox";
import { EstadoObra } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";

export type MapFiltersState = {
  estados: EstadoObra[];
  provincias: string[];
};

export function MapFilters({
  provincias,
  filters,
  setFilters,
  total,
}: {
  provincias: string[];
  filters: MapFiltersState;
  setFilters: (next: MapFiltersState) => void;
  total: number;
}) {
  const [collapsed, setCollapsed] = useState(false); // puede cerrarse, por defecto abierto

  const ESTADOS: EstadoObra[] = ["en_proceso", "finalizada", "cancelada"];

  const toggleEstado = (estado: EstadoObra) => {
    const set = new Set(filters.estados);
    if (set.has(estado)) set.delete(estado);
    else set.add(estado);
    setFilters({ ...filters, estados: Array.from(set) as EstadoObra[] });
  };

  const clearFilters = () => setFilters({ estados: [], provincias: [] });

  const FilterForm = (
    <div className="space-y-3">
      <div>
        <div className="text-sm font-medium mb-2">Estado</div>
        <div className="flex flex-col gap-2">
          {ESTADOS.map((e) => {
            const selected = filters.estados.includes(e);
            return (
              <label key={e} className="flex items-center gap-2 text-sm">
                <Checkbox
                  checked={selected}
                  onChange={() => toggleEstado(e)}
                  aria-label={`Estado ${e}`}
                />
                <span>{e === "en_proceso" ? "En proceso" : e === "finalizada" ? "Finalizada" : "Cancelada"}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Provincias</label>
        <ProvinciasCombobox
          opciones={provincias}
          value={filters.provincias}
          onChange={(next) => setFilters({ ...filters, provincias: next })}
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="text-xs text-muted-foreground">{total} obras</div>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Limpiar
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile: botón muy reducido que aparece cuando está colapsado */}
      {collapsed && (
        <div className="md:hidden absolute top-4 left-4 z-30">
          <Button
            size="icon"
            variant="secondary"
            onClick={() => setCollapsed(false)}
            aria-label="Mostrar filtros"
          >
            <SlidersHorizontal size={18} className="opacity-80" />
          </Button>
        </div>
      )}

      {/* Tarjeta flotante: en mobile se oculta totalmente cuando está colapsada; en desktop siempre visible (colapsa solo el contenido) */}
      <div
        className={cn(
          "absolute top-4 left-4 z-20 w-[min(92vw,360px)]",
          collapsed ? "hidden md:block" : "block"
        )}
      >
        <Card className="shadow-lg">
          <CardHeader className="pb-2 flex items-center justify-between">
            <CardTitle className="text-base">Filtros ({total})</CardTitle>
            <div className="flex items-center gap-2">
              {/* Mobile: botón compacto para colapsar */}
              <div className="md:hidden">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setCollapsed(true)}
                  aria-label="Ocultar filtros"
                >
                  <SlidersHorizontal size={18} />
                </Button>
              </div>
              {/* Desktop: texto Mostrar/Ocultar */}
              <div className="hidden md:block">
                <Button size="sm" variant="ghost" onClick={() => setCollapsed((v) => !v)}>
                  {collapsed ? "Mostrar" : "Ocultar"}
                </Button>
              </div>
            </div>
          </CardHeader>
          {!collapsed && <CardContent>{FilterForm}</CardContent>}
        </Card>
      </div>
    </>
  );
}
