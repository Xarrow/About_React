import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import $ from 'jquery';
import axios from 'axios';
import { getRuWeiboResponse } from '../utils/index';
import WeiboEx from '../components/WeiboEx';

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

// $.get('/ru', (data) => {
//   console.log(data);
// });

export default class WeiboPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    getRuWeiboResponse().then((res) => {
      const posts = res.data.cards.map(_card => _card.mblog);
      this.setState({ posts });
    });
  }
  render() {
    return (
      <div>
        <h1>微博</h1>
        {/* <WeiboEx txt={this.state.weiboData.map()} />*/}
        <div>{this.state.posts.map(post => <img src={post.original_pic} />)}
          {/* dangerouslySetInnerHTML={{ __html: post.original_pic }}*/}
          <hr />
          <hr />

        </div>
      </div>
    );
  }
}
