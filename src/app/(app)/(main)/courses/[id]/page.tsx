import CourseHeader from "@/modules/app/ui/components/courses/course/course-header";
import CourseLevels from "@/modules/app/ui/components/courses/course/course-levels";
import CourseSidebar from "@/modules/app/ui/components/courses/course/course-sidebar";
import CourseDescription from "@/modules/app/ui/components/courses/course/course-description";

// Data
import { courseLevelsData, courseDescriptionData } from "@/data/app/courses/course";

const CoursePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* رأس الصفحة */}
      <CourseHeader
        title="أساسيات تجربة المستخدم"
        description="إتقان أساسيات UX لبناء أساس قوي في المبادئ وسير العمل المتمحور حول المستخدم ، مما يساعدك على المساهمة بفعالية في تطوير المنتج وإنشاء تجارب مستخدم أفضل."
        badge="مبتدئ"
        duration={6}
        lessons={25}
        rating={4.8}
        students={122084}
        reviews={129}
      />

      {/* محتوى الدورة */}
      <div className="grid lg:grid-cols-3 gap-8 relative">
        <div className="space-y-12 lg:col-span-2 pl-6">
          <CourseLevels levels={courseLevelsData.levels} />
        </div>

        {/* الشريط الجانبي */}
        <CourseSidebar lastUpdate="7 فبراير 2025" />
      </div>

      {/* معلومات الدورة */}
      <CourseDescription
        description={courseDescriptionData.description}
        prerequisites={courseDescriptionData.prerequisites}
        topics={courseDescriptionData.topics}
        experts={courseDescriptionData.experts}
      />
    </div>
  );
};

export default CoursePage;
