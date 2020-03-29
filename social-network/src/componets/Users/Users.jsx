import React from "react";
import style from "./Users.module.scss";
import Header from "../Head/Head";
import User from "./User/User";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 0,
        fullname: 'Ihor Petrichko',
        status: 'finding job',
        location: { country: 'Ukraine', city: 'Kyiv' },
        photoURL:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHyEwZiidXHLnJ4qyOeJR81Lyx_3Xt9gBQcdvuIZuXr9GVLga8',
        followed: false,
      },
      {
        id: 1,
        fullname: 'Anton Dmitriev',
        status: 'finding job',
        location: { country: 'Ukraine', city: 'Kyiv' },
        photoURL:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHyEwZiidXHLnJ4qyOeJR81Lyx_3Xt9gBQcdvuIZuXr9GVLga8',
        followed: true,
      },
      {
        id: 2,
        fullname: 'Kevin Maclein',
        status: 'finding job',
        location: { country: 'Ukraine', city: 'Kyiv' },
        photoURL:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHyEwZiidXHLnJ4qyOeJR81Lyx_3Xt9gBQcdvuIZuXr9GVLga8',
        followed: false,
      },
    ])
  }
  let user = props.users.map(u => (
    <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow}  />
  ))

  return (
  <div className={style.users}>
    <Header />
  <ul className="body">{user}</ul>
  </div>
  )
};  

export default Users;
