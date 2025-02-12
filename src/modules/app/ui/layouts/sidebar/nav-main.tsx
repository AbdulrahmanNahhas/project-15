"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import Link from "next/link";
import { TablerIcon } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon | TablerIcon;
    activeIcon?: LucideIcon | TablerIcon;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();
  
  return (
    <SidebarGroup>
    <SidebarMenu>
      {items.map((item, index) => {
        const isActive = pathname === item.url;

        return (
          <SidebarMenuItem key={index}>
            <SidebarMenuButton
              tooltip={item.title}
              asChild
              isActive={isActive}
            >
              <Link href={item.url}>
                {isActive && item.activeIcon && <item.activeIcon />}
                {(item.icon && !isActive) && <item.icon />}
                {(item.icon && isActive && !item.activeIcon) && <item.icon />}                

                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )})}
    </SidebarMenu>
    </SidebarGroup>
  );
}
