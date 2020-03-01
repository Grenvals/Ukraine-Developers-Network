import React from "react";
import style from "./Dialogs.module.scss";
import Header from "./Head/Head";
import NotificationItem from "./NotificationItem/NotificationItem";

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <Header title="Chat / Messages" />
      <ul className={style.notificationList}>
        <li className={style.notificationItem}>
          <NotificationItem
            link="/dialogs/1"
            userName="Anton Demin"
            messageCount="4"
            lastMessage="Great, I’ll see you tomorrow!..."
          />
        </li>
        <li className={style.notificationItem}>
          <NotificationItem
            link="/dialogs/2"
            userName="Alexander Dmitriew"
            messageCount="10"
            lastMessage="Hi Elaine! I have a question..."
          />
        </li>
        <li className={style.notificationItem}>
          <NotificationItem
            link="/dialogs/3"
            userName="Nicolas Volodin"
            messageCount="3"
            lastMessage="Great, I’ll see you tomorrow!..."
          />
        </li>
        <li className={style.notificationItem}>
          <NotificationItem
            link="/dialogs/4"
            userName="Garold Insbruck"
            messageCount="2"
            lastMessage="Great, I’ll see you tomorrow!..."
          />
        </li>
      </ul>
      <div className={style.chat}>
        <Header title="Alexander Dmitriew" />
        <ul className={style.chatMessage}>
          <li className={style.messageBlock}>
            <div className={style.authorLogo}>
              <img
                src="https://pbs.twimg.com/profile_images/1167923688450052096/wvr50pbL_400x400.jpg"
                alt="logo"
              />
            </div>
            <div className={style.messageItem}>
              Hi James! Please remember to buy the food for tomorrow! I’m gonna
              be handling the gifts and Jake’s gonna get the drinks
            </div>
            <div className={style.messageDate}>Yesterday at 8:10pm</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
