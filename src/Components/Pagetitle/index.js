import React from "react";
import classes from "./index.module.scss";

const PageTitle = (prorps) => {
    return (
        <div className={`${classes.pageTitle}`}>
            <h2>{prorps.title}</h2>
        </div>
    )
}

export default PageTitle;