"use client";

import {
  GoogleMap,
  Marker,
  useLoadScript,
  GoogleMarkerClusterer,
} from "@react-google-maps/api";
import { useMemo, useState, useCallback, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { obras as obrasLocales } from "@/data/obras";
import { Obra } from "@/lib/types";
import { ObraDrawer } from "@/components/obra/ObraDrawer";
import { Skeleton } from "@/components/ui/skeleton";
import { MapFilters, MapFiltersState } from "@/components/map/MapFilters";
import { ClusterRenderer } from "@/lib/cluster-renderer";

const mapContainerStyle = { width: "100%", height: "100%" } as const;

const libraries: ("places" | "marker" | "geometry" | "maps")[] = [];

function useObras() {
  return useQuery({
    queryKey: ["obras"],
    queryFn: async (): Promise<Obra[]> => {
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

  const mapRef = useRef<google.maps.Map | null>(null);

  const center = useMemo(() => ({ lat: 18.7357, lng: -70.1627 }), []);
  const initialZoom = 9;

  const onMarkerClick = useCallback((obra: Obra) => {
    setSelected(obra);
    setDrawerOpen(true);
  }, []);

  const mapOnLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    map.setCenter(center);
    map.setZoom(initialZoom);
  }, [center]);

  const handleResetView = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.setCenter(center);
      mapRef.current.setZoom(initialZoom);
    }
  }, [center]);

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

      {/* Botón Reset */}
      <button
        onClick={handleResetView}
        className="absolute top-4 right-20 z-10 bg-white shadow-md px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
      >
        Ajustar Mapa
      </button>

      <GoogleMap
        onLoad={mapOnLoad}
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={initialZoom}
        options={{
          disableDefaultUI: false,
          clickableIcons: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          // mapId: "c1d477847cd2c3e158a267dc",
          restriction: {
            latLngBounds: {
              north: 20.08782,
              south: 17.47053,
              west: -72.0075,
              east: -68.3221,
            },
            strictBounds: false,
          },
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "road.local",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "administrative",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "landscape",
              elementType: "geometry.fill",
              stylers: [{ color: "#E5E5E5" }],
            },
          ],
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
