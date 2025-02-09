"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
import {
  Pentagon,
  Hexagon,
  Circle,
  Triangle,
  Square,
  Diamond,
  Clock3,
  Lock,
  ArrowUp,
  type LucideIcon
} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import "./style.css";

const leagueData = {
  daysLeft: 3,
  currentLeague: 1,
  leagues: [
    { name: "نواة التميّز", icon: Pentagon, color: "pink" },
    { name: "روّاد المعرفة", icon: Hexagon, color: "blue" },
    { name: "أبطال التعلّم", icon: Circle, color: "green" },
    { name: "قادة المستقبل", icon: Triangle, color: "red" },
    { name: "سفراء العلم", icon: Diamond, color: "purple" },
    { name: "قمم التفوق", icon: Square, color: "gray" },
  ],
  users : [
    { id: 1, name: "علي الدوسري", role: "Software Engineer", isPro: true, xp: 3271, avatar: "/placeholder.svg?height=40&width=40", initial: "ع" },
    { id: 2, name: "فاطمة الحربي", role: "UX/UI Designer", isPro: false, xp: 2069, avatar: "/placeholder.svg?height=40&width=40", initial: "ف" },
    { id: 3, name: "يوسف العتيبي", role: "Graphic Designer", isPro: false, xp: 1629, avatar: "", initial: "ي" },
    { id: 4, name: "أمل الشمري", role: "UX/UI Designer", isPro: false, xp: 1618, avatar: "/placeholder.svg?height=40&width=40", initial: "أ" },
    { id: 5, name: "عبدالرحمن السالمي", role: "Project Manager", isPro: true, xp: 1508, avatar: "/placeholder.svg?height=40&width=40", initial: "ع" },
    { id: 6, name: "ريم العبدالله", role: "UX/UI Designer", isPro: false, xp: 1150, avatar: "/placeholder.svg?height=40&width=40", initial: "ر" },
    { id: 7, name: "بدر القحطاني", role: "Developer", isPro: false, xp: 903, avatar: "/placeholder.svg?height=40&width=40", initial: "ب" },
    { id: 8, name: "خالد التميمي", role: "", isPro: false, xp: 765, avatar: "", initial: "خ" },
    { id: 9, name: "جميلة الفهيد", role: "", isPro: false, xp: 756, avatar: "", initial: "ج" },
    { id: 10, name: "مروان العريفي", role: "Marketing Specialist", isPro: true, xp: 1520, avatar: "/placeholder.svg?height=40&width=40", initial: "م" },
    { id: 11, name: "هند الكندي", role: "HR Manager", isPro: false, xp: 1465, avatar: "/placeholder.svg?height=40&width=40", initial: "ه" },
    { id: 12, name: "فيصل الزهراني", role: "Product Manager", isPro: true, xp: 1398, avatar: "/placeholder.svg?height=40&width=40", initial: "ف" },
    { id: 13, name: "نور الكيلاني", role: "UX/UI Designer", isPro: false, xp: 1253, avatar: "/placeholder.svg?height=40&width=40", initial: "ن" },
    { id: 14, name: "ليلى البراك", role: "Backend Developer", isPro: true, xp: 1324, avatar: "/placeholder.svg?height=40&width=40", initial: "ل" },
    { id: 15, name: "حسين اليامي", role: "Frontend Developer", isPro: false, xp: 1187, avatar: "/placeholder.svg?height=40&width=40", initial: "ح" },
    { id: 16, name: "شهد المطيري", role: "", isPro: true, xp: 1124, avatar: "/placeholder.svg?height=40&width=40", initial: "ش" },
    { id: 17, name: "سعيد النعيمي", role: "System Analyst", isPro: false, xp: 1082, avatar: "/placeholder.svg?height=40&width=40", initial: "س" },
    { id: 18, name: "نجود العبدلي", role: "Content Writer", isPro: false, xp: 1010, avatar: "", initial: "ن" },
    { id: 19, name: "ياسر البلوشي", role: "", isPro: true, xp: 980, avatar: "/placeholder.svg?height=40&width=40", initial: "ي" },
    { id: 20, name: "سارة الغانم", role: "UI Developer", isPro: false, xp: 950, avatar: "", initial: "س" },
    { id: 21, name: "مريم الجفالي", role: "Data Scientist", isPro: true, xp: 935, avatar: "/placeholder.svg?height=40&width=40", initial: "م" },
    { id: 22, name: "رائد العساف", role: "Full-Stack Developer", isPro: false, xp: 912, avatar: "", initial: "ر" },
    { id: 23, name: "عائشة الحارثي", role: "UI Developer", isPro: false, xp: 893, avatar: "/placeholder.svg?height=40&width=40", initial: "ع" },
    { id: 24, name: "زيد السعدي", role: "Data Analyst", isPro: true, xp: 870, avatar: "/placeholder.svg?height=40&width=40", initial: "ز" },
    { id: 25, name: "منى الماجد", role: "", isPro: false, xp: 854, avatar: "", initial: "م" },
    { id: 26, name: "تركي الهاشمي", role: "Developer", isPro: true, xp: 830, avatar: "/placeholder.svg?height=40&width=40", initial: "ت" },
    { id: 27, name: "لبنى الجبري", role: "Marketing Manager", isPro: false, xp: 825, avatar: "/placeholder.svg?height=40&width=40", initial: "ل" },
    { id: 28, name: "وائل الحميدي", role: "UX Designer", isPro: true, xp: 813, avatar: "/placeholder.svg?height=40&width=40", initial: "و" },
    { id: 29, name: "نجوى العبدالله", role: "Project Manager", isPro: false, xp: 799, avatar: "", initial: "ن" },
    { id: 30, name: "زيد القاضي", role: "Product Designer", isPro: true, xp: 785, avatar: "/placeholder.svg?height=40&width=40", initial: "ز" }
  ]
}

const LeagueIcon = ({ icon: Icon, color, isActive, isLocked, isLast }: {icon: LucideIcon, color: string, isActive: boolean, isLocked: boolean, isLast: boolean}) => {
  const baseClasses = "size-16"
  const iconClasses = `${baseClasses} ${
    isActive ? `league-icon--active league-icon--${color}` : 'league-icon--inactive'
  } ${
    isLast && "size-24"
  }`

  return (
    <div className="relative">
      <Icon className={`${iconClasses}`} />
      {isLocked && (
        <Lock className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" />
      )}
    </div>
  )
}

const StudentCard = ({ student, rank }: { student: {image?: string, name: string, xp: number}; rank: number }) => (
  <div className="p-1 border-b last:border-b-0 cursor-default">
    <div className={"hover:bg-accent/75 duration-300 flex items-center justify-between px-3 py-2 rounded-lg"}>
      <div className="flex items-center space-x-3">
        {/* Rank */}
        <span className={cn(`w-9 pl-3 ml-3 text-center font-medium font-mono`,
          rank <= 3 && 'border-2 rounded-full size-7 flex items-center justify-center p-0 ml-5 pt-[1px] font-bold',
          rank == 1 && 'bg-[#F9DB47] border-[#F5CC36] text-[#A37A07]',
          rank == 2 && 'bg-[#D0DDED] border-[#B7C5DA] text-[#7788A0]',
          rank == 3 && 'bg-[#E49F5E] border-[#C47933] text-[#925D33]',

        )}>
          {rank}
        </span>
        <Avatar>
          <AvatarImage src={student.image} alt={student.name} />
          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{student.name}</span>
      </div>
      <span className="font-medium text-muted-foreground">{student.xp}{" "}
      <span className="font-light text-sm">نقطة</span>
    </span>
    </div>
  </div>
)

export default function LeaderBoard() {
  const promotedStudents = leagueData.users.slice(0, 10)
  const stayStudents = leagueData.users.slice(10, 30)

  return (
    <div className="max-w-xl w-full mx-auto p-6">
      {/* League Icons */}
      <div className="flex justify-center items-center gap-4 mb-8">
        {leagueData.leagues.map((league, index) => (
          <LeagueIcon
            key={index}
            icon={league.icon}
            color={league.color}
            isActive={index <= leagueData.currentLeague}
            isLocked={index > leagueData.currentLeague}
            isLast={index == leagueData.currentLeague}
          />
        ))}
      </div>

      {/* League Title and Info */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-3">{leagueData.leagues[leagueData.currentLeague].name}</h1>
        <p className="text-gray-500 mb-4">يتقدم أفضل 20 إلى الدوري التالي</p>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Clock3 className="h-4 w-4 text-yellow-500" />
          <span>{leagueData.daysLeft} الايام المتبقية </span>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="space-y-4">
        <Card className={"p-0 shadow-none max-w-none"}>
          <CardContent className={"p-0"}>
            {promotedStudents.map((student, index) => (
              <StudentCard key={student.id} student={student} rank={index+1} />
            ))}
          </CardContent>
        </Card>
        <span className={"flex items-center justify-center gap-2 text-green-500 font-bold"}>
          <ArrowUp/>
          منقطة المتفوقين
          <ArrowUp/>
        </span>
        <Card className={"p-0 shadow-none max-w-none"}>
          <CardContent className={"p-0"}>
            {stayStudents.map((student, index) => (
              <StudentCard key={student.id} student={student} rank={index+11} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}