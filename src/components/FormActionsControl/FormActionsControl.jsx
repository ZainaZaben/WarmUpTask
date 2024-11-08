import React, { Component } from "react";
import "./FormActionsControl.css";

export default class FormActionsControl extends Component {
  render() {
    return (
      <footer className="footer">
        <button className="btn">Cancel</button>
        <button className="btn active">SAVE</button>
      </footer>
    );
  }
}
