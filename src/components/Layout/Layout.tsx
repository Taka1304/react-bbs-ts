import { FC, ReactNode } from 'react'
import Header from './Header'
type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='min-h-[100vh] text-white bg-[#0d1117]'>
      <Header />
      <div className='m-4'>
        {children}
      </div>
    </div>
  )
}

export default Layout