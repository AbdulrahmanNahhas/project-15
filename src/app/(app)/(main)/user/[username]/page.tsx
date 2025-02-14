import { Avatar, AvatarFallback, AvatarImage } from "@ui//avatar";
import { Button } from "@ui//button";
import { Card } from "@ui//card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui//tabs";
import { Badge } from "@ui//badge";
import { IconFlame, IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import EarnBadge from "@/modules/app/ui/components/user/earn-badge";
import { ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "@/supabase/server";
import Image from "next/image";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const username = (await params).username;
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('username', username)
    .single();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto p-0 md:p-4 space-y-6">
      <div className="space-y-4">
        {/* Cover Image */}
        {data.cover_image_url ?(
        <div
          className={cn(
            "flex overflow-hidden cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:bg-muted",
            "h-64 md:h-72"
          )}
        >
            <Image src={data.cover_image_url} alt="Cover Image" className="w-full h-full object-cover object-top hover:opacity-80 duration-300" width={1000} height={600} unoptimized />
          </div>
        ) :(
          
        <div
          className={cn(
            "flex h-64 cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:bg-muted"
            // isDragging && "border-primary/50 bg-primary/5",
          )}
        >
          <div className="rounded-full bg-background p-3 shadow-sm">
            <ImagePlus className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium">Click to select</p>
            <p className="text-xs text-muted-foreground">
              or drag and drop file here
            </p>
          </div>
        </div>
      )}
      {/* Profile Info */}
        <div className="flex flex-col md:flex-row justify-between items-center !mb-10">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center md:justify-start">
            <Avatar className="size-36 -mt-24 md:mt-0 md:size-24 lg:size-36 lg:-mt-16 mr-4 border-4 border-background rounded-3xl">
              <AvatarImage src={data.avatar_url} className="object-cover" alt="الصورة الشخصية" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold flex items-center justify-center md:justify-start gap-1">
                {data.first_name} {data.last_name}
                <IconRosetteDiscountCheckFilled className={cn("fill-pink-500 text-primary-foreground", (!data.cover_image_url || !data.avatar_url) && "hidden")} />
              </h1>
              
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>الصف التاسع</span>
                <span>محافظة حمص</span>
                <span>0 درس مكتمل</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-3 md:mt-0">
            <Button variant="outline">تحديث المعلومات </Button>
            {/* <Button variant="ghost" size="icon">
              <IconDots className="h-4 w-4" />
            </Button> */}
          </div>
        </div>

        {/* تقدم التحقق */}
        <EarnBadge cover={!!data.cover_image_url} avatar={!!data.avatar_url} />
      </div>

      {/* المحتوى الرئيسي */}
      <Tabs defaultValue="about" className="space-y-4">
        <TabsList>
          <TabsTrigger value="about">نبذة</TabsTrigger>
          <TabsTrigger value="progress">التقدم الدراسي</TabsTrigger>
          <TabsTrigger value="courses">الدورات</TabsTrigger>
          <TabsTrigger value="achievements">الإنجازات</TabsTrigger>
          <TabsTrigger value="homework">المجتمع</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-6">
          {/* التحليلات */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4 space-y-4">
              <h3 className="font-semibold">إحصائيات التعلم</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">
                    الدروس المكتملة
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">
                    الواجبات المنجزة
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">
                    الاختبارات
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">
                    ساعات الدراسة
                  </div>
                </div>
              </div>
            </Card>

            {/* مستوى التقدم */}
            <Card className="p-4 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">المستوى الدراسي</h3>
                <span className="text-4xl font-bold">1</span>
              </div>
              <p className="text-sm text-muted-foreground">
                آخر تحديث في 30 نوفمبر 2023 4:11 م
              </p>
              <Button variant="outline" className="w-full">
                أكمل الاختبار التشخيصي لتحديد مستواك
              </Button>
            </Card>
          </div>

          {/* الملخص */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">نبذة عني</h3>
            <p className="text-muted-foreground text-sm mb-4">
              أضف نبذة تعريفية عن نفسك وأهدافك الدراسية.
            </p>
            <Button variant="outline">إضافة نبذة</Button>
          </Card>

          {/* الشارات */}
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">الإنجازات</h3>
              <Button variant="link" className="text-sm">
                عرض الكل
              </Button>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="py-2 px-3">
                <IconFlame className="h-4 w-4 mr-2" />
                طالب مجتهد
              </Badge>
            </div>
          </Card>

          {/* المواد المفضلة */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">المواد المفضلة</h3>
            <p className="text-muted-foreground text-sm mb-4">
              حدد المواد الدراسية المفضلة لديك.
            </p>
            <Button variant="outline">إضافة مواد</Button>
          </Card>

          {/* الأهداف */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">أهدافي الدراسية</h3>
            <p className="text-muted-foreground text-sm mb-4">
              حدد أهدافك الدراسية للعام الدراسي الحالي.
            </p>
            <Button variant="outline">إضافة أهداف</Button>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
