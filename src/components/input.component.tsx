import * as React from 'react';

type InputComponentProps = {
  update: React.EventHandler<React.FormEvent<HTMLInputElement>>;
};

type InputComponentRefs = {
  input: HTMLInputElement;
};

class InputComponent extends React.Component<InputComponentProps, {}> {

  public controls = {} as InputComponentRefs;

  render() {
    return (
      <div>
        <input
          type="text"
          ref={element => this.controls.input = element}
          onChange={this.props.update}
        />
      </div>
    )
  }
}

export default InputComponent;
