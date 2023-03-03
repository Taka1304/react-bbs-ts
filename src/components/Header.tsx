import React, { FC } from 'react'



const Header: FC = () => {
  return (
    <header>
      <span className="header-title">
        けいじばん たいとる
      </span>
      <nav>
        <a href="./thread/new" className="nav-item">新規スレッドをたてる</a>
        <a href="./" className="nav-item">スレッド一覧</a>
      </nav>
    </header>
  )
}

export default Header