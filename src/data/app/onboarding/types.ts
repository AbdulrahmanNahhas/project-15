import { IconGenderMale } from "@tabler/icons-react";
import { IconGenderFemale } from "@tabler/icons-react";
import { z } from "zod"

export const genders = [
  { value: "male", label: "ذكر", icon: IconGenderMale },
  { value: "female", label: "أنثى", icon: IconGenderFemale },
] as const;

export const muhafazahat = [
  { value: "Damascus", label: "دمشق" },
  { value: "Rif Damascus", label: "ريف دمشق" },
  { value: "Aleppo", label: "حلب" },
  { value: "Homs", label: "حمص" },
  { value: "Hama", label: "حماة" },
  { value: "Latakia", label: "اللاذقية" },
  { value: "Tartus", label: "طرطوس" },
  { value: "Idlib", label: "إدلب" },
  { value: "Deir ez-Zor", label: "دير الزور" },
  { value: "Al-Hasakah", label: "الحسكة" },
  { value: "Raqqa", label: "الرقة" },
  { value: "Daraa", label: "درعا" },
  { value: "As-Suwayda", label: "السويداء" },
  { value: "Quneitra", label: "القنيطرة" },
] as const;

const basicInfoSchema = z.object({
  gender: z.enum(genders.map((g) => g.value) as [string, ...string[]]),
  muhafazah: z.enum(muhafazahat.map((m) => m.value) as [string, ...string[]]),
});

// User Details
export const userTypes = [
  { value: "k12", label: "طالب مدرسي", image: "/onboarding/students/school.png", color: "#FCA6CF" },
  { value: "break", label: "طالب منقطع", image: "/onboarding/students/student.png", color: "#533CB3" },
  { value: "university", label: "طالب جامعي", image: "/onboarding/students/university.png", color: "#F8A300" },
  { value: "educator", label: "مُعلِّم", image: "/onboarding/students/teacher.png", color: "#006947" },
  // { value: "other", label: "أخرى", icon: HelpCircle },
] as const;

export const grades = [
  { value: "9", label: "التاسع" },
  { value: "10", label: "العاشر" },
  { value: "11", label: "الحادي عشر" },
  { value: "12", label: "الثاني عشر" },
] as const;

export const roles = [
  { value: "learner", label: "طالب" },
  { value: "tutor", label: "مدرس" },
  { value: "both", label: "كلاهما" },
] as const;

const userDetailsSchema = z.object({
  userType: z.enum(userTypes.map((u) => u.value) as [string, ...string[]]),
  grade: z.enum(["6", "7", "8", "9", "10", "11", "12"]).optional(),
  role: z.enum(roles.map((r) => r.value) as [string, ...string[]]),
})

const accountConfigSchema = z.object({
  imageUrl: z.string().url("Invalid image URL"),
  coverImageUrl: z.string().url("Invalid cover image URL"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
})

export const formSchema = basicInfoSchema.merge(userDetailsSchema).merge(accountConfigSchema)

export type FormData = z.infer<typeof formSchema>
