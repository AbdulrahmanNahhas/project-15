import Link from "next/link";
import {Button} from "@ui//button";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-5xl mb-12 mt-24 mx-auto z-40 relative">
      <div className="px-3 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2 select-none w-max mx-auto">
        <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
          <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
            <div
              className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
          </div>
          <div
            className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>
        </div>
        <span className="inline-flex items-center justify-center gap-2 text-sm text-primary font-normal!">
          إنطلاق المنصة السورية
        </span>
      </div>
      <h1
        className="text-3xl sm:text-5xl font-semibold lg:text-6xl xl:text-7xl bg-linear-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:leading-snug! racking-[-0.0125em] mt-6 font-heading">
        تعلم، تقدم، وحقق أحلامك!
      </h1>
      <div>
        <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
          منصة تعليمية شاملة تجمع بين التفاعل المباشر والمحتوى المسجل لتجربة تعليمية فريدة. انطلق في رحلتك الآن مع
          اختبارات متقدمة، شهادات معتمدة، وإشعارات ذكية تبقيك على الطريق الصحيح. </p>
      </div>
        <div className="flex items-center justify-center md:gap-x-4 mt-8">
          <Button asChild size="lg">
            <Link href="/home">
              انضم إلينا مجاناً اليوم
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="hidden md:flex">
            <Link href="/about">
              من نحن؟
            </Link>
          </Button>
        </div>
    </div>
  )
};