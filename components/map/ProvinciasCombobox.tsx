"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProvinciasCombobox({
  opciones,
  value,
  onChange,
  label = "Provincias",
}: {
  opciones: string[];
  value: string[];
  onChange: (next: string[]) => void;
  label?: string;
}) {
  const textoBoton = useMemo(() => {
    if (value.length === 0) return `${label}: todas`;
    if (value.length === 1) return `${label}: ${value[0]}`;
    return `${label}: ${value.length} seleccionadas`;
  }, [value, label]);

  const toggle = (provincia: string) => {
    const set = new Set(value);
    if (set.has(provincia)) set.delete(provincia);
    else set.add(provincia);
    onChange(Array.from(set));
  };

  const clear = () => onChange([]);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded="false"
              className="w-full justify-between bg-[#F2F6F9]"
            >
              <span className="truncate mr-2">{textoBoton}</span>
              <ChevronsUpDown className="opacity-50" size={16} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-[var(--radix-popover-trigger-width)]">
            <Command>
              <CommandInput placeholder="Buscar provincia..." />
              <CommandEmpty>No hay resultados.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  {opciones.map((prov) => {
                    const selected = value.includes(prov);
                    return (
                      <CommandItem key={prov} onSelect={() => toggle(prov)}>
                        <Check
                          size={16}
                          className={cn("mr-2", selected ? "opacity-100" : "opacity-0")}
                        />
                        {prov}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {value.length > 0 && (
          <Button variant="ghost" size="sm" title="Limpiar" onClick={clear}>
            <X size={16} />
          </Button>
        )}
      </div>
      {value.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {value.map((prov) => (
            <Button
              key={prov}
              size="sm"
              variant="secondary"
              className="h-7 px-2"
              onClick={() => toggle(prov)}
            >
              {prov}
              <X size={14} className="ml-1" />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

