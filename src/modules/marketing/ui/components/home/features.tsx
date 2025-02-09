"use client";

import useMasonry from "@/hooks/use-masonry";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    feature: "المناهج الدراسية",
    title: "شرح تفاعلي للمناهج السورية لجميع المراحل الدراسية بطريقة مبسطة.",
    image: "https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6722769c3eda30ca3094e979_image.webp"
  },
  {
    feature: "الاختبارات التقييمية",
    title: "اختبارات دورية لقياس مستوى فهمك للمواد وتحديد نقاط القوة والضعف.",
    image: "https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6722788f6e61b01bd44db4b8_image%204.webp"
  },
  {
    feature: "شهادات الإنجاز",
    title: "احصل على شهادات معتمدة تؤكد إتمامك للدورات والمناهج التعليمية.",
    image: "https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6722795f7593b12de7cf6a41_image%207.webp"
  },
  {
    feature: "دروس تفاعلية",
    title: "دروس مسجلة من قبل أفضل المدرسين السوريين مع شرح مفصل وأمثلة توضيحية.",
    image: "https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/67227769c4b4ddf040a0112f_image%202.webp"
  },
  {
    feature: "تمارين وواجبات",
    title: "مجموعة متنوعة من التمارين والواجبات لتعزيز الفهم والتطبيق.",
    image: "https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/672278d385440de9471737a6_image%205.webp"
  },
  {
    feature: "متابعة التقدم",
    title: "تتبع مستوى تقدمك في كل مادة مع تقارير مفصلة عن أدائك.",
    image: "https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6722799c7593b12de7cfa21b_image%208.webp"
  },
  {
    feature: "تطبيق الجوال",
    title: "ادرس في أي وقت ومكان مع تطبيقنا للهواتف الذكية المتوفر للأندرويد والآيفون.",
    image: "https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/673caf45aa9c9ed567dee999_feature-short-mobile.webp"
  },
  {
    feature: "بنك الأسئلة",
    title: "مكتبة شاملة من الأسئلة والحلول النموذجية لجميع المواد الدراسية.",
    image: "https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/6722790891d5544034b8afce_image%206.webp"
  },
  {
    feature: "الدعم والتواصل",
    title: "تواصل مباشر مع المدرسين وزملاء الدراسة للمساعدة والإجابة عن استفساراتك.",
    image: "https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/672279ce77709f63023b7822_image%209.webp"
  },
];

const CardLayout = ({feature}: {feature: {feature: string, title: string, image: string}}) => {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className=" font-normal text-muted-foreground text-base">{feature.feature}</CardTitle>
        <CardDescription className="text-foreground font-semibold text-lg">{feature.title}</CardDescription>
        {feature.feature === "تطبيق الجوال" && (
          <div className="flex gap-2 items-center justify-center pt-2">
          <img src={"https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/67251e4fab3eae76b8cda5c7_appstore.svg"} alt={"download app store"} width={100} height={100} className="w-auto h-10 cursor-pointer hover:opacity-75" />
          <img src={"https://cdn.prod.website-files.com/61f9082050036c5b7a4899f5/64e632ae608f42e274e27b44_googleplay.svg"} alt={"download google play"} width={100} height={100} className="w-auto h-10 cursor-pointer hover:opacity-75" />
          </div>
          
        )}
        <img src={feature.image} loading="lazy" alt={feature.feature} width={100} height={100} className="w-full h-auto pt-3" />
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
          <h2 className="text-4xl lg:text-5xl font-bold">كل ما تحتاجه للتفوق في دراستك</h2>
          <p className="text-muted-foreground w-full px-4 md:w-4/5 mx-auto text-xl md:text-2xl">
          منصة تعليمية متكاملة تقدم المناهج السورية والدورات التعليمية بطريقة تفاعلية وسهلة الفهم لجميع المراحل الدراسية.
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
