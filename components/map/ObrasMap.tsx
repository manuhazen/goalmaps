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
  const [filters, setFilters] = useState<MapFiltersState>({
    provincias: [],
    regiones: [],
    tiposDeObra: [],
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const center = useMemo(() => ({ lat: 18.7357, lng: -70.1627 }), []);
  const initialZoom = 9;

  const onMarkerClick = useCallback((obra: Obra) => {
    setSelected(obra);
    setDrawerOpen(true);
  }, []);

  const onClusterClick = useCallback((event: any) => {
    // Override default fitBounds to avoid conflict with map restriction.
    try {
      event?.stop?.();
    } catch {}
    const map = mapRef.current;
    if (!map) return;
    let latLng: google.maps.LatLng | google.maps.LatLngLiteral | null =
      event?.latLng ?? null;
    if (!latLng && event?.cluster?.position) latLng = event.cluster.position;
    if (!latLng && Array.isArray(event?.markers) && event.markers.length > 0) {
      const pos = event.markers[0].getPosition?.();
      if (pos) latLng = pos;
    }
    if (latLng) {
      // Pan to the cluster center and zoom in a bit.
      map.panTo(latLng as any);
      const currentZoom = map.getZoom?.() ?? initialZoom;
      map.setZoom(Math.min((currentZoom ?? initialZoom) + 2, 18));
    }
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

  const regiones = useMemo(() => {
    if (!obras) return [] as string[];
    const set = new Set<string>();
    obras.forEach((o) => set.add(o.region));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [obras]);

  const tiposDeObra = useMemo(() => {
    if (!obras) return [] as string[];
    const set = new Set<string>();
    obras.forEach((o) => set.add(o.tipo_de_obra));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [obras]);

  const filteredObras = useMemo(() => {
    if (!obras) return [] as Obra[];
    return obras.filter((o) => {
      const matchProvincia =
        filters.provincias.length === 0 ||
        filters.provincias.includes(o.ubicacion.provincia);
      const matchRegion =
        filters.regiones.length === 0 || filters.regiones.includes(o.region);
      const matchTipo =
        filters.tiposDeObra.length === 0 ||
        filters.tiposDeObra.includes(o.tipo_de_obra);
      return matchProvincia && matchRegion && matchTipo;
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
          regiones={regiones}
          tiposDeObra={tiposDeObra}
          filters={filters}
          setFilters={setFilters}
          total={filteredObras.length}
        />
      )}

      {/* Botón Reset */}
      <button
        onClick={handleResetView}
        className="absolute top-57 right-20 z-10 bg-white shadow-md px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
      >
        Ajustar Mapa
      </button>

      <GoogleMap
        onLoad={mapOnLoad}
        mapContainerStyle={mapContainerStyle}
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
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {!isLoading && filteredObras && filteredObras.length > 0 && (
          <GoogleMarkerClusterer
            options={{ renderer: ClusterRenderer as any, onClusterClick }}
          >
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
