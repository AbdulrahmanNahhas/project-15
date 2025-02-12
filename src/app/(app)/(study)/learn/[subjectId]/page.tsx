import React from "react";
import Link from "next/link";
import { ArrowRight, CheckIcon, Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  IconBook2,
  IconBooks,
  IconCalculator,
  IconChevronDown,
} from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Lesson = {
  title: string;
  url: string;
  done?: boolean;
};
type Unit = {
  title: string;
  description: string;
  Lessons: Lesson[];
};
const AlgebraUnits: Unit[] = [
  {
    title: "المعادلات والمتباينات الخطية",
    description:
      "حل وتمثيل المعادلات والمتباينات الخطية في متغير واحد ومتغيرين.",
    Lessons: [
      {
        title: "حل المعادلات الخطية",
        url: "/lesson/solving-linear-equations",
        done: true,
      },
      {
        title: "تمثيل المعادلات الخطية",
        url: "/lesson/graphing-linear-equations",
        done: true,
      },
      {
        title: "حل المتباينات الخطية",
        url: "/lesson/solving-linear-inequalities",
      },
      {
        title: "أنظمة المعادلات الخطية",
        url: "/lesson/systems-of-linear-equations",
      },
    ],
  },
  {
    title: "الدوال وتمثيلها البياني",
    description: "استكشاف أنواع مختلفة من الدوال وتمثيلها البياني.",
    Lessons: [
      { title: "مقدمة في الدوال", url: "/lesson/intro-to-functions" },
      { title: "ترميز الدوال", url: "/lesson/function-notation" },
      { title: "المجال والمدى", url: "/lesson/domain-and-range" },
      { title: "تمثيل الدوال البياني", url: "/lesson/graphing-functions" },
    ],
  },
  {
    title: "الدوال التربيعية والمعادلات",
    description:
      "دراسة الدوال التربيعية وتمثيلها البياني وحل المعادلات التربيعية.",
    Lessons: [
      { title: "الدوال التربيعية", url: "/lesson/quadratic-functions" },
      {
        title: "تمثيل الدوال التربيعية بيانيًا",
        url: "/lesson/graphing-quadratic-functions",
      },
      {
        title: "حل المعادلات التربيعية",
        url: "/lesson/solving-quadratic-equations",
      },
      { title: "صيغة المعادلة التربيعية", url: "/lesson/quadratic-formula" },
    ],
  },
  {
    title: "الدوال متعددة الحدود",
    description: "استكشاف دوال متعددة الحدود من درجات أعلى وخصائصها.",
    Lessons: [
      { title: "الدوال متعددة الحدود", url: "/lesson/polynomial-functions" },
      { title: "تمثيل متعددات الحدود", url: "/lesson/graphing-polynomials" },
      { title: "قسمة متعددة الحدود", url: "/lesson/polynomial-division" },
      { title: "نظرية الباقي", url: "/lesson/remainder-theorem" },
    ],
  },
  {
    title: "الدوال الكسرية",
    description: "دراسة الدوال الكسرية وتمثيلها البياني وحل المعادلات الكسرية.",
    Lessons: [
      { title: "الدوال الكسرية", url: "/lesson/rational-functions" },
      {
        title: "تمثيل الدوال الكسرية بيانيًا",
        url: "/lesson/graphing-rational-functions",
      },
      {
        title: "حل المعادلات الكسرية",
        url: "/lesson/solving-rational-equations",
      },
      { title: "الكسور المعقدة", url: "/lesson/complex-fractions" },
    ],
  },
  {
    title: "الدوال الجذرية والأسس الكسرية",
    description: "استكشاف الدوال الجذرية وخصائص الأسس الكسرية.",
    Lessons: [
      { title: "الدوال الجذرية", url: "/lesson/radical-functions" },
      { title: "الأسس الكسرية", url: "/lesson/rational-exponents" },
      {
        title: "حل المعادلات الجذرية",
        url: "/lesson/solving-radical-equations",
      },
      {
        title: "تمثيل الدوال الجذرية بيانيًا",
        url: "/lesson/graphing-radical-functions",
      },
    ],
  },
  {
    title: "الدوال الأسية واللوغاريتمية",
    description: "دراسة النمو والانحلال الأسي والتعرف على اللوغاريتمات.",
    Lessons: [
      { title: "الدوال الأسية", url: "/lesson/exponential-functions" },
      { title: "الدوال اللوغاريتمية", url: "/lesson/logarithmic-functions" },
      { title: "خصائص اللوغاريتمات", url: "/lesson/properties-of-logarithms" },
      {
        title: "حل المعادلات الأسية واللوغاريتمية",
        url: "/lesson/solving-exp-log-equations",
      },
    ],
  },
  {
    title: "المتتاليات والمتسلسلات",
    description: "استكشاف المتتاليات والمتسلسلات الحسابية والهندسية.",
    Lessons: [
      { title: "المتتاليات الحسابية", url: "/lesson/arithmetic-sequences" },
      { title: "المتتاليات الهندسية", url: "/lesson/geometric-sequences" },
      { title: "المتسلسلات الحسابية", url: "/lesson/arithmetic-series" },
      { title: "المتسلسلات الهندسية", url: "/lesson/geometric-series" },
    ],
  },
  {
    title: "القطوع المخروطية",
    description: "دراسة خصائص القطوع المخروطية وتمثيلها البياني.",
    Lessons: [
      { title: "الدوائر", url: "/lesson/circles" },
      { title: "القطوع المكافئة", url: "/lesson/parabolas" },
      { title: "القطوع الناقصة", url: "/lesson/ellipses" },
      { title: "القطوع الزائدة", url: "/lesson/hyperbolas" },
    ],
  },
  // {
  //   title: "الاحتمالات والإحصاء",
  //   description: "مقدمة في نظرية الاحتمالات والتحليل الإحصائي.",
  //   Lessons: [
  //     { title: "مبادئ العد", url: "/lesson/counting-principles" },
  //     { title: "الاحتمالات", url: "/lesson/probability" },
  //     { title: "مقاييس النزعة المركزية", url: "/lesson/measures-of-central-tendency" },
  //     { title: "التوزيع الطبيعي", url: "/lesson/normal-distribution" },
  //   ],
  // },
];

const Subject = () => {
  return (
    <div
      className={
        "p-3 container flex flex-col gap-4 mx-auto max-w-xl lg:max-w-5xl my-12"
      }
    >
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
            <Badge variant="secondary" className="!text-base p-2">
              ثالث ثانوي
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <IconBooks className="size-5" />
            <span>10 وحدات</span>
          </div>
          <div className="flex items-center gap-2">
            <IconBook2 className="size-5" />
            <span>40 درس</span>
          </div>
        </div>
      </div>

      <Accordion type="multiple">
      {AlgebraUnits.map((unit, mainIndex) => (
        <AccordionItem key={unit.title} value={unit.title} className="py-6">
          <div className="flex flex-row items-center justify-between">
          <div className={"flex flex-col gap-1 justify-start p-2 w-full"}>
            <span className={"text-muted-foreground text-xs"}>
              الوحدة {mainIndex + 1}
            </span>
            <Link
              href={"/learn/1/1"}
              className={
                "group text-start font-bold text-xl flex items-center justify-between hover:underline"
              }
            >
              {unit.title}
              {/*<ChevronDown className="mr-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>*/}
            </Link>
            <p className={"text-base font-light mb-1"}>
              نسبة إتقان الوحدة:
              {mainIndex == 0 ? " 75%" : " 0%"}
            </p>
          </div>
            <AccordionTrigger className={"flex flex-row gap-1 justify-start p-2 w-fit"} asChild>
              <Button className="w-fit flex-1 pl-3" variant="ghost" size="icon">
                <IconChevronDown className="size-12" />
                عرض الدروس
              </Button>
            </AccordionTrigger>
            
            </div>
          <AccordionContent className={"flex flex-col lg:grid grid-cols-2 gap-3"}>
            {unit.Lessons.map((lesson, index) => (
              <Link
                href={lesson.url}
                key={lesson.title}
                className={cn(
                  "bg-accent/10 border p-4 rounded-xl text-lg flex gap-3 items-center hover:bg-accent duration-300 ease-out",
                  AlgebraUnits[mainIndex].Lessons[index - 1]?.done &&
                    !lesson.done &&
                    "border-primary border-2 relative"
                )}
              >
                <span
                  className={cn(
                    "font-bold rounded-full text-foreground  bg-accent border-2 size-8 flex items-center justify-center border-dotted",
                    lesson.done &&
                      "border-green-300 text-green-600 bg-green-200 border-solid border stroke-2",
                    AlgebraUnits[mainIndex].Lessons[index - 1]?.done &&
                      !lesson.done &&
                      "border-primary text-primary bg-primary/10 border-dashed border stroke-2"
                  )}
                >
                  {AlgebraUnits[mainIndex].Lessons[index - 1]?.done &&
                  !lesson.done ? (
                    <ArrowRight className={"p-1 text-primary"} />
                  ) : lesson.done ? (
                    <CheckIcon className={"!stroke-[3] p-1"} />
                  ) : (
                    <Loader
                      className={
                        "animate-spin p-1 text-muted-foreground !duration-1000"
                      }
                    />
                  )}
                </span>
                {lesson.title}
                {mainIndex == 0 && index == 2 && (
                  <Button className={" rounded-2xl mr-auto"}>انت هنا</Button>
                )}
              </Link>
            ))}
          </AccordionContent>
          </AccordionItem>
      ))}
      </Accordion>
    </div>
  );
};
export default Subject;
