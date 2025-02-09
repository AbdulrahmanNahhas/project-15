import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "البريد الالكتروني مطلوب",
  }),
  password: z.string().min(1, {
    message: "كلمة المرور مطلوبة",
  }),
});

export const USERNAME_REGEX = /^[A-Za-z0-9_-]+$/;

export const RegisterSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "يجب أن يحتوي على ثلاثة أحرف على الأقل",
    })
    .max(30, {
      message: "لا يمكن أن يحتوي على أكثر من ثلاثين حرف",
    })
    .regex(USERNAME_REGEX, {
      message: "يجب أن يكون اسم المستخدم من الحروف الإنجليزية فقط",
    }),
  first_name: z.string().min(1, {
    message: "الأسم مطلوب",
  }),
  last_name: z.string().min(1, {
    message: "أسم العائلة مطلوب",
  }),
  email: z.string().email({
    message: "البريد الالكتروني مطلوب",
  }),
  password: z.string().min(6, {
    message: "يجب ان تحتوي على الأقل 6 احرف",
  }),
});
