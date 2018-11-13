import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';

class HomeList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'GET_HOME_LIST'
    });
  }

  renderItems() {
    // eslint-disable-next-line
    const { homeList } = this.props;
    return (
      <div className="item">
        <img className="image" alt="" src="" />
      </div>
    );
  }

  render() {
    return (
      <div className="home-list">
        <div className="list-title">
          <span className="title-line" />
          <span>附近商家</span>
          <span className="title-line" />
        </div>
        {this.renderItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeList: state.homeListReducer.homeList
  };
}

export default connect(mapStateToProps)(HomeList);
