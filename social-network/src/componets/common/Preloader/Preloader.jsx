import React from 'react'
import style from './Preloader.module.scss'
import preloader from '../../../assets/images/preloader.svg'

const Preloader = props => {
  return (
    <div className={style.preloader}>
      <img className={style.item} src={preloader} alt="preloader" />
    </div>
  )
}

export default Preloader
