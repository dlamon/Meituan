import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HeaderBar from './HeaderBar';
import './index.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <HeaderBar />
        <img className="header-img" alt="背景图" src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" />
      </div>
    );
  }
}

export default connect()(Header);
