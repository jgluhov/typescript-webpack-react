///<reference path="./buttons.component.d.ts" />

import * as React from 'react';

const MAX_BUTTONS = 3;
const INITIAL_BUTTON_VALUE = 0;

const buttons = new Array(MAX_BUTTONS)
  .fill(INITIAL_BUTTON_VALUE)
  .map((value, i) => ({ value: value + i, text: String.fromCharCode(65 + i) }));

const initialState = {
  buttons: buttons
};

class ButtonsComponent extends React.Component<{}, IButtonsComponentState> {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    return (
      <Buttons>
        {this.state.buttons.map((button: IButton) =>
          <button type="button" key={button.text} value={button.value}>{button.text}</button>)}
      </Buttons>
    );
  }
}

interface IButtonsState {
  selected: string
}

interface IButtonProps extends IButton {
  type: string,
  key: string,
  children: string
}

const buttonsInitialState = {
  selected: 'none'
};

class Buttons extends React.Component<{}, IButtonsState> {
  private children: any;

  constructor() {
    super();
    this.state = buttonsInitialState;
  }

  onSelectHandler(buttonProps: IButtonProps) {
    this.setState({
      selected: buttonProps.children
    });
  }

  childrenExtendHandler(child: React.ReactElement<any>) {
    return React.cloneElement(child, {
      onClick: this.onSelectHandler.bind(this, child.props)
    })
  }

  componentWillMount() {
    this.children = React.Children.map(this.props.children, this.childrenExtendHandler.bind(this));
  }

  render() {
    return (
      <div>
        <h1>You have selected: {this.state.selected}</h1>
        {this.children}
      </div>
    )
  }
}

export default ButtonsComponent;
