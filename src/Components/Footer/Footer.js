import React from "react";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.policy}>
        <p>Disclaimer & Policy</p>
      </div>
      <div className={classes.designed}>
        <p>Designed and developed by: Kiran, Chennai </p>
      </div>
    </div>
  );
};

export default Footer;
