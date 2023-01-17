import React, { Component } from "react";
import Lifecycle from "./Lifecycle";

export default class ClassLifecycle extends Component {
  constructor(props) {
    console.log("first constructor is called");
    super(props);
    this.state = {
      counter: 0,
    };

    this.increment = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
    this.decrement = () => {
      this.setState({ counter: this.state.counter - 1 });
    };
  }

  componentDidMount() {
    console.log("Invoked immediately after component render");
    console.log(".............................");
  }

  componentWillUnmount() {
    console.log("component is unmounted/removed");
  }

  render() {
    console.log(" render is called");
    return (
      <div>
      <Lifecycle number={this.state.counter} />
        <button onClick={this.increment}>click me</button>
        <button onClick={this.decrement}>click me</button>
      </div>
    );
  }
}
