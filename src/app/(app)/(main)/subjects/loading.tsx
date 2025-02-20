import { Card, CardContent, CardHeader } from "@ui//card";
import { Skeleton } from "@/components/ui/skeleton";

const Component = () => (
  <Card className="hover:bg-accent/50 shadow-none flex flex-row sm:flex-col sm:gap-2 p-3 sm:p-0 sm:pb-2 min-w-52 items-center w-full sm:flex-1">
    <CardHeader className="sm:w-full p-3 flex flex-row items-center gap-4">
      <Skeleton className="h-[100px] w-[100px] sm:h-[125px] sm:w-full rounded-xl" />
    </CardHeader>
    <CardContent className="p-3 sm:pt-0 flex flex-col gap-2 sm:gap-1.5 flex-1 w-full">
      <Skeleton className="w-full max-w-[160px] h-[20px] rounded-full sm:pb-3" />
      <Skeleton className="w-full h-[12px] rounded-full" />
      <Skeleton className="w-full h-[12px] rounded-full" />
      <Skeleton className="w-full h-[12px] rounded-full" />
    </CardContent>
  </Card>
);

export default function Loading() {
  return (
    <div className="container mx-auto">
      <h1 className={"mb-6 md:my-6 font-bold text-3xl mx-auto border-b pb-5"}>
        المواد الدراسية
      </h1>
      <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-6 container mx-auto"> 
        <Component /> {/* #1 */}
        <Component /> {/* #2 */}
        <Component /> {/* #3 */}
        <Component /> {/* #4 */}
        <Component /> {/* #5 */}
        <Component /> {/* #6 */}
        <Component /> {/* #7 */}
        <Component /> {/* #8 */}
      </div>
    </div>
  );
}
