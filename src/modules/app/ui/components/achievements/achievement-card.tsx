
import React from 'react';
import { Trophy, LockIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  isUnlocked: boolean;
  xpReward: number;
  className?: string;
  showProgress?: boolean;
}

export const AchievementCard = ({
  title,
  description,
  icon,
  progress,
  isUnlocked,
  xpReward,
  className,
  showProgress = true,
}: AchievementCardProps) => {
  return (
    <div className={cn(
      "group relative flex flex-col rounded-xl border border-border/50 bg-card hover:shadow-md overflow-hidden transition-all duration-300 shadow-none",
      isUnlocked ? "hover-scale" : "opacity-80",
      className
    )}>
      {/* Background shimmer effect on hover */}
      {isUnlocked && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer" />
      )}
      
      <div className="flex items-center gap-4 p-4">
        <div className={cn(
          "flex items-center justify-center w-12 h-12 rounded-full",
          isUnlocked 
            ? "bg-primary/20 text-primary" 
            : "bg-muted text-muted-foreground"
        )}>
          {isUnlocked ? icon : <LockIcon className="w-6 h-6" />}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className={cn(
              "font-medium text-lg",
              !isUnlocked && "text-muted-foreground"
            )}>
              {title}
            </h3>
            {isUnlocked && (
              <Trophy className="h-4 w-4 text-yellow-400" />
            )}
          </div>
          
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <div className="p-4 pt-0">
        <div className="flex justify-between text-sm mb-2">
          <span className={cn("text-sm", !isUnlocked && "text-muted-foreground")}>
            {progress}% مكتمل
          </span>
          <span className={cn("font-medium", isUnlocked ? "text-emerald-500" : "text-muted-foreground")}>
            {isUnlocked ? `+${xpReward} XP` : `${xpReward} XP`}
          </span>
        </div>
        <div className={cn("flex justify-between items-center gap-1 text-sm mb-2", !showProgress && "hidden")}>
        <Progress value={progress} className={cn("h-3", !isUnlocked && "opacity-50")} />
        <span>
        5/10
        </span>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
