/**
 * Created by jufei on 2017/3/22.
 */
import * as actionTypes from '../actionTypes'

function workReducer(state = {data: null},action) {
  switch (action.type) {
    case actionTypes.SHOW_DATA:
      var data = {};
      data.data = action.payload;
      return data;
    default:
      return state;
  }
}

export default workReducer;
