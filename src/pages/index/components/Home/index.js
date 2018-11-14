import React, { PureComponent } from 'react';
import Header from './Header';
import Category from './Category';
import HomeList from './HomeList';
import './index.scss';

class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <Header />
        <Category />
        <HomeList />
      </div>
    );
  }
}

export default Home;
