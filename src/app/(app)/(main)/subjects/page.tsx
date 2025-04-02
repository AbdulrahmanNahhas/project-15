import { getSubjects } from "@/modules/app/subjects/actions";
import SubjectCard from "@/modules/app/subjects/components/subjects/subject-card";
import { Suspense } from "react";
import Loading from "./loading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  BookText,
  GraduationCap,
} from "lucide-react";

export default async function Learn() {
  const subjects = await getSubjects();

  return (
    <div className="container mx-auto mt-6">
      <Tabs defaultValue="curriculum" className="mb-8">
        {/* Header section */}
        <header className="mb-8">
          <h1 className="text-3xl font-display font-semibold">
            المناهج والمقررات
          </h1>
          <p className="text-muted-foreground mt-1">
            استكشف المناهج الدراسية والمقررات الإضافية
          </p>
        </header>

        {/* Main content tabs */}
        <TabsList className="mb-4 sm:mb-0">
          <TabsTrigger value="curriculum" className="flex items-center gap-1">
            <GraduationCap className="w-4 h-4" />
            المناهج الدراسية
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex items-center gap-1">
            <BookText className="w-4 h-4" />
            المقررات الإضافية
          </TabsTrigger>
        </TabsList>

        {/* Curriculum Subjects Tab */}
        <TabsContent value="curriculum" className="mt-0">
          {!subjects.length ? (
            <div className="col-span-3 text-center py-12">
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                لم يتم العثور على نتائج
              </h3>
              <p className="text-muted-foreground mb-4">
                حاول البحث بكلمات أخرى
              </p>
            </div>
          ) : (
            <Suspense fallback={<Loading />}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-6 sm:my-6 container mx-auto">
                {subjects.map((subject) => (
                  <SubjectCard key={subject.id} subject={subject} />
                ))}
              </div>
            </Suspense>
          )}
        </TabsContent>

        {/* Additional Courses Tab */}
        <TabsContent value="courses" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
