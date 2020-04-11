import React from 'react'
import style from './Pagination.module.scss'
import PaginationCountItem from './PaginationCountItem/PaginationCountItem'
import arrowLeft from './../../../assets/images/arrows/left-arrow.svg'
import arrowRight from './../../../assets/images/arrows/right-arrow.svg'

const Pagination = props => {
  let pages = [...props.pages]
  let allPagesCount = props.pages.length
  let lastPages = []
  for (let i = 0; i <= 2; i++) {
    lastPages.unshift(allPagesCount - i)
    pages.pop()
  }
  let countItem = pages.map(p => (
    <PaginationCountItem
      key={p}
      countNumber={p}
      currentPage={props.currentPage}
      setCurrentPage={props.setCurrentPage}
    />
  ))
  let lastPagesCountItem = lastPages.map(p => (
    <PaginationCountItem
      key={p}
      countNumber={p}
      currentPage={props.currentPage}
      setCurrentPage={props.setCurrentPage}
    />
  ))
  return (
    <div className={style.pagination}>
      <button className={style.button}>
        <img src={arrowLeft} alt="arrow" />
      </button>
      <ul className={style.paginationList}>{countItem}<li className={style.dots}> ... </li>{lastPagesCountItem} </ul>
  <ul></ul>
      <button className={style.button}>
        <img src={arrowRight} alt="arrow" />
      </button>
    </div>
  )
}

export default Pagination
