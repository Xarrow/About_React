import React from 'react';
import { combineReducers, createStore } from 'redux';
import $ from 'jquery';
import axios from 'axios';

// noinspection JSAnnotator
const userReducer = (state = {}, actions) => {
  return state;
};

const tweetReducer = (state = {}, actions) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetReducer,
});
// const reducer = function (state, action) {
//   console.log('==> state is ', state);
//   if (action.type === 'INC') {
//     return state + 1;
//   } if (action.type === 'DEC') {
//     return state - 1;
//   }
//   return state;
// };

// const store = createStore(reducers, {
//   user: {
//     name: 'Will',
//     age: 35,
//   },
//   tweets: [],
// });
const store = createStore(reducers);

store.subscribe(() => {
  console.log('store has chaneged', store.getState());
});

store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'DEC', payload: 1 });

$.get('/ru', (data) => {
  console.log(data);
});

axios.get('/ru').then((response) => {
  console.log(response);
});


function WeiboPage() {
  return <h1>微博</h1>;
}

export default WeiboPage;
