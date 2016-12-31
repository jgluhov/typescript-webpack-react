import * as React from 'react';

type IHelloComponentProps = {
  message?: string;
  value: number
};

type IHelloComponentState  = {};

class HelloComponent extends React.Component<IHelloComponentProps, IHelloComponentState> {

  public static propTypes = {
    message: React.PropTypes.string,
    value: React.PropTypes.number.isRequired
  };

  public static defaultProps = {
    message: 'Happy New Year'
  };

  render() {
    const message = this.props.message!.replace(/New/g, 'Old');

    return (
      <div>
        <h1>Hello JGluhov - {message} - {this.props.value}</h1>
      </div>
    );
  }
}

// const HelloComponent = () => <h1>Hello JGluhov</h1>;

export default HelloComponent;
