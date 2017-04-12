/**
 * 文件说明： 入口文件
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */
import "babel-polyfill";
import React from 'react';
import {render} from  'react-dom';
import store from './redux/store'
import {Provider} from 'react-redux';
import routes from './routes';
import './tools/init.js';
render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);

