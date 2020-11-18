import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import manageUsers from './reducers/manageUsers'


// add imports and code

//we use the redux provided function createStore by importing the function from reduxe
//We then pass the function into our store using the create store function and our reducer
import { createStore } from 'redux'
const store = createStore(manageUsers);


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
