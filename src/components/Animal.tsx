import React from "react";

interface IAnimalState {
  sound: string;
}

export interface IAnimalProps {
  name: string;
}

abstract class Animal extends React.Component<IAnimalProps, IAnimalState> {
  constructor(props: IAnimalProps) {
    super(props);
    this.state = {
      sound: ""
    };
  }

  componentDidMount() {
    this.greet();
  }

  abstract greet(): void;
}

export default Animal;