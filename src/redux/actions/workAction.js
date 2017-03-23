/**
 * Created by jufei on 2017/3/22.
 */


import * as actionTypes from '../actionTypes'
import axios from 'axios'

export function getUserInfo(){
  return (dispath) => {
    axios.post('/users')
      .then(res => {
        dispath({
          type: actionTypes.SHOW_DATA,
          payload: res.data
        })
      })
  }
}


export function getMovie() {
  return (dispatch) => {
    axios.get('/douban/v2/movie/in_theaters')
      .then(res => {
        console.log(res.data)

        dispatch({
          type: actionTypes.SHOW_DATA,
          payload: JSON.stringify(res.data)
        })
      })
  }
}
