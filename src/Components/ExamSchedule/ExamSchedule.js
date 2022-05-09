import React from "react";
import classes from "./ExamSchedule.module.scss";

const DUMMY_DATA = [
  {
    date: "19-06-2021",
    session: "FN",
    semester: "04",
    subject: "MA2161-MATHEMATICS-II",
  },
  {
    date: "21-06-2021",
    session: "FN",
    semester: "04",
    subject: "PH2161-ENGINEERING PHYSICS-II",
  },
  {
    date: "22-06-2021",
    session: "FN",
    semester: "04",
    subject: "HS2161-TECHNICAL ENGLISH-II",
  },
  {
    date: "24-06-2021",
    session: "FN",
    semester: "04",
    subject: "EC2151-ELECTRICS CIRCUITS AND ELECTRON DEVICES",
  },
  {
    date: "26-06-2021",
    session: "FN",
    semester: "04",
    subject: "GE2152-BASIC CIVIL AND MECHANICAL ENGINEERING",
  },
];
const ExamSchedule = () => {
  return (
    <>
      <h3>Semester Examination Schedule</h3>
      <table className={classes.scheduleTable}>
        <tbody>
          <tr className={classes.heading}>
            <th>Exam Date</th>
            <th>Session</th>
            <th>Semester</th>
            <th>Subject</th>
          </tr>
          {DUMMY_DATA.map((item, index) => (
            <tr className={classes.data} key={index}>
              <td>{item.date}</td>
              <td>{item.session}</td>
              <td>{item.semester}</td>
              <td className={classes.subject}>{item.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExamSchedule;
