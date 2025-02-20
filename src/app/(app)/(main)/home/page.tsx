"use client";

import React from "react";
import {
  Card,
  CardContent,
} from "@ui//card";
import { Progress } from "@ui//progress";
import { Separator } from "@ui//separator";
import { Avatar, AvatarFallback, AvatarImage } from "@ui//avatar";
import { IconAwardFilled, IconBook2, IconCheckbox } from "@tabler/icons-react";
import { ActivityCard } from "@/modules/app/ui/components/home/activity-card";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-transparent container mx-auto" dir="rtl">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Card 1*/}
          {/* <Card className="shadow-none">
            <CardHeader className="flex !items-start justify-between flex-row">
              <h2 className="text-lg sm:text-xl font-bold">الصفحات</h2>
              <Button variant={"outline"} size={"sm"} className="!mt-0">
                <ExternalLink />
                Link
              </Button>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Link href="/home">
                <Card className="shadow-none hover:bg-accent/50 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-2">
                    الصفحة الرئيسية
                  </CardContent>
                </Card>
              </Link>
              Learning Section
              <Link href="/subjects">
                <Card className="shadow-none hover:bg-accent/50 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-2">
                    الدروس
                  </CardContent>
                </Card>
              </Link>
              <Link href="/courses">
                <Card className="shadow-none hover:bg-accent/50 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-2">
                    المسارات والدورات
                  </CardContent>
                </Card>
              </Link>
              <Link href="/books">
                <Card className="shadow-none hover:bg-accent/50 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-2">
                    المكتبة الرقمية
                  </CardContent>
                </Card>
              </Link>
              <Link href="#">
                <Card className="shadow-none hover:bg-accent/50 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-2">
                    الندوات
                  </CardContent>
                </Card>
              </Link>

              Interactions Section
              <Link href="#">
                <Card className="shadow-none hover:bg-accent/50 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-2">
                    المجتمع
                  </CardContent>
                </Card>
              </Link>
              <Link href="#">
                <Card className="shadow-none hover:bg-accent/50 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-2">
                    المسابقات
                  </CardContent>
                </Card>
              </Link>

              Statistics Section
              <Link href="#">
                <Card className="shadow-none hover:bg-accent/50 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-2">
                    التقدم
                  </CardContent>
                </Card>
              </Link>
              <Link href="#">
                <Card className="shadow-none hover:bg-accent/50 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-2">
                    الإنجازات
                  </CardContent>
                </Card>
              </Link>
            </CardContent>
          </Card> */}
          {/* Card 2*/}
        </div>

        {/* Sidebar */}
        <div className="lg:w-[30%] min-w-[340px] space-y-4">
          <ProfileComponent />
          <ActivityCard />
        </div>
      </div>
    </div>
  );
}

const ProfileComponent = () => {
  return (
    <Card className="shadow-none rounded-3xl bg-accent/25 hover:bg-accent/0">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center space-x-4 space-x-reverse">
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
        <Separator className="my-4 sm:my-6" />
        <div className="space-y-4">
          <div className="flex items-center">
            <IconBook2 className="ml-2 h-5 w-5 text-blue-500" />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-medium">المواد المكتملة</span>
                <span className="text-sm text-gray-500">2/6</span>
              </div>
              <Progress value={33} className="mt-2" />
            </div>
          </div>
          <div className="flex items-center">
            <IconCheckbox className="ml-2 h-5 w-5 text-green-500" />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-medium">الواجبات المنجزة</span>
                <span className="text-sm text-gray-500">15/20</span>
              </div>
              <Progress value={75} className="mt-2" />
            </div>
          </div>
          <div className="flex items-center">
            <IconAwardFilled className="ml-2 h-5 w-5 text-yellow-500" />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-medium">المعدل التراكمي</span>
                <span className="text-sm text-gray-500">3.8/4.0</span>
              </div>
              <Progress value={95} className="mt-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};