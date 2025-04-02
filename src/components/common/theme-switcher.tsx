"use client";

import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, Minus } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const items = [
  { value: "light", label: "Light", image: "/settings/theme/light.png" },
  { value: "dark", label: "Dark", image: "/settings/theme/dark.png" },
  { value: "system", label: "System", image: "/settings/theme/system.png" },
];

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch by only rendering after mounting
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null; // Render nothing on the server
  }
  
  return (
    <div className="space-y-4 max-w-[400px]">
      <h1 className="text-sm font-medium leading-none text-foreground">Choose a theme</h1>
      <RadioGroup 
        className="flex gap-3" 
        value={theme || "system"} 
        onValueChange={setTheme}
      >
        {items.map((item, index) => (
          <label key={`${index}-${item.value}`}>
            <RadioGroupItem
              id={`${index}-${item.value}`}
              value={item.value}
              className="peer sr-only after:absolute after:inset-0"
            />
            <Image
              src={item.image}
              alt={item.label}
              width={88}
              height={70}
              className="relative cursor-pointer overflow-hidden rounded-lg border border-input shadow-sm shadow-black/5 outline-offset-2 transition-colors peer-[:focus-visible]:outline peer-[:focus-visible]:outline-ring/70 peer-data-[disabled]:cursor-not-allowed peer-data-[state=checked]:border-ring peer-data-[state=checked]:bg-accent peer-data-[disabled]:opacity-50"
            />
            <span className="group mt-2 flex items-center gap-1 peer-data-[state=unchecked]:text-muted-foreground/70">
              <Check
                size={16}
                strokeWidth={2}
                className="peer-data-[state=unchecked]:group-[]:hidden"
                aria-hidden="true"
              />
              <Minus
                size={16}
                strokeWidth={2}
                className="peer-data-[state=checked]:group-[]:hidden"
                aria-hidden="true"
              />
              <span className="text-xs font-medium">{item.label}</span>
            </span>
          </label>
        ))}
      </RadioGroup>
    </div>
  );
};