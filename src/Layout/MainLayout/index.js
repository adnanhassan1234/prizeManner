import React from "react";
import classes from "./index.module.scss";
import Sidebar from "../../Components/sidebar";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const MainLayout = ({ children }) => {
  return (
    <div className={classes.wrapper}>
        <ToastContainer />

        <main  id={"main"} className={classes.mainBox}>
          <Sidebar />
          <div className={classes.mainContainer}>
              {children}
          </div>
      </main>
    </div>
  );
};

export default MainLayout;
