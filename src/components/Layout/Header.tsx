import React, { FC } from 'react'

const Header: FC = () => {
  return (
    <header className='flex flex-row items-center justify-between bg-[#282c34] text-white h-16 px-4'>
      <span className='text-2xl font-bold'>
        掲示板
      </span>
      <nav className='flex items-center underline'>
        <a href="/thread/new" className="m-2 md:text-lg">新規スレッド</a>
        <a href="/" className="m-2 md:text-lg">スレッド一覧</a>
      </nav>
    </header>
  )
}

export default Header