import React, { Component } from "react";
import { ImageViewer } from "react-image-viewer-dv";
import logo from "./logo.png";
export default class Nav extends Component {
  render() {
    return (
      <div class="banner">
        <ImageViewer>
          <img src={logo} alt="Swinburne Online logo"></img>
        </ImageViewer>
        <h1>Swinburne Online FAQ Bot</h1>
      </div>
    );
  }
}
