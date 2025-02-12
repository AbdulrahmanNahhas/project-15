"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { IconCalculator, IconRuler, IconAtom, IconFlask, IconGlobe, IconHistory, IconMoon, IconDeviceDesktop, IconStar, IconLanguage, IconWorld, IconBrush } from "@tabler/icons-react";

const subjects = [
  {
    title: "الجبر",
    icon: <IconCalculator className=" size-16" />,
    color: "#2A84EF", // Blue
    description: "استكشف مفاهيم الجبر المتقدمة.",
  },
  {
    title: "الهندسة",
    icon: <IconRuler className=" size-16" />,
    color: "#2A84EF", // Blue (same as Algebra)
    description: "تعلم هندسة المستويات والمجسمات.",
  },
  {
    title: "الفيزياء",
    icon: <IconAtom className=" size-16" />,
    color: "#7944E3", // Amber
    description: "تعرف على المبادئ الأساسية للفيزياء.",
  },
  {
    title: "الكيمياء",
    icon: <IconFlask className=" size-16" />,
    color: "#7944E3", // Amber (same as Physics)
    description: "تعرف على المبادئ الأساسية للكيمياء.",
  },
  {
    title: "علم الأحياء والأرض",
    icon: <IconWorld className=" size-16" />,
    color: "#7944E3", // Green
    description: "اكتشف عالم الأحياء وعلم الأرض.",
  },
  {
    title: "التربية الاسلامية",
    icon: <IconMoon className=" size-16" />,
    color: "#1D4ED8", // Deep Blue
    description: "تعلم القيم الدينية والمبادئ الإسلامية.",
  },
  {
    title: "التربية الفنية",
    icon: <IconBrush className=" size-16" />,
    color: "#EC4899", // Pink
    description: "تنمية المهارات الفنية والإبداعية.",
  },
  {
    title: "الثورة السورية",
    icon: <IconStar className=" size-16" />,
    color: "#12B06F", // Cool Gray
    description:
      "تعلم عن حقائق الثورة السورية العظيمة التي بدأت عام 2011 وما زالت مستمرة إلى يومنا هذا.",
  },
  {
    title: "التاريخ",
    icon: <IconHistory className=" size-16" />,
    color: "#12B06F", // Warm Brown
    description: "تعرف على تاريخ الأمة الإسلامية.",
  },
  {
    title: "جغرافية الوطن العربي",
    icon: <IconGlobe className=" size-16" />,
    color: "#10B981", // Emerald Green
    description: "استكشاف جغرافية الوطن العربي وسوريا.",
  },
  {
    title: "تكنولوجيا المعلومات",
    icon: <IconDeviceDesktop className=" size-16" />,
    color: "#4A152F", // Teal
    description: "تعلم أساسيات تكنولوجيا المعلومات والاتصالات.",
  },
  {
    title: "اللغة الانكليزية",
    icon: <IconLanguage className=" size-16" />,
    color: "#F06013", // Indigo
    description: "تعلم أساسيات اللغة الإنجليزية.",
  },
];

export default function Learn () {
  return (
    <div className="container mx-auto">
      <h1 className={"my-6 font-bold text-3xl mx-auto border-b pb-5"}>
        المواد الدراسية
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-6 container mx-auto">
        {subjects.map((subject, index) => (
          <Card key={index} className="group hover:bg-accent shadow-none">
            <Link href={`/learn/1`} className="flex md:flex-col gap-0 p-3 pb-0">
              <CardHeader
                className={
                  "flex items-center justify-center rounded-xl md:rounded-xl w-36 h-36 md:!w-full md:size-36"
                }
                style={{backgroundColor: subject.color + "50", color: subject.color, borderColor: subject.color}}
              >
                {subject.icon}
              </CardHeader>
              <CardContent className="p-3 pt-4 flex flex-col gap-2 md:gap-1">
                <h1 className="text-2xl md:text-xl lg:text-xl font-bold pb-2">
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
    </div>
  )
}