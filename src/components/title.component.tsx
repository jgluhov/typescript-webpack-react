import * as React from 'react';

type TitleComponentProps = {
  text: string
};

class TitleComponent extends React.Component<TitleComponentProps, {}> {
  render() {
    return <h1>Title: {this.props.text}</h1>
  }

  public static propTypes = {
    text(props: TitleComponentProps, propName: string) {
      if(props.text.length < 6) {
        throw new Error(`'${propName}' was too short.`);
      }
    }
  }
}

export default TitleComponent;
