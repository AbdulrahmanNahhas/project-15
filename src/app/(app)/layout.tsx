import { MainLayout } from "@/modules/marketing/ui/layouts/layout"

interface Layout {
  children: React.ReactNode
}

const Layout = ({children}: Layout) => {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}

export default Layout