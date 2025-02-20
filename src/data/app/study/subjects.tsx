import { IconCalculator, IconRuler, IconAtom, IconFlask, IconGlobe, IconHistory, IconMoon, IconDeviceDesktop, IconStar, IconLanguage, IconWorld, IconBrush } from "@tabler/icons-react";
import { JSX } from "react";

interface Subject {
  id: number;
  title: string;
  description?: string;
  icon: JSX.Element;
  color: string;
}

export const subjects: Subject[] = [
  {
    id: 1,
    title: "الجبر",
    icon: <IconCalculator className=" size-16" />,
    color: "#2A84EF", // Blue
    description: "استكشف مفاهيم الجبر المتقدمة.",
  },
  {
    id: 2,
    title: "الهندسة",
    icon: <IconRuler className=" size-16" />,
    color: "#2A84EF", // Blue (same as Algebra)
    description: "تعلم هندسة المستويات والمجسمات.",
  },
  {
    id: 3,
    title: "الفيزياء",
    icon: <IconAtom className=" size-16" />,
    color: "#7944E3", // Amber
    description: "تعرف على المبادئ الأساسية للفيزياء.",
  },
  {
    id: 4,
    title: "الكيمياء",
    icon: <IconFlask className=" size-16" />,
    color: "#7944E3", // Amber (same as Physics)
    description: "تعرف على المبادئ الأساسية للكيمياء.",
  },
  {
    id: 5,
    title: "علم الأحياء والأرض",
    icon: <IconWorld className=" size-16" />,
    color: "#7944E3", // Green
    description: "اكتشف عالم الأحياء وعلم الأرض.",
  },
  {
    id: 6,
    title: "التربية الاسلامية",
    icon: <IconMoon className=" size-16" />,
    color: "#1D4ED8", // Deep Blue
    description: "تعلم القيم الدينية والمبادئ الإسلامية.",
  },
  {
    id: 7,
    title: "التربية الفنية",
    icon: <IconBrush className=" size-16" />,
    color: "#EC4899", // Pink
    description: "تنمية المهارات الفنية والإبداعية.",
  },
  {
    id: 8,
    title: "الثورة السورية",
    icon: <IconStar className=" size-16" />,
    color: "#12B06F", // Cool Gray
    description:
      "تعلم عن حقائق الثورة السورية العظيمة التي بدأت عام 2011 وما زالت مستمرة إلى يومنا هذا.",
  },
  {
    id: 9,
    title: "التاريخ",
    icon: <IconHistory className=" size-16" />,
    color: "#12B06F", // Warm Brown
    description: "تعرف على تاريخ الأمة الإسلامية.",
  },
  {
    id: 10,
    title: "جغرافية الوطن العربي",
    icon: <IconGlobe className=" size-16" />,
    color: "#10B981", // Emerald Green
    description: "استكشاف جغرافية الوطن العربي وسوريا.",
  },
  {
    id: 11,
    title: "تكنولوجيا المعلومات",
    icon: <IconDeviceDesktop className=" size-16" />,
    color: "#4A152F", // Teal
    description: "تعلم أساسيات تكنولوجيا المعلومات والاتصالات.",
  },
  {
    id: 12,
    title: "اللغة الانكليزية",
    icon: <IconLanguage className=" size-16" />,
    color: "#F06013", // Indigo
    description: "تعلم أساسيات اللغة الإنجليزية.",
  },
];
