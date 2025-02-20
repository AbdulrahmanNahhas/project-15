// import { getSubjects } from "@/modules/app/subjects/actions";
import SubjectCard from "@/modules/app/subjects/components/subjects/subject-card";
import { Suspense } from "react";
import Loading from "./loading";
import { subjects } from "@/data/app/study/subjects";

export default async function Learn() {
  // const subjects = await getSubjects();

  return (
    <div className="container mx-auto">
      <h1 className={"md:my-6 font-bold text-center text-xl sm:text-3xl mx-auto border-b pt-2 pb-4 sm:pb-5"}>
        المواد الدراسية
      </h1>
      {!subjects.length ? (
        <div>لا يوجد مواد</div>
      ) : (
        <Suspense fallback={<Loading />}>
          <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 sm:gap-3 sm:my-6 container mx-auto">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </Suspense>
      )}
    </div>
  );
}