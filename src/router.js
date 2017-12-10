import React from 'react';
import {Router, Route, hashHistory} from 'dva/router';
import IndexPage from './routes/IndexPage';
import AntdLayout from './routes/AntdLayout';
import HelloContent from './routes/HelloContent';
import WeiboPage from './routes/WeiboPage';
import ParentAndChildPage from './routes/ParentAndChildPage';
import Gallery from './routes/GalleryPage';
import MyGallery from './routes/MyGalleryPage';
import WeiboGrid from './routes/WeiboGridPage';
import AllItBooks from './routes/AllItBooksPage';
import ReduxLearning from './routes/ReduxLearningPage';

import CounterComponent from './routes/CounterComponent';

function RouterConfig() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={AntdLayout}>
        <Route path="/counter" component = {CounterComponent}/>
        <Route path="/hello" component={HelloContent}/>
        <Route path="/janna" component={IndexPage}/>
        <Route path="/weibo" component={WeiboPage}/>
        <Route path="/MyGallery" component={MyGallery}/>
        <Route path="/weibogrid" component={WeiboGrid}/>
        <Route path="all_it_books" component={AllItBooks}/>
        {/*<Route path="/reduxLearning" component={ReduxLearning}/>*/}
      </Route>
      <Route path={'app'}>
        <Route path={'helloContent'} component={HelloContent}/>
      </Route>
      <Route path={'react'}>
        <Route path={'parent_and_child'} component={ParentAndChildPage}/>
      </Route>
      <Route path="/gallery" component={Gallery}/>
    </Router>
  );
}

export default RouterConfig;
