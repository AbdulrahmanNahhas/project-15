"use client";

import { Card, CardContent, CardHeader } from "@ui//card";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

interface SubjectCardProps {
  subject: {
    id: number;
    title: string;
    description?: string;
    icon: JSX.Element;
    color: string;
  }
}

const SubjectCard = ({ subject }: SubjectCardProps) => {
  return (
    <Card className="hover:bg-accent/50 focus:bg-accent/50 shadow-none min-w-52 w-full sm:flex-1 border-0 border-b last-of-type:border-b-0 sm:last-of-type:border-b sm:border p-3 xs:p-0 rounded-none sm:rounded-sm">
      <Link
        href={`/subjects/${subject.id}`}
        className="flex flex-row sm:flex-col gap-2 p-0 xs:p-3 sm:gap-0 sm:p-0 sm:pb-2 items-center sm:items-start w-full"
      >
        <CardHeader className="size-16 xs:mt-0 sm:mt-0 xs:size-20 sm:h-36 sm:w-full rounded-xl sm:rounded-b-none p-0 flex items-center justify-center gap-4 bg-accent">
          <Image
            src={"/study/Algebra.png"}
            alt={subject.title}
            width={900}
            height={400}
            className="rounded-xl sm:rounded-b-none p-0 h-full w-full object-cover"
          />
        </CardHeader>
        <CardContent className="p-2 sm:p-3 sm:pt-4 flex flex-col gap-2 sm:gap-1 flex-1 w-full sm:border-t">
          <h1 className="text-xl sm:text-2xl lg:text-xl font-bold sm:pb-2">
            {subject.title}
          </h1>
          <p className="hidden xs:flex leading-8 sm:text-sm text-foreground/75">
            {subject.description || "لا يوجد وصف متاح."}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default SubjectCard;
