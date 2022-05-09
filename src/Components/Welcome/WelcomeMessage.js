import React from "react";

import classes from "./WelcomeMessage.module.scss";

const WelcomeMessage = () => {
  return (
    <div className={classes.msgContainer}>
      <h2 className={classes.welcomeMessage}>
        Welcome to Office of the Controller of Examinantion
      </h2>
    </div>
  );
};

export default WelcomeMessage;
