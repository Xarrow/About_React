import React from 'react';
import {connect } from 'dva';
import styles from './index.less'

function mapStateToProps(state) {
  return { counters :state.counter}

}
const CountApp = ({counters, dispatch}) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {counters.record}</div>
      <div className={styles.current}>{counters.current}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'counter/add'}); }}>+</button>
        <button onClick={()=>{dispatch({type:'counter/minus'});}}>-</button>
      </div>
    </div>
  );
};
const CounterComponent =  connect(mapStateToProps)(CountApp)

export  default CounterComponent
