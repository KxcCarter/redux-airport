import React, { Component } from 'react';
import { connect } from 'react-redux';

class AirlineList extends Component {
  render() {
    return <div></div>;
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStoreToProps)(AirlineList);
