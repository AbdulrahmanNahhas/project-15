import {SidebarInset, SidebarProvider, SidebarTrigger} from "@ui//sidebar"
import {UnitsSidebar} from "@/modules/app/ui/components/learn/units/sidebar";

function UnitsLayout({ children }: { children: React.ReactNode }) {
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

export {UnitsLayout} 