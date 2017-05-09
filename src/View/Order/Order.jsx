/**
 * 文件说明： 订单页
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React, {Component} from 'react';
import {Link} from 'react-router';
//===============================================
import Header from '../../components/Header/Header.jsx';
import Container from '../../components/Container/Container.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import OrderList from '../../components/OrderList/OrderList.jsx';
//===============================================
import orderStyle from './scss/order.scss';

class Order extends Component {

  state = {
    login: false
  };

  componentDidMount() {
    document.title = '订单';
    this.setState(() => {
      return {
        login: localStorage.getItem('USER_ID') ? true : false
      }
    })
  }

  render() {
    const content = this.state.login ?
      <Container>
        <OrderList/>
      </Container> :
      (
        <div className={orderStyle.noLogin}>
          <Link to="/login">
            <button>点我登录</button>
          </Link>
          <Link to="/">
            <button>点我注册</button>
          </Link>
        </div>
      );
    return (
      <div>
        <Header>
          <h3>我的订单</h3>
        </Header>
        {content}
        <Footer active={[0,1,0,0]}/>
      </div>
    )
  }
}


export default Order;
