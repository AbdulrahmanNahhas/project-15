"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { subjects } from "@/data/app/study/subjects";
export default function Learn () {
  return (
    <div className="container mx-auto">
      <h1 className={"my-6 font-bold text-3xl mx-auto border-b pb-5"}>
        المواد الدراسية
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-6 container mx-auto">
        {subjects.map((subject, index) => (
          <Card key={index} className="group hover:bg-accent shadow-none">
            <Link href={`/learn/1`} className="flex md:flex-col gap-0 p-3 md:pb-0">
              <CardHeader
                className={
                  "flex items-center justify-center rounded-xl md:rounded-xl w-32 h-32 md:!w-full md:size-36"
                }
                style={{backgroundColor: subject.color + "50", color: subject.color, borderColor: subject.color}}
              >
                {subject.icon}
              </CardHeader>
              <CardContent className="p-3 pt-4 flex flex-col gap-2 md:gap-1">
                <h1 className="text-2xl md:text-xl lg:text-xl font-bold pb-2">
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
  )
}