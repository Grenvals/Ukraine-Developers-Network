import React from 'react'
import style from './Header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          UDN <span className={style.name}>Ukraine developers Network</span>
        </div>
        <div className={style.user}>
          <div className={style.user__flag}></div>
          <div className={style.user__name}>Victor</div>
          <div className={style.user__logo}>
            <div className="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHyEwZiidXHLnJ4qyOeJR81Lyx_3Xt9gBQcdvuIZuXr9GVLga8"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
