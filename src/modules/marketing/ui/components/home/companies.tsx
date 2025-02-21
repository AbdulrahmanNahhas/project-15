import { cn } from "@/lib/utils";
import Marquee from "@/components/common/marquee";
import Image from "next/image";

const companies = [
  {
    name: "الجمعية الإسلامية (ثبات)",
    svg: <Image src="/companies/Thabat.png" alt="جمعية ثبات" width={256} height={256} className={"h-10 w-10"}/>
  },
  {
    name: "عبدالرحمن النحاس",
    svg: <Image src="/companies/Nahhas.png" alt="Nahhas" width={256} height={256} className={"h-10 w-auto"}/>
  },
  {
    name: "رابطة العلماء السوريين",
    svg: <Image src="/companies/6.png" alt="6" width={256} height={256} className={"h-10 w-auto"}/>
  },
  {
    name: "المجلس الإسلامي السوري",
    svg: <Image src="/companies/5.png" alt="5" width={256} height={256} className={"h-10 w-auto rounded-sm"}/>
  }
];

export function Companies() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-10">
      {/* <h1 className={"font-semibold text-xl"}>
        شراكات المنصة
      </h1> */}
      <Marquee pauseOnHover className="[--duration:20s]" repeat={8}>
        {companies.map((company, index) => (
          <div
            key={index}
            className={cn(
              "relative w-auto cursor-pointer overflow-hidden rounded-xl px-4 py-2",
              "bg-transparent hover:bg-accent flex flex-row items-center gap-2"
            )}
          >
            {company.svg}
            <span className="text-lg">{company.name}</span>
          </div>
        ))}
      </Marquee>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white dark:from-background"></div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white dark:from-background"></div>
    </div>
  );
}
