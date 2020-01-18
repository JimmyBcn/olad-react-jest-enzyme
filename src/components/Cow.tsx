import React from "react";
import Animal from "./Animal";

class Cow extends Animal {

  public render(): JSX.Element {
    return <div>{this.state.sound} My name is {this.props.name}</div>;
  }

  greet(): void {
    this.setState({ sound: "Muuuuuu!!!!" });
  }
}

export default Cow;