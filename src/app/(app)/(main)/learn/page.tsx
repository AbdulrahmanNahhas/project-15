"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@ui//card";
import Link from "next/link";
import { subjects } from "@/data/app/study/subjects";

export default function Learn() {
  return (
    <div className="container mx-auto">
      <h1 className={"my-6 font-bold text-3xl mx-auto border-b pb-5"}>
        المواد الدراسية
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-6 container mx-auto">
        {subjects.map((subject, index) => (
          <Card key={index} className="group hover:bg-accent shadow-none">
            <Link href={`/learn/1`} className="flex items-start md:block flex-row md:flex-col gap-2 p-3 md:p-0 md:pb-2">
              <CardHeader className="md:w-full p-0 flex flex-row items-center gap-4">
                <div
                  className={
                    "flex items-center justify-center rounded-xl md:rounded-b-none p-2 w-16 h-16 md:!w-full md:size-36"
                  }
                  style={{
                    backgroundColor: subject.color + "50",
                    color: subject.color,
                    borderColor: subject.color,
                  }}
                >
                  {subject.icon}
                </div>
              </CardHeader>
              <CardContent className="p-2 md:p-3 md:pt-4 flex flex-col gap-2 md:gap-1 flex-1 w-full">
                <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-xl font-bold md:pb-2">
                  {subject.title}
                </h1>
                <p className="md:text-sm text-foreground/75">
                  {subject.description}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
