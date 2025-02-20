"use client"

import VideoPlayer from "@/components/common/video-player";
import CommentsSection from "../../../../../modules/app/subjects/components/lesson/comments";

const Page = () => {
  return (
    <div className={"w-full pb-6"}>
      <VideoPlayer url='https://www.youtube.com/watch?v=WiSQlBcgcyI&list=PLi9uy_md4LMsZtdlckeYsrlF_my3h-qjn' />
      <CommentsSection />
    </div>
  )
}
export default Page
