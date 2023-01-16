import React, { Component } from "react";

export default class Lifecycle extends Component {
  componentDidUpdate() {
    console.log("Componenent is updated");
  }

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}
