import React from "react";
import Link from "next/link";
import { ArrowRight, CheckIcon, Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@ui//button";
import {
  IconBook2,
  IconBooks,
  IconCalculator,
  IconChevronDown,
} from "@tabler/icons-react";
import { Badge } from "@ui//badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ui//accordion";
import { AlgebraUnits, Unit, Lesson } from "@/data/app/study/untis";

// Component for the subject header section
const SubjectHeader = ({
  units,
  lessons,
}: {
  units: number;
  lessons: number;
}) => {
  return (
    <div className="w-full border-b pb-4 mb-4 bg-accent/50 rounded-3xl p-8 relative">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-primary/10 p-4 rounded-2xl">
          <IconCalculator className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">الجبر</h1>
      </div>

      <p className="text-lg text-muted-foreground mb-6 leading-9">
        يقدم هذا المساق مفاهيم الجبر الأساسية والمتقدمة، بدءاً من المعادلات
        والمتباينات الخطية، مروراً بالدوال وأنواعها المختلفة، وصولاً إلى
        المتتاليات والمتسلسلات. يهدف المساق إلى تطوير مهارات التفكير المنطقي
        والتحليلي من خلال حل المسائل الرياضية وفهم العلاقات الجبرية.
      </p>

      <div className="flex flex-wrap gap-6 text-sm mb-6">
        <div className="flex items-center gap-2 absolute top-6 left-6">
          <Badge variant="secondary" className="text-base! p-2">
            ثالث ثانوي
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <IconBooks className="size-5" />
          <span>
            {units}
            {units == 1 || units == 2
              ? " وحدة"
              : units >= 3 && units <= 10
              ? " وحدات"
              : " وحدة"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <IconBook2 className="size-5" />
          <span>
            {lessons}
            {lessons == 1 || lessons == 2
              ? " درس"
              : lessons >= 3 && lessons <= 10
              ? " دروس"
              : " درس"}
          </span>
        </div>
      </div>
    </div>
  );
};

// Component for individual lesson item
const LessonItem = ({
  lesson,
  mainIndex,
  index,
  isFirstNotCompletedUnit,
  units,
}: {
  lesson: Lesson;
  mainIndex: number;
  index: number;
  isFirstNotCompletedUnit: boolean;
  units: Unit[];
}) => {
  // Check if all previous lessons in the unit are completed
  const allPreviousCompleted = units[mainIndex].Lessons
    .slice(0, index)
    .every((l) => l.completed);

  // This lesson is active if it's the first not completed lesson in the first uncompleted unit
  const isActive = !lesson.completed && allPreviousCompleted && isFirstNotCompletedUnit;

  return (
    <Link
      href={lesson.url}
      className={cn(
        "bg-accent/10 border p-4 rounded-xl text-lg flex gap-3 items-center hover:bg-accent duration-300 ease-out",
        isActive && "border-primary border-2 relative"
      )}
    >
      <span
        className={cn(
          "font-bold rounded-full text-foreground bg-accent border-2 size-8 flex items-center justify-center border-dotted",
          lesson.completed &&
            "border-green-300 text-green-600 bg-green-200 border-solid border stroke-2",
          isActive &&
            "border-primary text-primary bg-primary/10 border-dashed border stroke-2"
        )}
      >
        {isActive ? (
          <ArrowRight className={"p-1 text-primary"} />
        ) : lesson.completed ? (
          <CheckIcon className={"stroke-3! p-1"} />
        ) : (
          <Loader
            className={"animate-spin p-1 text-muted-foreground duration-1000!"}
          />
        )}
      </span>
      {lesson.title}
      {isActive && <Button className={" rounded-2xl mr-auto"}>انت هنا</Button>}
    </Link>
  );
};

// Main subject page component
const Subject = () => {
  return (
    <div
      className={
        "p-3 container flex flex-col gap-4 mx-auto max-w-xl lg:max-w-5xl my-12"
      }
    >
      <SubjectHeader
        units={AlgebraUnits.length}
        lessons={AlgebraUnits.reduce(
          (total, unit) => total + unit.Lessons.length,
          0
        )}
      />

      <Accordion type="multiple">
        {AlgebraUnits.map((unit: Unit, mainIndex: number) => {
          const percentage =
            (unit.Lessons.filter((lesson) => lesson.completed).length /
              unit.Lessons.length) *
            100;
          
          // Find first unit that has an uncompleted lesson
          const isFirstNotCompletedUnit = AlgebraUnits.findIndex(
            (u) => u.Lessons.some((l) => !l.completed)
          ) === mainIndex;

          return (
            <AccordionItem key={unit.title} value={unit.title} className="py-6 last-of-type:border-b-0">
              <div className="flex flex-row items-center justify-between">
                <div className={"flex flex-col gap-1 justify-start p-2 w-full"}>
                  <span className={"text-muted-foreground text-xs"}>
                    الوحدة {mainIndex + 1}
                  </span>
                  <Link
                    href={"/subjects/1/1"}
                    className={
                      "group text-start font-bold text-xl flex items-center justify-between hover:underline"
                    }
                  >
                    {unit.title}
                  </Link>
                  <p className={"text-base font-light mb-1"}>
                    نسبة إتقان الوحدة: {percentage}%
                  </p>
                </div>
                <AccordionTrigger
                  className={"flex flex-row gap-1 justify-start p-2 w-fit"}
                  asChild
                >
                  <Button
                    className="w-fit flex-1 pl-3"
                    variant="ghost"
                    size="icon"
                  >
                    <IconChevronDown className="size-12" />
                    عرض الدروس
                  </Button>
                </AccordionTrigger>
              </div>
              <AccordionContent
                className={"flex flex-col lg:grid grid-cols-2 gap-3"}
              >
                {unit.Lessons.map((lesson, index) => (
                  <LessonItem
                    isFirstNotCompletedUnit={isFirstNotCompletedUnit}
                    key={lesson.title}
                    lesson={lesson}
                    mainIndex={mainIndex}
                    index={index}
                    units={AlgebraUnits}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Subject;