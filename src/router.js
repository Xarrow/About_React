import React from 'react';
import { Router, Route, hashHistory } from 'dva/router';
import IndexPage from './routes/IndexPage';
import AntdLayout from './routes/AntdLayout';
import HelloContent from './routes/HelloContent';
import WeiboPage from './routes/WeiboPage';

function RouterConfig() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={AntdLayout}>
        <Route path="/hello" component={HelloContent} />
        <Route path="/janna" component={IndexPage} />
        <Route path="/weibo" component={WeiboPage} />
      </Route>
      <Route path={'app'}>
        <Route path={'helloContent'} component={HelloContent} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
