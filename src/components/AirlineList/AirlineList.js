import React, { Component } from 'react';
import { connect } from 'react-redux';

class AirlineList extends Component {
  render() {
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
          <th>Airline in Airport</th>
          <th>Planes in Airport</th>
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
