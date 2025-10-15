"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "./utils.js";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
  // ## PERBAIKAN 1: Pisahkan 'value' dari props lainnya saat destructuring ##
>(({ className, value, ...props }, ref) => {
  // Logika untuk merender jumlah pegangan (thumb) yang benar tetap sama
  const currentValues = value ?? props.defaultValue ?? [];

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none select-none items-center", className)}
      // ## PERBAIKAN 2: Teruskan props lainnya, dan 'value' secara terpisah & kondisional ##
      // Ini memastikan 'value' tidak pernah diteruskan sebagai 'undefined'
      {...props}
      {...(value !== undefined ? { value } : {})}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>

      {/* Render satu pegangan untuk setiap nilai di dalam array */}
      {currentValues.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
