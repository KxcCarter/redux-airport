import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormAddAirline extends Component {
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

  clickAddAirline = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_AIRLINE',
      payload: this.state.enteredAirline,
    });

    this.setState({
      enteredAirline: '',
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.clickAddAirline}>
          <input
            onChange={this.handleInputChange}
            placeholder="Airline Name"
            value={this.state.enteredAirline}
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
