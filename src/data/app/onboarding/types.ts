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
  { value: "self-taught", label: "طالب منقطع", image: "/onboarding/students/student.png", color: "#533CB3" },
  { value: "university", label: "طالب جامعي", image: "/onboarding/students/university.png", color: "#F8A300" },
  { value: "educator", label: "مُعلِّم", image: "/onboarding/students/teacher.png", color: "#006947" },
  // { value: "other", label: "أخرى", icon: HelpCircle },
] as const;

export const grades = [
  { value: "7", label: "السابع" },
  { value: "8", label: "الثامن" },
  { value: "9", label: "التاسع" },
  { value: "10", label: "الأول الثانوي" },
  { value: "11", label: "الثاني الثانوي" },
  { value: "12", label: "الثالث الثانوي" },
] as const;

export const certificates = [
  { value: "9", label: "شهادة التعليم الأساسي" },
  { value: "12", label: "شهادة الثانوية العامة (البكالوريا)" },
] as const;

export const roles = [
  { value: "learner", label: "طالب" },
  { value: "tutor", label: "مدرس" },
  { value: "both", label: "كلاهما" },
] as const;

const userDetailsSchema = z.object({
  userType: z.enum(userTypes.map((u) => u.value) as [string, ...string[]]),
  grade: z.enum(grades.map((g) => g.value) as [string, ...string[]]),
  certificate: z.enum(certificates.map((c) => c.value) as [string, ...string[]]),
  role: z.enum(roles.map((r) => r.value) as [string, ...string[]]),
})

const accountConfigSchema = z.object({
  imageUrl: z.string().url().optional(),
  coverImageUrl: z.string().url().optional(),
  bio: z.string().optional(),
})

export const formSchema = basicInfoSchema.merge(userDetailsSchema).merge(accountConfigSchema)

export type FormData = z.infer<typeof formSchema>
