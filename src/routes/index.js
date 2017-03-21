/**
 * 文件说明： router
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import store from '../redux/store'

const rootRoute = {
  path: '/',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Layout/Layout.jsx'))
    }, 'index')
  },
  childRoutes: [
    require('./ours.route.js'),
    require('./work.route.js'),
    require('./contact.route.js')
  ]
};


const routes = (
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoute} />
  </Provider>
);

export default routes;
