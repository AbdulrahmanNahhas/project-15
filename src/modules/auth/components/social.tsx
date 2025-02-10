"use client";

import { Button } from "@/components/ui/button";
// import { loginWithSocial } from "@/app/(auth)/login/actions";
import { cn } from "@/lib/utils";

export const Social = ({ className }: { className?: string }) => {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl");
  // const router = useRouter()

  // const onClick = async (provider: Provider) => {
  //   return await loginWithSocial(provider)
  //   console.log("hello");

  //   // return router.push(callbackUrl || DEFAULT_LOGIN_REDIRECT);
  // };

  return (
    <div className={cn("flex flex-col items-center max-w-[600px] mx-auto gap-y-2", className)}>
      <Button
        size="lg"
        className="w-full gap-1 shadow-none"
        variant="outline"
        // onClick={() => onClick("google")}
      >
        <svg
          stroke="currentColor"
          className="!h-6 !w-6"
          fill="currentColor"
          strokeWidth="0"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 48 48"
          enableBackground="new 0 0 48 48"
          height="200px"
          width="200px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        سجل دخولك باستخدام جوجل
      </Button>
      <div className="flex items-center w-full gap-x-2">
        <Button
          size="lg"
          className="flex-1 gap-1 px-0 shadow-none"
          variant="outline"
          // onClick={() => onClick("google")}
        >
          <svg
            className="!h-5 !w-5"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width="209"
            height="256"
            viewBox="0 0 814 1000"
          >
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
          </svg>
          ابل
        </Button>
        <Button
          size="lg"
          className="flex-1 gap-1 px-0 shadow-none"
          variant="outline"
          // onClick={() => onClick("google")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            fill="url(#a)"
            height="40"
            width="40"
          >
            <defs>
              <linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a">
                <stop offset="0%" stopColor="#0062E0" />
                <stop offset="100%" stopColor="#19AFFF" />
              </linearGradient>
            </defs>
            <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
            <path
              fill="#FFF"
              d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
            />
          </svg>
          فيسبوك
        </Button>
        <Button
          size="lg"
          className="flex-1 gap-1 px-0 shadow-none"
          variant="outline"
          // onClick={() => onClick("google")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1200"
            height="1227"
            fill="none"
            viewBox="0 0 1200 1227"
          >
            <path
              fill="#000"
              d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
            />
          </svg>
          اكس
        </Button>
      </div>
    </div>
  );
};
