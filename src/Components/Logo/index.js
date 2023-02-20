import {React} from "react";
import classes from "./index.module.scss";
import {Link} from "react-router-dom";
import logoImg from "../../Images/logo.svg"


const Logo = (props) =>{
    return(
        <div className={classes.logo}>
            <Link to={"/"}>
                <img
                    src={logoImg} alt={"Prizeminer"}
                />
            </Link>
        </div>
    )
}

export default Logo;