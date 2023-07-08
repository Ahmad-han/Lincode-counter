import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css';
import {App} from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = 0;

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case "plus":
      return state + 1;

    case "minus":
      return state !== 0 ? state - 1 : 0;

    case "reset":
      return 0;

    default:
      return state;
  }
}

const preloadedState = JSON.parse(localStorage.getItem("counter"))

const store = createStore(reducer, preloadedState ? preloadedState : initialState)

store.subscribe(() => {
  localStorage.setItem("counter", store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

