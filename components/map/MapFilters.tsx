"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProvinciasCombobox } from "@/components/map/ProvinciasCombobox";
import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";

export type MapFiltersState = {
  provincias: string[];
  regiones: string[];
  tiposDeObra: string[];
};

export function MapFilters({
  provincias,
  regiones,
  tiposDeObra,
  filters,
  setFilters,
  total,
}: {
  provincias: string[];
  regiones: string[];
  tiposDeObra: string[];
  filters: MapFiltersState;
  setFilters: (next: MapFiltersState) => void;
  total: number;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [isFixed, setIsFixed] = useState(false); 
  const scrollThreshold = 2600; 

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        const currentScrollPos = window.scrollY;
        setIsFixed(currentScrollPos > scrollThreshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]); 

  const clearFilters = () =>
    setFilters({ provincias: [], regiones: [], tiposDeObra: [] });

  const FilterForm = (
    <div className="flex flex-col sm:flex-row space-y-3">
      <div className="flex-1 px-0 sm:px-2">
        <label className="text-sm font-medium mb-2 block">Provincias</label>
        <ProvinciasCombobox
          opciones={provincias}
          value={filters.provincias}
          onChange={(next) => setFilters({ ...filters, provincias: next })}
        />
      </div>

      <div className="flex-1 px-0 sm:px-2">
        <label className="text-sm font-medium mb-2 block">Regiones</label>
        <ProvinciasCombobox
          opciones={regiones}
          value={filters.regiones}
          onChange={(next) => setFilters({ ...filters, regiones: next })}
          label="Regiones"
        />
      </div>

      <div className="flex-1 px-0 sm:px-2">
        <label className="text-sm font-medium mb-2 block">Tipos de obra</label>
        <ProvinciasCombobox
          opciones={tiposDeObra}
          value={filters.tiposDeObra}
          onChange={(next) => setFilters({ ...filters, tiposDeObra: next })}
          label="Tipos de obra"
        />
      </div>

      <div className="flex-1 px-2 justify-items-center sm:justify-items-end pt-2 text-center sm:text-right">
        <div className="text-xs px-3 text-muted-foreground">{total} obras</div>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Limpiar
        </Button>
      </div>
    </div>
  );

  return (
    <>
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

      <div
        className={cn(
          isFixed ? "relative" : "relative",
          "z-20 container mx-auto my-8 px-4",
          collapsed ? "hidden md:block" : "block"
        )}
      >
        <Card className="shadow-lg">
          <CardHeader className="pb-2 flex items-center justify-between">
            <CardTitle className="text-base">Filtros ({total})</CardTitle>
            <div className="flex items-center gap-2">
              <div className="hidden">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setCollapsed(true)}
                  aria-label="Ocultar filtros"
                >
                  <SlidersHorizontal size={18} />
                </Button>
              </div>
              <div className="hidden">
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
