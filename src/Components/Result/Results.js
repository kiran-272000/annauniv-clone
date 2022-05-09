import React from "react";

import classes from "./Results.module.scss";

const Result = {
  Year: "2020",
  Month: "April / May",
  result: [
    { Sem: "06", Code: "EC2021", Grade: "D" },
    { Sem: "06", Code: "EC2351", Grade: "C" },
    { Sem: "06", Code: "EC2354", Grade: "E" },
    { Sem: "06", Code: "MA2351", Grade: "B" },
  ],
};

const Results = ({ DUMMY_DATA }) => {
  return (
    <>
      <h2> Result for April/May 2020</h2>
      <table>
        <tbody>
          <tr>
            <td>Resister Number:</td>
            <td>{DUMMY_DATA.registerNumber}</td>
          </tr>
          <tr>
            <td>Name :</td>
            <td>{DUMMY_DATA.name}</td>
          </tr>
          <tr>
            <td>Branch :</td>
            <td>{DUMMY_DATA.branch}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th>Semester</th>
            <th>Subject Code</th>
            <th>Grade</th>
            <th>Result</th>
          </tr>
          {Result.result.map((item) => (
            <tr>
              <td>{item.Sem}</td>
              <td>{item.Code}</td>
              <td>{item.Grade}</td>
              <td>{item.Grade === "U" ? "FAIL" : "PASS"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Results;
