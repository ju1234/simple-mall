/**
 * 文件说明： bookList reducer
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */
import * as actionTypes from '../actionTypes'

function bookListReducer(state = null,action) {
  switch (action.type) {
    case actionTypes.GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
}

export default bookListReducer;
