export interface Book {
  id: number
  title: string
  author?: string
  description: string
  downloads: number
  imageUrl: string
}

export const books: Book[] = [
    {
      id: 1,
      title: "الحكومة الإسلامية: رؤية تطبيقية معاصرة",
      author: "عبد المجيد الشاذلي",
      description: "بحث شرعي يقدم رؤية تطبيقية معاصرة للنظام السياسي الإسلامي، موضحًا شكل الحكومة الإسلامية وكيفية تطبيق الأصول والمبادئ الشرعية، مع التركيز على حاكمية الشريعة دون الوقوع في حكم رجال الدين بالمفهوم الغربي.",
      downloads: 12500,
      imageUrl: "/books/1.png",
    },
    {
      id: 2,
      title: "أسئلة الثورة",
      author: "سلمان العودة",
      description: "كتاب يتناول مجموعة من المسائل المرتبطة بالثورة، ما يسبقها وما يتبعها، وأسبابها وتوقيتها، مع تحليل لتاريخ الثورات في العالمين الأوروبي والإسلامي.",
      downloads: 15000,
      imageUrl: "/books/2.png",
    },
    {
      id: 3,
      title: "على ثرى دمشق",
      author: "أيمن أحمد الشربجي",
      description: "مذكرات القيادي في الطليعة المقاتلة، تتناول فترة الثمانينات والصراع مع النظام السوري، موثقة لأحداث وعمليات جرت في دمشق خلال تلك الفترة.",
      downloads: 9800,
      imageUrl: "/books/9.png",
    },
    {
      id: 4,
      title: "الثورة السورية",
      author: "عبد المنعم زين الدين",
      description: "تحليل شامل للثورة السورية بقلم عبد المنعم زين الدين، يستعرض أسبابها وتطوراتها وتداعياتها على المستويات المحلية والإقليمية والدولية.",
      downloads: 18000,
      imageUrl: "/books/4.png",
    },
    {
      id: 5,
      title: "فصول في العقيدة",
      author: "عبد العزيز بن مرزوق الطريفي",
      description: "كتاب يتناول أهم مباحث العقيدة الإسلامية بأسلوب معاصر، موضحًا أصول الإيمان والقضايا العقدية بأسلوب يناسب القارئ الحديث.",
      downloads: 14200,
      imageUrl: "/books/10.png",
    },
    {
      id: 6,
      title: "تعريف عام بدين الإسلام",
      author: "علي الطنطاوي",
      description: "مدخل شامل للتعريف بالإسلام وأركانه وأحكامه الأساسية، مناسب للمبتدئين والراغبين في فهم الدين الإسلامي.",
      downloads: 20000,
      imageUrl: "/books/6.png",
    },
    {
      id: 7,
      title: "حمص: الحصار العظيم",
      author: "وليد الفارس",
      description: "توثيق تاريخي لأحداث حصار مدينة حمص خلال الثورة السورية، مسلطًا الضوء على معاناة السكان والصمود الأسطوري للمدينة.",
      downloads: 11500,
      imageUrl: "/books/7.png",
    },
    {
      id: 8,
      title: "الفقه المنهجي",
      author: "",
      description: "كتاب شامل في الفقه الشافعي، يعرض المسائل الفقهية بأسلوب منهجي منظم، معتمدًا على أدلة الكتاب والسنة وآراء العلماء.",
      downloads: 25000,
      imageUrl: "/books/8.png",
    },
  ];