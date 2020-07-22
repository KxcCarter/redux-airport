import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  TableFooter,
} from '@material-ui/core';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

class AirlineList extends Component {
  render() {
    const airport = this.props.store.airlineList.map((item, index) => {
      return (
        <StyledTableRow key={index}>
          <TableCell>{item.airline}</TableCell>
          <TableCell>{item.numberOfPlanes}</TableCell>
        </StyledTableRow>
      );
    });

    let totalPlanes = 0;
    this.props.store.airlineList.forEach((item) => {
      return (totalPlanes += parseInt(item.numberOfPlanes));
    });

    return (
      <div className="wrapper">
        <h3>Airline Data</h3>
        <Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <StyledTableRow>
                  <TableCell>Airline in Airport</TableCell>
                  <TableCell>Number of Planes</TableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>{airport}</TableBody>
              <TableFooter>
                <StyledTableRow>
                  <TableCell align="right">Total Airplanes:</TableCell>
                  <TableCell align="left">{totalPlanes}</TableCell>
                </StyledTableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
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
