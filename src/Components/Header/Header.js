import React from "react";

import logo from "../../assets/images/logo.jpg";

import classes from "./Header.module.scss";
const Header = () => {
  return (
    <div className={classes.header}>
      <img className={classes.logo} src={logo} alt="Logo" />
      <div className={classes.title}>
        <h1>Gk University, Chennai</h1>
      </div>
    </div>
  );
};

export default Header;
