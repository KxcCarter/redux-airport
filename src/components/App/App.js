import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  // Local state set up to temporarily store value from input.
  state = {
    enteredAirline: '',
  };

  // The handleChange method is the same as before Redux.
  // It just deals with the local state.
  handleInputChange = (event) => {
    this.setState({
      enteredAirline: event.target.value,
    });
  };

  clickAddAirline = () => {
    this.props.dispatch({
      type: 'ADD_AIRLINE',
      payload: this.state.enteredAirline,
    });
  };

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
        <input onChange={this.handleInputChange} placeholder="Airline Name" />
        <button onClick={this.clickAddAirline}>Add Airline</button>
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
