/**
 * 文件说明： store
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */

import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';


const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
