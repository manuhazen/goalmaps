"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProvinciasCombobox } from "@/components/map/ProvinciasCombobox";
import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";

export type MapFiltersState = {
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

  const clearFilters = () => setFilters({ provincias: [] });

  const FilterForm = (
    <div className="space-y-3">
      {/* Estado filter removed as requested */}

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
