/// <reference path='high-order.component.d.ts'/>
import * as React from 'react';

const initialState: HighOrderComponentState = {
  count: 0
};

const HighOrderComponent = (InnerComponent: any) => class extends React.Component<any, HighOrderComponentState> {

  constructor() {
    super();
    this.state = initialState;
  }

  update() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <InnerComponent {...this.props} {...this.state} update={this.update.bind(this)}/>
    )
  }
};

const ButtonComponent = (props: ButtonComponentProps) =>
  <button onClick={props.update}>{props.children} - {props.count}</button>;

class LabelComponent extends React.Component<LabelComponentProps,{}> {
  render() {
    return <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>;
  }
}

const HighOrderButtonComponent = HighOrderComponent(ButtonComponent);
const HighOrderLabelComponent = HighOrderComponent(LabelComponent);

class ExampleComponent extends React.Component<HighOrderComponentProps, HighOrderComponentState> {
  render() {
    return (
      <div>
        <h1>HighOrderComponent</h1>
        <HighOrderButtonComponent>Label</HighOrderButtonComponent>
        <hr />
        <HighOrderLabelComponent>Hello</HighOrderLabelComponent>
      </div>
    );
  }
}

export default ExampleComponent;