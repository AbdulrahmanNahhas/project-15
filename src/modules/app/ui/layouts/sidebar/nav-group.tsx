"use client"

import {
  type LucideIcon,
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@ui//sidebar"
import Link from "next/link";
import { TablerIcon } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavGroup({
  items,
  title,
}: {
  title: string;
  items: {
    name: string
    url: string
    icon?: LucideIcon | TablerIcon;
    activeIcon?: LucideIcon | TablerIcon;
    activeClassName?: string
  }[]
}) {
  // const { isMobile } = useSidebar()
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
      {items.map((item, index) => {
        const isActive = pathname === item.url;

        return (
          <SidebarMenuItem key={index}>
            <SidebarMenuButton
              tooltip={item.name}
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
                {isActive && item.activeIcon && <item.activeIcon className={cn(item.activeClassName)} />}

                {(item.icon && !isActive) && <item.icon className={item.url === "#" ? "text-muted-foreground" : ""} />}
                {(item.icon && isActive && !item.activeIcon) && <item.icon className={item.url === "#" ? "text-muted-foreground" : ""} />}              

                <span className={item.url === "#" ? "text-muted-foreground invert" : ""}>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )})}
      </SidebarMenu>
    </SidebarGroup>
  )
}
