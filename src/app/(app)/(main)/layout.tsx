import AppLayout from "@/modules/app/ui/layouts/layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout>
      {children}
    </AppLayout>   
  )
}