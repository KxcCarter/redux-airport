import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormAddAirline from '../FormAddAirline/FormAddAirline';

class App extends Component {
  render() {
    const airlinesInAirport = this.props.store.airlineList.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item}</td>
        </tr>
      );
    });
    return (
      <div>
        <h1>Redux Airport</h1>
        <FormAddAirline />
        <table>{airlinesInAirport}</table>
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
