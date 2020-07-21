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
      <div className="wrapper">
        <h3>Airline Data</h3>
        <table>
          <thead>
            <tr>
              <th>Airline in Airport</th>
              <th>Planes in Airport</th>
            </tr>
          </thead>
          <tbody>{airlinesInAirport}</tbody>
        </table>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStoreToProps)(AirlineList);
