import { cn } from "@/lib/utils";
import Marquee from "@/components/marquee";
import Image from "next/image";

const companies = [
  {
    name: "الجمعية الإسلامية (ثبات)",
    svg: <Image src="/companies/Thabat.png" alt="جمعية ثبات" width={256} height={256} className={"h-8 w-8"}/>
  },
  {
    name: "عبدالرحمن النحاس",
    svg: <Image src="/companies/Nahhas.png" alt="Nahhas" width={256} height={256} className={"h-8 w-auto"}/>
  },
  {
    name: "Telegram",
    svg: <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" className={"w-8 h-8"}>
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#2AABEE"/>
          <stop offset="100%" stopColor="#229ED9"/>
        </linearGradient>
      </defs>
      <path fill="url(#a)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"/>
      <path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z"/>
    </svg>
  },
  {
    name: "Youtube",
    svg: <svg viewBox="0 0 256 180" width="256" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className={"w-8 h-8"}>
      <path d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z" fill="red"/>
      <path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z"/>
    </svg>
  }
];

export function Companies() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-10">
      {/* <h1 className={"font-semibold text-xl"}>
        شراكات المنصة
      </h1> */}
      <Marquee pauseOnHover className="[--duration:10s]">
        {companies.map((company, index) => (
          <div
            key={index}
            className={cn(
              "relative w-auto cursor-pointer overflow-hidden rounded-xl px-4 py-2",
              "bg-accent/15 hover:bg-accent flex flex-row items-center gap-2"
            )}
          >
            {company.svg}
            <span>{company.name}</span>
          </div>
        ))}
      </Marquee>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
