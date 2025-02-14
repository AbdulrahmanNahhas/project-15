import { Badge } from "@ui//badge"
import { Card, CardContent } from "@ui//card"
import { Tabs, TabsList, TabsTrigger } from "@ui//tabs"
import Link from "next/link"
import { courses } from "@/data/app/courses/courses"

const CoursesPage = () => {
  return (
    <div className="container mx-auto mt-6">
      <Tabs defaultValue="discover" className="mb-8">
      <div className="flex flex-col gap-4 border-b pb-4 mb-6">
      <h1 className="text-3xl font-bold">الدورات التدريبية</h1>
      <p className="text-lg text-muted-foreground">
        طور مهاراتك في التصميم من خلال دورات احترافية تفاعلية وعملية.
      </p>
        <TabsList className="bg-muted/50 p-1 rounded-lg w-fit">
          <TabsTrigger value="discover" className="rounded-md">اكتشف</TabsTrigger>
          <TabsTrigger value="beginner" className="rounded-md">مبتدئ</TabsTrigger>
          <TabsTrigger value="intermediate" className="rounded-md">متوسط</TabsTrigger>
          <TabsTrigger value="advanced" className="rounded-md">متقدم</TabsTrigger>
        </TabsList>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Link href={`/courses/1`} key={index}>
          <Card key={index} className="group shadow-none transition-all duration-300 hover:shadow-[inset_0_0_0_2px] hover:shadow-border hover:bg-accent/50 relative cursor-pointer">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-2xl">
                  {course.icon}
                </div>
                {course.popular && (
                  <Badge variant="secondary" className="text-sm rounded-sm absolute top-5 left-4">
                    الأكثر شعبية
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 transition-colors">{course.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="ml-2">{course.level}</span>
                <span className="mx-2">•</span>
                <span>{course.duration}</span>
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
      </Tabs>
    </div>
  )
}

export default CoursesPage;