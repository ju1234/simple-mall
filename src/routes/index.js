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
  indexRoute: {
    getComponent(location, cb){
      require.ensure([], (require) => {
        cb(null, require('../view/Index/Index.jsx').default)
      }, 'index')
    },
  },
  childRoutes: [
    require('./contact.route.js')
  ]
};




const routes = (
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoute} />
  </Provider>
);

export default routes;
