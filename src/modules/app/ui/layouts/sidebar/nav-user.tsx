"use client";

import { ChevronsUpDown, LogOut, Settings2Icon, UserIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@ui//avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui//dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@ui//sidebar";
import SignOutButton from "@/modules/auth/components/logout";
import Link from "next/link";
import { useUser } from "@/components/context/auth-context";
import { IconUserFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function NavUser({ texts = true }: { texts?: boolean }) {
  const { user, isLoading } = useUser();

  const { isMobile } = useSidebar();

  // Handle no user (not authenticated)
  if (!user && !isLoading) {
    return null;
  }

  const renderUserContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center gap-3 p-2 animate-pulse ml-auto">
          <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-700" />
          <div className="flex flex-col gap-1">
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      );
    }

    if (!user) return null;

    return (
      <>
        <Avatar className="size-10 rounded-lg flex items-center justify-center">
          <AvatarImage src={user.avatar} alt={user.username} />
          <AvatarFallback className="rounded-lg flex items-center justify-center w-full h-full">
            <IconUserFilled />
          </AvatarFallback>
        </Avatar>
        <div className={cn("grid flex-1 text-right text-sm leading-snug", !texts&&"hidden")}>
          <span className="truncate font-semibold">
            {user.first_name} {user.last_name}
          </span>
          <span className="truncate text-xs text-muted-foreground">
            {user.username}
          </span>
        </div>
      </>
    );
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className={cn("data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", !texts && "aspect-square px-0! flex items-center justify-center ring-0!")}
            >
              {renderUserContent()}
              <ChevronsUpDown className={cn("ml-auto size-4", !texts&&"hidden")} />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-44! rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href={`/user/${user?.username}`}>
                  <UserIcon className="mr-2" />
                  الملف الشخصي
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
              <Link href={`/settings`}>
                <Settings2Icon className="mr-2" />
                الإعدادات
              </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <SignOutButton asChild>
              <DropdownMenuItem className="text-destructive hover:text-destructive! hover:bg-destructive/10! w-full text-start justify-start items-center outline-hidden! stroke-none! duration-200 shadow-none h-8 py-0! px-1! border-0! ring-0!">
                <LogOut className="mr-2" />
                تسجيل الخروج
              </DropdownMenuItem>
            </SignOutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
