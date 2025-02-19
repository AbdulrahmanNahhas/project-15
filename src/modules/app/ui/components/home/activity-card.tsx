"use client";

import {
  Activity,
  ArrowUpRight,
  Plus,
  Target,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface Metric {
  label: string;
  value: string;
  trend: number;
  unit?: "درس" | "اختبار" | "ساعة";
}

export interface Goal {
  id: string;
  title: string;
  isCompleted: boolean;
}

const metrics: Metric[] = [
  { label: "الدروس المكتملة", value: "15", trend: 75, unit: "درس" },
  { label: "الاختبارات المحلولة", value: "8", trend: 40, unit: "اختبار" },
  { label: "مدة التعلم", value: "12", trend: 85, unit: "ساعة" },
];

const INITIAL_GOALS: Goal[] = [
  { id: "1", title: "إكمال درس في الرياضيات", isCompleted: true },
  { id: "2", title: "مراجعة 10 كلمات جديدة", isCompleted: false },
  { id: "3", title: "حل اختبار في الفيزياء", isCompleted: true },
];

export function ActivityCard() {
  const [goals, setGoals] = useState<Goal[]>(INITIAL_GOALS);

  const handleToggleGoal = (goalId: string) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === goalId ? { ...goal, isCompleted: !goal.isCompleted } : goal
      )
    );
  };

  const handleAddGoal = () => {
    const newGoal: Goal = {
      id: `goal-${goals.length + 1}`,
      title: `New Goal ${goals.length + 1}`,
      isCompleted: false,
    };
    setGoals((prev) => [...prev, newGoal]);
  };

  const handleGoalToggle = (goalId: string) => {
    handleToggleGoal?.(goalId);
  };

  return (
    <div
      className={cn(
        "relative h-fit rounded-3xl p-6 bg-background border text-right rtl",
        "transition-all duration-300 bg-accent/25 hover:bg-accent/0"
      )}
    >
      {/* العنوان */}
      <div className="flex items-center gap-3 mb-6 justify-start">
        <div className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50">
          <Activity className="w-5 h-5 text-[#FF2D55]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">تقدم هذا الأسبوع</h3>
          <p className="text-sm text-muted-foreground">النشاط</p>
        </div>
      </div>

      {/* الحلقات البيانية */}
      <div className="grid grid-cols-3 gap-6 relative">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="relative group flex flex-col items-center before:absolute before:hover:bg-accent/50 before:hover:border before:-top-1.5 before:-right-3 before:h-[108%] before:w-[130%] before:rounded-xl"
          >
            <div className="relative w-20 h-20">
              <div className={cn(
                "absolute inset-0 rounded-full border-4 border-accent",
                metric.label === "الدروس المكتملة" && "border-red-500/10",
                metric.label === "الاختبارات المحلولة" && "border-blue-500/10",
                metric.label === "مدة التعلم" && "border-green-500/10"
              )} />
              <div
                className={cn(
                  "absolute inset-0 rounded-full border-4 transition-all duration-500",
                  metric.label === "الدروس المكتملة" && "border-red-500",
                  metric.label === "الاختبارات المحلولة" && "border-blue-500",
                  metric.label === "مدة التعلم" && "border-green-500"
                )}
                style={{
                  clipPath: `polygon(0 0, 100% 0, 100% ${metric.trend}%, 0 ${metric.trend}%)`,
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-foreground">
                  {metric.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {metric.unit}
                </span>
              </div>
            </div>
            <span className="mt-1.5 text-sm font-medium text-foreground text-center z-10">
              {metric.label}
            </span>
            <span className="text-xs text-muted-foreground text-center z-10">
              {metric.trend}%
            </span>
          </div>
        ))}
      </div>

      {/* الأهداف الاسبوعية */}
      <div className="mt-8 space-y-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <Target className="w-4 h-4" />
              أهداف الأسبوع
            </h4>
            <button
              type="button"
              onClick={handleAddGoal}
              className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Plus className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
            </button>
          </div>

          <div className="space-y-2">
            {goals.map((goal) => (
              <Button
                key={goal.id}
                onClick={() => handleGoalToggle(goal.id)}
                variant={"ghost"}
                className={cn(
                  "w-full border text-start justify-start items-center"
                )}
              >
                <CheckCircle2
                  className={cn(
                    "w-5 h-5",
                    goal.isCompleted
                      ? "text-emerald-500"
                      : "text-muted-foreground"
                  )}
                />
                <span
                  className={cn(
                    "text-sm",
                    goal.isCompleted
                      ? "text-muted-foreground line-through"
                      : "text-foreground"
                  )}
                >
                  {goal.title}
                </span>
              </Button>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="pt-0">
          <Button
            variant={"link"}
            className="text-foreground !h-6 !p-0"
            asChild
          >
            <Link href={"/statistics"}>
              <ArrowUpRight className="w-4 h-4" />
              عرض تفاصيل النشاط
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
