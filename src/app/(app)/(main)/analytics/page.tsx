"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProgressLineChart } from '@/modules/app/ui/components/achievements/analytics-chart';
import { Award, BookOpen, Calendar, CheckCircle, ChevronRight, Crown, Medal, Star, TrendingUp, Trophy, Target, Users, ArrowRight, Clock } from 'lucide-react';
import AchievementCard from '@/modules/app/ui/components/achievements/achievement-card';
import Link from 'next/link';

// Weekly study data 
const weeklyStudyData = [
  { day: 'الأحد', minutes: 45 },
  { day: 'الإثنين', minutes: 60 },
  { day: 'الثلاثاء', minutes: 30 },
  { day: 'الأربعاء', minutes: 75 },
  { day: 'الخميس', minutes: 25 },
  { day: 'الجمعة', minutes: 0 },
  { day: 'السبت', minutes: 50 },
];

// Subject performance data
const subjectPerformanceData = [
  { subject: 'الرياضيات', score: 85 },
  { subject: 'العلوم', score: 78 },
  { subject: 'اللغة العربية', score: 92 },
  { subject: 'اللغة الإنجليزية', score: 72 },
  { subject: 'التاريخ', score: 65 },
  { subject: 'الجغرافيا', score: 70 },
];

// Recent achievements data
const recentAchievements = [
  {
    id: '1',
    title: 'متميز في الرياضيات',
    description: 'أكملت 10 دروس رياضيات متتالية بدرجة ممتازة',
    date: 'منذ 3 أيام',
    icon: <Medal className="h-8 w-8 text-indigo-500" />,
    points: 150,
  },
  {
    id: '2',
    title: 'باحث مثابر',
    description: 'قمت بحل 50 مسألة تدريبية مختلفة',
    date: 'منذ أسبوع',
    icon: <Crown className="h-8 w-8 text-amber-500" />,
    points: 100,
  },
  {
    id: '3',
    title: 'متعلم متفوق',
    description: 'حققت معدل 90% في اختبارات هذا الشهر',
    date: 'منذ أسبوعين',
    icon: <Star className="h-8 w-8 text-yellow-500" />,
    points: 200,
  },
];

// Leaderboard data
const leaderboardData = [
  { id: '1', name: 'سارة خالد', points: 2450, rank: 1, avatar: 'س' },
  { id: '2', name: 'محمد أحمد', points: 2340, rank: 2, avatar: 'م' },
  { id: '3', name: 'نور علي', points: 2180, rank: 3, avatar: 'ن' },
  { id: '4', name: 'أحمد سلام', points: 1950, rank: 4, avatar: 'أ' },
  { id: '5', name: 'فاطمة محمود', points: 1820, rank: 5, avatar: 'ف' },
];

const Analytics = () => {  
  return (
    <div className="container mx-auto my-6 flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-display font-semibold">التحليلات والإحصائيات</h1>
        <p className="text-muted-foreground mt-1">تتبع تقدمك وإنجازاتك ومستواك التعليمي</p>
      </header>
      
      <Tabs defaultValue="overview" className='flex flex-col items-start gap-4'>
        <TabsList className='w-auto'>
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            نظرة عامة
          </TabsTrigger>
          <TabsTrigger value="subjects" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            المواد الدراسية
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            الإنجازات
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className='flex flex-col gap-8 w-full'>
          {/* Statistics summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border rounded-xl">
            <StatCard 
              title="إجمالي وقت الدراسة" 
              value="32 ساعة" 
              description="هذا الشهر" 
              icon={<Clock />} 
              trend="+12%" 
              trendUp
            />
            <StatCard 
              title="الدروس المكتملة" 
              value="24" 
              description="من أصل 120" 
              icon={<CheckCircle />} 
              trend="+8" 
              trendUp
            />
            <StatCard 
              title="معدل الدرجات" 
              value="87%" 
              description="متوسط الدرجات" 
              icon={<Target />} 
              trend="+5%" 
              trendUp
            />
            <StatCard 
              title="مستوى التفاعل" 
              value="نشط" 
              description="متصدر 10%" 
              icon={<Users />} 
              trend="4 مراكز" 
              trendUp
            />
          </div>
          
          {/* Weekly study chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>نشاط الدراسة الأسبوعي</CardTitle>
                <CardDescription>عدد دقائق الدراسة يومياً خلال الأسبوع الحالي</CardDescription>
              </CardHeader>
              <CardContent> */}
                  <ProgressLineChart 
                  className='w-full h-full lg:col-span-2 border-0 shadow-none'
                    data={weeklyStudyData.map(item => ({
                      day: item.day,
                      minutes: item.minutes,
                      xp: item.minutes * 1.5
                    }))} 
                  />
              {/* </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">المتوسط اليومي</p>
                  <p className="text-xl font-bold">40.7 دقيقة</p>
                </div>
                <Button variant="outline">تحليل مفصل</Button>
              </CardFooter>
            </Card> */}
            
            <Card>
              <CardHeader>
                <CardTitle>تصنيف المتعلمين</CardTitle>
                <CardDescription>ترتيبك مقارنة بالطلاب الآخرين</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboardData.map((user, index) => (
                    <div 
                      key={user.id} 
                      className={`flex items-center p-3 rounded-lg ${
                        user.id === '4' ? 'bg-primary/10 border border-primary/30' : ''
                      }`}
                    >
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary font-bold text-sm">
                        {user.rank}
                      </div>
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm ${
                          index < 3 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {user.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{user.name}</p>
                      </div>
                      <div className="text-sm font-medium">
                        {user.points} XP
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Subject performance */}
          <Card>
            <CardHeader>
              <CardTitle>أداء المواد الدراسية</CardTitle>
              <CardDescription>معدل درجاتك في المواد المختلفة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subjectPerformanceData.map((subject) => (
                  <div key={subject.subject} className="flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{subject.subject}</span>
                      <span 
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          subject.score >= 90 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                          subject.score >= 75 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                          subject.score >= 60 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}
                      >
                        {subject.score}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          subject.score >= 90 ? 'bg-green-500' :
                          subject.score >= 75 ? 'bg-blue-500' :
                          subject.score >= 60 ? 'bg-amber-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${subject.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Recent achievements */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-display font-semibold">الإنجازات الأخيرة</h2>
              <Link href="/achievements">
                <Button variant="outline" size="sm" className="gap-1">
                  عرض جميع الإنجازات
                  <ArrowRight className="h-4 w-4 rtl-flip" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentAchievements.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  title={achievement.title}
                  description={achievement.description}
                  icon={achievement.icon}
                  progress={75}
                  isUnlocked={true}
                  xpReward={achievement.points}
                />
              ))}
            </div>
          </section>
        </TabsContent>
        
        <TabsContent value="subjects" className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <SubjectAnalyticsCard 
              title="الرياضيات"
              overallScore={85}
              completedLessons={12}
              totalLessons={20}
              averageQuizScore={78}
              lastActive="اليوم"
              nextLesson="المتجهات في الفضاء"
              icon={<BookOpen className="h-5 w-5 text-blue-500" />}
              iconBg="bg-blue-100 dark:bg-blue-900/30"
            />
            <SubjectAnalyticsCard 
              title="الفيزياء"
              overallScore={72}
              completedLessons={8}
              totalLessons={18}
              averageQuizScore={68}
              lastActive="أمس"
              nextLesson="الحركة الدورانية"
              icon={<BookOpen className="h-5 w-5 text-emerald-500" />}
              iconBg="bg-emerald-100 dark:bg-emerald-900/30"
            />
            <SubjectAnalyticsCard 
              title="اللغة العربية"
              overallScore={92}
              completedLessons={15}
              totalLessons={24}
              averageQuizScore={90}
              lastActive="منذ يومين"
              nextLesson="البلاغة - علم البديع"
              icon={<BookOpen className="h-5 w-5 text-purple-500" />}
              iconBg="bg-purple-100 dark:bg-purple-900/30"
            />
            <SubjectAnalyticsCard 
              title="اللغة الإنجليزية"
              overallScore={75}
              completedLessons={10}
              totalLessons={22}
              averageQuizScore={72}
              lastActive="اليوم"
              nextLesson="صيغة المستقبل التام"
              icon={<BookOpen className="h-5 w-5 text-indigo-500" />}
              iconBg="bg-indigo-100 dark:bg-indigo-900/30"
            />
        </TabsContent>
        
        <TabsContent value="achievements" className="flex flex-col gap-5 w-full">
          <Card>
            <CardHeader>
              <CardTitle>الإنجازات المختومة</CardTitle>
              <CardDescription>إجمالي الإنجازات المقفلة والمفتوحة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <AchievementStat 
                  icon={<Trophy className="h-12 w-12" />}
                  title="الإنجازات المكتملة"
                  value="18"
                  iconColor="text-amber-500 dark:text-amber-400"
                  bgColor="bg-amber-50 dark:bg-amber-900/20"
                />
                <AchievementStat 
                  icon={<Target className="h-12 w-12" />}
                  title="قيد التقدم"
                  value="7"
                  iconColor="text-blue-500 dark:text-blue-400"
                  bgColor="bg-blue-50 dark:bg-blue-900/20"
                />
                <AchievementStat 
                  icon={<Medal className="h-12 w-12" />}
                  title="مجموع النقاط"
                  value="1,425"
                  iconColor="text-emerald-500 dark:text-emerald-400"
                  bgColor="bg-emerald-50 dark:bg-emerald-900/20"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg mb-3">الإنجازات المميزة</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <FeaturedAchievement
                    title="متعلم مثابر"
                    description="تعلم لمدة 30 يوم متتالي"
                    progress={85}
                    icon={<Calendar className="h-4 w-4" />}
                  />
                  <FeaturedAchievement
                    title="عالم رياضيات"
                    description="أكمل جميع دروس الرياضيات"
                    progress={60}
                    icon={<Star className="h-4 w-4" />}
                  />
                  <FeaturedAchievement
                    title="متفوق دراسي"
                    description="احصل على معدل 90%+ في جميع المواد"
                    progress={35}
                    icon={<Award className="h-4 w-4" />}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Link href="/achievements" className="w-full">
                <Button className="w-full">عرض جميع الإنجازات</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend: string;
  trendUp: boolean;
}

const StatCard = ({ title, value, description, icon, trend, trendUp }: StatCardProps) => {
  return (
    <Card className='shadow-none border-0 flex-1'>
      <CardContent className="p-6 flex gap-3 items-center">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            trendUp 
              ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' 
              : 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400'
          }`}>
            {trend} {trendUp ? '↑' : '↓'}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">{value}</h2>
          <p className="text-xs text-muted-foreground">{title}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

interface SubjectAnalyticsCardProps {
  title: string;
  overallScore: number;
  completedLessons: number;
  totalLessons: number;
  averageQuizScore: number;
  lastActive: string;
  nextLesson: string;
  icon: React.ReactNode;
  iconBg: string;
}

const SubjectAnalyticsCard = ({
  title,
  overallScore,
  completedLessons,
  totalLessons,
  averageQuizScore,
  lastActive,
  nextLesson,
  icon,
  iconBg
}: SubjectAnalyticsCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg}`}>
            {icon}
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <span>الدرجة العامة:</span>
              <span className={`font-medium ${
                overallScore >= 90 ? 'text-green-600 dark:text-green-400' :
                overallScore >= 75 ? 'text-blue-600 dark:text-blue-400' :
                overallScore >= 60 ? 'text-amber-600 dark:text-amber-400' :
                'text-red-600 dark:text-red-400'
              }`}>
                {overallScore}%
              </span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-4">
          <div>
            <p className="text-xs text-muted-foreground">الدروس المكتملة</p>
            <p className="font-medium">{completedLessons} من {totalLessons}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">متوسط الاختبارات</p>
            <p className="font-medium">{averageQuizScore}%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">آخر نشاط</p>
            <p className="font-medium">{lastActive}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">الدرس التالي</p>
            <p className="font-medium truncate">{nextLesson}</p>
          </div>
        </div>
        
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full ${
              overallScore >= 90 ? 'bg-green-500' :
              overallScore >= 75 ? 'bg-blue-500' :
              overallScore >= 60 ? 'bg-amber-500' :
              'bg-red-500'
            }`}
            style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
          />
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3">
        <Button className="w-full" variant="outline" size="sm">
          تحليل مفصل
          <ChevronRight className="h-4 w-4 mr-1 rtl-flip" />
        </Button>
      </CardFooter>
    </Card>
  );
};

interface AchievementStatProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  iconColor: string;
  bgColor: string;
}

const AchievementStat = ({ icon, title, value, iconColor, bgColor }: AchievementStatProps) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg border">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${bgColor}`}>
        <div className={iconColor}>
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-sm text-muted-foreground text-center">{title}</p>
    </div>
  );
};

interface FeaturedAchievementProps {
  title: string;
  description: string;
  progress: number;
  icon: React.ReactNode;
}

const FeaturedAchievement = ({ title, description, progress, icon }: FeaturedAchievementProps) => {
  return (
    <div className="rounded-lg border p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-3">{description}</p>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
      </div>
      <div className="flex justify-between text-xs mt-2">
        <span className="text-muted-foreground">التقدم</span>
        <span className="font-medium">{progress}%</span>
      </div>
    </div>
  );
};

export default Analytics;