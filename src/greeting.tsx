import * as React from 'react';

type GreetingProps = {
  name: string
}

class Greeting extends React.Component<GreetingProps, {}> {
  render() {
    return <div>Hello, {this.props.name}</div>
  }
}


export default Greeting;
