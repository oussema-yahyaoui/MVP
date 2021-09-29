import React, { Component } from "react";
import Addproduct from "./Addproduct.jsx";
import Navbar from "./navbar.jsx";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Addproduct />
      </div>
    );
  }
}
