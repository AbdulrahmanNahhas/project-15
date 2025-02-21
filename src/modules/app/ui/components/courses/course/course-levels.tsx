import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ui//accordion"
import { ChevronDown } from 'lucide-react'
import { Lock, CheckCircle2 } from 'lucide-react'

interface Lesson {
  title: string
  icon: string
  completed?: boolean
  locked?: boolean
}

interface Level {
  id: number
  title: string
  description: string
  lessons: Lesson[]
}

interface CourseLevelsProps {
  levels: Level[]
}

const CourseLevels = ({ levels }: CourseLevelsProps) => {
  return (
    <Accordion type="single" defaultValue={`level-${levels[0].id}`} collapsible>
      {levels.map((level) => (
        <AccordionItem key={level.id} value={`level-${level.id}`} className="pb-8">
          <div className="w-full! flex flex-col items-start justify-start gap-2">
            <AccordionTrigger className="flex flex-row items-center gap-2 justify-between w-full! max-w-none! pb-0">
              <div className="flex flex-col items-start ">
                <span className="text-sm text-muted-foreground">
                  المستوى {level.id}{" "}
                </span>
                <h2 className="text-2xl font-semibold mt-1">
                  {level.title}
                </h2>
              </div>
              <ChevronDown className="size-8 duration-300 text-muted-foreground" />
            </AccordionTrigger>
            <p className="text-muted-foreground mt-2 text-start">
              {level.description}
            </p>
          </div>

          <AccordionContent>
            <div className="space-y-4 mt-6">
              {level.lessons.map((lesson, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border flex items-center justify-between
                  ${
                    lesson.locked
                      ? "bg-muted"
                      : "hover:bg-accent cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded flex items-center justify-center text-2xl">
                      {lesson.icon}
                    </div>
                    <span className="font-medium text-lg">{lesson.title}</span>
                  </div>
                  {lesson.locked ? (
                    <Lock className="size-6 text-muted-foreground/50" />
                  ) : (
                    <CheckCircle2 className="size-8 text-background fill-muted-foreground/50" />
                  )}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default CourseLevels