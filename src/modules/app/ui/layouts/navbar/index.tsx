"use client";

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SearchCommand } from "./search";
import { useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Streaks } from "./streaks";
import { Points } from "./points";
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
    <header
      className={cn(
        "z-50 sticky top-0 bg-background py-2 flex h-16 shrink-0 items-center justify-between px-4 transition-[width,height] ease-linear",
        isScrolled && "border-b"
      )}
    >
      <div className="flex items-center gap-0">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1 h-9 w-9 rounded-full" />
        </div>

        {/* Center section - Navigation content */}
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

        {/* Right section - Support button */}
        <Button className="md:w-32 bg-gradient-to-b from-yellow-500 to-yellow-600 text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2)] transition-all duration-200 hover:scale-105 hover:from-yellow-400 hover:to-yellow-500 active:scale-95">
          ادعم المشروع
        </Button>
      </div>
    </header>
  );
};
