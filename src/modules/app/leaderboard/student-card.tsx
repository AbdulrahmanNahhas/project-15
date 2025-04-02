import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const StudentCard = ({ student, rank }: { student: {image?: string, name: string, xp: number}; rank: number }) => (
  <div className="p-1 border-b last:border-b-0 cursor-pointer">
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

export {StudentCard}