import React from "react";
import Cow from "./components/Cow";
import Hen from "./components/Hen";

export interface IFarmProps {
  location: string;
}

class Farm extends React.Component<IFarmProps>  {
   
  public render(): JSX.Element {
    return (<>
      {this.props.location}
      <Cow name="Rocky"></Cow>
      <Cow name="Lassie"></Cow>
      <Hen name="Chicaleta"></Hen>
    </>);
  }
}

export default Farm;