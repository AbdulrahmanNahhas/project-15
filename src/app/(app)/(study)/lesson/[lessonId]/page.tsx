"use client"

import VideoPlayer from "@/components/common/video-player";
import CommentsSection from "../../../../../modules/app/ui/components/learn/lesson/comments";

const Page = () => {
  return (
    <div className={"w-full pb-6"}>
      <VideoPlayer url='https://www.youtube.com/watch?v=OmJ-4B-mS-Y&pp=ygUWVGhlIE1hcCBvZiBNYXRoZW1hdGljcw%3D%3D' />
      <CommentsSection />
    </div>
  )
}
export default Page
