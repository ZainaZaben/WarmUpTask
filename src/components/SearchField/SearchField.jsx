import React, { Component } from "react";
import "./SearchField.css";

export default class SearchField extends Component {
  render() {
    return (
      <div className="search">
        <p>
          <i className="fa fa-search" />
        </p>
        <p>Find members</p>
      </div>
    );
  }
}
