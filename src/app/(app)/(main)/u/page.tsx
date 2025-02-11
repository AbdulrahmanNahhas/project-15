import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Zap } from "lucide-react"
import EarnBadge from "@/modules/app/ui/components/user/earn-badge"

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-10">
          <div className="flex gap-4 items-center">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src="/profile.png"
                alt="الصورة الشخصية"
              />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold">أحمد محمد</h1>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>الصف التاسع</span>
                <span>محافظة دمشق</span>
                <span>0 درس مكتمل</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">تعديل الملف</Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* تقدم التحقق */}
        <EarnBadge />
      </div>

      {/* المحتوى الرئيسي */}
      <Tabs defaultValue="about" className="space-y-4">
        <TabsList>
          <TabsTrigger value="about">نبذة</TabsTrigger>
          <TabsTrigger value="courses">الدروس</TabsTrigger>
          <TabsTrigger value="homework">الواجبات</TabsTrigger>
          <TabsTrigger value="progress">التقدم الدراسي</TabsTrigger>
          <TabsTrigger value="achievements">الإنجازات</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-6">
          {/* التحليلات */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4 space-y-4">
              <h3 className="font-semibold">إحصائيات التعلم</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">الدروس المكتملة</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">الواجبات المنجزة</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">الاختبارات</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">ساعات الدراسة</div>
                </div>
              </div>
            </Card>

            {/* مستوى التقدم */}
            <Card className="p-4 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">المستوى الدراسي</h3>
                <span className="text-4xl font-bold">1</span>
              </div>
              <p className="text-sm text-muted-foreground">آخر تحديث في 30 نوفمبر 2023 4:11 م</p>
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
                <Zap className="h-4 w-4 mr-2" />
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
  )
}
