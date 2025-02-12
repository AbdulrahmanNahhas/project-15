"use client"

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { IconChevronRight } from "@tabler/icons-react";
// import {NavUser} from "@/components/layout/nav-user";
import Image from "next/image";
import Link from "next/link";

const data = {
  version: ["0.0.1"],
  user: {
    name: "عبدالرحمن النحاس",
    email: "nahhas@gmail.com",
    avatar: "/avatars/test.jpg",
  },
  units: [
    {
      title: "المعادلات والمتباينات الخطية",
      description: "حل وتمثيل المعادلات والمتباينات الخطية في متغير واحد ومتغيرين.",
    },
    {
      title: "الدوال وتمثيلها البياني",
      description: "استكشاف أنواع مختلفة من الدوال وتمثيلها البياني."
    },
    {
      title: "الدوال التربيعية والمعادلات",
      description: "دراسة الدوال التربيعية وتمثيلها البياني وحل المعادلات التربيعية.",
    },
    {
      title: "الدوال متعددة الحدود",
      description: "استكشاف دوال متعددة الحدود من درجات أعلى وخصائصها.",
    },
    {
      title: "الدوال الكسرية",
      description: "دراسة الدوال الكسرية وتمثيلها البياني وحل المعادلات الكسرية.",
    },
    {
      title: "الدوال الجذرية والأسس الكسرية",
      description: "استكشاف الدوال الجذرية وخصائص الأسس الكسرية.",
    },
    {
      title: "الدوال الأسية واللوغاريتمية",
      description: "دراسة النمو والانحلال الأسي والتعرف على اللوغاريتمات.",
    },
    {
      title: "المتتاليات والمتسلسلات",
      description: "استكشاف المتتاليات والمتسلسلات الحسابية والهندسية.",
    },
    {
      title: "القطوع المخروطية",
      description: "دراسة خصائص القطوع المخروطية وتمثيلها البياني.",
    },
    {
      title: "الاحتمالات والإحصاء",
      description: "مقدمة في نظرية الاحتمالات والتحليل الإحصائي.",
    },
  ]
}

export function UnitsSidebar() {
  return (
    <Sidebar side={"right"} variant={"inset"} collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center justify-between gap-1">
                <Button variant={"ghost"} size={"icon"} asChild>
                  <Link href="/learn">
                    <IconChevronRight className="size-8" />
                  </Link>
                </Button>
            <SidebarMenuButton size="lg" asChild>
              <a href="/home">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <Image className="h-8 w-auto" alt={"Logo"} src={"/logo.png"} width={50} height={50} />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">المنصة السورية</span>
                  <span className="text-start text-xs">v{data.version}</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className={"!gap-0"}>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <Link href={"/learn/1"} className="hover:underline">
                الرياضيات
              </Link>

            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {data.units.map((unit, index) => (
                  <SidebarMenuItem key={unit.title}>
                    <SidebarMenuButton className={"h-auto"}>
                      <span className={"font-normal text-foreground w-6 flex items-center justify-center !text-center text-lg relative left-0.5 bottom-1"}>
                        <span className={"size-5"}>
                          {index+1}
                        </span>
                      </span>
                      <a href={"/learn/1/1"} className={"h-auto text-start"}>
                        {unit.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail className={"!hidden md:!block hover:after:bg-primary"} />
    </Sidebar>
  )
}
