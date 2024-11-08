import React, { Component } from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import "./EmployeeList.css";

export default class EmployeeList extends Component {
  render() {
    const TEAM_MEMBERS_NAMES = [
      {
        isActive: false,
        memberName: "Carolein Bloeme",
        isCheckedCircle: false,
      },
      {
        isActive: true,
        memberName: "Sun Jun",
        isCheckedCircle: true,
      },
      {
        isActive: false,
        memberName: "Song Bao",
        isCheckedCircle: false,
      },
      {
        isActive: true,
        memberName: "Olivia Arribas",
        isCheckedCircle: true,
      },
      {
        isActive: false,
        memberName: "Bonginkosi Mdladlana",
        isCheckedCircle: false,
      },
      {
        isActive: true,
        memberName: "Arina Belomestnykh",
        isCheckedCircle: true,
      },
      {
        isActive: true,
        memberName: "Jacqueline Likoki",
        isCheckedCircle: true,
      },
    ];

    return (
      <div className="teams">
        <ul>
          <>
            {TEAM_MEMBERS_NAMES.map((employee, index) => (
              <EmployeeRow
                key={index}
                isActive={employee.isActive}
                memberName={employee.memberName}
                isCheckedCircle={employee.isCheckedCircle}
              />
            ))}
          </>
        </ul>
      </div>
    );
  }
}
