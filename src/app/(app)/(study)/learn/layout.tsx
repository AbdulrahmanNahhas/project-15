import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import {UnitsSidebar} from "./_sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "18rem",
          "--sidebar-width-icon": "3rem",
        } as React.CSSProperties
      }>
      <UnitsSidebar />
      <SidebarInset className={"w-full"}>
        <SidebarTrigger className="absolute top-4 right-4 p-3 rounded-sm text-3xl size-8"/>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}