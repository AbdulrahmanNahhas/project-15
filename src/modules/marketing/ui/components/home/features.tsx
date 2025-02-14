"use client";

import useMasonry from "@/hooks/use-masonry";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui//card";
import Link from "next/link";
import Image from "next/image";
import { features, Feature } from "@/data/marketing/home/features";

const CardLayout = ({feature}: {feature: Feature}) => {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className=" font-normal text-muted-foreground text-base">
          {feature.feature}
        </CardTitle>
        <CardDescription className="text-foreground font-semibold text-lg">
          {feature.title}
        </CardDescription>
        {feature.feature === "تطبيق الجوال" && (
          <div className="flex gap-2 items-center justify-center pt-2">
            <Link
              href="#"
              className="inline-flex items-center bg-black text-white px-6 py-3 rounded-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              <svg
                className="w-8 h-8 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 814 1000"
                fill="currentColor"
              >
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-xs font-medium">Download on the</span>
                <span className="text-xl font-semibold leading-tight">
                  App Store
                </span>
              </div>
            </Link>

            <Link
              href="#"
              className="inline-flex items-center bg-black text-white px-6 py-3 rounded-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              <svg
                className="w-8 h-8 mr-3"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_87_8320"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="7"
                  y="3"
                  width="24"
                  height="26"
                >
                  <path
                    d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z"
                    fill="#C4C4C4"
                  />
                </mask>
                <g mask="url(#mask0_87_8320)">
                  <path
                    d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z"
                    fill="url(#paint0_linear_87_8320)"
                  />
                  <path
                    d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z"
                    fill="url(#paint1_linear_87_8320)"
                  />
                  <path
                    d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z"
                    fill="url(#paint2_linear_87_8320)"
                  />
                  <path
                    d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z"
                    fill="url(#paint3_linear_87_8320)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_87_8320"
                    x1="15.6769"
                    y1="10.874"
                    x2="7.07106"
                    y2="19.5506"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00C3FF" />
                    <stop offset="1" stopColor="#1BE2FA" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_87_8320"
                    x1="20.292"
                    y1="15.8176"
                    x2="31.7381"
                    y2="15.8176"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFCE00" />
                    <stop offset="1" stopColor="#FFEA00" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_87_8320"
                    x1="7.36932"
                    y1="30.1004"
                    x2="22.595"
                    y2="17.8937"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#DE2453" />
                    <stop offset="1" stopColor="#FE3944" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_87_8320"
                    x1="8.10725"
                    y1="1.90137"
                    x2="22.5971"
                    y2="13.7365"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#11D574" />
                    <stop offset="1" stopColor="#01F176" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col">
                <span className="text-xs font-medium">GET IT ON</span>
                <span className="text-xl font-semibold leading-tight">
                  Google Play
                </span>
              </div>
            </Link>
          </div>
        )}
        <Image
          src={feature.image}
          loading="lazy"
          alt={feature.feature}
          width={100}
          height={100}
          className="w-full h-auto pt-3"
        />
      </CardHeader>
    </Card>
  );
};

export function Features() {
  const masonryContainer = useMasonry();

  return (
    <section className="py-12 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-4 text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold">
            كل ما تحتاجه للتفوق في دراستك
          </h2>
          <p className="text-muted-foreground w-full px-4 md:w-4/5 mx-auto text-xl md:text-2xl">
            منصة تعليمية متكاملة تقدم المناهج السورية والدورات التعليمية بطريقة
            تفاعلية وسهلة الفهم لجميع المراحل الدراسية.
          </p>
        </div>
        <div
          ref={masonryContainer}
          className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6"
        >
          {features.map((feature, index) => (
            <CardLayout key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
