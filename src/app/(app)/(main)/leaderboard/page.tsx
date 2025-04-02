"use client";

import "./style.css";
import { Clock3, Lock, ArrowUp, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@ui//card";
import { leagueData } from "@/data/app/leaderboard/league-data";
import { StudentCard } from "@/modules/app/leaderboard/student-card";

const LeagueIcon = ({
  icon: Icon,
  color,
  isActive,
  isLocked,
  isLast,
}: {
  icon: LucideIcon;
  color: string;
  isActive: boolean;
  isLocked: boolean;
  isLast: boolean;
}) => {
  const baseClasses = "size-16";
  const iconClasses = `${baseClasses} ${
    isActive
      ? `league-icon--active league-icon--${color}`
      : "league-icon--inactive"
  } ${isLast && "size-24"}`;

  return (
    <div className="relative">
      <Icon className={`${iconClasses}`} />
      {isLocked && (
        <Lock className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" />
      )}
    </div>
  );
};

export default function Leaderboard() {
  const promotedStudents = leagueData.users.slice(0, 10);
  const stayStudents = leagueData.users.slice(10, 30);

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
        <h1 className="text-2xl font-bold mb-3">
          {leagueData.leagues[leagueData.currentLeague].name}
        </h1>
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
              <StudentCard
                key={student.id}
                student={student}
                rank={index + 1}
              />
            ))}
          </CardContent>
        </Card>
        <span
          className={
            "flex items-center justify-center gap-2 text-green-500 font-bold"
          }
        >
          <ArrowUp />
          منقطة المتفوقين
          <ArrowUp />
        </span>
        <Card className={"p-0 shadow-none max-w-none"}>
          <CardContent className={"p-0"}>
            {stayStudents.map((student, index) => (
              <StudentCard
                key={student.id}
                student={student}
                rank={index + 11}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}