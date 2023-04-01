import React, { Component } from "react";
import Loading from "./loading.gif";

export class Spin extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div class="loader">
          <div class="cell d-0"></div>
          <div class="cell d-1"></div>
          <div class="cell d-2"></div>

          <div class="cell d-1"></div>
          <div class="cell d-2"></div>

          <div class="cell d-2"></div>
          <div class="cell d-3"></div>

          <div class="cell d-3"></div>
          <div class="cell d-4"></div>
        </div>
      </div>
    );
  }
}
