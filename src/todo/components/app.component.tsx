import * as React from 'react';
import HeaderComponent from './header.component';
import MainComponent from './main.component';
import FooterComponent from './footer.component';

class AppComponent extends React.Component
  <IAppComponent.Props, IAppComponent.State> {

  render() {
    return (
      <div className="container">
        <HeaderComponent />
        <MainComponent filter={this.props.params.filter}/>
        <FooterComponent />
        </div>
    )
  }
}

export default AppComponent;
