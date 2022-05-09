import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import isMatch from "date-fns/isMatch";

import classes from "./Home.module.scss";

import WelcomeMessage from "../../Components/Welcome/WelcomeMessage";

const Home = () => {
  const navigate = useNavigate();
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");
  const [regNum, setRegNum] = useState("");
  const [dob, setDob] = useState("");
  const staffIdHandler = (event) => {
    setStaffId(event.target.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const regNumHandler = (event) => {
    setRegNum(event.target.value);
  };

  const dobHandler = (event) => {
    setDob(event.target.value);
  };

  const staffFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(`StaffId : ${staffId} password : ${password}`);
  };
  const studentFormSubmitHandler = (event) => {
    event.preventDefault();

    const dateIsValid = isMatch(dob, "dd-mm-yyyy");

    if (!dateIsValid) {
      alert("Please enter valid date");
    }

    if (dateIsValid) {
      console.log(`regNum : ${regNum} Dob : ${dob}`);
      navigate("home");
    }
  };

  const isNumber = (event) => {
    event = event ? event : window.event;
    var charCode = event.which ? event.which : event.keyCode;

    if ((charCode < 48 || charCode > 57) && charCode !== 45) {
      event.preventDefault();
    }
  };

  return (
    <>
      <WelcomeMessage />
      <div className={classes.home}>
        <div className={classes.formContainer}>
          <h3>Staff Login</h3>
          <form onSubmit={staffFormSubmitHandler}>
            <div className={classes.input}>
              <label htmlFor="StaffId">Staff Id</label>
              <input
                type="text"
                name="staffId"
                value={staffId}
                onChange={staffIdHandler}
              />
            </div>
            <div className={classes.input}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={PasswordHandler}
              />
            </div>
            <div className={classes.action}>
              <button>Login</button>
            </div>
          </form>
        </div>
        <div className={classes.formContainer}>
          <h3>Student Login</h3>
          <form onSubmit={studentFormSubmitHandler}>
            <div className={classes.input}>
              <label htmlFor="regNum">Register Number</label>
              <input
                type="text"
                name="regNum"
                value={regNum}
                onChange={regNumHandler}
              />
            </div>
            <div className={classes.input}>
              <label htmlFor="dob">
                Date of Birth
                <br />
                [DD-MM-YYYY]
              </label>
              <input
                type="text"
                name="dob"
                value={dob}
                onChange={dobHandler}
                onKeyPress={isNumber}
              />
            </div>
            <div className={classes.action}>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
