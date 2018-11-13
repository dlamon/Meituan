import React, { PureComponent } from 'react';
import Header from './Header';
import Category from './Category';
import ItemList from './ItemList';
import './index.scss';

class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <Header />
        <Category />
        <ItemList />
      </div>
    );
  }
}

export default Home;
