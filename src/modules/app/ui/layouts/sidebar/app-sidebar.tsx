"use client";

import * as React from "react";

import {
  IconBook,
  IconAward,
  IconFileText,
  IconFlag,
  IconRouteSquare,
  IconChartLine,
  IconMicrophone,
  IconUsers,
  IconInbox,
  IconBookFilled,
  IconBook2
} from '@tabler/icons-react';
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
import { IconHome, IconHomeFilled, IconSchool } from '@tabler/icons-react';

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
      icon: IconHome,
      activeIcon: IconHomeFilled,
    },
    {
      title: "الأخبار",
      url: "#",
      icon: IconInbox,
    },
  ],
  navSecondary: [
    {
      title: "التعلم",
      url: "/learn",
      items: [
        {
          name: "المنهاج الدراسي",
          url: "/learn",
          icon: IconSchool,
        },
        {
          name: "الدورات",
          url: "/courses",
          icon: IconBook2,
          activeIcon: IconBook2,
        },
        {
          name: "المسارات",
          url: "/paths",
          icon: IconRouteSquare,
        },
        {
          name: "المكتبة الرقمية",
          url: "/books",
          icon: IconBook,
        },
        {
          name: "الندوات",
          url: "#",
          icon: IconMicrophone,
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
          icon: IconUsers,
        },
        // {
        //   name: "المتصدرون",
        //   url: "/leaderboard",
        //   icon: Trophy,
        // },
        {
          name: "المسابقات",
          url: "#",
          icon: IconFlag,
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
          icon: IconChartLine,
        },
        {
          name: "الإنجازات",
          url: "#",
          icon: IconAward,
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
    //       icon: IconBook2,
    //     },
    //     {
    //       name: "الموارد",
    //       url: "/test",
    //       icon: Folders,
    //     },
    //     {
    //       name: "التقارير",
    //       url: "/test",
    //       icon: IconFileText,
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
