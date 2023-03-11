import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  wrap?: boolean
}

const ThreadItem: FC<Props> = ({ children, wrap }) => {
  return (
    <div 
      className="items-center p-2"
      >
      <p className={`truncate ${wrap && "whitespace-pre-wrap"}`}>{children}</p>
    </div>
  )
}

export default ThreadItem