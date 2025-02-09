"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import {
  Brush,
  Calculator,
  Globe,
  History,
  Moon,
  Monitor,
  Ruler,
  Star,
  Languages,
  EarthIcon,
  AtomIcon,
  FlaskConicalIcon,
} from "lucide-react";

const subjects = [
  {
    title: "الجبر",
    icon: <Calculator className="text-white size-14" />,
    color: "#2A84EF", // Blue
    description: "استكشف مفاهيم الجبر المتقدمة.",
  },
  {
    title: "الهندسة",
    icon: <Ruler className="text-white size-14" />,
    color: "#2A84EF", // Blue (same as Algebra)
    description: "تعلم هندسة المستويات والمجسمات.",
  },
  {
    title: "الفيزياء",
    icon: <AtomIcon className="text-white size-14" />,
    color: "#7944E3", // Amber
    description: "تعرف على المبادئ الأساسية للفيزياء.",
  },
  {
    title: "الكيمياء",
    icon: <FlaskConicalIcon className="text-white size-14" />,
    color: "#7944E3", // Amber (same as Physics)
    description: "تعرف على المبادئ الأساسية للكيمياء.",
  },
  {
    title: "علم الأحياء والأرض",
    icon: <EarthIcon className="text-white size-14" />,
    color: "#7944E3", // Green
    description: "اكتشف عالم الأحياء وعلم الأرض.",
  },
  {
    title: "التربية الدينية الاسلامية",
    icon: <Moon className="text-white size-14" />,
    color: "#1D4ED8", // Deep Blue
    description: "تعلم القيم الدينية والمبادئ الإسلامية.",
  },
  {
    title: "التربية الفنية",
    icon: <Brush className="text-white size-14" />,
    color: "#EC4899", // Pink
    description: "تنمية المهارات الفنية والإبداعية.",
  },
  {
    title: "الثورة السورية",
    icon: <Star className="text-white size-14" />,
    color: "#12B06F", // Cool Gray
    description:
      "تعلم عن حقائق الثورة السورية العظيمة التي بدأت عام 2011 وما زالت مستمرة إلى يومنا هذا.",
  },
  {
    title: "التاريخ",
    icon: <History className="text-white size-14" />,
    color: "#12B06F", // Warm Brown
    description: "تعرف على تاريخ الأمة الإسلامية.",
  },
  {
    title: "جغرافية الوطن العربي وسوريا",
    icon: <Globe className="text-white size-14" />,
    color: "#10B981", // Emerald Green
    description: "استكشاف جغرافية الوطن العربي وسوريا.",
  },
  {
    title: "تكنولوجيا المعلومات والاتصالات",
    icon: <Monitor className="text-white size-14" />,
    color: "#4A152F", // Teal
    description: "تعلم أساسيات تكنولوجيا المعلومات والاتصالات.",
  },
  {
    title: "اللغة الانكليزية",
    icon: <Languages className="text-white size-14" />,
    color: "#F06013", // Indigo
    description: "تعلم أساسيات اللغة الإنجليزية.",
  },
];

export default function Learn () {
  return (
    <>
      <h1 className={"my-6 font-black text-3xl mx-auto"}>
        المواد الدراسية
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-3 container mx-auto">
        {subjects.map((subject, index) => (
          <Card key={index} className="group hover:bg-accent shadow-none">
            <Link href={`/learn/1`} className="flex md:flex-col gap-0">
              <CardHeader
                className={
                  "flex items-center justify-center rounded-xl rounded-l-none md:rounded-tl-xl md:!rounded-b-none w-36 h-36 md:!w-full md:h-36"
                }
                style={{backgroundColor: subject.color}}
              >
                {subject.icon}
              </CardHeader>
              <CardContent className="p-3 pt-4 flex flex-col gap-2 md:gap-1">
                <h1 className="text-2xl md:text-xl lg:text-xl font-bold">
                  {subject.title}
                </h1>
                <p className="md:text-sm text-foreground/75">
                  {subject.description}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </>
  )
}