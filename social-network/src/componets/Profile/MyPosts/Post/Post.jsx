import React from 'react'
import style from './Post.module.scss'
import editImg from '../../../../assets/images/profile/edit.svg'

const PostItem = React.memo(props => {
  let deletePost = () => {
    props.deletePost(props.id)
  }
  return (
    <div className={style.post}>
      <div className={style.header}>
        <div className={style.logo}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHyEwZiidXHLnJ4qyOeJR81Lyx_3Xt9gBQcdvuIZuXr9GVLga8"
            alt="logo"
          />
        </div>
        <div className="headerBlock">
          <p className={style.title}>{props.message}</p>
          <div className={style.date}>11.12.2020</div>
        </div>
        <div className={style.change}>
          <img className={style.change__img} src={editImg} alt="edit" />
          <ul className={style.change__list}>
            <li className={style.change__item}>
              <button className={style.change__button} onClick={deletePost}>
                delete post
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <p className={style.message}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          quasi, earum dicta aliquid odio vero maxime itaque minima quae
          repudiandae ea. Modi sed fuga quibusdam assumenda quae repudiandae sit
          possimus!{' '}
        </p>
        <div className={style.preview}>
          <img
            src="https://www.theswissholidays.com/rail-tour-packages/rail-tour-packages/images/glaciar-express-banner.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="footer">
        <div className="likes">
          <div className="likeCount">Likes {props.likes}</div>
        </div>
      </div>
    </div>
  )
})

export default PostItem
