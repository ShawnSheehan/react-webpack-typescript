import * as React from "react";

interface IProps {
  title: string;
}
export default class App extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
