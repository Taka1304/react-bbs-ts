import React, { FC, ReactNode } from 'react'
import { Icon } from '../Icon'

type Props = {
  variant: "success" | "warn" | "error"
  children: ReactNode
}

export const Alert: FC<Props> = ({ variant, children }) => {
  return (
    <div className='flex items-center'>
      <Icon
        type="FaCheckCircle"
        size={"1.5em"}
        color={"green"}
        />
      <span className='mx-2'>{children}</span>
    </div>
  )
}
