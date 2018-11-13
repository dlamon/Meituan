import React, { PureComponent } from 'react';
import Location from '../Location';
import Search from '../Search';
import './index.scss';

class HeaderBar extends PureComponent {
  render() {
    return (
      <div className="header-bar">
        <Location />
        <Search />
      </div>
    );
  }
}

export default HeaderBar;
