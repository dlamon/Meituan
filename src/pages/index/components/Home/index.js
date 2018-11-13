import React, { PureComponent, Fragment } from 'react';
import Header from './Header';
import Category from './Category';

class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <Category />
      </Fragment>
    );
  }
}

export default Home;
