import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormAddAirline from '../FormAddAirline/FormAddAirline';
import AirlineList from '../AirlineList/AirlineList';

// Material-UI ---
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class App extends Component {
  render() {
    return (
      <Container>
        <div>
          <Typography variant="h3">Redux Airport</Typography>
          <FormAddAirline />
          <AirlineList />
        </div>
      </Container>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStoreToProps)(App);
