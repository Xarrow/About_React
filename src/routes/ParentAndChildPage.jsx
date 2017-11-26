import React, { Component } from 'react';
import { createStore } from 'redux';


function reducer(state = {}, action) {
  return action;
}

const store = createStore(reducer);

class Child1 extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    setTimeout(() => {
      store.dispatch({
        type: 'child1',
        msg: 'hello',
      });
    }, 1000);

    setTimeout(() => {
      store.dispatch({
        type: 'child2',
        msg: 'world',
      });
    }, 3000);
  }
}


class Child2_1 extends Component {
  state = {
    msg: 'start',
  }

  componentDidMount() {
    //  监听action
    store.subscribe(() => {
      const state = store.getState();
      if (state === 'child1') {
        this.setState({
          msg: state.msg,
        });
      }
    });
  }

  componentDidUpdate() {
    console.log(`==>Child1 componentDidUpdate state is :${store.getState()}`);
  }
}


class ParentAndChildPage extends Component {
  state = { msg: 'start' }

  componentDidMount() {
    console.log('iam in componentDidMount');
    store.subscribe(() => {
      const state = store.getStat();
      if (state === 'child2') {
        this.setState({
          msg: store.msg,
        });
      }
    });
  }

  componentDidUpdate() {
    console.log(`Child2 componentDidupdate state is :${store.getState()}`);
  }

  render() {
    return (<div>
      <p>child_2_1 component: {this.state.msg}</p>
    </div>);
  }
}

// 父子组件通信

// const ChildCompoent1 = (props) => {
//   return <div><div>我是子组件1</div>{props.msg}</div>;
// };


// class Child1 extends React.Component {
//   componentDidMount() {
//     setTimeout(() => {
//       this.props.transferMsg('end');
//     }, 1000);
//   }
//
//   render() {
//     return <div><p>我是子组件2，我将改变msg</p></div>;
//   }
// }
//
// class ParentAndChildPage extends React.Component {
//   constructor() {
//     super();
//     this.state = { msg: 'start' };
//   }
//
//
//   componentDidUpdate() {
//     console.log('Parent update');
//   }
//
//   // componentDidMount() {
//   //   setTimeout(() => {
//   //     this.setState({ msg: 'end' });
//   //   }, 3000);
//   // }
//
//
//   transferMsg(msg) {
//     this.setState({ msg });
//   }
//   render() {
//     return (<div>
//       <ChildCompoent1 msg={this.state.msg} />
//       <Child1 transferMsg={msg => this.transferMsg(msg)} />
//     </div>);
//   }
//
// }


export default ParentAndChildPage;
