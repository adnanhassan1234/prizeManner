import React from  "react";
import {NavLink} from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "actions/types";
import classes from "./index.module.scss";

const Nav = () => {
    const dispatch = useDispatch();
    const logout = () => {
        // console.log('test');
        localStorage.clear();
        dispatch({
            type: LOGOUT,
        });
    }
    return(
        <>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to={"/dashboard"}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/maps"}>Maps</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/maps/create-map"}>Build a map</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/users"}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/tools"}>Tools</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/assets"}>Assets</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/prize-info"}>Prize Info</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/winner"}>Winner</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/leader-board"}>Leaderboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/music"}>Music</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/notifications"}>Notifications</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/exchange"}>Exchange</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/tutorial"}>Tutorial</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/ads"}>Ads</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/guidelines"}>Guidelines</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/support"}>Support</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"} onClick={logout}>Log out</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;