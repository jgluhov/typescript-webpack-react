///<reference path="./ranges.component.d.ts"/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {generateInputs} from './utils';
import NumberInputComponent from './number-input.component';

const MAX_INPUTS: number = 10;
const initialState = {
  inputs: generateInputs(MAX_INPUTS)
};

class RangesComponent extends React.Component<RangesComponentProps, RangesComponentState> {

  private controls = [] as RefsComponentControls;

  constructor() {
    super();
    this.state = initialState;
  }

  findDOMNode(key: number) {
    const foundComponent = this.controls.filter((control: RefsComponentControl) => control.key === key).pop();
    return ReactDOM.findDOMNode(foundComponent!.instance.controls.input) as HTMLInputElement;
  }

  onUpdateHandler() {
    this.state.inputs.forEach((input: IInput) => input.value = +this.findDOMNode(input.key).value);
    this.setState({ ...this.state });
  }

  render() {
    return (
      <div>
        {this.state.inputs.map((input: IInput, index: number) =>
          <NumberInputComponent
            ref={component => this.controls.push({key: index, instance: component})}
            min={input.min}
            key={index}
            max={input.max}
            value={input.value}
            step={1}
            onUpdate={this.onUpdateHandler.bind(this)}
          ></NumberInputComponent>
        )}
      </div>
    )
  }
}

export default RangesComponent;
