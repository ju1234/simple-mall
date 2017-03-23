/**
 * 文件说明： reducers
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */


import {combineReducers} from 'redux';
//===============================================



import headerReducer from './headerReducer.js'

const reducers = combineReducers({
  header: headerReducer
});


export default reducers;
