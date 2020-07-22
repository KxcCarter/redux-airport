import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI ---
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, TextField, Grid } from '@material-ui/core';

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
      <Box bgcolor="text.secondary">
        <Typography variant="h5">Add Airline</Typography>
        <Grid container justify="center" spacing={2}>
          <form onSubmit={this.clickAddAirline}>
            <Grid item>
              <TextField
                required
                id="standard-required"
                label="Required"
                helperText="eg. Bob's Discount Airlines"
                value={this.state.enteredAirline}
                onChange={(event) => this.handleInputChange(event, 'enteredAirline')}
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                required
                id="standard-required"
                label="Required"
                helperText="eg. 27"
                value={this.state.enteredNumber}
                onChange={(event) => this.handleInputChange(event, 'enteredNumber')}
              ></TextField>
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" size="large" color="primary">
                Add Airline
              </Button>
            </Grid>
          </form>
        </Grid>
      </Box>
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
