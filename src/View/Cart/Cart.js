/**
 * 文件说明： 购物车  页面
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React, {Component} from 'react';
//===============================================
import Header from '../../components/Header/Header.jsx';
import Container from '../../components/Container/Container.js';
import Footer from '../../components/Footer/Footer.jsx';
import CartList from '../../components/CartList/CartList.js';
//===============================================
import cartStyle from './scss/cart.scss';

class Order extends Component{
  render(){
    return (
      <div>
        <Header>
          <h3>我的购物车</h3>
        </Header>
        <Container>
          <CartList/>
        </Container>
        {/*<Footer active={[0,0,1,0]}/>*/}
      </div>
    )
  }
}



export default Order;
