/**
 * 文件说明： 购物车  页面
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React, {Component} from 'react';
import {Link} from 'react-router';
//===============================================
import Header from '../../components/Header/Header.jsx';
import Container from '../../components/Container/Container.js';
import Footer from '../../components/Footer/Footer.jsx';
import CartList from '../../components/CartList/CartList.js';
//===============================================
import cartStyle from './scss/cart.scss';

class Order extends Component {

  state = {
    login: false
  };

  componentDidMount() {
    this.setState(() => {
      return {
        login: localStorage.getItem('USER_ID') ? true : false
      }
    })
  }

  render() {
    const content = this.state.login ?
      <Container>
        <CartList/>
      </Container>
      : (
        <div className={cartStyle.noLogin}>
          <Link to="/login">
            <button>点击登录</button>
          </Link>
          <Link to="/">
            <button>点我注册</button>
          </Link>
        </div>
      );
    return (
      <div>
        <Header>
          <h3>我的购物车</h3>
        </Header>
        {content}
        {/*<Footer active={[0,0,1,0]}/>*/}
      </div>
    )
  }
}


export default Order;
