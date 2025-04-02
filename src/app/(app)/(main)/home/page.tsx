"use client";

import React from "react";
import { Card, CardContent } from "@ui//card";
import { Avatar, AvatarFallback, AvatarImage } from "@ui//avatar";
import { ActivityCard } from "@/modules/app/ui/components/home/activity-card";
import Announcements, { Announcement } from "@/modules/app/ui/components/home/announcements";
import { Button } from "@/components/ui/button";
import { Hexagon } from "lucide-react";
import { StudentCard } from "@/modules/app/leaderboard/student-card";

const data = {
  students: [
    {
      id: 2,
      name: "فاطمة الحربي",
      role: "UX/UI Designer",
      isPro: false,
      xp: 2069,
      avatar: "",
      initial: "ف",
    },
    {
      id: 3,
      name: "يوسف العتيبي",
      role: "Graphic Designer",
      isPro: false,
      xp: 1629,
      avatar: "",
      initial: "ي",
    },
    {
      id: 4,
      name: "أمل الشمري",
      role: "UX/UI Designer",
      isPro: false,
      xp: 1618,
      avatar: "",
      initial: "أ",
    },
    {
      id: 5,
      name: "عبدالرحمن السالمي",
      role: "Project Manager",
      isPro: true,
      xp: 1508,
      avatar: "",
      initial: "ع",
    },
    {
      id: 6,
      name: "ريم العبدالله",
      role: "UX/UI Designer",
      isPro: false,
      xp: 1150,
      avatar: "",
      initial: "ر",
    },
    {
      id: 7,
      name: "بدر القحطاني",
      role: "Developer",
      isPro: false,
      xp: 903,
      avatar: "",
      initial: "ب",
    },
    {
      id: 8,
      name: "خالد التميمي",
      role: "",
      isPro: false,
      xp: 765,
      avatar: "",
      initial: "خ",
    },
    {
      id: 9,
      name: "جميلة الفهيد",
      role: "",
      isPro: false,
      xp: 756,
      avatar: "",
      initial: "ج",
    },
  ],
  announcements: [
    {
      id: "4",
      title: "إطلاق قسم التاريخ الجديد",
      content:
        "تمت إضافة قسم جديد لمادة التاريخ يغطي جميع المراحل الدراسية. يضم هذا القسم دروسًا تفصيلية تشمل الفترات التاريخية المختلفة، مع مقاطع فيديو تعليمية، وخرائط تفاعلية، وأسئلة تقييمية لتعزيز الفهم. ندعو جميع الطلاب لاستكشاف هذا القسم والاستفادة من الموارد المتاحة لتعميق معرفتهم بالتاريخ.",
      date: "اليوم",
      isNew: true,
      category: "update",
      author: { name: "أ. ليلى العبد", role: "قسم الدراسات الاجتماعية" },
    },
    {
      id: "5",
      title: "مسابقة أوائل الطلاب في الرياضيات",
      content:
        "اختبر مهاراتك الرياضية في مسابقة أوائل الطلاب التي ستقام هذا الشهر. ستتضمن المسابقة أسئلة تتراوح بين الجبر والهندسة والإحصاء، وسيتم منح الفائزين شهادات تقدير ونقاط إضافية تعزز تصنيفهم على المنصة. سجل الآن وابدأ التحضير لحصد المركز الأول في المنافسة.",
      date: "منذ 3 أيام",
      category: "competition",
      author: { name: "أ. ياسر الكيلاني", role: "قسم الرياضيات" },
    },
    {
      id: "6",
      title: "تنبيه: تحديثات جديدة في لوحة التحكم",
      content:
        "تم إطلاق تحديث جديد يشمل تحسينات في لوحة التحكم لجعلها أكثر وضوحًا وسهولة في الاستخدام. أصبح بإمكان الطلاب الآن رؤية تقدمهم الدراسي بتفاصيل أكثر دقة، بالإضافة إلى قسم جديد مخصص لموارد المراجعة. تم أيضًا تحسين سرعة تحميل الصفحة وإضافة إشعارات فورية لأي مهام أو اختبارات قادمة.",
      date: "منذ أسبوع",
      category: "system",
      author: { name: "فريق التطوير", role: "قسم التكنولوجيا" },
    },
    {
      id: "7",
      title: "فتح التسجيل لدورات التحضير للامتحانات",
      content:
        "نعلن عن فتح التسجيل في دورات التحضير للامتحانات النهائية لجميع المستويات الدراسية. تركز هذه الدورات على مراجعة شاملة للمناهج، مع دروس مكثفة وأسئلة تدريبية تحاكي الامتحانات الفعلية. ستقام الجلسات عبر الإنترنت بقيادة نخبة من المدرسين ذوي الخبرة، مما يضمن تجربة تعليمية مميزة لجميع المشاركين.",
      date: "منذ يومين",
      category: "course",
      author: { name: "أ. سمير حسن", role: "قسم التعليم" },
    },
  ] as Announcement[],
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-transparent container mx-auto flex flex-col gap-8 mb-8 mt-4">
      <ProfileComponent />
      <div className="lg:grid grid-cols-5 gap-8">
        <Announcements
          className="col-span-3"
          announcements={data.announcements}
        />
        <Leaaderboard className="col-span-2" />
        <ActivityCard className="col-span-2" />
      </div>
    </div>
  );
}

const Leaaderboard = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">لوحة المتصدرين</h2>

        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary">
          <Hexagon className="h-3 w-3 ml-1 fill-current" />
          المستوى البروزني
        </span>
      </div>
      <Card className={"p-0 shadow-none max-w-none"}>
        <CardContent className={"p-0"}>
          {data.students.map((student, index) => (
            <StudentCard key={student.id} student={student} rank={index + 1} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

const ProfileComponent = () => {
  return (
    <Card className="shadow-none rounded-3xl bg-accent/50">
      <CardContent className="p-4 sm:p-6 flex justify-between items-center">
        <div className="flex items-center gap-x-4 space-x-reverse">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/profile.png" alt="@shadcn" />
            <AvatarFallback>عب</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">
              مرحبًا، عبدالرحمن
            </h2>
            <p className="text-sm text-gray-500">الصف الثالث الثانوي</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button size={"lg"} variant={"outline"}>
            التقدم
          </Button>
          <Button size={"lg"} variant={"default"}>
            أكمل الدراسة
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
