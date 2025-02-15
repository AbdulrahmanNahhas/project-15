import { IconLoader2 } from '@tabler/icons-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen z-50 absolute top-0 right-0 bg-background'>
      <IconLoader2 className='animate-spin' size={24} />
    </div>
  )
}

export default Loading