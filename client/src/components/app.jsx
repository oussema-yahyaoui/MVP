import React, { Component } from "react";
import Addproduct from "./Addproduct.jsx";
import Navbar from "./navbar.jsx";
import Listphone from "./Listphone.jsx";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Addproduct />
        <Listphone />
      </div>
    );
  }
}
