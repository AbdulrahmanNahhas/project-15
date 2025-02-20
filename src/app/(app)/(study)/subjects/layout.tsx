import {UnitsLayout} from "@/modules/app/subjects/components/units/layout";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <UnitsLayout>
      {children}
    </UnitsLayout>
  )
}