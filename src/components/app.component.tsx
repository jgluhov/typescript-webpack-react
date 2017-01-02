import * as React from 'react';

class AppComponent extends React.Component<{}, {}> {
  render() {
    return <ButtonComponent>I <HeartComponent /> JGluhov</ButtonComponent>;
  }
}

class ButtonComponent extends React.Component<{}, {}> {
  render() {
    return <button>{this.props.children}</button>;
  }
}

class HeartComponent extends React.Component<{}, {}> {
  render() {
    return <span>&hearts;</span>;
  }
}

export default AppComponent;


