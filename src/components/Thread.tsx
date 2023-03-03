import React, { FC, ReactNode } from 'react'

type Props = {
  threadId: string
  children: ReactNode
}

const Thread: FC<Props> = ({ threadId, children }) => {
  return (
    <a 
      href={`/thread/${threadId}`}
      className="items-center"
      >
      {children}
    </a>
  )
}

export default Thread