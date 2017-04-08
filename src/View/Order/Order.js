/**
 * 文件说明： 订单页
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React, {Component} from 'react';
//===============================================
import Header from '../../components/Header/Header.jsx';
import Container from '../../components/Container/Container.js';
import Footer from '../../components/Footer/Footer.jsx';
//===============================================
import orderStyle from './scss/order.scss';

class Order extends Component{
  render(){
    return (
      <div className={orderStyle.order}>
        <Header>
          <h3>我的订单</h3>
        </Header>
        <Container>
          <p>order</p>
        </Container>
        <Footer active={[0,1,0,0]}/>
      </div>
    )
  }
}



export default Order;
