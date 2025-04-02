"use client";

import React, { useState } from "react";
import {
  Trophy,
  Target,
  Star,
  BookOpen,
  Zap,
  Timer,
  Award,
  Medal,
  Brain,
  BookMarked,
  HeartHandshake,
  Crown,
  Lightbulb,
  PenTool,
  Palette,
  Calculator,
  Music,
  Globe,
  AtSign,
  Code,
  UsersRound,
  Puzzle,
  CheckCircle,
} from "lucide-react";
import AchievementCard from "@/modules/app/ui/components/achievements/achievement-card";
import ProgressCircle from "@/components/common/progres-circle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Achievement Categories
const categories = [
  { id: "all", name: "الكل" },
  {
    id: "learning",
    name: "التعلم",
    icon: <BookOpen className="h-4 w-4" />,
    color: "category-learning",
  },
  {
    id: "persistence",
    name: "المثابرة",
    icon: <Timer className="h-4 w-4" />,
    color: "category-persistence",
  },
  {
    id: "accuracy",
    name: "الدقة",
    icon: <Target className="h-4 w-4" />,
    color: "category-accuracy",
  },
  {
    id: "speed",
    name: "السرعة",
    icon: <Zap className="h-4 w-4" />,
    color: "category-speed",
  },
  {
    id: "social",
    name: "الاجتماعية",
    icon: <UsersRound className="h-4 w-4" />,
    color: "category-social",
  },
  {
    id: "creativity",
    name: "الإبداع",
    icon: <Palette className="h-4 w-4" />,
    color: "category-creativity",
  },
];

// Badge Rarity Levels
const rarityLevels = {
  common: { name: "عادي", color: "bg-gray-200/50 text-gray-70   border-gray-700" },
  uncommon: { name: "غير شائع", color: "bg-green-200/50 text-green-700   border-green-700" },
  rare: { name: "نادر", color: "bg-blue-200/50 text-blue-700   border-blue-700" },
  epic: { name: "أسطوري", color: "bg-purple-200/50 text-purple-700    border-purple-700" },
  legendary: { name: "خارق", color: "bg-amber-200/50 text-amber-700   border-amber-700" },
};

// Sample expanded achievement data
const achievements = [
  // Learning category
  {
    id: "1",
    title: "متعلم سريع",
    description: "أكمل 5 دروس في يوم واحد",
    icon: <Zap className="w-6 h-6" />,
    isUnlocked: true,
    progress: 100,
    xpReward: 150,
    category: "speed",
    rarity: "common",
    dateEarned: "2023-10-15",
  },
  {
    id: "2",
    title: "درجة كاملة",
    description: "احصل على 100% في أي اختبار",
    icon: <Target className="w-6 h-6" />,
    isUnlocked: true,
    progress: 100,
    xpReward: 200,
    category: "accuracy",
    rarity: "uncommon",
    dateEarned: "2023-11-03",
  },
  {
    id: "3",
    title: "عبقري العلوم",
    description: "أكمل جميع وحدات الفيزياء",
    icon: <BookOpen className="w-6 h-6" />,
    isUnlocked: false,
    progress: 75,
    xpReward: 300,
    category: "learning",
    rarity: "rare",
  },
  {
    id: "4",
    title: "طالب مجتهد",
    description: "ادرس لمدة 30 يومًا متتاليًا",
    icon: <Timer className="w-6 h-6" />,
    isUnlocked: false,
    progress: 53,
    xpReward: 400,
    category: "persistence",
    rarity: "epic",
  },
  {
    id: "5",
    title: "سيد الرياضيات",
    description: "أكمل جميع دروس الجبر بنجاح",
    icon: <Calculator className="w-6 h-6" />,
    isUnlocked: false,
    progress: 40,
    xpReward: 250,
    category: "learning",
    rarity: "rare",
  },
  {
    id: "6",
    title: "معلم اللغة",
    description: "أكمل 10 تمارين لغوية متتالية",
    icon: <BookOpen className="w-6 h-6" />,
    isUnlocked: true,
    progress: 100,
    xpReward: 150,
    category: "learning",
    rarity: "uncommon",
    dateEarned: "2023-09-22",
  },
  {
    id: "7",
    title: "الباحث النشط",
    description: "استخدم أدوات البحث 20 مرة",
    icon: <Star className="w-6 h-6" />,
    isUnlocked: false,
    progress: 60,
    xpReward: 180,
    category: "learning",
    rarity: "common",
  },
  {
    id: "8",
    title: "مساعد زملائك",
    description: "شارك ملاحظاتك مع 5 أصدقاء",
    icon: <HeartHandshake className="w-6 h-6" />,
    isUnlocked: false,
    progress: 20,
    xpReward: 220,
    category: "social",
    rarity: "uncommon",
  },
  // New achievements
  {
    id: "9",
    title: "عالم الكيمياء",
    description: "حل 50 مسألة كيميائية",
    icon: <BookMarked className="w-6 h-6" />,
    isUnlocked: false,
    progress: 70,
    xpReward: 280,
    category: "learning",
    rarity: "uncommon",
  },
  {
    id: "10",
    title: "متفوق الفصل",
    description: "احصل على المركز الأول في ثلاثة اختبارات",
    icon: <Medal className="w-6 h-6" />,
    isUnlocked: true,
    progress: 100,
    xpReward: 350,
    category: "accuracy",
    rarity: "epic",
    dateEarned: "2023-12-01",
  },
  {
    id: "11",
    title: "عبقري الذكاء",
    description: "احصل على 10 إجابات صحيحة متتالية في اختبار الذكاء",
    icon: <Brain className="w-6 h-6" />,
    isUnlocked: false,
    progress: 30,
    xpReward: 450,
    category: "accuracy",
    rarity: "legendary",
  },
  {
    id: "12",
    title: "نجم المناقشات",
    description: "شارك في 20 مناقشة على المنصة",
    icon: <UsersRound className="w-6 h-6" />,
    isUnlocked: false,
    progress: 45,
    xpReward: 200,
    category: "social",
    rarity: "uncommon",
  },
  {
    id: "13",
    title: "مبدع الحلول",
    description: "قدم 5 حلول إبداعية للمشكلات المطروحة",
    icon: <Lightbulb className="w-6 h-6" />,
    isUnlocked: false,
    progress: 60,
    xpReward: 320,
    category: "creativity",
    rarity: "rare",
  },
  {
    id: "14",
    title: "سيد اللغات",
    description: "أتقن 3 لغات برمجية",
    icon: <Code className="w-6 h-6" />,
    isUnlocked: false,
    progress: 33,
    xpReward: 400,
    category: "learning",
    rarity: "epic",
  },
  {
    id: "15",
    title: "فنان الكلمات",
    description: "اكتب 10 مقالات إبداعية",
    icon: <PenTool className="w-6 h-6" />,
    isUnlocked: true,
    progress: 100,
    xpReward: 250,
    category: "creativity",
    rarity: "rare",
    dateEarned: "2023-10-25",
  },
  {
    id: "16",
    title: "مستكشف العالم",
    description: "تعلم عن 10 حضارات مختلفة",
    icon: <Globe className="w-6 h-6" />,
    isUnlocked: false,
    progress: 50,
    xpReward: 300,
    category: "learning",
    rarity: "uncommon",
  },
  {
    id: "17",
    title: "عازف الموسيقى",
    description: "تعلم العزف على آلة موسيقية",
    icon: <Music className="w-6 h-6" />,
    isUnlocked: false,
    progress: 15,
    xpReward: 350,
    category: "creativity",
    rarity: "rare",
  },
  {
    id: "18",
    title: "ملك الألغاز",
    description: "حل 20 لغزًا متقدمًا",
    icon: <Puzzle className="w-6 h-6" />,
    isUnlocked: false,
    progress: 25,
    xpReward: 280,
    category: "accuracy",
    rarity: "epic",
  },
  {
    id: "19",
    title: "متواصل نشط",
    description: "شارك في محادثات مع 15 متعلمًا آخر",
    icon: <AtSign className="w-6 h-6" />,
    isUnlocked: false,
    progress: 40,
    xpReward: 200,
    category: "social",
    rarity: "common",
  },
  {
    id: "20",
    title: "أستاذ الرياضيات",
    description: "أكمل جميع المستويات المتقدمة في الرياضيات",
    icon: <Crown className="w-6 h-6" />,
    isUnlocked: false,
    progress: 5,
    xpReward: 500,
    category: "learning",
    rarity: "legendary",
  },
];

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate overall progress
  const unlockedAchievements = achievements.filter((a) => a.isUnlocked).length;
  const totalAchievements = achievements.length;
  const overallProgress = Math.round(
    (unlockedAchievements / totalAchievements) * 100
  );

  // Calculate total XP earned
  const totalXP = achievements
    .filter((a) => a.isUnlocked)
    .reduce((sum, achievement) => sum + achievement.xpReward, 0);

  // Filter achievements based on search and category
  const filteredAchievements = achievements.filter((achievement) => {
    const matchesSearch =
      searchQuery === "" ||
      achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      achievement.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || achievement.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Count achievements by rarity
  // const rarityCount = Object.keys(rarityLevels).reduce((acc, rarity) => {
  //   acc[rarity] = achievements.filter((a) => a.rarity === rarity).length;
  //   return acc;
  // }, {} as Record<string, number>);

  return (
    <div className="container my-6 mx-auto flex flex-col gap-8">
      {/* Header section */}
      <header>
        <h1 className="text-3xl font-display font-semibold">الإنجازات</h1>
        <p className="text-muted-foreground mt-1">اكتشف إنجازاتك وجوائزك</p>
      </header>

      {/* Progress overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2 rounded-xl  bg-card p-6 flex items-center gap-8">
          <ProgressCircle
            progress={overallProgress}
            size={120}
            strokeWidth={8}
            backgroundColor="rgba(59, 130, 246, 0.1)"
            progressColor="rgb(59, 130, 246)"
          >
            <div className="text-center">
              <p className="text-xl font-display font-bold">
                {overallProgress}%
              </p>
              <p className="text-xs text-muted-foreground">الإنجاز الكلي</p>
            </div>
          </ProgressCircle>

          <div className="flex-1">
            <h3 className="text-lg font-display font-semibold mb-2">
              نظرة عامة على الإنجازات
            </h3>
            <p className="text-muted-foreground mb-4">
              لقد أكملت {unlockedAchievements} من أصل {totalAchievements}{" "}
              إنجازًا
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border p-3">
                <p className="text-sm text-muted-foreground">مجموع النقاط</p>
                <p className="text-2xl font-display font-semibold text-primary">
                  {totalXP} XP
                </p>
              </div>
              <div className="rounded-lg border border-border p-3">
                <p className="text-sm text-muted-foreground">
                  الإنجازات المتبقية
                </p>
                <p className="text-2xl font-display font-semibold">
                  {totalAchievements - unlockedAchievements}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border/50 bg-gradient-to-br from-primary/10 to-primary/5 p-6 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-primary" />
            </div>

            <h3 className="text-lg font-display font-semibold mb-1">
              تحدي الشهر
            </h3>
            <p className="text-muted-foreground mb-6">
              أكمل جميع دروس الكيمياء خلال شهر
            </p>
          </div>

          <div>
            <div className="h-2 w-full bg-primary/10 rounded-full mb-2">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>35% مكتمل</span>
              <span>+500 XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rarity badges section */}
      <div className="bg-bacground/25 p-6 border rounded-xl">
        <h2 className="text-xl font-display font-semibold mb-4">
          مستويات الندرة
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(rarityLevels).map(([key, { name, color }]) => (
            <div
              key={key}
              className={`${color} rounded-2xl px-6 py-3 border text-start shadow-none`}
            >
              <div className="flex justify-start items-center gap-3">
                <div className="rounded-full backdrop-blur-2xl flex items-center justify-center">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-1">{name}</h3>
              </div>
              {/* <p className="text-sm">{rarityCount[key] || 0} شارة</p> */}
            </div>
          ))}
        </div>
      </div>

      {/* Achievement categories */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {categories.slice(1).map(category => (
          <div 
            key={category.id} 
            className={`rounded-xl border border-border/50 bg-card p-4 text-center cursor-pointer hover-scale ${selectedCategory === category.id ? 'border-primary/70 bg-primary/5' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center mx-auto mb-2`}>
              {category.icon}
            </div>
            <h3 className="font-medium">{category.name}</h3>
            <p className="text-sm text-muted-foreground">
              {achievements.filter(a => a.category === category.id).length} إنجاز
            </p>
          </div>
        ))}
      </div> */}

      {/* Tabs for achievement status */}
      <Tabs defaultValue="all" className="min-h-[85vh]">
        {/* Search and categories */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <TabsList>
                <TabsTrigger value="all">
                  جميع الإنجازات ({achievements.length})
                </TabsTrigger>
                <TabsTrigger value="unlocked">
                  مكتملة ({unlockedAchievements})
                </TabsTrigger>
                <TabsTrigger value="locked">
                  غير مكتملة ({totalAchievements - unlockedAchievements})
                </TabsTrigger>
              </TabsList>
              {/* <Input
                placeholder="ابحث عن الإنجازات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              /> */}
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  className={`flex items-center gap-1 ${
                    selectedCategory === category.id ? "" : "opacity-70"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon && (
                    <span className="mr-1">{category.icon}</span>
                  )}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <TabsContent value="all" className="mt-4">
          {filteredAchievements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredAchievements.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  title={achievement.title}
                  description={achievement.description}
                  icon={achievement.icon}
                  progress={achievement.progress}
                  isUnlocked={achievement.isUnlocked}
                  xpReward={achievement.xpReward}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-border/50 rounded-xl bg-card/50">
              <Award className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">لا توجد نتائج</h3>
              <p className="text-muted-foreground mb-4">
                لم يتم العثور على إنجازات تطابق البحث
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                إعادة تعيين البحث
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="unlocked" className="mt-4">
          {filteredAchievements.filter((a) => a.isUnlocked).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredAchievements
                .filter((a) => a.isUnlocked)
                .map((achievement) => (
                  <AchievementCard
                    key={achievement.id}
                    title={achievement.title}
                    description={achievement.description}
                    icon={achievement.icon}
                    progress={achievement.progress}
                    isUnlocked={achievement.isUnlocked}
                    xpReward={achievement.xpReward}
                    showProgress={false}
                  />
                ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-border/50 rounded-xl bg-card/50">
              <Trophy className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">لا إنجازات مكتملة</h3>
              <p className="text-muted-foreground">
                لم تكمل أي إنجازات في هذه الفئة بعد
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="locked" className="mt-4">
          {filteredAchievements.filter((a) => !a.isUnlocked).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredAchievements
                .filter((a) => !a.isUnlocked)
                .map((achievement) => (
                  <AchievementCard
                    key={achievement.id}
                    title={achievement.title}
                    description={achievement.description}
                    icon={achievement.icon}
                    progress={achievement.progress}
                    isUnlocked={achievement.isUnlocked}
                    xpReward={achievement.xpReward}
                  />
                ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-border/50 rounded-xl bg-card/50">
              <CheckCircle className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                أكملت كل الإنجازات!
              </h3>
              <p className="text-muted-foreground">
                لقد أكملت جميع الإنجازات في هذه الفئة
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Achievements;
