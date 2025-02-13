import {UnitsLayout} from "@/modules/app/ui/components/learn/units/layout";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <UnitsLayout>
      {children}
    </UnitsLayout>
  )
}