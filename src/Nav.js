import React, { Component } from "react";
import logo from "./logo.png";
export default class Nav extends Component {
  render() {
    return (
      <div className="banner">
        <div className="logo">
          <img src={logo} alt="Swinburne Online logo"></img>
        </div>
        <div className="title">
          <h1>Swinburne Online FAQ Bot</h1>
        </div>
      </div>
    );
  }
}
