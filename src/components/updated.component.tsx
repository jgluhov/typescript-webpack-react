import * as React from 'react';
import * as ReactDOM from 'react-dom';

type UpdatedComponentProps = {
  value?: number;
};

type UpdatedComponentState = {
  increasing: boolean;
};

const defaultProps: UpdatedComponentProps = {
  value: 0
};

const initialState: UpdatedComponentState = {
  increasing: false
};

class UpdatedComponent extends React.Component<UpdatedComponentProps, UpdatedComponentState> {

  private nativeElement: HTMLElement;

  constructor() {
    super();
  }

  update() {
    ReactDOM.render(
      <UpdatedComponent value={this.props.value + 1}/>,
      this.nativeElement
    );
  }

  componentWillReceiveProps(nextProps: UpdatedComponentProps) {
    this.setState({
      increasing: nextProps.value > this.props.value
    });
  }

  shouldComponentUpdate(nextProps: UpdatedComponentProps) {
    return nextProps.value % 5 === 0;
  }

  componentDidUpdate(prevProps: UpdatedComponentProps) {
    console.log(`${prevProps.value}`);
  }

  componentWillMount() {
    this.setState(initialState);
  }

  componentDidMount() {
    this.nativeElement = document.getElementById('root') as HTMLElement;
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.update.bind(this)}>
          Increment {this.props.value}
        </button>
        <div>Increasing: {this.state.increasing.toString()}</div>
      </div>
    );
  }

  public static defaultProps = defaultProps;
}

export default UpdatedComponent;
