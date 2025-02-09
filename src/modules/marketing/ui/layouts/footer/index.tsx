import Link from "next/link";
import { Button } from "@/components/ui/button";

export const FOOTER_LINKS = [
  {
    title: "المصادر",
    links: [
      { name: "المميزون", href: "/distinguished" },
      { name: "الشهادات", href: "/certificates" },
      { name: "لوحات الشرف الشهرية", href: "/monthly-honor-rolls" },
      { name: "المدونة", href: "/blog" },
      { name: "دليل الخبرات", href: "/experience-guide" },
    ],
  },
  {
    title: "الأدلة",
    links: [
      { name: "دليل ما بعد التخرج", href: "/post-graduation-guide" },
      { name: "دليل الحياة الجامعية", href: "/university-life-guide" },
      { name: "مدونة سلوك التطوع", href: "/volunteering-code-of-conduct" },
      { name: "الإنتساب كمتطوع", href: "/volunteer-join" },
    ],
  },
  {
    title: "أدلة التدريب",
    links: [
      { name: "دليل المتدرب", href: "/trainee-guide" },
      { name: "دليل المدرب", href: "/trainer-guide" },
      { name: "دليل المتطوع", href: "/volunteer-guide" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="py-10 relative container mx-auto max-w-6xl px-6 flex flex-col gap-10 mt-auto">
      <div className="relative flex flex-col lg:flex-row justify-between overflow-hidden gap-8 md:gap-16">
        <div className="flex flex-col items-start !max-w-[14rem]">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">
              المنصة السورية
            </span>
          </div>
          <p className="text-base mt-4">
            قم بتمكين أعمالك باستخدام أدوات الذكاء الاصطناعي لدينا.
          </p>
          <Button className="mt-8">
            <Link href="/sign-in">
              تسجيل الدخول
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {FOOTER_LINKS?.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h4 className="text-sm font-medium">
                {section.title}
              </h4>
              <ul className="space-y-4 w-full">
                {section.links.map((link, index) => (
                  <li key={index} className="text-sm text-muted-foreground hover:text-foreground transition-all w-full">
                    <Link href={link.href} className="w-full">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between relative flex-col-reverse md:flex-row gap-2">
          <p className="text-sm text-secondary-foreground">
            &copy; {new Date().getFullYear()} المنصة السورية، جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-2">
            <Button size={"icon"} variant={"ghost"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="url(#a)" height="40" width="40">
                <defs>
                  <linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a">
                    <stop offset="0%" stopColor="#0062E0"/>
                    <stop offset="100%" stopColor="#19AFFF"/>
                  </linearGradient>
                </defs>
                <path
                  d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"/>
                <path fill="#FFF"
                      d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"/>
              </svg>
            </Button>
            <Button size={"icon"} variant={"ghost"}>
              <svg viewBox="0 0 256 180" width="256" height="180" xmlns="http://www.w3.org/2000/svg"
                   preserveAspectRatio="xMidYMid">
                <path
                  d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                  fill="red"/>
                <path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z"/>
              </svg>
            </Button>
            <Button size={"icon"} variant={"ghost"}>
              <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width="256" height="256"
                   preserveAspectRatio="xMidYMid">
                <defs>
                  <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#2AABEE"/>
                    <stop offset="100%" stopColor="#229ED9"/>
                  </linearGradient>
                </defs>
                <path fill="url(#a)"
                      d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"/>
                <path fill="#FFF"
                      d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z"/>
              </svg>
            </Button>
            <Button size={"icon"} variant={"ghost"}>
              <svg viewBox="0 0 256 259" width="256" height="259" xmlns="http://www.w3.org/2000/svg"
                   preserveAspectRatio="xMidYMid">
                <path
                  d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z"
                  fill="#00E676"/>
                <path
                  d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z"
                  fill="#FFF"/>
              </svg>
            </Button>
          </div>
      </div>
    </footer>
  )
};

export default Footer