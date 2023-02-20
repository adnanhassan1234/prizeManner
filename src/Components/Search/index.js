import React from 'react';
import classes from "./index.module.scss";
import img from "Images/searchIcon.svg";

const Search = (props) => {
  return (
    <div className={classes.searcBox}>
      <input
        type="search"
        placeholder={props.placeholder}
      />
  </div>
  )
}

export default Search