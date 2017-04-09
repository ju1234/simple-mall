/**
 * 文件说明： 订单 列表
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.9
 */


import React,{Component} from 'react';
//========================================
import OrderBar from './OrderBar/OrderBar.js';


export default class OrderList extends Component{
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
