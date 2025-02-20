"use client";

import { Button } from "@ui//button";
import { SidebarTrigger, useSidebar } from "@ui//sidebar";
import { SearchCommand } from "./search";
import { useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Streaks } from "./streaks";
import { Points } from "./points";
import { NavUser } from "../sidebar/nav-user";
import Image from "next/image";
import Link from "next/link";
import { bottomNavigationData } from "@/data/app/sidebar/navigation";
import { IconDotsCircleHorizontal } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

/**
 * SidebarNavbar Component
 * Renders the main navigation bar of the application
 * Contains the sidebar trigger, navigation content and support button
 */
export const SidebarNavbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 0);
    });
  }, [scrollY]);

  return (
    <>
      <Mobile />
      {/* Desktop Navbar */}
      <Desktop isScrolled={isScrolled} />
    </>
  );
};

const Mobile = () => {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <div className="md:hidden !shadow-md">
      <header className="container !mx-auto h-16 py-2 flex items-center justify-between px-3 md:hidden">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-x-2">
          <Image
            className="h-8 w-auto"
            alt={"Logo"}
            src={"/logo.png"}
            width={50}
            height={50}
          />
          <span className="text-xl font-semibold whitespace-nowrap">
            المنصة السورية
          </span>
        </Link>

        {/* Points & Profile */}
        <div className="flex items-center gap-0.5">
          <Points
            value={886}
            todayPoints={13}
            weeklyPoints={[5, 8, 12, 3, 7, 10, 13]}
          />
          <Streaks value={0} />
          <NavUser texts={false} />
        </div>
      </header>
      <nav className="fixed bottom-0 left-0 w-full bg-background shadow-none border-t flex justify-around items-center py-2 h-20 z-50">
        {bottomNavigationData.map((item, index) => {
          const isActive = pathname === item.url;

          return (
            <Link
              key={index}
              href={item.url}
              className="flex flex-col justify-center items-center text-muted-foreground gap-1 w-fit flex-1 h-full hover:text-foreground duration-200"
            >
              {item.activeIcon && isActive && (
                <item.activeIcon
                  className={cn(
                    "!text-xs !size-7",
                    isActive &&
                      "[&>path]:!shadow-xl [&>path]:!shadow-foreground text-primary"
                  )}
                />
              )}
              {(!item.activeIcon || !isActive) && item.icon && (
              <item.icon
                className={cn(
                  "!text-xs !size-7",
                  isActive &&
                    "[&>path]:!shadow-xl [&>path]:!shadow-foreground text-primary"
                )}
              />
              )}
              <span className="text-[10px] text-wrap text-center">
                {item.title}
              </span>
            </Link>
          );
        })}
        <Button
          onClick={toggleSidebar}
          variant={"ghost"}
          className="flex flex-col items-center text-muted-foreground gap-0 !w-fit flex-1 !h-full rounded-none !p-0 max-h-none min-w-0 hover:bg-transparent"
        >
          <IconDotsCircleHorizontal className={"!text-xs !size-7"} />
          <span className="text-[10px] text-wrap text-center">المزيد</span>
        </Button>
        {/* <SidebarTrigger className="-ml-1 h-9 w-9 rounded-full" /> */}
      </nav>
    </div>
  );
};

const Desktop = ({ isScrolled }: { isScrolled: boolean }) => (
  <header
    className={cn(
      "z-50 sticky top-0 bg-background py-2 h-16 shrink-0 items-center justify-between px-4 transition-[width,height] ease-linear hidden md:flex",
      isScrolled && "border-b"
    )}
  >
    <div className="flex items-center gap-0">
      <SidebarTrigger className="-ml-1 h-9 w-9 rounded-full" />
      <SearchCommand />
    </div>

    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        <Points
          value={886}
          todayPoints={13}
          weeklyPoints={[5, 8, 12, 3, 7, 10, 13]}
        />
        <Streaks value={0} />
      </div>

      <Button className="md:w-32 bg-gradient-to-b from-yellow-500 to-yellow-600 text-white shadow transition-all duration-200 hover:scale-105 hover:from-yellow-400 hover:to-yellow-500 active:scale-95">
        ادعم المشروع
      </Button>
    </div>
  </header>
);
