import React from 'react'
import user1 from "Images/user1.png";
import user2 from "Images/user2.png";
import user3 from "Images/user3.png";
import classes from "./index.module.scss";

const SupportSideBar = () => {
  return (
    <div className={classes.messageListSidebar}>
    <ul>
      <li  className={classes.active}>
        <div className={classes.userImg}>
          <img src={user1} alt="username" />
        </div>
        <div className={classes.description}>
          <h6>Marcus Curtis</h6>
         </div>
      </li>
      
      <li>
        <div className={classes.userImg}>
          <img src={user2} alt="username" />
        </div>
        <div className={classes.description}>
          <h6>Marcus Curtis</h6>
          
       
        </div>
      </li>
      <li>
        <div className={classes.userImg}>
          <img src={user3} alt="username" />
        </div>
        <div className={classes.description}>
          <h6>Marcus Curtis</h6>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default SupportSideBar