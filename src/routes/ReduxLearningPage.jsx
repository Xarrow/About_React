import React, {Component} from 'react';
import {createStore} from 'redux';

const defaultState = '梁群茹';

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "add":
      return state+action.payload;
    default:
      return state
  }
};


const  state = reducer(1,{
  type:'add',
  payload:'2'
})

const  storge = createStore(reducer)

