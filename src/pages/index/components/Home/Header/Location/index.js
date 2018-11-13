import React, { PureComponent } from 'react';
import './index.scss';

class Location extends PureComponent {
  render() {
    return (
      <div className="location">
        <div className="icon" />
        <div className="text">重庆市</div>
      </div>
    );
  }
}

export default Location;
