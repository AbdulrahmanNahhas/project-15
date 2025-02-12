"use client";

import * as React from "react";

import {
  LibraryIcon,
  Award,
  FileText,
  Flag,
  Layers,
  LineChart,
  MicIcon,
  Users,
  Home,
  Inbox,
  BookOpen,
} from "lucide-react"
import { NavMain } from "@/modules/app/ui/layouts/sidebar/nav-main";
import { NavUser } from "@/modules/app/ui/layouts/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { NavGroup } from "@/modules/app/ui/layouts/sidebar/nav-group";

// This is sample data.
const data = {
  user: {
    name: "عبدالرحمن كنان محمد لبيب النحاس",
    email: "nahhas909@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    // {
    //   title: "Search",
    //   url: "#",
    //   icon: Search,
    // },
    // {
    //   title: "روبوتنا الذكي",
    //   url: "#", 
    //   icon: Sparkles,
    //   isActive: true,
    // },
    {
      title: "لوحة التحكم",
      url: "/home",
      icon: Home,
    },
    {
      title: "الأخبار",
      url: "#",
      icon: Inbox,
    },
    // {
    //   title: "المكتبة الرقمية", 
    //   url: "#",
    //   icon: LibraryIcon,
    // },
  ],
  navSecondary: [
    {
      title: "التعلم",
      url: "/learn",
      items: [
        {
          name: "المنهاج الدراسي",
          url: "/learn",
          icon: FileText,
        },
        {
          name: "الدورات",
          url: "/courses",
          icon: BookOpen,
        },
        {
          name: "المسارات",
          url: "/paths",
          icon: Layers,
        },
        {
          name: "المكتبة الرقمية",
          url: "/books",
          icon: LibraryIcon,
        },
        {
          name: "الندوات",
          url: "#",
          icon: MicIcon,
        }
      ],
    },
    {
      title: "التفاعلات",
      url: "#",
      items: [
        {
          name: "المجتمع",
          url: "#",
          icon: Users,
        },
        // {
        //   name: "المتصدرون",
        //   url: "/leaderboard",
        //   icon: Trophy,
        // },
        {
          name: "المسابقات",
          url: "#",
          icon: Flag,
        },
      ],
    },
    {
      title: "الإحصائيات",
      url: "#",
      items: [
        {
          name: "التقدم",
          url: "#",
          icon: LineChart,
        },
        {
          name: "الإنجازات",
          url: "#",
          icon: Award,
        },
        // {
        //   name: "التحليل",
        //   url: "#",
        //   icon: PieChart,
        // },
        // {
        //   name: "الأداء",
        //   url: "#",
        //   icon: Sliders,
        // },
      ],
    },
    // {
    //   title: "الأدوات",
    //   url: "#",
    //   items: [
    //     {
    //       name: "إدارة المحتوى",
    //       url: "/test",
    //       icon: EditIcon,
    //     },
    //     {
    //       name: "الأدوات التعليمية",
    //       url: "/test",
    //       icon: BookOpen,
    //     },
    //     {
    //       name: "الموارد",
    //       url: "/test",
    //       icon: Folders,
    //     },
    //     {
    //       name: "التقارير",
    //       url: "/test",
    //       icon: FileText,
    //     },
    //   ],
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="sidebar" {...props}>
      <SidebarHeader className="border-b-0 lg:p-2">
        <SidebarMenuButton size="lg" asChild>
          <Link href="#">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
              <Image
                className="h-8 w-auto"
                alt={"Logo"}
                src={"/logo.png"}
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-semibold">المنصة السورية</span>
              <span className="text-start text-xs">v1.0.0</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {data.navSecondary.map((item) => (
          <NavGroup key={item.title} items={item.items} title={item.title} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
