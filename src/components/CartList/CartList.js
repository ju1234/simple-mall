/**
 * 文件说明： 购物车 列表
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React,{Component} from 'react';
//========================================
import CartBar from './CartBar/CartBar.js';


export default class CartList extends Component{
  render(){
    return (
      <ul>
        <CartBar/>
        <CartBar/>
        <CartBar/>
        <CartBar/>
        <CartBar/>
        <CartBar/>
      </ul>
    )
  }
}
