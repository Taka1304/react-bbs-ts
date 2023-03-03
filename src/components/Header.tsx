import React, { FC } from 'react'



const Header: FC = () => {
  return (
    <header>
      <span className="">
        けいじばん たいとる
      </span>
      <nav>
        <a href="/thread/new" className="m-2 color-white font-size-[16px]">新規スレッドをたてる</a>
        <a href="/" className="nav-item">スレッド一覧</a>
      </nav>
    </header>
  )
}

export default Header