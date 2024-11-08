import React, { Component } from "react";
import SearchField from "../SearchField/SearchField";
import EmployeeList from "../EmployeeList/EmployeeList";
import "./SearchAndEmployeeContainer.css";

export default class MainSection extends Component {
  render() {
    return (
      <section className="search-and-employee-container">
        <SearchField></SearchField>
        <EmployeeList></EmployeeList>
      </section>
    );
  }
}
