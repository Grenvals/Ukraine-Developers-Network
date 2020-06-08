import { LikesCount } from '../../../common/likesCount/LikesCount';
import React from 'react';
import { UserPhoto } from '../../../common/UserFoto/UserFoto';
import editImg from '../../../../assets/images/profile/edit.svg';
import style from './Post.module.scss';

const PostItem = props => {
  let deletePost = () => {
    props.deletePost(props.id);
  };
  return (
    <div className={style.post}>
      <div className={style.header}>
        <div className={style.logo}>
          <UserPhoto photo={props.userPhoto} />
        </div>
        <div className="headerBlock">
          <p className={style.title}>{props.userName}</p>
          <div className={style.date}>{props.date}</div>
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
        <p className={style.message}>{props.message}</p>
        {props.image && (
          <div className={style.preview}>
            <img src={props.image} alt="post images" />
          </div>
        )}
      </div>
      <div className="footer">
        <div className="likes">
          <LikesCount likes={props.likes} />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
