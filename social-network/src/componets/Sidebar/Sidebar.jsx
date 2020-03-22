import React from 'react'
import style from './Sidebar.module.scss'
import Navbar from './Navbar/Navbar'
import Friends from './Friends/Friends'
import StoreContext from '../../redux/context-store'

const Sidebar = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        return (
          <div className={style.sidebar}>
            <Navbar />
            <Friends state={store.getState().sidebar.friends} />
          </div>
        )
      }}
    </StoreContext.Consumer>
  )
}

export default Sidebar
