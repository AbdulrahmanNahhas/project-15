import { AppSidebar } from "./sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { SidebarNavbar } from "./navbar";

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar side="right" />
      <SidebarInset>
        <SidebarNavbar />
        <main className="px-4">
        {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
