import { IconGenderMale, IconGenderFemale } from "@tabler/icons-react";
import { z } from "zod"

// ========== basic Info Schema ========== //
export const genders = [
  { value: "ذكر", label: "ذكر", icon: IconGenderMale },
  { value: "أنثى", label: "أنثى", icon: IconGenderFemale },
] as const;
export const muhafazahat = [
  "دمشق", "ريف دمشق", "حلب", "حمص", "حماة",
  "اللاذقية", "طرطوس", "إدلب", "دير الزور",
  "الحسكة", "الرقة", "درعا", "السويداء", "القنيطرة"
] as const;
const basicInfoSchema = z.object({
  gender: z.enum(genders.map((g) => g.value) as [string, ...string[]]),
  muhafazah: z.enum(muhafazahat.map((m) => m) as [string, ...string[]]),
});

// ========== User Details Schema ========== //
export const userTypes = [
  { value: "k12", label: "طالب مدرسي", image: "/onboarding/students/school.png", color: "#FCA6CF" },
  { value: "self-taught", label: "طالب منقطع", image: "/onboarding/students/student.png", color: "#533CB3" },
  { value: "university", label: "طالب جامعي", image: "/onboarding/students/university.png", color: "#F8A300" },
  { value: "educator", label: "مُعلِّم", image: "/onboarding/students/teacher.png", color: "#006947" },
  // { value: "other", label: "أخرى", icon: HelpCircle },
] as const;
export const roles = [
  { value: "learner", label: "طالب" },
  { value: "tutor", label: "مدرس" },
  { value: "both", label: "كلاهما" },
] as const;

// Dynamically fetched values (not in `as const`)
export type Grade = { value: string; label: string, track?: string };
export type Certificate = { value: string; label: string, track?: string };

const userDetailsSchema = z.object({
  userType: z.enum(userTypes.map((u) => u.value) as [string, ...string[]]),
  grade: z.string(),
  certificate: z.string(),
  role: z.enum(roles.map((r) => r.value) as [string, ...string[]]),
})

// ========== Account Config Schema ========== //
const accountConfigSchema = z.object({
  imageUrl: z.string().url().optional(),
  coverImageUrl: z.string().url().optional(),
  bio: z.string().optional(),
})

export const formSchema = basicInfoSchema.merge(userDetailsSchema).merge(accountConfigSchema)
export type FormData = z.infer<typeof formSchema>
