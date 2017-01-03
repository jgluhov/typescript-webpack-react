///<reference path="./parent.component.d.ts" />

import * as React from 'react';

class Parent extends React.Component<{},{}> {
  render() {
    return (
      <WrapperComponent>
        <div className="childA"></div>
        <div className="childB"></div>
      </WrapperComponent>
    )
  }
}

class WrapperComponent extends React.Component<WrapperComponentProps, WrapperComponentState> {
  render() {
    // let items = React.Children.map(this.props.children, (child: React.ReactNode) => child);
    // let items = React.Children.toArray(this.props.children);
    React.Children.forEach(this.props.children,
      (child: React.ReactElement<ChildProps>) => console.log(child.props.className));
    // let items = React.Children.only(this.props.children[0]);
    // console.log(items);

    return null;
  }
}

export default Parent;
