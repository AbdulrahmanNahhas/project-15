import React from "react";
import { Badge } from "@ui//badge";
import { Button } from "@ui//button";
import { Layers, Clock, Play, Star, Share2 } from "lucide-react";

const CourseHeader = ({
  title,
  description,
  badge,
  duration,
  lessons,
  rating,
  students,
  reviews,
}: {
  title: string;
  description: string;
  badge: string;
  duration: number;
  lessons: number;
  rating: number;
  students: number;
  reviews: number;
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-6 border-b pb-6">
      <div className="max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-primary/10 p-4 rounded-2xl">
            <Layers className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>

        <p className="text-lg text-muted-foreground mb-6 leading-9">
          {description}
        </p>

        <div className="flex flex-wrap gap-6 text-sm mb-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{badge}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{duration} ساعات</span>
          </div>
          <div className="flex items-center gap-2">
            <Play className="h-4 w-4" />
            <span>{lessons} درس</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-primary" />
            <span>
              {rating} ({reviews} طالب)
            </span>
          </div>
        </div>

        <div className="flex items-center flex-row gap-4 justify-between w-full">
          <div className="flex items-center gap-4">
            <Button className="bg-primary text-white hover:bg-primary/90">
              ابدأ الدورة مجاناً
            </Button>
            <div className="flex items-center gap-2">
              {/* <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <Avatar key={i} className="border-2 border-background">
                  <AvatarImage
                    src={`/placeholder.svg?height=32&width=32`}
                  />
                </Avatar>
              ))}
            </div> */}
              <span className="text-sm text-muted-foreground">
                {students} متعلم
              </span>
            </div>
          </div>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
