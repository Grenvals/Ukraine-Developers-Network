import React from 'react'
import style from './Sidebar.module.scss'
import Navbar from './Navbar/Navbar'
import Friends from './Friends/Friends'

const Sidebar = props => {
  debugger
  return (
    <div className={style.sidebar}>
      <Navbar />
      <Friends state={props.state.friends} />
    </div>
  )
}

export default Sidebar
