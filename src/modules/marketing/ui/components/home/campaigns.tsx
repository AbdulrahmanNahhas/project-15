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
import Autoplay from "embla-carousel-autoplay";
import { Campaign, campaigns } from "@/data/marketing/home/campaigns";

export function Campaigns() {
  const [api, setApi] = React.useState<CarouselApi>()
  // const [current, setCurrent] = React.useState(0)
  // const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    // setCount(api.scrollSnapList().length)
    // setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      // setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-12 relative">
      <div className="flex items-center justify-between mb-6 no-select">
        <h2 className="text-2xl font-bold">النشاطات</h2>
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
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {campaigns.map((campaign: Campaign) => (
            <CarouselItem key={campaign.id} className="pb-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <Card className="overflow-hidden shadow-none no-select">
                <div className="relative aspect-[4/3]">
                  <Image
                    // src={campaign.image}
                    src={"/img.png"}
                    alt={campaign.title}
                    fill
                    className="object-cover opacity-50"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{campaign.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="flex !absolute translate-x-0 translate-y-0 !top-[-59px] !right-[calc(100%-146px)]"/>
        <CarouselNext className="flex !absolute translate-x-0 translate-y-0 !top-[-59px] !right-[calc(100%-110px)]"/>
      </Carousel>
      {/* <div className="py-2 text-center text-sm text-muted-foreground mt-2">
        الشريحة {current} من {count}
      </div> */}
    </div>
  )
}