import React, { FC, ReactNode } from 'react'

type Props = {
  threadId: string
  children: ReactNode
}

const Thread: FC<Props> = ({ threadId, children }) => {
  return (
    <a 
      href={`/thread/${threadId}`}
      className="items-center w-3/4 p-2"
      >
      <span className='overflow-hidden'>{children}</span>
    </a>
  )
}

export default Thread