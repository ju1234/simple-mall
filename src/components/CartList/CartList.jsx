/**
 * 文件说明： 购物车 列表
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React,{Component} from 'react';
import axios from 'axios';
//========================================
import CartBar from './CartBar/CartBar.jsx';
import API from '../../../API';


export default class CartList extends Component{

  componentDidMount(){
    
  }

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
