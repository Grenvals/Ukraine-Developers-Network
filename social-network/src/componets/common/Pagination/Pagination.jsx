import React from 'react'
import style from './Pagination.module.scss'
import PaginationCountItem from './PaginationCountItem/PaginationCountItem'
import arrowLeft from './../../../assets/images/arrows/left-arrow.svg'
import arrowRight from './../../../assets/images/arrows/right-arrow.svg'

const Pagination = props => {
  let pages = [...props.pages]

  let allPagesCount = props.pages.length

  let portionSize = 10
  let portionNumber = 2
  let portionCount = Math.ceil(pages / portionSize)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  let lastPages = []
  let setPortionNumber = num => {
    portionNumber = num
  }
  for (let i = 0; i <= 1; i++) {
    lastPages.unshift(allPagesCount - i)
    pages.pop()
  }
  let countItem = pages
    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
    .map(p => (
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
      <button
        className={style.button}
        onClick={() => {
          setPortionNumber(portionNumber - 1)
        }}
      >
        <img src={arrowLeft} alt="arrow" />
      </button>
      <ul className={style.paginationList}>
        {countItem}
        <li className={style.dots}> ... </li>
        {lastPagesCountItem}{' '}
      </ul>
      <ul></ul>
      <button
        className={style.button}
        onClick={() => {
          setPortionNumber(portionNumber + 1)
        }}
      >
        <img src={arrowRight} alt="arrow" />
      </button>
    </div>
  )
}

export default Pagination
