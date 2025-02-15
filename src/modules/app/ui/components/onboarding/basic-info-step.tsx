"use client";

import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { FormData } from "@/data/app/onboarding/types";
import { genders, muhafazahat } from "@/data/app/onboarding/types";

export function BasicInfoStep({ form }: { form: UseFormReturn<FormData> }) {
  useEffect(() => {
    const subscription = form.watch((_, { name, type }) => {
      if (name && type === "change") {
        form.clearErrors(name);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]); // Optimized dependency array

  return (
    <div className="space-y-8">
      {/* Gender Selection */}
      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem className="space-y-4 bg-accent/10 border p-6 rounded-2xl">
            <FormLabel className="text-xl after:text-red-500 after:content-['*'] font-medium">
              الجنس
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value || undefined}
                className="grid grid-cols-1 xs:grid-cols-2 gap-4"
              >
                {genders.map(({ value, label, icon: Icon }) => (
                  <label
                    key={value}
                    htmlFor={value}
                    className={cn(
                      "relative flex cursor-pointer flex-row justify-center items-center gap-2 p-4 text-center",
                      "rounded-lg border-2 border-input duration-300 transition-all",
                      "has-[[data-state=checked]]:bg-primary/25",
                      value === "male"
                        ? "has-[[data-state=checked]]:bg-blue-500/15"
                        : "has-[[data-state=checked]]:bg-pink-500/15",
                      value === "male"
                        ? "has-[[data-state=checked]]:border-blue-500"
                        : "has-[[data-state=checked]]:border-pink-500"
                    )}
                  >
                    <RadioGroupItem
                      value={value}
                      id={value}
                      className="peer sr-only"
                    />
                    <Icon
                      className={cn(
                        "size-10 mb-2",
                        value === "male" ? "text-blue-500" : "text-pink-500"
                      )}
                    />
                    <span className="text-xl font-medium">{label}</span>
                  </label>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Muhafazah Selection */}
      <FormField
        control={form.control}
        name="muhafazah"
        render={({ field }) => (
          <FormItem className="space-y-4 bg-accent/10 border p-6 rounded-2xl">
            <FormLabel className="text-xl after:text-red-500 after:content-['*'] font-medium">
              المحافظة
            </FormLabel>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value || undefined}
              className="flex flex-wrap gap-2"
            >
              {muhafazahat.map(({ value, label }) => (
                <label
                  key={value}
                  htmlFor={value}
                  className="relative flex items-center gap-3 rounded-lg py-2.5 px-4 border-2 border-input has-[[data-state=checked]]:border-border has-[[data-state=checked]]:bg-accent flex-1 whitespace-nowrap duration-300 transition-all"
                >
                  <RadioGroupItem
                    id={value}
                    value={value}
                    className="after:absolute after:inset-0 shadow-none border-foreground border-2 size-5 duration-200"
                  />
                  <span className="text-xl font-medium">{label}</span>
                </label>
              ))}
            </RadioGroup>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
