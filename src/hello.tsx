import * as React from 'react';

class Hello extends React.Component<{}, {}> {
  render() {
    return React.createElement<{}, HTMLHeadElement>('h1', {}, 'Hello JGluhov');
  }
}

export default Hello;
