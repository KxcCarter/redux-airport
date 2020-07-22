import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

// This is a reducer. It handles state for arrays or objects.

const defaultAirlineList = [
  { airline: 'Luftansa', numberOfPlanes: 24 },
  { airline: 'Delta', numberOfPlanes: 15 },
];

const airlineList = (state = defaultAirlineList, action) => {
  console.log(action);
  if (action.type === 'ADD_AIRLINE') {
    // change structure
    let newPlane = {
      airline: action.payload.airlineFormData.enteredAirline,
      numberOfPlanes: action.payload.airlineFormData.enteredNumber,
    };
    return [...state, newPlane];
  }

  // A reducer always has to return something.
  return state;
};

// This can be called anything.
// It takes all the reducers as arguments.
const storedInformation = createStore(
  combineReducers({
    airlineList,
  })
);

// Wrap App in Provider to give App access to state stored in index.js
ReactDOM.render(
  <Provider store={storedInformation}>
    <App />
  </Provider>,
  document.getElementById('root')
);
