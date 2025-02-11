import {Button} from "@/components/ui/button";
import {ArrowLeft} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CTA() {
  return (
    <div className="bg-background my-12">
      <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-start">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              مستقبلك يبدأ هنا!
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              استمتع بتجربة تعليمية شاملة مع المنصة السورية. محتوى تعليمي متكامل وممتع لتطوير مهاراتك وتحقيق أهدافك.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4 lg:justify-start">
              <Button
                variant={"default"}
                className={"bg-white text-foreground hover:bg-white/90 scale-100 hover:scale-105 transition-all !duration-300"}
                asChild
              >
              <Link href="/sign-in">
                تسجيل الدخول
              </Link>
              </Button>
              <Button variant={"link"} className={"text-white"}>
                تواصل معنا
                <ArrowLeft/>
              </Button>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              alt="App screenshot"
              src="/cta-wallpaper.png"
              width={1824}
              height={1080}
              className="absolute right-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
