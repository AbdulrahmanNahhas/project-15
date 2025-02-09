"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LibraryIcon,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import {
  Award,
  BookIcon,
  EditIcon,
  FileText,
  Flag, Folders, HomeIcon,
  Layers,
  LineChart,
  MicIcon, Sliders,
  Users
} from "lucide-react"
import {
  Blocks,
  Calendar,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Sparkles,
  Trash2,
} from "lucide-react";

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
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "روبوتنا الذكي",
      url: "#", 
      icon: Sparkles,
      isActive: true,
    },
    {
      title: "لوحة التحكم",
      url: "#",
      icon: Home,
    },
    {
      title: "الأخبار",
      url: "#",
      icon: Inbox,
    },
    {
      title: "المكتبة الرقمية", 
      url: "#",
      icon: LibraryIcon,
    },
  ],
  navSecondary: [
    {
      title: "التعلم",
      url: "/learn",
      items: [
        {
          name: "الدروس",
          url: "/learn",
          icon: FileText,
        },
        {
          name: "المسارات والدورات",
          url: "/courses",
          icon: Layers,
        },
        {
          name: "المكتبة الرقمية",
          url: "/library",
          icon: BookIcon,
        },
        {
          name: "الندوات",
          url: "/coming-soon",
          icon: MicIcon,
        }
      ],
    },
    {
      title: "التفاعلات",
      url: "",
      items: [
        {
          name: "المجتمع",
          url: "/community",
          icon: Users,
        },
        // {
        //   name: "المتصدرون",
        //   url: "/leaderboard",
        //   icon: Trophy,
        // },
        {
          name: "المسابقات",
          url: "/events",
          icon: Flag,
        },
      ],
    },
    {
      title: "الإحصائيات",
      url: "",
      items: [
        {
          name: "التقدم",
          url: "/test",
          icon: LineChart,
        },
        {
          name: "الإنجازات",
          url: "/test",
          icon: Award,
        },
        {
          name: "التحليل",
          url: "/test",
          icon: PieChart,
        },
        {
          name: "الأداء",
          url: "/test",
          icon: Sliders,
        },
      ],
    },
    {
      title: "الأدوات",
      url: "",
      items: [
        {
          name: "إدارة المحتوى",
          url: "/test",
          icon: EditIcon,
        },
        {
          name: "الأدوات التعليمية",
          url: "/test",
          icon: BookOpen,
        },
        {
          name: "الموارد",
          url: "/test",
          icon: Folders,
        },
        {
          name: "التقارير",
          url: "/test",
          icon: FileText,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
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
