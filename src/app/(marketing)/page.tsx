"use client";

import {
  Hero,
  Reviews,
  Campaigns,
  Companies,
  Projects,
  Stories,
  Video,
  Posts,
  CTA,
  Features,
} from "@/modules/marketing/ui/components/home";

const testimonials = [
  {
    quote:
      "تجربتي في هذا المشروع كانت نقطة تحول في حياتي. لقد تعلمت الكثير واكتسبت مهارات جديدة ساعدتني على تحقيق النجاح الذي طالما حلمت به.",
    name: "سارة أحمد",
    designation: "طالبة هندسة في جامعة النجاح",
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QUklMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "الدعم والتوجيه الذي حصلت عليه خلال دراستي ساعدني على تجاوز العقبات وتحقيق أعلى الدرجات. أنا ممتن جدًا لهذا البرنامج.",
    name: "محمد خالد",
    designation: "طالب طب في جامعة دمشق",
    src: "https://images.unsplash.com/photo-1471107191679-f26174d2d41e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "من خلال العمل على مشاريع واقعية، شعرت بأنني مستعد لمواجهة تحديات سوق العمل. لقد كانت تجربة لا تُنسى.",
    name: "هبة محمود",
    designation: "طالبة علوم حاسوب في جامعة القاهرة",
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dWR5fGVufDB8fDB8fHww",
  },
  {
    quote:
      "التفاعل مع زملائي والأساتذة ساعدني على تطوير مهاراتي الشخصية والمهنية. الآن أشعر بثقة أكبر في قدراتي.",
    name: "علي عبد الله",
    designation: "طالب إدارة أعمال في جامعة بيروت العربية",
    src: "https://plus.unsplash.com/premium_photo-1663013506908-a6f66c941587?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0dWR5fGVufDB8fDB8fHww",
  },
  {
    quote:
      "استفدت كثيرًا من الورش التعليمية والمحاضرات. هذه التجربة لم تجعلني فقط أفضل أكاديميًا، بل أيضًا على الصعيد الشخصي.",
    name: "مريم حسن",
    designation: "طالبة تصميم داخلي في جامعة الشارقة",
    src: "https://images.unsplash.com/photo-1453748866136-b1dd97284f49?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWR5fGVufDB8fDB8fHww",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <Companies />
      <Campaigns />
      <Projects />
      <Stories autoplay={false} testimonials={testimonials} />
      <Posts />
      <Reviews />
      <CTA />
      {/*<Connect />*/}
      {/*<Features />*/}
      {/*<Perks />*/}
      {/*<CTA />*/}
    </>
  );
}
