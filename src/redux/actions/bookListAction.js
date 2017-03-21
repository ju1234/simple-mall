/**
 * Created by Yeapoo on 2017/03/13.
 */
import * as actionTypes from '../../redux/actionTypes'




export function getBooks(bookList) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_BOOKS,
      payload: bookList
    })
  }
}
