"use client";

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Obra } from "@/lib/types";

export function ObraDrawer({ obra, open, onOpenChange }: { obra: Obra | null; open: boolean; onOpenChange: (open: boolean) => void }) {

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="w-full sm:max-w-md">
        <DrawerHeader>
          <img className="w-72 mx-auto" src="/logopresidencia.svg" alt="Logo Presidencia" />
          <DrawerTitle>{obra?.titulo ?? "Obra"}</DrawerTitle>
          {obra?.descripcion ? <DrawerDescription>{obra.descripcion}</DrawerDescription> : null}
        </DrawerHeader>

        <div className="px-4 pb-4 space-y-4">
          {obra?.imagenes && obra.imagenes.length > 0 ? (
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {obra.imagenes.map((src, i) => (
                  <CarouselItem key={`${obra.id}-img-${i}`}>
                    {/* Using <img> to avoid Next Image domain config for placeholders */}
                    <img src={src} alt={`Imagen ${i + 1} de ${obra.titulo}`} className="w-full h-48 object-cover rounded-lg border" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : null}

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Detalles</CardTitle>
              <CardDescription className="text-center text-gray-600">Información general de la obra</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="text-center font-semibold text-blue-900 text-2xl">{obra?.inversion}</div>
              {/* Estado, fecha inicio/entrega removidos del modelo */}
              <div>
                <span className="font-medium">Ubicación:</span>{" "}
                {obra ? `${obra.ubicacion.provincia}, ${obra.ubicacion.municipio}${obra.ubicacion.sector ? ", " + obra.ubicacion.sector : ""}` : ""}
              </div>
              {/* Progreso removido (no fechas en el modelo) */}
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <DrawerClose asChild>
              <Button variant="outline">Cerrar</Button>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
