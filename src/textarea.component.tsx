import * as React from 'react';

type TextareaComponentProps = {};
type TextareaComponentState = {
  currentEvent: string;
};


class TextareaComponent extends React.Component<TextareaComponentProps, TextareaComponentState> {

  constructor() {
    super();
    this.state = {
      currentEvent: '---'
    };
  }

  update(e: Event) {
    this.setState({
      currentEvent: e.type
    });
  }

  render() {
    return (
      <div>
        <textarea
          rows={5}
          onKeyPress={this.update.bind(this)}
          onCopy={this.update.bind(this)}
          onPaste={this.update.bind(this)}
          onCut={this.update.bind(this)}
          onFocus={this.update.bind(this)}
          onBlur={this.update.bind(this)}
          onDoubleClick={this.update.bind(this)}
          onTouchStart={this.update.bind(this)}
          onTouchMove={this.update.bind(this)}
          onTouchEnd={this.update.bind(this)}
        ></textarea>
        <h1>{this.state.currentEvent}</h1>
      </div>);
  }

}

export default TextareaComponent;
