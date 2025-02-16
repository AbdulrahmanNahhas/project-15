"use client";

import { useEffect } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import {
  certificates,
  FormData,
  grades,
  roles,
  userTypes,
} from "@/data/app/onboarding/types";
import Image from "next/image";

export function UserDetailsStep({ form }: { form: UseFormReturn<FormData> }) {
  const userType = form.watch("userType");
  const showGradeSelection = userType === "k12";
  const showCertificateSelection = userType === "self-taught";
  const disabledTypes = ["university", "educator"];

  useEffect(() => {
    const subscription = form.watch((_, { name, type }) => {
      if (name && type === "change") {
        form.clearErrors(name);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <div className="space-y-8">
      <FormField
        control={form.control}
        name="userType"
        render={({ field }) => (
          <FormItem className="space-y-4 bg-accent/10 border p-6 rounded-2xl">
            <FormLabel className="text-xl after:text-red-500 after:content-['*'] font-medium">
              ما الذي يصفك بشكل أفضل؟
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value || undefined}
                className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:grid-cols-4"
              >
                {userTypes.map((option) => (
                  <div key={option.value}>
                    <RadioGroupItem
                      disabled={disabledTypes.includes(option.value)}
                      value={option.value}
                      id={option.value}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={option.value}
                      className={cn(
                        "flex cursor-pointer flex-col h-full items-center justify-center rounded-lg !border-2 border-border p-5",
                        "text-center transition-all",
                        "hover:bg-accent/25 hover:text-accent-foreground",
                        "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10",
                        disabledTypes.includes(option.value) && "opacity-75 blur-[2px]"
                      )}
                      style={{
                        borderColor:
                          option.value === userType
                            ? option.color
                            : "hsl(var(--border))", // Apply border color dynamically
                        backgroundColor:
                          option.value === userType
                            ? `${option.color}26`
                            : "transparent", // 15% opacity when checked
                      }}
                    >
                      <Image
                        src={option.image}
                        alt={option.label}
                        width={250}
                        height={250}
                        className="size-24 mb-2"
                      />
                      <h2 className="text-xl font-medium">{option.label}</h2>
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {showGradeSelection && (
        <FormField
          control={form.control}
          name="grade"
          rules={{ required: "يجب اختيار الصف الدراسي" }}
          render={({ field }) => (
            <FormItem className="space-y-4 bg-accent/10 border p-6 rounded-2xl">
              <FormLabel className="text-xl after:text-red-500 after:content-['*'] font-medium">
                ما هو الصف الذي أنت فيه؟
              </FormLabel>
              <FormDescription>يجب تعديل هذا النص لاحقا</FormDescription>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    field.onChange(value);
                    if (value === "12" && form.getValues("certificate") === "9") {
                      form.setValue("certificate", "12", { shouldValidate: false });
                    } else {
                      form.setValue("certificate", "9", { shouldValidate: false });
                    }
                  }}
                  value={field.value || undefined}
                  className="flex flex-wrap gap-2"
                >
                  {grades.map((grade) => (
                    <label
                      htmlFor={`grade-${grade.value}`}
                      key={grade.value}
                      className="relative flex items-center gap-3 rounded-lg py-2.5 px-4 border-2 border-input has-[[data-state=checked]]:border-border has-[[data-state=checked]]:bg-accent flex-1 whitespace-nowrap duration-300 transition-all"
                    >
                      <RadioGroupItem
                        value={grade.value}
                        id={`grade-${grade.value}`}
                        className="after:absolute after:inset-0 shadow-none border-foreground border-2 size-5 duration-200"
                      />
                      <p className="text-lg font-medium">الصف {grade.label}</p>
                    </label>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      {showCertificateSelection && (
        <FormField
          control={form.control}
          name="certificate"
          rules={{ required: "يجب اختيار الشهادة" }}
          render={({ field }) => (
            <FormItem className="space-y-4 bg-accent/10 border p-6 rounded-2xl">
              <FormLabel className="text-xl after:text-red-500 after:content-['*'] font-medium">
                ما هي الشهادة التي تريدها؟
              </FormLabel>
              <FormDescription>يجب تعديل هذا النص لاحقا</FormDescription>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    field.onChange(value);
                    if (value === "12") {
                      form.setValue("grade", "12", { shouldValidate: false });
                    } else {
                      form.setValue("grade", "9", { shouldValidate: false });
                    }
                  }}
                  value={field.value || undefined}
                  className="flex flex-wrap gap-2"
                >
                  {certificates.map((certificate) => (
                    <label
                      htmlFor={`certificate-${certificate.value}`}
                      key={certificate.value}
                      className="relative flex items-center gap-3 rounded-lg py-2.5 px-4 border-2 border-input has-[[data-state=checked]]:border-border has-[[data-state=checked]]:bg-accent flex-1 whitespace-nowrap duration-300 transition-all"
                    >
                      <RadioGroupItem
                        value={certificate.value}
                        id={`certificate-${certificate.value}`}
                        className="after:absolute after:inset-0 shadow-none border-foreground border-2 size-5 duration-200"
                      />
                      <p className="text-lg font-medium">{certificate.label}</p>
                    </label>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name="role"
        render={({ field }) => (
          <FormItem className="space-y-4 bg-accent/10 border p-6 rounded-2xl">
            <FormLabel className="text-xl after:text-red-500 after:content-['*'] font-medium">
              هل أنت مهتم بالانضمام كطالب أو مدرس؟
            </FormLabel>
            <FormDescription>
              يمكنك دائما تعديل هذا في المستقبل.
            </FormDescription>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="grid grid-cols-1 xs:grid-cols-3 gap-4"
              >
                {roles.map((role) => (
                  <label
                    htmlFor={`role-${role.value}`}
                    key={role.value}
                    className="relative flex items-center gap-3 rounded-lg py-2.5 px-4 border-2 border-input has-[[data-state=checked]]:border-border has-[[data-state=checked]]:bg-accent flex-1 whitespace-nowrap duration-300 transition-all"
                  >
                    <RadioGroupItem
                      value={role.value}
                      id={`role-${role.value}`}
                      className="after:absolute after:inset-0 shadow-none border-foreground border-2 size-5 duration-200"
                    />
                    <p className="text-lg font-medium">{role.label}</p>
                  </label>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
