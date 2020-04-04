import React from "react";
import style from "./Users.module.scss";
import Header from "../Head/Head";
import User from "./User/User";
import * as axios from "axios"

const Users = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      props.setUsers(response.data.items)
    });
    }
  }

  let user = props.users.map(u => (
    <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow}  />
  ))

  return (
  <div className={style.users}>
    <button className={style.button} onClick={getUsers}>Get Users</button>
    <Header />
  <ul className="body">{user}</ul>
  </div>
  )
};  

export default Users;
