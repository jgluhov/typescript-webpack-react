import * as React from 'react';
import WidgetComponent from './widget.component';

type IHelloComponentProps = {
  message?: string;
  value: number
};

type IHelloComponentState  = {
  message: string,
  cat?: number
};

class HelloComponent extends React.Component<IHelloComponentProps, IHelloComponentState> {

  constructor() {
    super();

    this.state = {
      message: 'This is the state text',
      cat: 7
    };
  }

  onUpdateHandler(value: string) {
    this.setState({ message: value });
  }

  render() {
    // const message = this.props.message!.replace(/New/g, 'Old');

    return (
      <div>
        <WidgetComponent update={this.onUpdateHandler.bind(this)}/>
        <h1>Hello JGluhov - {this.state.message} - {this.props.value}</h1>
        <div>Cat: {this.state.cat}</div>
      </div>
    );
  }

  public static propTypes = {
    message: React.PropTypes.string,
    value: React.PropTypes.number.isRequired
  };

  public static defaultProps = {
    message: 'Happy New Year'
  };
}

// const HelloComponent = () => <h1>Hello JGluhov</h1>;

export default HelloComponent;
