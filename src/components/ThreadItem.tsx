import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const ThreadItem: FC<Props> = ({ children }) => {
  return (
    <div 
      className="items-center p-2"
      >
      <p className='truncate'>{children}</p>
    </div>
  )
}

export default ThreadItem