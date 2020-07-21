import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormAddAirline from '../FormAddAirline/FormAddAirline';
import AirlineList from '../AirlineList/AirlineList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Airport</h1>
        <FormAddAirline />
        <AirlineList />
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStoreToProps)(App);
