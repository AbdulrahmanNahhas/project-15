import {SidebarInset, SidebarProvider, SidebarTrigger} from "@ui//sidebar"
import {LessonSidebar} from "../../../../modules/app/subjects/components/lesson/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "22rem",
          "--sidebar-width-icon": "3rem",
        } as React.CSSProperties
      }>
      <LessonSidebar />
      <SidebarInset className={"w-full items-center justify-center"}>
        <div className={"flex items-center gap-2 p-3 font-bold justify-start mx-auto w-full max-w-4xl mb-2"}>
          <SidebarTrigger className={"!size-9"} />
          <h1 className={"text-xl"}>الدرس الأول: عنوان الدرس</h1>
        </div>
        <main className={"max-w-4xl flex items-start justify-center mx-auto w-full"}>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}