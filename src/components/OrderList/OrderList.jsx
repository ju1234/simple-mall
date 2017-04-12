/**
 * 文件说明： 订单 列表
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.9
 */


import React,{Component} from 'react';
import axios from 'axios';
//========================================
import OrderBar from './OrderBar/OrderBar.jsx';
//=========================================
import orderListStyle from './scss/orderList.scss';
import API from '../../../API';

export default class OrderList extends Component{

  state = {
    orders: []
  };

  componentDidMount(){
    axios.get(API.GET_ORDERS,{
      params: {
        id: localStorage.getItem('USER_ID')
      }
    }).then( res => {
      this.setState(() => {
        return {
          orders: res.data
        }
      })
    })
  }

  render(){
    const orders = this.state.orders;
    console.log(orders);
    return (
      <ul className={orderListStyle.orderList}>
        {
          orders.map((order,index) => {
            if(order.visibility){
              order.index = index;
              return <OrderBar {...order} key={index}/>
            }
          })
        }
      </ul>
    )
  }
}
