"use client"

import {
  Sidebar,
  SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
// import {NavUser} from "@/components/layout/nav-user";
import Image from "next/image";
import Link from "next/link";
import {ChevronLeft, ChevronRight, FileText, Play, Zap} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { lessonSidebar } from "@/data/app/study/lessosn";

export function LessonSidebar() {
  const items = [...lessonSidebar.learn, ...lessonSidebar.practice].sort((a, b) => a.index - b.index);

  return (
    <Sidebar side={"right"} variant={"inset"}>
      <SidebarHeader className={"border-b mb-3"}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/home">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <Image className="h-8 w-auto" alt={"Logo"} src={"/logo.png"} width={50} height={50} />
                </div>
                <div className="flex flex-col gap-0.5 text-lg">
                  <span className="font-semibold">المنصة السورية</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className={"!gap-0"}>
        <TooltipProvider delayDuration={100}>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <Link href={"/learn/1"} className="hover:underline text-center mx-auto mb-1 h-auto">
                الرياضيات
              </Link>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <div className={"mb-4 text-sm font-semibold text-center flex items-center"}>
                <Button variant={"ghost"} size={"icon"} className={"aspect-square"}>
                <ChevronRight className={"font-bold !size-5"}/>
                </Button>
                <h1 className={"px-1"}>
                  المسائل اللفظية في المعادلات الخطية: متقدم
                </h1>
                <Button variant={"ghost"} size={"icon"} className={"aspect-square"}>
                <ChevronLeft className={"font-bold !size-5"}/>
                </Button>
              </div>
              <SidebarMenu>
                {items.map((item, idx) => (
                  <SidebarMenuItem key={idx}>
                      <Tooltip>

                    <SidebarMenuButton className={"h-auto !py-3 px-3 text-base"}>
                    {item.type === "video" ? (
                      <Play className={cn("size-5 fill-current")} />
                    ) : item.type === "article" ? (
                      <FileText className={cn("size-5")} />
                    ): (
                      <Zap className={cn("size-5 fill-current")} />
                    )}
                      <TooltipTrigger asChild>
                        <span>
                        {item.title}
                        </span>
                      </TooltipTrigger>
                    </SidebarMenuButton>
                    <TooltipContent className={"bg-black"}>
                      {item.title}
                    </TooltipContent>
                      </Tooltip>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </TooltipProvider>
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user}/> */}
      </SidebarFooter>
      <SidebarRail className={"!hidden md:!block hover:after:bg-primary"}/>
    </Sidebar>
  )
}
