"use client"

import React from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  AwardIcon,
  BookOpen,
  Calendar,
  CheckCircle,
  ExternalLink,
  GraduationCap,
  InfoIcon,
  PenTool,
  SearchIcon,
  Snowflake,
  Zap,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-transparent container mx-auto" dir="rtl">
      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Card 1*/}
          <Card className="shadow-none">
            <CardHeader className="flex !items-start justify-between flex-row">
              <h2 className="text-lg sm:text-xl font-bold"> Card Title</h2>
              <Button variant={"outline"} size={"sm"} className="!mt-0"><ExternalLink/>Link</Button>
            </CardHeader>
            <CardContent>
              Card
            </CardContent>
          </Card>

          {/* Card 2*/}
          <Card className="shadow-none">
            <CardHeader className="flex !items-start justify-between flex-row">
              <h2 className="text-lg sm:text-xl font-bold"> Card Title</h2>
              <Button variant={"outline"} size={"sm"} className="!mt-0"><ExternalLink/>Link</Button>
            </CardHeader>
            <CardContent>
              Card
            </CardContent>
          </Card>
          {/* Card 3*/}
          <Card className="shadow-none">
            <CardHeader className="flex items-start justify-between flex-row">
              <h2 className="text-lg sm:text-xl font-bold"> Card Title</h2>
              <Button variant={"outline"} size={"sm"} className="!mt-0"><ExternalLink/>Link</Button>
            </CardHeader>
            <CardContent>
              Card
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:w-[30%] min-w-[340px] space-y-6">
          <ProfileComponent />
          <StreakComponent />
        </div>
      </div>
    </div>
  )
}

const ProfileComponent = () => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center space-x-4 space-x-reverse">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>عب</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">مرحبًا، عبدالرحمن</h2>
            <p className="text-sm text-gray-500">الصف الثالث الثانوي</p>
          </div>
        </div>
        <Separator className="my-4 sm:my-6" />
        <div className="space-y-4">
          <div className="flex items-center">
            <BookOpen className="ml-2 h-5 w-5 text-blue-500" />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-medium">المواد المكتملة</span>
                <span className="text-sm text-gray-500">2/6</span>
              </div>
              <Progress value={33} className="mt-2" />
            </div>
          </div>
          <div className="flex items-center">
            <CheckCircle className="ml-2 h-5 w-5 text-green-500" />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-medium">الواجبات المنجزة</span>
                <span className="text-sm text-gray-500">15/20</span>
              </div>
              <Progress value={75} className="mt-2" />
            </div>
          </div>
          <div className="flex items-center">
            <AwardIcon className="ml-2 h-5 w-5 text-yellow-500" />
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
  )
}

const StreakComponent = () => {
  return (
    <div className="flex !pt-2 flex-col gap-4">
    <div className={"flex justify-between items-center"}>
      <div className={"flex items-center justify-start gap-1"}>
        <Zap fill={"current"} className={"h-10 w-auto opacity-75"}/>
        <span className={"text-5xl font-bold"}>145</span>
        <div className={"flex flex-col gap-1 mr-1"}>
            <span className={"text-base"}>
              المداومة اليومية
            </span>
          <div className={"flex gap-1 text-xs items-center text-muted-foreground"}>

            <Progress value={10}/>
            0/100
          </div>
        </div>
      </div>
      <Button variant={"ghost"} size={"icon"}>
        <InfoIcon/>
      </Button>
    </div>
    <Card className="rounded-lg border shadow-none">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex gap-0">
          {["س", "أ", "اث", "ث", "أر"].map((day, index) => (<div key={index}
                                                                 className={cn("flex flex-col items-center hover:bg-accent/25 p-2.5 gap-2 rounded-[10px] cursor-default", index === 0 && "bg-accent/80 hover:bg-accent/70")}>
            <Zap className={`h-8 w-8 fill-current ${index === 0 ? "text-primary" : "text-gray-200"}`}/>
            <span className={`text-sm ${index === 0 ? "font-bold" : "text-gray-500"}`}>{day}</span>
          </div>))}
        </div>
        <Separator orientation={"vertical"} className={"w-[2px] h-[50px] !bg-border"}/>
        <div className="flex flex-col items-center justify-between h-full gap-2">
          <Snowflake className="h-7 w-auto text-primary"/>
          <Snowflake className="h-7 w-auto text-primary"/>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-start text-sm text-muted-foreground pb-4">
        <Zap className="ml-2 h-4 w-4 text-primary fill-current"/>
        <span>أفضل مداومة لديك هي 24 يوم</span>
      </CardFooter>
    </Card>
  </div>
  )
}