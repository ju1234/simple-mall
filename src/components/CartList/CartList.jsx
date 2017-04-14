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
import NoGood from '../NoGood/NoGood.jsx';
//=================================================
import API from '../../../API';


export default class CartList extends Component{


  state = {
    goods: []
  };

  componentDidMount(){
    axios.get(API.GET_MY_CART,{
      params: {
        id: localStorage.getItem('USER_ID')
      }
    }).then( res => {
       this.setState( () => {
         return {
           goods: res.data
         }
       })
    })
  }

  render(){
    let content;
    if(this.state.goods.length === 0){
      content = <NoGood/>
    }else {
      content = (
        <ul>
          {
            this.state.goods.map( (good,index) => {
              return (<CartBar key={index} {...good}/>)
            })
          }
        </ul>
      )
    }
    return content

  }
}
