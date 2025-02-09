interface Layout {
  children: React.ReactNode
}

const Layout = ({children}: Layout) => {
  return (
    <>
    {children}
    </>
  )
}

export default Layout