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
} from "@/components/ui/sidebar"
import Link from "next/link";

export function NavGroup({
  items,
  title,
}: {
  title: string;
  items: {
    name: string
    url: string
    icon: LucideIcon
    isActive?: boolean
  }[]
}) {
  // const { isMobile } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              tooltip={item.name}
              isActive={item.isActive}
              asChild disabled={item.url === "#"}
              className={item.url === "#" ? "opacity-50 cursor-not-allowed" : ""}>
              <Link href={item.url}>
                {item.icon && <item.icon className={item.url === "#" ? "text-muted-foreground" : ""} />}
                <span className={item.url === "#" ? "text-muted-foreground" : ""}>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
