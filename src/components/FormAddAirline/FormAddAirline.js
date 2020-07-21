import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormAddAirline extends Component {
  // Local state set up to temporarily store value from input.
  state = {
    enteredAirline: '',
    enteredNumber: '',
  };

  // The handleChange method is the same as before Redux.
  // It just deals with the local state.
  handleInputChange = (event, fieldKey) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  clickAddAirline = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_AIRLINE',
      payload: { airlineFormData: this.state },
    });

    this.setState({
      enteredAirline: '',
      enteredNumber: '',
    });
  };
  render() {
    return (
      <div className="wrapper">
        <h3>Add Airline</h3>
        <form onSubmit={this.clickAddAirline}>
          <input
            onChange={(event) => this.handleInputChange(event, 'enteredAirline')}
            placeholder="Airline Name"
            value={this.state.enteredAirline}
            required
          />
          <input
            onChange={(event) => this.handleInputChange(event, 'enteredNumber')}
            placeholder="Number of Planes"
            value={this.state.enteredNumber}
            required
          />
          <button>Add Airline</button>
        </form>
      </div>
    );
  }
}

// I don't need the code below in this component because I am
// only *sending* data, not viewing data from the store. This
// is only needed when I need to dynamically update.
// ------------------------------------------------
// const mapStoreToProps = (store) => {
//     return {
//       store,
//     };
//   };

//   export default connect(mapStoreToProps)(FormAddAirline);
// ----------------------------------------------------------

export default connect()(FormAddAirline);
