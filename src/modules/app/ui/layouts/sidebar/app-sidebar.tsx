"use client";

import * as React from "react";

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
import { navigationData } from "@/data/app/sidebar/navigation";

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
        <NavMain items={navigationData.navMain} />
        {navigationData.navSecondary.map((item) => (
          <NavGroup key={item.title} items={item.items} title={item.title} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navigationData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
