/**
 * 文件说明： 订单 列表
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.9
 */


import React,{Component} from 'react';
import axios from 'axios';
//========================================
import OrderBar from './OrderBar/OrderBar.js';
import API from '../../../API';

export default class OrderList extends Component{

  componentDidMount(){
    axios.get(API.GET_ORDERS,{
      params: {
        id: localStorage.getItem('USER_ID')
      }
    }).then( res => {

    })
  }

  render(){
    return (
      <ul>
        <OrderBar/>
        <OrderBar/>
        <OrderBar/>
        <OrderBar/>
      </ul>
    )
  }
}
