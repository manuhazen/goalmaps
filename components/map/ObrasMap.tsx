"use client";

import {
  GoogleMap,
  Marker,
  useLoadScript,
  GoogleMarkerClusterer,
} from "@react-google-maps/api";
import { useMemo, useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { obras as obrasLocales } from "@/data/obras";
import { Obra } from "@/lib/types";
import { ObraDrawer } from "@/components/obra/ObraDrawer";
import { createRDBounds } from "@/lib/rd-bounds";
import { Skeleton } from "@/components/ui/skeleton";
import { MapFilters, MapFiltersState } from "@/components/map/MapFilters";
import { ClusterRenderer } from "@/lib/cluster-renderer";

const mapContainerStyle = { width: "100%", height: "100%" } as const;

const libraries: ("places" | "marker" | "geometry" | "maps")[] = [];

function useObras() {
  return useQuery({
    queryKey: ["obras"],
    queryFn: async (): Promise<Obra[]> => {
      // Simula fetch local. Puedes evolucionar a Supabase aquí.
      return obrasLocales;
    },
    staleTime: 1000 * 60,
  });
}

export function ObrasMap() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey || "",
    libraries,
  });
  const { data: obras, isLoading } = useObras();
  const [selected, setSelected] = useState<Obra | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filters, setFilters] = useState<MapFiltersState>({ provincias: [] });

  const onMarkerClick = useCallback((obra: Obra) => {
    setSelected(obra);
    setDrawerOpen(true);
  }, []);

  const mapOnLoad = useCallback((map: google.maps.Map) => {
    const g = (window as any).google as typeof window.google;
    if (!g) return;
    const bounds = createRDBounds(g);
    map.fitBounds(bounds);
  }, []);

  const center = useMemo(() => ({ lat: 18.7357, lng: -70.1627 }), []);
  const provincias = useMemo(() => {
    if (!obras) return [] as string[];
    const set = new Set<string>();
    obras.forEach((o) => set.add(o.ubicacion.provincia));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [obras]);

  const filteredObras = useMemo(() => {
    if (!obras) return [] as Obra[];
    return obras.filter((o) => {
      const matchProvincia =
        filters.provincias.length === 0 ||
        filters.provincias.includes(o.ubicacion.provincia);
      return matchProvincia;
    });
  }, [obras, filters]);

  if (!isLoaded) {
    return (
      <div className="w-full h-[80vh] p-4">
        <Skeleton className="w-full h-full rounded-xl" />
        {!googleMapsApiKey && (
          <div className="mt-2 text-sm text-muted-foreground">
            Falta la variable NEXT_PUBLIC_GOOGLE_MAPS_API_KEY para cargar el
            mapa.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full h-[calc(100vh-0px)] relative">
      {obras && (
        <MapFilters
          provincias={provincias}
          filters={filters}
          setFilters={setFilters}
          total={filteredObras.length}
        />
      )}
      <GoogleMap
        onLoad={mapOnLoad}
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
        options={{
          disableDefaultUI: false,
          clickableIcons: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        }}
      >
        {!isLoading && filteredObras && filteredObras.length > 0 && (
          <GoogleMarkerClusterer options={{ renderer: ClusterRenderer as any }}>
            {(clusterer) => (
              <>
                {filteredObras.map((obra) => (
                  <Marker
                    key={obra.id}
                    position={{
                      lat: obra.ubicacion.lat,
                      lng: obra.ubicacion.lng,
                    }}
                    clusterer={clusterer}
                    onClick={() => onMarkerClick(obra)}
                    title={obra.titulo}
                  />
                ))}
              </>
            )}
          </GoogleMarkerClusterer>
        )}
      </GoogleMap>

      <ObraDrawer
        obra={selected}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
      />
    </div>
  );
}
