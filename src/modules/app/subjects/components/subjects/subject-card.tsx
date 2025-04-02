"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Book, Calendar, BookMarked, ChevronLeft, CalculatorIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { formatDistance } from "date-fns"
import { ar } from 'date-fns/locale'

interface SubjectCardProps {
  subject: {
    id: number
    title: string
    // icon: string // Store the icon name or URL (if using an image-based icon system)
    group: string
    color: string // Store HEX color code
    lastupdate?: string
  };
}

export function SubjectCard({
  subject: {
    title,
    // icon,
    color,
    lastupdate = "آخر تحديث: اليوم",
    group,
  },
}: SubjectCardProps) {
  // Convert hex color to rgba for background with opacity
  const hexToRgba = (hex: string, alpha = 0.1) => {
    const r = Number.parseInt(hex.slice(1, 3), 16);
    const g = Number.parseInt(hex.slice(3, 5), 16);
    const b = Number.parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 group border bg-background flex flex-col h-full shadow-none dark:!border-border"
    // style={{ borderColor: color }}
    >
      {/* Colored top border */}
      {/* <div className="h-1" style={{ backgroundColor: color }} /> */}

        <CardHeader
          className="flex !items-center flex-row-reverse justify-end gap-3 mb-1 p-4 border-b border-border relative"
          // style={{ backgroundImage: `linear-gradient(to left, ${color}, transparent)` }}
        >
        <div>
        <span className="font-light text-sm hover:bg-accent/75 backdrop-blur-2xl cursor-pointer leading-0.5 p-1 rounded-full absolute top-3 left-3 text-muted-foreground flex items-center justify-center gap-0.5">
          {0}%
          <InfoCircledIcon/>
          </span>
        </div>
          {/* Title and class level */}
          <div className="flex flex-col gap-2 mt-1 justify-center">
            <h3 className="font-black text-lg leading-tight text-foreground">{title}</h3>
            <span
              className="px-2 py-1 rounded-full text-sm text-[10px] w-fit font-medium !bg-accent/75 backdrop-blur-2xl"
              style={{ backgroundColor: hexToRgba(color, 0.1), color }}
            >
              {group}
            </span>
          </div>

          {/* Icon */}
          <div
            className="rounded-lg p-2.5 shrink-0"
            style={{ backgroundColor: hexToRgba(color, 0.1) }}
          >
            <div
              className="size-10 flex items-center justify-center"
              style={{ color }}
            >
              {/* {icon} */}
              <CalculatorIcon className="size-full" />
            </div>
          </div>
        </CardHeader>

      <CardContent className="p-4 flex-1 flex flex-col m-0">

        {/* Progress bar */}
        {/* <div className="space-y-1 pb-4">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">3/8 وحدات</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress
            value={progress}
            className="h-1.5 !bg-accent [&>div]:!bg-foreground"
          />
        </div> */}

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs mb-auto">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Book className="size-3.5 shrink-0" />
            <span>
              {0} وحدات
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Book className="size-3.5 shrink-0" />
            <span>{0} دروس</span>
          </div>

          {/* <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="size-3.5 shrink-0" />
            <span className="truncate">الامتحان: {examDate}</span>
          </div> */}

          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="size-3.5 shrink-0" />
            <span className="truncate">
              آخر تحديث: {formatDistance(new Date(), lastupdate, {locale: ar})}
              </span>
          </div>

          {/* <div className="flex items-center gap-1.5 text-muted-foreground col-span-2">
            <Clock className="size-3.5 shrink-0" />
            <span className="truncate">{nextLesson}</span>
          </div> */}

          {/* <div
            className="flex items-center gap-1.5 text-muted-foreground col-span-2 font-medium"
            style={{ color }}
          >
            {teacherName}
          </div> */}
        </div>
      </CardContent>

      {/* Buttons */}
      <CardFooter className="p-4 py-3 mt-1 border-t bg-accent/50 grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full flex items-center gap-1 text-xs h-8 cursor-pointer rounded-[6px]"
            style={{
              borderColor: hexToRgba(color, 0.3),
              color,
            }}
            asChild
          >
            <Link href={"/subjects/1"}>
            <BookMarked className="size-3"/>
            المنهاج
            </Link>
          </Button>
        <Button
          size="sm"
          className="w-full flex items-center gap-0.5 text-xs h-8 cursor-pointer rounded-[6px] hover:opacity-75 !duration-300 transition-all"
          style={{
            backgroundColor: color,
          }}
          asChild
        >
          <Link href={"/lesson/1"}>
          تابع الدرس
          <ChevronLeft className="size-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SubjectCard;
