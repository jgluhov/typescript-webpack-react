import * as React from 'react';

type WidgetComponentProps = {
  update: Function
};

type WidgetComponentState = {
  value: string
};

export default class WidgetComponent extends React.Component<WidgetComponentProps, WidgetComponentState> {

  onChangeHandler(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.setState({value: inputElement.value});
  }

  onSubmitHandler(e: Event) {
    e.preventDefault();

    this.props.update(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler.bind(this)}>
        <label>
          Message:
          <input type='text' onChange={this.onChangeHandler.bind(this)} />
        </label>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}
