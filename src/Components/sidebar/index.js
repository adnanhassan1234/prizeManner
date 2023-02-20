import React, { useState } from "react";
import classes from "./index.module.scss";
import Logo from "../Logo";
import Nav from "../Nav/Nav";
import {Button} from "react-bootstrap";

const Sidebar = () => {
  const [show, setShow] = useState(true);
  return (
    <>
    {/*<aside id="aside" className={show ? classes.sidebar : classes.showMenu}>*/}
    <aside id="aside" className={show ? `${classes.sidebar}` : `${classes.sidebar} ${classes.active}`}>
      <Button className={classes.navOpener} onClick={() => setShow(!show)}>
        <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H34" stroke="#D7D7D7" stroke-width="3" stroke-linecap="round"/>
          <path d="M2 13H28" stroke="#D7D7D7" stroke-width="3" stroke-linecap="round"/>
          <path d="M2 24H24" stroke="#D7D7D7" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </Button>
      <Logo />
      <Nav />
    </aside>

      {/*<a className={classes.nav_opener} onClick={() => setshow((prev) => !prev)} href="#">*/}

    </>
  );
};

export default Sidebar;
