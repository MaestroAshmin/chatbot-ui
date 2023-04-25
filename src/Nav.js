import React, { Component } from "react";
import logo from "./logo.png";
export default class Nav extends Component {
  render() {
    return (
      <div class="banner">
        <img src={logo} alt="Swinburne Online logo"></img>
        <h1>Swinburne Online FAQ Bot</h1>
      </div>
    );
  }
}
