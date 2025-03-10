import { AppSidebar } from "./sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@ui//sidebar";
import { SidebarNavbar } from "./navbar";

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar side="right" />
      <SidebarInset>
        <SidebarNavbar />
        <main className="px-4 h-full flex flex-col mb-28 md:mb-0 mt-3 md:mt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
