"use client";

import { ChevronsUpDown, LogOut, Settings2Icon, UserIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import SignOutButton from "@/modules/auth/components/logout";
import Link from "next/link";
import { UserData } from "@/modules/auth/hooks/use-user";
import { useRouter } from "next/navigation";
import { LOGIN_ROUTE } from "@/routes";

interface NavUserProps {
  user: UserData | null;
  loading: boolean;
}

export function NavUser({ user, loading }: NavUserProps) {
  const { isMobile } = useSidebar();
  const router = useRouter();

  // Handle no user (not authenticated)
  if (!user && !loading) {
    router.push(LOGIN_ROUTE);
    return null;
  }

  const renderUserContent = () => {
    if (loading) {
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
        <Avatar className="size-10 rounded-lg">
          <AvatarImage src={user.avatar_url} alt={user.username} />
          <AvatarFallback className="rounded-lg">
            {user.first_name?.[0]}
            {user.last_name?.[0]}
          </AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-right text-sm leading-snug">
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
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {renderUserContent()}
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="!w-44 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/user/me">
                  <UserIcon className="mr-2" />
                  الملف الشخصي
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings2Icon className="mr-2" />
                الإعدادات
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <SignOutButton asChild>
              <DropdownMenuItem className="text-destructive hover:!text-destructive hover:!bg-destructive/10 w-full text-start justify-start items-center !outline-none !stroke-none duration-200 shadow-none h-8 !py-0 !px-1 !border-0 !ring-0">
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
