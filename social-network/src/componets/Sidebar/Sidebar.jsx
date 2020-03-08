import React from 'react'
import style from './Sidebar.module.scss'
import Navbar from './Navbar/Navbar'
import Friends from './Friends/Friends'

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Navbar />
      <Friends />
    </div>
  )
}

export default Sidebar
