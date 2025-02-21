import { cn } from "@/lib/utils";
import Marquee from "@/components/common/marquee";
import { Card, CardContent, CardHeader } from "@ui//card";
import Image from "next/image";
// import Image from "next/image";

const reviews = [
  {
    name: "أحمد",
    username: "@ahmad123",
    body: "المنصة غيرت تجربتي التعليمية تماماً. أنصح الجميع بها بشدة!",
    img: "/img.png",
  },
  {
    name: "سارة",
    username: "@sara_t",
    body: "الدروس المباشرة ونظام تتبع التقدم رائعان للغاية. أشعر أنني أتعلم بشكل أكثر كفاءة!",
    img: "/img.png",
  },
  {
    name: "خالد",
    username: "@khaled98",
    body: "واجهة المستخدم سهلة الاستخدام والمحتوى منظم بشكل ممتاز. أحببت المنصة جداً.",
    img: "/img.png",
  },
  {
    name: "نور",
    username: "@nour_star",
    body: "لقد حصلت على شهادتي بسرعة بعد إتمام الدورة. تجربة رائعة ومفيدة جداً.",
    img: "/img.png",
  },
  {
    name: "ليلى",
    username: "@layla789",
    body: "فريق الدعم دائمًا متواجد ومستعد للمساعدة. شكراً للجهود المبذولة!",
    img: "/img.png",
  },
  {
    name: "عبد الله",
    username: "@abdullah_k",
    body: "الدورات تغطي كافة التفاصيل التي أحتاجها. أنا ممتن جداً لهذه المنصة.",
    img: "/img.png",
  },
  {
    name: "ريم",
    username: "@reem_d",
    body: "نظام الاختبارات مميز جدًا وساعدني على تقييم مستواي بدقة.",
    img: "/img.png",
  },
  {
    name: "ماجد",
    username: "@majid_pro",
    body: "الدروس المسجلة بجودة عالية جداً والمدربون محترفون للغاية.",
    img: "/img.png",
  },
  {
    name: "نورة",
    username: "@noura_h",
    body: "سهولة الوصول إلى المواد التعليمية جعلتني أعشق التعلم من جديد.",
    img: "/img.png",
  },
  {
    name: "عمر",
    username: "@omar_s",
    body: "نظام التقييم رائع ويجعل التجربة أكثر احترافية. أشكر الجميع على المجهود.",
    img: "/img.png",
  },
  {
    name: "زينب",
    username: "@zainab_q",
    body: "أحببت ميزة الحصول على الشهادات فوراً بعد إنهاء الدورة. فكرة عبقرية!",
    img: "/img.png",
  },
  {
    name: "أيمن",
    username: "@ayman_ab",
    body: "الدورات المباشرة مذهلة وتوفر تفاعلًا رائعًا مع المدربين.",
    img: "/img.png",
  },
  {
    name: "هند",
    username: "@hind_k",
    body: "المحتوى التعليمي شامل ويناسب جميع المستويات. ممتاز!",
    img: "/img.png",
  },
  {
    name: "طارق",
    username: "@tarek_m",
    body: "ميزة التقدم المئوي جعلتني أشعر بالحماس لإنهاء الدورات بسرعة.",
    img: "/img.png",
  },
  {
    name: "ميساء",
    username: "@maysaa_g",
    body: "أنصح كل طالب باستخدام هذه المنصة. ستغير طريقة دراستك بالكامل.",
    img: "/img.png",
  },
  {
    name: "يوسف",
    username: "@yousef_al",
    body: "النظام التفاعلي والبث المباشر داخل المنصة أفضل من أي شيء آخر جربته.",
    img: "/img.png",
  },
  {
    name: "لمى",
    username: "@lama_b",
    body: "الدورات الحضورية كانت أكثر من رائعة. تنظيم وإدارة على مستوى عالٍ.",
    img: "/img.png",
  },
  {
    name: "محمد",
    username: "@mohammed",
    body: "سهولة التسجيل والدخول إلى المنصة جعلت العملية التعليمية ممتعة.",
    img: "/img.png",
  },
  {
    name: "سليم",
    username: "@salim_h",
    body: "تقارير الأداء ساعدتني على فهم نقاط قوتي وضعفي.",
    img: "/img.png",
  },
  {
    name: "فاطمة",
    username: "@fatima_t",
    body: "المدربون ممتازون وأسلوبهم في الشرح رائع جداً. شكرًا لكم.",
    img: "/img.png",
  },
  {
    name: "رائد",
    username: "@raed_j",
    body: "إشعارات المنصة دقيقة جدًا وساعدتني في عدم تفويت أي درس أو محاضرة.",
    img: "/img.png",
  },
  {
    name: "مها",
    username: "@maha_k",
    body: "تنظيم المنصة يجعلها من أفضل الأدوات التعليمية المتوفرة حالياً.",
    img: "/img.png",
  },
  {
    name: "عائشة",
    username: "@aisha_a",
    body: "سهولة تصدير التقارير ساعدتني في متابعة أدائي بشكل مستمر.",
    img: "/img.png",
  },
  {
    name: "نزار",
    username: "@nizar_l",
    body: "ميزة البث العام جعلتني أتابع المحاضرات المفتوحة بسهولة.",
    img: "/img.png",
  },
  {
    name: "إيمان",
    username: "@eman_s",
    body: "من أفضل المنصات التعليمية التي استخدمتها على الإطلاق.",
    img: "/img.png",
  },
  {
    name: "سمير",
    username: "@samir_n",
    body: "المنصة تقدم تجربة تعليمية متكاملة وشاملة. أنصح بها بشدة!",
    img: "/img.png",
  },
  {
    name: "رنا",
    username: "@rana_m",
    body: "الدعم الفني سريع الاستجابة وحل جميع مشاكلي بكفاءة عالية.",
    img: "/img.png",
  },
  {
    name: "باسل",
    username: "@basel_h",
    body: "المحتوى التعليمي عالي الجودة ويغطي كل ما نحتاجه للنجاح.",
    img: "/img.png",
  },
  {
    name: "دانا",
    username: "@dana_r",
    body: "أحب كيف يمكنني الدراسة في أي وقت يناسبني. مرونة رائعة!",
    img: "/img.png",
  },
  {
    name: "كريم",
    username: "@kareem_z",
    body: "التفاعل مع المعلمين والطلاب الآخرين يجعل التعلم أكثر متعة.",
    img: "/img.png",
  },
];

const rowSize = Math.ceil(reviews.length / 3);
const firstRow = reviews.slice(0, rowSize);
const secondRow = reviews.slice(rowSize, rowSize * 2);
const thirdRow = reviews.slice(rowSize * 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden p-4!",
        "shadow-none bg-accent/15 hover:bg-accent"
      )}
    >
      <CardHeader className="flex flex-row justify-between p-0 gap-2">
        <div  className="flex flex-row items-center p-0 gap-2">
        <Image className="rounded-full h-10 w-10" width="50" height="50" alt="" src={img} />
        <div className="flex flex-col">
          <span className="text-sm font-medium dark:text-white">
            {name}
          </span>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="1200" height="1227" fill="none" viewBox="0 0 1200 1227"><path fill="#000" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/></svg>
      </CardHeader>
      <CardContent className="mt-2 text-sm p-0">{body}</CardContent>
    </Card>
  );
};

export function Reviews() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-12 md:my-24">
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:50s]">
        {thirdRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white dark:from-background"></div>
    </div>
  );
}
