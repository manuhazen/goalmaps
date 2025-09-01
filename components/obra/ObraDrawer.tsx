"use client";

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Obra, progresoObra } from "@/lib/types";

export function estadoLabel(estado: Obra["estado"]) {
  switch (estado) {
    case "en_proceso":
      return "En proceso";
    case "finalizada":
      return "Finalizada";
    case "cancelada":
      return "Cancelada";
    default:
      return estado;
  }
}

export function ObraDrawer({ obra, open, onOpenChange }: { obra: Obra | null; open: boolean; onOpenChange: (open: boolean) => void }) {
  const progress = obra ? progresoObra(obra.fechaInicio, obra.fechaEntrega) : 0;

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="w-full sm:max-w-md">
        <DrawerHeader>
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
              <CardTitle>Detalles</CardTitle>
              <CardDescription>Información general de la obra</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div><span className="font-medium">Inversion:</span> {obra?.inversion}</div>
              {/* <div><span className="font-medium">Estado:</span> {obra ? estadoLabel(obra.estado) : ""}</div> */}
              {/* <div><span className="font-medium">Fecha de inicio:</span> {obra?.fechaInicio}</div> */}
              {/* <div><span className="font-medium">Fecha de entrega:</span> {obra?.fechaEntrega}</div> */}
              <div>
                <span className="font-medium">Ubicación:</span>{" "}
                {obra ? `${obra.ubicacion.provincia}, ${obra.ubicacion.municipio}${obra.ubicacion.sector ? ", " + obra.ubicacion.sector : ""}` : ""}
              </div>
              {/* <div className="pt-2">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-medium">Avance</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} />
              </div> */}
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

