"use client"

import { useEffect } from "react"
// import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { UseFormReturn } from "react-hook-form"
import { FormData } from "@/data/app/onboarding/types"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AccountConfigStep({ form }: { form: UseFormReturn<FormData> }) {
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
      {/* <FormField
        control={form.control}
        name="imageUrl"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-xl">الصورة الشخصية</FormLabel>
            <div className="flex items-center gap-4">
              <Avatar className="size-24 !rounded-sm border-2 border-border">
                <AvatarImage src={field.value || ""} />
                <AvatarFallback className="rounded-none text-3xl font-semibold">A</AvatarFallback>
              </Avatar>
              <FormControl>
                <Input {...field} value={field.value ?? ""} className="h-14 px-3" placeholder="https://example.com/profile-image.jpg" />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="coverImageUrl"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base">Cover Image URL</FormLabel>
            <FormControl>
              <Input {...field} value={field.value ?? ""} className="h-12" placeholder="https://example.com/cover-image.jpg" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base">Bio</FormLabel>
            <FormControl>
              <Textarea {...field} value={field.value ?? ""} className="min-h-[120px] resize-none" placeholder="Tell us about yourself..." />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      /> */}
    </div>
  )
}