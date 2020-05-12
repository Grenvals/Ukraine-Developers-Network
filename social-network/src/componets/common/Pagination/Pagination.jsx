import React, { useState } from 'react'
import style from './Pagination.module.scss'
import PaginationCountItem from './PaginationCountItem/PaginationCountItem'
import arrowLeft from './../../../assets/images/arrows/left-arrow.svg'
import arrowRight from './../../../assets/images/arrows/right-arrow.svg'

const Pagination = React.memo(props => {
  let [portionNumber, setPortionNumber] = useState(1)
  let pages = [...props.pages]
  let allPagesCount = props.pages.length
  let portionCount = Math.ceil(allPagesCount / props.portionSize)
  let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
  let rightPortionPageNumber = portionNumber * props.portionSize
  let lastPages = []

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
      {leftPortionPageNumber <= 1 ? (
        <span className={`${style.button} ${style.disable}`}>
          {' '}
          <img src={arrowLeft} alt="arrow" />
        </span>
      ) : (
        <button
          className={style.button}
          onClick={() => {
            setPortionNumber(portionNumber - 1)
          }}
        >
          <img src={arrowLeft} alt="arrow" />
        </button>
      )}
      <ul className={style.paginationList}>
        {countItem}
        <li className={style.dots}> ... </li>
        {lastPagesCountItem}{' '}
      </ul>
      <ul></ul>
      {portionNumber < portionCount - 1 ? (
        <button
          className={style.button}
          onClick={() => {
            setPortionNumber(portionNumber + 1)
          }}
        >
          <img src={arrowRight} alt="arrow" />
        </button>
      ) : (
        <span className={`${style.button} ${style.disable}`}>
          <img src={arrowRight} alt="arrow" />
        </span>
      )}
    </div>
  )
})

export default Pagination
