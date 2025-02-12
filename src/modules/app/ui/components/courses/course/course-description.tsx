import React from 'react'
import { CheckCircle2, BadgeCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface Expert {
  name: string
  role: string
  avatar: string
}

interface CourseDescriptionProps {
  description: {
    paragraphs: string[]
  }
  prerequisites: {
    text: string
  }
  topics: string[]
  experts: Expert[]
}

const CourseDescription = ({
  description,
  prerequisites,
  topics,
  experts
}: CourseDescriptionProps) => {
  return (
    <div className="my-20 gap-12 flex flex-col lg:flex-row">
      <div className="flex flex-col gap-12 flex-1">
        {/* Course Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">وصف الدورة</h2>
          {description.paragraphs.map((paragraph, index) => (
            <p className='text-muted-foreground leading-8' key={index}>{paragraph}</p>
          ))}
        </div>
        {/* Prerequisites */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">المتطلبات المسبقة</h2>
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="h-5 w-5" />
            <span>{prerequisites.text}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:w-96">
        {/* Contributing Experts */}
        <div className="bg-background p-4 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold mb-4 px-3 pt-2">الخبراء المساهمون</h2>
          <div className="space-y-0">
            {experts.map((expert, index) => (
              <div key={index} className="flex items-center gap-4 hover:bg-accent rounded-md p-2 transition-all duration-300 cursor-pointer">
                <Avatar className="h-16 w-16 border-2 border-primary/10">
                  <AvatarImage src={expert.avatar} alt={expert.name} />
                  <AvatarFallback>{expert.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{expert.name}</h3>
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{expert.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Topics */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold mb-6">المواضيع</h2>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <Badge key={index} variant="secondary" className="px-2 py-2 text-sm bg-secondary/50">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDescription