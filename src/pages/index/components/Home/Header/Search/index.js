import React, { PureComponent } from 'react';
import './index.scss';

class Search extends PureComponent {
  render() {
    return (
      <div className="search">
        <input className="input" type="text" placeholder="鸡翅" />
      </div>
    );
  }
}

export default Search;
