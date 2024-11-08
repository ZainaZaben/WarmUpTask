import React, { Component } from "react";
import "./EmployeeRow.css";

export default class EmployeeRow extends Component {
  render() {
    return (
      <li className={`team-member ${this.props.isActive ? "active" : null}`}>
        <p>
          <span className="member-icon">
            <i className="fa fa-user" />
          </span>
          <span>{this.props.memberName}</span>
        </p>
        <p className="circle-container">
          <i
            className={`${
              this.props.isCheckedCircle
                ? "far fa-check-circle"
                : "far fa-circle"
            }`}
          />
        </p>
      </li>
    );
  }
}
