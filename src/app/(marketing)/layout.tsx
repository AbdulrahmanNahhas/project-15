import { MarketingLayout } from "@/modules/marketing/ui/layouts/layout";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarketingLayout>
      {children}
    </MarketingLayout>
  )
}