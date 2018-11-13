import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './index.scss';

class Category extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'GET_CATEGORY_ITEMS'
    });
  }

  renderItems() {
    const { items } = this.props;
    items.splice(8);
    return items.map(item => (
      <div className="category-item" key={item.code}>
        <img alt="icon" className="item-icon" src={item.gray_url} />
        <div className="item-name">{item.name}</div>
      </div>
    ));
  }

  render() {
    return (
      <div className="category-content clearfix">
        {this.renderItems()}
      </div>
      /*
      <div className="category-content clearfix">
        <div className="category-item">
          <img alt="icon" className="item-icon" src="./image/type1.png" />
          <div className="item-name">美食</div>
        </div>
        <div className="category-item">
          <img alt="icon" className="item-icon" src="./image/type1.png" />
          <div className="item-name">美食</div>
        </div>
        <div className="category-item">
          <img alt="icon" className="item-icon" src="./image/type1.png" />
          <div className="item-name">美食</div>
        </div>
        <div className="category-item">
          <img alt="icon" className="item-icon" src="./image/type1.png" />
          <div className="item-name">美食</div>
        </div>
        <div className="category-item">
          <img alt="icon" className="item-icon" src="./image/type1.png" />
          <div className="item-name">美食</div>
        </div>
        <div className="category-item">
          <img alt="icon" className="item-icon" src="./image/type1.png" />
          <div className="item-name">美食</div>
        </div>
        <div className="category-item">
          <img alt="icon" className="item-icon" src="./image/type1.png" />
          <div className="item-name">美食</div>
        </div>
        <div className="category-item">
          <img alt="icon" className="item-icon" src="./image/type1.png" />
          <div className="item-name">美食</div>
        </div>
      </div>
       */
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.categoryReducer.items
  };
}

export default connect(mapStateToProps)(Category);
