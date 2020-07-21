import React, { Component } from 'react';
import { connect } from 'react-redux';

class AirlineList extends Component {
  render() {
    console.log('this.props.store.airlineList: ', this.props.store.airlineList);
    const airlinesInAirport = this.props.store.airlineList.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.airline}</td>
          <td>{item.numberOfPlanes}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Airline in Airport</th>
            <th>Planes in Airport</th>
          </tr>
        </thead>
        <tbody>{airlinesInAirport}</tbody>
      </table>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStoreToProps)(AirlineList);
