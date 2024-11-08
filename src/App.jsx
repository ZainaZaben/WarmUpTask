import React, { Component } from "react";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import FormActionsControl from "./components/FormActionsControl/FormActionsControl";
import SearchAndEmployeeContainer from "./components/SearchAndEmployeeContainer/SearchAndEmployeeContainer";

function App() {
  return (
    <div className="main-container">
        <HeaderSection/>
        <SearchAndEmployeeContainer />
        <FormActionsControl />
    </div>
  );
}

export default App;
