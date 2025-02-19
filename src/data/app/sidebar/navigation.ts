"use client";

import {
  IconBook,
  IconAward,
  IconFlag,
  IconRouteSquare,
  IconChartLine,
  IconMicrophone,
  IconUsers,
  IconInbox,
  IconBook2,
  IconHome,
  IconHomeFilled,
  IconSchool,
  IconReportAnalytics
} from '@tabler/icons-react'

export const navigationData = {
  user: {
    name: "عبدالرحمن كنان محمد لبيب النحاس",
    email: "nahhas909@gmail.com",
    avatar: "/profile.png",
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

export const bottomNavigationData = [
  {
    title: "لوحة التحكم",
    url: "/home",
    icon: IconHome,
    activeIcon: IconHomeFilled,
  },
  {
    title: "التقدم",
    url: "#",
    icon: IconReportAnalytics,
    // activeIcon: IconChartLine,
  },
  {
    title: "المنهاج الدراسي",
    url: "/learn",
    icon: IconSchool,
  },
  {
    title: "الدورات",
    url: "/courses",
    icon: IconBook2,
    activeIcon: IconBook2,
  },
]