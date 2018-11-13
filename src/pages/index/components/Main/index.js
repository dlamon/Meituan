import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Home from '../Home';
import TabBar from '../TabBar';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        <TabBar />
      </Fragment>
    );
  }
}

// eslint-disable-next-line
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Main);
