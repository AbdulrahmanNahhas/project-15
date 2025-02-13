export interface Campaign {
  id: number
  title: string
  description: string
  image: string
}
export const campaigns: Campaign[] = [
  {
    id: 1,
    title: "الحالات الإنسانية الطارئة",
    description: "تبرع من أجلهم !",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "كن معهم 2",
    description: "حملة مخصصة لمساعدة ذوي الاحتياجات الخاصة",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "سعادة قلب",
    description: "حملة لإدخال الفرح والسرور على قلوب الأطفال",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "مشروع بيت المونة",
    description: "مشروع لتشغيل النساء السوريات وتحقيق التنمية الاقتصادية لهم",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "سعادة قلب",
    description: "حملة لإدخال الفرح والسرور على قلوب الأطفال",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "مشروع بيت المونة",
    description: "مشروع لتشغيل النساء السوريات وتحقيق التنمية الاقتصادية لهم",
    image: "/placeholder.svg?height=400&width=600",
  },
]