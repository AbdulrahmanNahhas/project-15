import { cn } from "@/lib/utils";
import Marquee from "@/components/marquee";

const reviews = [
  {
    name: "أحمد",
    username: "@ahmad123",
    body: "المنصة غيرت تجربتي التعليمية تماماً. أنصح الجميع بها بشدة!",
    img: "https://avatar.vercel.sh/ahmad",
  },
  {
    name: "سارة",
    username: "@sara_t",
    body: "الدروس المباشرة ونظام تتبع التقدم رائعان للغاية. أشعر أنني أتعلم بشكل أكثر كفاءة!",
    img: "https://avatar.vercel.sh/sara",
  },
  {
    name: "خالد",
    username: "@khaled98",
    body: "واجهة المستخدم سهلة الاستخدام والمحتوى منظم بشكل ممتاز. أحببت المنصة جداً.",
    img: "https://avatar.vercel.sh/khaled",
  },
  {
    name: "نور",
    username: "@nour_star",
    body: "لقد حصلت على شهادتي بسرعة بعد إتمام الدورة. تجربة رائعة ومفيدة جداً.",
    img: "https://avatar.vercel.sh/nour",
  },
  {
    name: "ليلى",
    username: "@layla789",
    body: "فريق الدعم دائمًا متواجد ومستعد للمساعدة. شكراً للجهود المبذولة!",
    img: "https://avatar.vercel.sh/layla",
  },
  {
    name: "عبد الله",
    username: "@abdullah_k",
    body: "الدورات تغطي كافة التفاصيل التي أحتاجها. أنا ممتن جداً لهذه المنصة.",
    img: "https://avatar.vercel.sh/abdullah",
  },
  {
    name: "ريم",
    username: "@reem_d",
    body: "نظام الاختبارات مميز جدًا وساعدني على تقييم مستواي بدقة.",
    img: "https://avatar.vercel.sh/reem",
  },
  {
    name: "ماجد",
    username: "@majid_pro",
    body: "الدروس المسجلة بجودة عالية جداً والمدربون محترفون للغاية.",
    img: "https://avatar.vercel.sh/majid",
  },
  {
    name: "نورة",
    username: "@noura_h",
    body: "سهولة الوصول إلى المواد التعليمية جعلتني أعشق التعلم من جديد.",
    img: "https://avatar.vercel.sh/noura",
  },
  {
    name: "عمر",
    username: "@omar_s",
    body: "نظام التقييم رائع ويجعل التجربة أكثر احترافية. أشكر الجميع على المجهود.",
    img: "https://avatar.vercel.sh/omar",
  },
  {
    name: "زينب",
    username: "@zainab_q",
    body: "أحببت ميزة الحصول على الشهادات فوراً بعد إنهاء الدورة. فكرة عبقرية!",
    img: "https://avatar.vercel.sh/zainab",
  },
  {
    name: "أيمن",
    username: "@ayman_ab",
    body: "الدورات المباشرة مذهلة وتوفر تفاعلًا رائعًا مع المدربين.",
    img: "https://avatar.vercel.sh/ayman",
  },
  {
    name: "هند",
    username: "@hind_k",
    body: "المحتوى التعليمي شامل ويناسب جميع المستويات. ممتاز!",
    img: "https://avatar.vercel.sh/hind",
  },
  {
    name: "طارق",
    username: "@tarek_m",
    body: "ميزة التقدم المئوي جعلتني أشعر بالحماس لإنهاء الدورات بسرعة.",
    img: "https://avatar.vercel.sh/tarek",
  },
  {
    name: "ميساء",
    username: "@maysaa_g",
    body: "أنصح كل طالب باستخدام هذه المنصة. ستغير طريقة دراستك بالكامل.",
    img: "https://avatar.vercel.sh/maysaa",
  },
  {
    name: "يوسف",
    username: "@yousef_al",
    body: "النظام التفاعلي والبث المباشر داخل المنصة أفضل من أي شيء آخر جربته.",
    img: "https://avatar.vercel.sh/yousef",
  },
  {
    name: "لمى",
    username: "@lama_b",
    body: "الدورات الحضورية كانت أكثر من رائعة. تنظيم وإدارة على مستوى عالٍ.",
    img: "https://avatar.vercel.sh/lama",
  },
  {
    name: "محمد",
    username: "@mohammed",
    body: "سهولة التسجيل والدخول إلى المنصة جعلت العملية التعليمية ممتعة.",
    img: "https://avatar.vercel.sh/mohammed",
  },
  {
    name: "سليم",
    username: "@salim_h",
    body: "تقارير الأداء ساعدتني على فهم نقاط قوتي وضعفي.",
    img: "https://avatar.vercel.sh/salim",
  },
  {
    name: "فاطمة",
    username: "@fatima_t",
    body: "المدربون ممتازون وأسلوبهم في الشرح رائع جداً. شكرًا لكم.",
    img: "https://avatar.vercel.sh/fatima",
  },
  {
    name: "رائد",
    username: "@raed_j",
    body: "إشعارات المنصة دقيقة جدًا وساعدتني في عدم تفويت أي درس أو محاضرة.",
    img: "https://avatar.vercel.sh/raed",
  },
  {
    name: "مها",
    username: "@maha_k",
    body: "تنظيم المنصة يجعلها من أفضل الأدوات التعليمية المتوفرة حالياً.",
    img: "https://avatar.vercel.sh/maha",
  },
  {
    name: "عائشة",
    username: "@aisha_a",
    body: "سهولة تصدير التقارير ساعدتني في متابعة أدائي بشكل مستمر.",
    img: "https://avatar.vercel.sh/aisha",
  },
  {
    name: "نزار",
    username: "@nizar_l",
    body: "ميزة البث العام جعلتني أتابع المحاضرات المفتوحة بسهولة.",
    img: "https://avatar.vercel.sh/nizar",
  },
  {
    name: "إيمان",
    username: "@eman_s",
    body: "من أفضل المنصات التعليمية التي استخدمتها على الإطلاق.",
    img: "https://avatar.vercel.sh/eman",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border bg-accent/15 hover:bg-accent"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
