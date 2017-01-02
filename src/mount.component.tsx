import * as React from 'react';
import * as ReactDOM from 'react-dom';

type MountComponentState = {
  value: number;
  multiply?: number
};

const initialState = {
  value: 0
};

class MountComponent extends React.Component<{}, MountComponentState> {

  private incrementInterval: number;

  constructor() {
    super();

    this.state = initialState;
  }

  update() {
    this.setState({
      ...this.state,
      value: this.state.value + 1
    })
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.setState({
      ...this.state,
      multiply: 2
    })
  }

  render() {
    console.log('rendert');

    return (
      <button type="button" onClick={this.update.bind(this)}>
        {this.state.value * this.state.multiply}
      </button>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(ReactDOM.findDOMNode(this));
    this.incrementInterval = setInterval(this.update.bind(this), 500);
  }

  componentWillUnmount() {
    console.log('componentWillUnMount');
    clearInterval(this.incrementInterval);
  }
}

class WrapperComponent extends React.Component<{}, {}> {

  private contentElement: HTMLElement;

  constructor() {
    super();
  }

  mount() {
    ReactDOM.render(<MountComponent/>, this.contentElement);
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(this.contentElement);
  }

  componentDidMount() {
    this.contentElement = document.getElementById('a') as HTMLElement;
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.mount.bind(this)}>Mount</button>
        <button type="button" onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    );
  }
}

export default WrapperComponent;
