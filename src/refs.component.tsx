import * as React from 'react';
import InputComponent from './input.component';

type RefsComponentProps = {};
type RefsComponentState = {
  a: string,
  b: string
};

type RefsComponentControls = {
  inputComponentA: InputComponent,
  inputComponentB: InputComponent
}

const initialState = {
  a: '',
  b: ''
};

class RefsComponent extends React.Component<RefsComponentProps, RefsComponentState> {

  constructor() {
    super();
    this.state = initialState;
  }

  private controls = {} as RefsComponentControls;

  update() {
    this.setState({
      a: this.controls.inputComponentA.controls.input.value,
      b: this.controls.inputComponentB.controls.input.value
    })
  }

  render() {
    return (
      <div>
        <InputComponent
          ref={component => this.controls.inputComponentA = component}
          update={this.update.bind(this)}
        />
        {this.state.a}
        <hr />
        <InputComponent
          ref={component => this.controls.inputComponentB = component}
          update={this.update.bind(this)}
        />
        {this.state.b}
      </div>
    );
  }
}

export default RefsComponent;
