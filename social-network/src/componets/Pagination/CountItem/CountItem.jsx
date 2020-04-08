import React from 'react'
import style from './CountItem.module.scss'

const СountItem = props => {
  let setCurrentPage = () => {
    props.setCurrentPage(props.countNumber)

  } 

  return (
    <li className={ props.countNumber === props.currentPage ? `${style.countItem} ${style.active}` : style.countItem } onClick={setCurrentPage}>{props.countNumber} 
    </li>
  )
}

export default СountItem
