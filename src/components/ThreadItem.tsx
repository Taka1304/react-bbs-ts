import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  wrap?: boolean
}

const ThreadItem: FC<Props> = ({ children, wrap }) => {
  return (
    <div 
      className="items-center p-2"
      >
      {wrap ? 
      <p className='truncate whitespace-pre-wrap'>{children}</p>
      :
      <p className='truncate'>{children}</p>
      }
    </div>
  )
}

export default ThreadItem