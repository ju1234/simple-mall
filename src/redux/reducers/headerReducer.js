/**
 * 文件说明： Header Reducer
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.22
 */

import Immutable from 'immutable';
import * as actionTypes from '../actionTypes';


const init = {
  canBack: true
};

export default function headerReducer(state = Immutable.fromJS(init), action) {
  switch (action.type) {
    default:
      return state;
  }
}
