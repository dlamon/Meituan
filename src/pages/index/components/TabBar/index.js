import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';

class TabBar extends Component {
  handleClickTabItem = (activeKey) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'TAB_CHANGED',
      payload: { activeKey }
    });
  }

  renderItems() {
    const { tabs, activeKey } = this.props;
    return tabs.map(tab => {
      const { key, name } = tab;
      let cls = `tab-item ${key}`;
      if (activeKey === key) {
        cls = `${cls} active`;
      }
      return (
        <div className={cls} key={key} onClick={() => this.handleClickTabItem(key)}>
          <div className="tab-icon" />
          <div className="tab-name">{name}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="tab-bar">
        {this.renderItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabReducer.tabs,
    activeKey: state.tabReducer.activeKey
  };
}

export default connect(mapStateToProps)(TabBar);
