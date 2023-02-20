import React from "react";
import classes from "./index.module.scss";

const Cards = ({
       title = "",
       icon = null,
       text = "",
       bg = "",
       imgUrl= null,
       isLeft= true,
   }) =>{

    return(
        <div className={`${classes.cards}`}>
            {icon != null ?
                <div className={`${classes.iconBox} bg-${bg}`}>
                    <i className={icon}></i>
                </div>
            : null}
            {imgUrl != null ?
                <div className={`${classes.imgBox}`}>
                    <img src={imgUrl} alt={title} />
                </div>
            : null}
            <div className={classes.description}>
                <h4>{title}</h4>
                <div className={"text-muted"}>{text}</div>
            </div>
        </div>
    )
}

export default Cards;