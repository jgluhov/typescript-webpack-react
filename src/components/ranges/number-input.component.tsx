///<reference path="./number-input.component.d.ts" />
import * as React from 'react';

class NumberInputComponent extends React.Component<INumberInputComponentProps, INumberInputComponentState> {

  public controls = {} as NumberInputComponentControls;

  render() {
    return (
      <div>
        <input
          ref={element => this.controls.input = element}
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.value!.toString()}
          onChange={this.props.onUpdate}
        />
        <div>{this.props.value}</div>
      </div>
    );
  }

  public static propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    value: React.PropTypes.number,
    label: React.PropTypes.string,
    onUpdate: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number', 'range'])
  };

  public static defaultProps = {
    min: 0,
    max: 0,
    step: 1,
    value: 0,
    label: '',
    type: 'range'
  }
}

export default NumberInputComponent;
