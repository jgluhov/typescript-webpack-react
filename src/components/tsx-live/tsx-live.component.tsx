///<reference path="./tsx-live.component.d.ts"/>

import * as React from 'react';
import './tsx-live.component.css';
const Babel = require('babel-standalone');

const initialState = {
  input: '/* add your tsx here */',
  output: '',
  error: ''
};

class TSXLiveComponent extends React.Component<{}, TSXLiveComponentState> {
  constructor() {
    super();

    this.state = initialState;
  }

  onChangeHandler(e: Event) {
    const textareaElement = e.target as HTMLTextAreaElement;

    try {
      const code = Babel.transform(textareaElement.value, {
        presets: ['es2015', 'react']
      }).code;

      this.setState({
        ...this.state,
        output: code,
        error: initialState.error
      })
    } catch (error) {
      this.setState({
        ...this.state,
        output: initialState.output,
        error: error.message
      })
    }
  }

  onFocusHandler(e: Event) {
    const textareaElement = e.target as HTMLTextAreaElement;
    textareaElement.select();
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <textarea
            defaultValue={this.state.input}
            onChange={this.onChangeHandler.bind(this)}
            onFocus={this.onFocusHandler.bind(this)}
          ></textarea>
          <div className="alert">{this.state.error}</div>
        </div>
        <pre>
          {this.state.output}
        </pre>
      </div>
    );
  }
}

export default TSXLiveComponent;