import React from "react";

import classes from "./Profile.module.scss";

const Profile = ({ DUMMY_DATA }) => {
  return (
    <>
      <h3>Student Profile</h3>
      <table>
        <tbody>
          <tr>
            <th className={classes.heading}>Register Number</th>
            <td className={classes.data}>{DUMMY_DATA.registerNumber}</td>
          </tr>
          <tr>
            <th className={classes.heading}>Name</th>
            <td className={classes.data}>{DUMMY_DATA.name}</td>
          </tr>
          <tr>
            <th className={classes.heading}>Branch</th>
            <td className={classes.data}>{DUMMY_DATA.branch}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Profile;
