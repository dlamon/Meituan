import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TabBar from '../TabBar';

class Main extends Component {
  render() {
    return (
      <Fragment>
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
