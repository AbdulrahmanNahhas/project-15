"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import {cn} from "@/lib/utils";

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
})

const VideoPlayer = ({ url, className }: {url: string, className?: string}) => {
  return (
    <div className="aspect-video w-full max-w-4xl !rounded-3xl overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <ReactPlayer
          className={cn(className, "md:!rounded-3xl overflow-hidden")}
          url={url}
          width="100%"
          height="100%"
          controls={true}
        />
      </Suspense>
    </div>
  )
}

export default VideoPlayer