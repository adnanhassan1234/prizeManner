import React from 'react';
import classes from "./index.module.scss";
import k1 from "../../Images/k1.png";
import k2 from "../../Images/k2.png";
import k3 from "../../Images/k3.png";
import k4 from "../../Images/k4.png";
import k5 from "../../Images/k5.png";
import k6 from "../../Images/k6.png";
import k7 from "../../Images/k7.png";
import k8 from "../../Images/k8.png";
import k9 from "../../Images/k9.png";
import k10 from "../../Images/k10.png";
import k11 from "../../Images/k11.png";
import k12 from "../../Images/k12.png";
import k13 from "../../Images/k13.png";
import k14 from "../../Images/k14.png";
import k15 from "../../Images/k15.png";
import k16 from "../../Images/k16.png";
import k17 from "../../Images/k17.png";
import k18 from "../../Images/k18.png";
import k19 from "../../Images/k19.png";
import k20 from "../../Images/k20.png";
import k21 from "../../Images/k21.png";
import k22 from "../../Images/k22.png";
import k23 from "../../Images/k23.png";
import k24 from "../../Images/k24.png";
import k25 from "../../Images/k25.png";
import k26 from "../../Images/k26.png";
import k27 from "../../Images/k27.png";
import k28 from "../../Images/k28.png";
import k29 from "../../Images/k29.png";
import k30 from "../../Images/k30.png";
import k31 from "../../Images/k31.png";
import k32 from "../../Images/k32.png";

const ToolList = (props) => {

    const toolList = [
        {
            name: "[Player Name]",
            imageUrl: k1,
        },
        {
            name: "[Player Name]",
            imageUrl: k2,
        },
        {
            name: "[Player Name]",
            imageUrl: k3,
        },
        {
            name: "[Player Name]",
            imageUrl: k4,
        },
        {
            name: "[Player Name]",
            imageUrl: k5,
        },
        {
            name: "[Player Name]",
            imageUrl: k6,
        },
        {
            name: "[Player Name]",
            imageUrl: k7,
        },
        {
            name: "[Player Name]",
            imageUrl: k8,
        },
        {
            name: "[Player Name]",
            imageUrl: k9,
        },
        {
            name: "[Player Name]",
            imageUrl: k10,
        },
        {
            name: "[Player Name]",
            imageUrl: k11,
        },
        {
            name: "[Player Name]",
            imageUrl: k12,
        },
        {
            name: "[Player Name]",
            imageUrl: k13,
        },
        {
            name: "[Player Name]",
            imageUrl: k14,
        },
        {
            name: "[Player Name]",
            imageUrl: k15,
        },
        {
            name: "[Player Name]",
            imageUrl: k16,
        },
        {
            name: "[Player Name]",
            imageUrl: k17,
        },
        {
            name: "[Player Name]",
            imageUrl: k18,
        },
        {
            name: "[Player Name]",
            imageUrl: k19,
        },
        {
            name: "[Player Name]",
            imageUrl: k20,
        },
        {
            name: "[Player Name]",
            imageUrl: k21,
        },
        {
            name: "[Player Name]",
            imageUrl: k22,
        },
        {
            name: "[Player Name]",
            imageUrl: k23,
        },
        {
            name: "[Player Name]",
            imageUrl: k24,
        },
        {
            name: "[Player Name]",
            imageUrl: k25,
        },
        {
            name: "[Player Name]",
            imageUrl: k26,
        },
        {
            name: "[Player Name]",
            imageUrl: k27,
        },
        {
            name: "[Player Name]",
            imageUrl: k28,
        },
        {
            name: "[Player Name]",
            imageUrl: k29,
        },
        {
            name: "[Player Name]",
            imageUrl: k30,
        },
        {
            name: "[Player Name]",
            imageUrl: k31,
        },
        {
            name: "[Player Name]",
            imageUrl: k32,
        },



    ]
    return(
        <>
            <ul className={classes.toolList}>
                {toolList.map((toolList) => (
                    <li>
                        <label className={classes.toolBox}>
                            <input
                                type={"checkbox"}
                                handleClick={props.handleClick}
                                name={toolList.name}
                                id={toolList.id}
                            />
                            <img src={toolList.imageUrl} alt={toolList.name} />
                        </label>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ToolList;