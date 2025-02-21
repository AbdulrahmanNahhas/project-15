"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@ui//sidebar";
import Link from "next/link";
import { TablerIcon } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
            isActive={isActive}
            disabled={item.url === "#"}
            className={cn(
              "h-10! text-base! md:h-8! md:text-sm!",
              isActive && "text-primary! bg-primary/10!",
              item.url === "#" && "opacity-50 cursor-not-allowed"
            )}
            asChild
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
