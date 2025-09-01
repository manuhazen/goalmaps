import * as React from "react";
import { cn } from "@/lib/utils";

export function MultiSelect({
  id,
  options,
  value,
  onChange,
  className,
  size = 6,
}: {
  id?: string;
  options: string[];
  value: string[];
  onChange: (next: string[]) => void;
  className?: string;
  size?: number;
}) {
  return (
    <select
      id={id}
      multiple
      size={size}
      value={value}
      onChange={(e) => {
        const next = Array.from(e.currentTarget.selectedOptions).map((o) => o.value);
        onChange(next);
      }}
      className={cn(
        "w-full rounded-md border bg-background px-3 py-2 text-sm",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
        className
      )}
    >
      {options.map((opt) => (
        <option key={opt} value={opt} className="py-1">
          {opt}
        </option>
      ))}
    </select>
  );
}

