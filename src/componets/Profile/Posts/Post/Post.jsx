import React from 'react';

import editImg from '../../../../assets/images/profile/edit.svg';
import { UserPhoto } from '../../../common/UserFoto/UserFoto';
import { LikesCount } from '../../../common/likesCount/LikesCount';

import style from './Post.module.scss';

const Post = ({ id, userPhoto, userName, date, message, image, likes, deletePost }) => {
  const onDeletePost = () => {
    deletePost(id);
  };
  return (
    <div className={style.post}>
      <div className={style.post__header}>
        <UserPhoto className={style.post__logo} photo={userPhoto} />
        <div className="headerBlock">
          <p className={style.post__title}>{userName}</p>
          <div className={style.post__date}>{date}</div>
        </div>
        <div className={style.change}>
          <img className={style.change__img} src={editImg} alt="edit" />
          <ul className={style.change__list}>
            <li className={style.change__item}>
              <button className={style.change__button} onClick={onDeletePost}>
                delete post
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.post__content}>
        <p className={style.post__message}>{message}</p>
        {image && (
          <div className={style.post__img}>
            <img src={image} alt="post" />
          </div>
        )}
      </div>
      <div className={style.post__footer}>
        <LikesCount likes={likes} />
      </div>
    </div>
  );
};

export { Post };
