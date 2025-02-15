"use client"

import { useEffect } from "react"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { UseFormReturn } from "react-hook-form"
import { FormData } from "@/data/app/onboarding/types"

export function AccountConfigStep({ form }: { form: UseFormReturn<FormData> }) {
  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (name && type === "change") {
        form.clearErrors(name)
      }
    })
    return () => subscription.unsubscribe()
  }, [form])

  return (
    <div className="space-y-8">
      <FormField
        control={form.control}
        name="imageUrl"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base after:text-red-500 after:content-['*']">Profile Image URL</FormLabel>
            <FormControl>
              <Input {...field} className="h-12" placeholder="https://example.com/profile-image.jpg" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="coverImageUrl"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base after:text-red-500 after:content-['*']">Cover Image URL</FormLabel>
            <FormControl>
              <Input {...field} className="h-12" placeholder="https://example.com/cover-image.jpg" />
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
            <FormLabel className="text-base after:text-red-500 after:content-['*']">Bio</FormLabel>
            <FormControl>
              <Textarea {...field} className="min-h-[120px] resize-none" placeholder="Tell us about yourself..." />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

