import React, { FC, ReactNode } from 'react'
import { Icon } from '../Icon'

type Props = {
  variant: "success" | "warn" | "error"
  children: ReactNode
}

export const Alert: FC<Props> = ({ variant, children }) => {
  return (
    <div>
      <Icon
        icon="circle-check-solid"
        height={"3"}
        width={"3"}
        color={"[#fff]"}
        />
      {children}
    </div>
  )
}
