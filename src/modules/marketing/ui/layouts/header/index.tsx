"use client"

// Core imports
import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"

// UI Components
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// Icons & Utils
import { Clock2Icon, Icon, Menu, TvIcon } from 'lucide-react'
import { motion, useScroll } from 'motion/react'
import { cn } from "@/lib/utils"

// Navigation data
const aboutUs = [
  {
    title: "رؤيتنا ورسالتنا",
    href: "/about/vision-mission",
    description: "تعرف على رؤيتنا ورسالتنا في خدمة المجتمع",
  },
  {
    title: "فريق العمل", 
    href: "/about/team",
    description: "تعرف على الأشخاص الملهمين وراء منصتنا",
  },
  {
    title: "شركاؤنا",
    href: "/about/partners", 
    description: "اكتشف المؤسسات والمنظمات التي نتعاون معها",
  },
]
const services = [
  {
    title: "مهام تطوعية",
    href: "/services/volunteer-tasks",
    description: "استكشف الفرص التطوعية المتاحة",
  },
  {
    title: "خدمات المتطوعين",
    href: "/services/volunteer-services", 
    description: "الخدمات التي نقدمها للمتطوعين",
  },
  {
    title: "دليل المتدرب",
    href: "/services/trainee-guide",
    description: "دليل شامل للمتدربين الجدد",
  },
  {
    title: "دليل المدرب",
    href: "/services/trainer-guide",
    description: "موارد ومعلومات للمدربين",
  },
]

// Types
interface NavbarProps {
  className?: string
  banner?: boolean
}
interface ListItemProps {
  className?: string
  title?: string
  children: React.ReactNode
  href: string
}

// List item component for navigation menus
const ListItem = ({ className, title, children, href }: ListItemProps) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          "select-none flex items-start gap-2 space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
      >
        <Clock2Icon className="h-auto w-10 aspect-square border rounded-sm p-2" />
        <div className="flex flex-col gap-1 w-full">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="block text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </Link>
    </NavigationMenuLink>
  )
}

// Main Navbar component
const Navbar = ({ className, banner=false }: NavbarProps) => {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll events
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 0)
    })

    return () => {
      unsubscribe()
    }
  }, [scrollY])

  return (
    <motion.nav
      style={{
        animationName: 'enter',
        animationDuration: '500ms',
        '--tw-enter-opacity': 'initial',
        '--tw-enter-scale': 'initial',
        '--tw-enter-rotate': 'initial',
        '--tw-enter-translate-x': '-50%',
        '--tw-enter-translate-y': '0',
      } as React.CSSProperties}
      className={
        cn(
          "fixed top-0 left-1/2 -translate-x-1/2 lg:fixed lg:-top-12 lg:translate-y-14 z-50 lg:container w-full border-b md:border-none lg:px-2 md:!shadow-none !max-w-6xl",
          banner && "top-6 lg:top-6",
          className
        )
      }
      initial={{ boxShadow: "none" }}
      animate={{
        boxShadow: isScrolled ? "0 0 4px 1px rgba(0,0,0,0.2)" : "none"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={cn("flex items-center justify-between w-full lg:rounded-full py-3 px-4 bg-background/80 backdrop-blur md:container mx-auto", isScrolled && "lg:shadow-md", banner && "top-12")}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-x-2">
          <Image className="h-8 w-auto" alt={"Logo"} src={"/logo.png"} width={50} height={50} />
          <span className="text-xl font-semibold whitespace-nowrap">المنصة السورية</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className={"flex items-center justify-center gap-0"}>
            {/* Home */}
            <NavigationMenuItem className={"!m-0"}>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent rounded-full")}>
                  الرئيسية
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* About Us */}
            <NavigationMenuItem className={"!m-0"}>
              <NavigationMenuTrigger className={"bg-transparent gap-1 rounded-full"}>من نحن</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:shadow-md duration-300"
                        href="/about"
                      >
                        <div className="mb-1 mt-4 text-lg font-semibold">
                          عن المنصة
                        </div>
                        <p className="text-xs font-normal text-muted-foreground">
                          اكتشف المزيد عن مهمتنا ورؤيتنا وفريقنا وشركائنا في العمل التطوعي.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {aboutUs.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Community */}
            <NavigationMenuItem className={"!m-0"}>
              <NavigationMenuTrigger className={"bg-transparent gap-1 rounded-full"}>المجتمع</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[380px]">
                  <ListItem href="/community/news" title="الأخبار والإعلانات">
                    آخر الأخبار والإعلانات عن أنشطتنا ومبادراتنا
                  </ListItem>
                  <ListItem href="/community/forum" title="المنتدى">
                    شارك في النقاشات وتبادل الخبرات مع المتطوعين الآخرين
                  </ListItem>
                  <ListItem href="/community/resources" title="وثائق وإرشادات">
                    موارد مفيدة ووثائق إرشادية للمتطوعين
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Services */}
            <NavigationMenuItem className={"!m-0"}>
              <NavigationMenuTrigger className={"bg-transparent gap-1 rounded-full"}>الخدمات</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem key={service.title} title={service.title} href={service.href}>
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Blog */}
            <NavigationMenuItem className={"!m-0"}>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent rounded-full")}>
                  المدونة
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Login & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button className={"rounded-full hidden xs:block"} asChild>
            <Link href="/sign-in">
              تسجيل الدخول
            </Link>
          </Button>

          {/* Mobile Menu Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="فتح القائمة"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] h-full flex flex-col place-items-stretch overflow-scroll">
              {/* Logo */}
              <Link className="flex items-center gap-x-2" href="/">
                <Image className="h-8 w-auto" alt={"Logo"} src={"/logo.png"} width={50} height={50} />
                <span className="text-xl font-semibold whitespace-nowrap">المنصة السورية</span>
              </Link>
              <nav className="flex flex-col gap-4 h-full overflow-scroll">
                
                {/* Main Links */}
                <div className="flex flex-col gap-2 h-full">
                  <Link className="text-lg font-medium hover:bg-accent hover:text-accent-foreground rounded-lg p-3 transition-colors" href="/">
                    الرئيسية
                  </Link>
                  
                  {/* About Us Links */}
                  <div className="flex flex-col gap-1">
                    <Link className="text-lg font-medium hover:bg-accent hover:text-accent-foreground rounded-lg p-3 transition-colors" href="/about">
                      من نحن
                    </Link>
                    {aboutUs.map((item) => (
                      <Link key={item.href} className="text-sm text-muted-foreground hover:text-foreground pr-6 py-2 transition-colors" href={item.href}>
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  {/* Community Links */}
                  <div className="flex flex-col gap-1">
                    <Link className="text-lg font-medium hover:bg-accent hover:text-accent-foreground rounded-lg p-3 transition-colors" href="/community">
                      المجتمع
                    </Link>
                    <Link className="text-sm text-muted-foreground hover:text-foreground pr-6 py-2 transition-colors" href="/community/news">
                      الأخبار والإعلانات
                    </Link>
                    <Link className="text-sm text-muted-foreground hover:text-foreground pr-6 py-2 transition-colors" href="/community/forum">
                      المنتدى
                    </Link>
                    <Link className="text-sm text-muted-foreground hover:text-foreground pr-6 py-2 transition-colors" href="/community/resources">
                      وثائق وإرشادات
                    </Link>
                  </div>

                  {/* Services Links */}
                  <div className="flex flex-col gap-1">
                    <Link className="text-lg font-medium hover:bg-accent hover:text-accent-foreground rounded-lg p-3 transition-colors" href="/services">
                      الخدمات
                    </Link>
                    {services.map((service) => (
                      <Link key={service.href} className="text-sm text-muted-foreground hover:text-foreground pr-6 py-2 transition-colors" href={service.href}>
                        {service.title}
                      </Link>
                    ))}
                  </div>

                  <Link className="text-lg font-medium hover:bg-accent hover:text-accent-foreground rounded-lg p-3 transition-colors" href="/blog">
                    المدونة
                  </Link>
                </div>
              </nav>
              <Button size={"lg"} className='h-12' asChild>
                <Link href="/sign-in">
                  تسجيل الدخول
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar;