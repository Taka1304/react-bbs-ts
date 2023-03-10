import { FC, ReactNode } from 'react'
import Header from './Header'
type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='w-fill min-h-[100vh] text-white bg-[#0d1117]'>
      <Header />
      <div className='p-4 max-w-[1024px] mx-auto'>
        {children}
      </div>
    </div>
  )
}

export default Layout