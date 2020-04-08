import React from 'react'
import style from './Pagination.module.scss'
import CountItem from './CountItem/CountItem'
import arrowLeft from './../../assets/images/arrows/left-arrow.svg'
import arrowRight from './../../assets/images/arrows/right-arrow.svg'

const Pagination = props => {
  let countItem = props.pages.map(p => <CountItem key={p} countNumber={p} currentPage={props.currentPage}  setCurrentPage={props.setCurrentPage}/>)
  return (
    <div className={style.pagination}>
      <button className={style.button}>
        <img src={arrowLeft} alt="arrow" />
      </button>
      <ul className={style.paginationList}>{countItem}</ul>
      <button className={style.button}>
        <img src={arrowRight} alt="arrow" />
      </button>
    </div>
  )
}

export default Pagination
