"use client"

import Image from "next/image"
import { type CarouselApi } from "@/components/ui/carousel"
import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Project {
  id: number
  title: string
  description: string
  image: string
}
const projects: Project[] = [
  {
    id: 1,
    title: "الحالات الإنسانية الطارئة",
    description: "تبرع من أجلهم !",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "كن معهم 2",
    description: "حملة مخصصة لمساعدة ذوي الاحتياجات الخاصة",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "سعادة قلب",
    description: "حملة لإدخال الفرح والسرور على قلوب الأطفال",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "مشروع بيت المونة",
    description: "مشروع لتشغيل النساء السوريات وتحقيق التنمية الاقتصادية لهم",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "سعادة قلب",
    description: "حملة لإدخال الفرح والسرور على قلوب الأطفال",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "مشروع بيت المونة",
    description: "مشروع لتشغيل النساء السوريات وتحقيق التنمية الاقتصادية لهم",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function Projects() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 rtl" dir="rtl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">المشاريع</h2>
        <Button variant="outline">
          المزيد
        </Button>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: false,
          direction: "rtl"
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
              <Card className="overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    // src={project.image}
                    src={"/img.png"}
                    alt={project.title}
                    fill
                    className="object-cover opacity-50"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -right-12 left-auto"/>
        <CarouselNext className="hidden md:flex -left-12 right-auto"/>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground mt-2">
        الشريحة {current} من {count}
      </div>
    </div>
  )
}