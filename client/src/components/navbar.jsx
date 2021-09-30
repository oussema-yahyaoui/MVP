import React, { Component } from "react";
import "../navbar.css";
export default class navbar extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <a className="active" href="#home">
            used iphone store
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    );
  }
}
