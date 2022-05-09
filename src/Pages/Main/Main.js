import React, { useState } from "react";
import ExamSchedule from "../../Components/ExamSchedule/ExamSchedule";
import Profile from "../../Components/Profile/Profile";
import Results from "../../Components/Result/Results";
import classes from "./Main.module.scss";

const DUMMY_DATA = {
  name: "Kiran V",
  registerNumber: "211717106059",
  branch: "Electronics and Communication Engineering",
};

const Main = () => {
  const [selectedTab, setSelectedTab] = useState("profile");

  const currentTabHandler = (currentTab) => {
    setSelectedTab(currentTab);
  };

  return (
    <>
      <p>Welcome {DUMMY_DATA.name.toUpperCase()} !!</p>
      {/* <div className={classes.container}> */}
      <ul className={classes.tabs}>
        <li
          className={`${classes.tab} ${
            selectedTab === "profile" ? classes.active : ""
          }`}
          onClick={() => currentTabHandler("profile")}
        >
          PROFILE
        </li>
        <li
          className={`${classes.tab} ${
            selectedTab === "examSchedule" ? classes.active : ""
          }`}
          onClick={() => currentTabHandler("examSchedule")}
        >
          EXAM SCHEDULE
        </li>
        <li
          className={`${classes.tab} ${
            selectedTab === "result" ? classes.active : ""
          }`}
          onClick={() => currentTabHandler("result")}
        >
          RESULTS
        </li>
        <li
          className={`${classes.tab} ${
            selectedTab === "elective" ? classes.active : ""
          }`}
          onClick={() => currentTabHandler("elective")}
        >
          ELECTIVE
        </li>
        <li
          className={`${classes.tab} ${
            selectedTab === "grievance" ? classes.active : ""
          }`}
          onClick={() => currentTabHandler("grievance")}
        >
          GRIEVANCE
        </li>
      </ul>
      <div className={classes.main}>
        {selectedTab === "profile" && <Profile DUMMY_DATA={DUMMY_DATA} />}
        {selectedTab === "examSchedule" && <ExamSchedule />}
        {selectedTab === "result" && <Results DUMMY_DATA={DUMMY_DATA} />}
      </div>
    </>
  );
};

export default Main;
