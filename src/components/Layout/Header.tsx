import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Anchor } from '../foundation/Anchor/Anchor'

const Header: FC = () => {
  const router = useLocation()
  return (
    <header className='flex flex-row items-center justify-between bg-[#282c34] text-white h-16 px-4'>
      <span className='text-2xl font-bold'>
        掲示板
      </span>
      <nav className='flex items-center'>
        {router.pathname !== "/thread/new" && <Anchor href="/thread/new" className="m-2 md:text-lg">新規スレッド</Anchor>}
        {router.pathname !== "/" && <Anchor href="/" className="m-2 md:text-lg">スレッド一覧</Anchor>}
      </nav>
    </header>
  )
}

export default Header