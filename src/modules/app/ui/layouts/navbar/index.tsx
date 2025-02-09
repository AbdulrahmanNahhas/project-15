import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SearchCommand } from "./search";

/**
 * SidebarNavbar Component
 * Renders the main navigation bar of the application
 * Contains the sidebar trigger, navigation content and support button
 */
export const SidebarNavbar = () => {
  return (
    <header className="container mx-auto border-b  py-2 flex h-18 shrink-0 items-center justify-between px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-14">
      {/* Left section with sidebar trigger and separator */}
      <div className="flex items-center gap-2 md:w-32">
        <SidebarTrigger className="-ml-1" />
      </div>

      {/* Center section - Navigation content */}
      <SearchCommand />

      {/* Right section - Support button */}
      <Button 
        className="md:w-32 bg-gradient-to-b from-yellow-500 to-yellow-600 text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2)] transition-all duration-200 hover:scale-105 hover:from-yellow-400 hover:to-yellow-500 active:scale-95"
      >
        ادعم المشروع
      </Button>
    </header>
  );
};