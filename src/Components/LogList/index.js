import React from "react";
import classes from "./index.module.scss";

const LogList = () => {
    const data = [
        {
            time: '11:24 PM',
            date: '08/08',
            description: 'Marie Smith logged in',
        },
        {
            time: '11:24 PM',
            date: '08/08',
            description: 'Marie Smith logged in',
        },
        {
            time: '11:24 PM',
            date: '08/08',
            description: 'Marie Smith logged in',
        },
        {
            time: '11:24 PM',
            date: '08/08',
            description: 'Marie Smith logged in',
        },
        {
            time: '11:24 PM',
            date: '08/08',
            description: 'Marie Smith logged in',
        },
        {
            time: '11:24 PM',
            date: '08/08',
            description: 'Marie Smith logged in',
        },
        {
            time: '11:24 PM',
            date: '08/08',
            description: 'Marie Smith logged in',
        },
    ]
    return(
        <ul className={classes.logList}>
            {data.map((data) => (
                <li>{data.date} / {data.time}: {data.description}</li>
            ))}
        </ul>
    )
}

export default LogList;