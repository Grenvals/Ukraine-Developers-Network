import React from 'react'
import style from './Sidebar.module.scss'
import Navbar from './Navbar/Navbar'
import Friends from './Friends/Friends'

const Sidebar = props => {
  return (
    <div className={style.sidebar}>
      <Navbar />
      <Friends state={props.state} />
    </div>
  )
}

export default Sidebar
