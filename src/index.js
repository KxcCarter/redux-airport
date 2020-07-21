import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// This is a reducer. It handles state for arrays or objects.

const defaultAirlineList = [{ airline: 'Luftansa', numberOfPlanes: 24 }];

const airlineList = (state = defaultAirlineList, action) => {
  if (action.type === 'ADD_AIRLINE') {
    // I'm only sending a string on payload, so I don't need to add
    // anything like '.data' or '.myAddedStuff'
    return [...state, action.payload];
  }

  // state currently is an array that holds 'Luftansa'
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
