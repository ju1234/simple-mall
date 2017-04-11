/**
 * 文件说明： 我的主页
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.22
 */


import React, {Component} from 'react';
import {Link} from 'react-router';
//==============================================
import myStyle from './scss/my.scss';


export default class My extends Component {

  state = {
    logined: false
  };

  componentDidMount() {
    this.setState(() => {
      return {
        logined: localStorage.getItem('USER_ID')
      }
    })
  }


  render() {
    const content = !this.state.logined ?
      (
      <div>
        <Link to="/login">
          <p>登录</p>
        </Link>
        <Link to="/register">
          <p>注册</p>
        </Link>
      </div>
    ) : (
      <div>
        <Link to="/order">
          <p>全部订单</p>
        </Link>
        <Link to="/cart">
          <p>我的购物车</p>
        </Link>
        <Link to="/">
          <p>联系我们</p>
        </Link>
        <Link to="/">
          <p>加入我们</p>
        </Link>
      </div>
    );

    return (
      <div className={myStyle.my}>
        <div>
          <img src="/images/test.jpg" alt="background"/>
          <div>
            <img src="/images/test.jpg" alt="avatar"/>
          </div>
        </div>
        {content}
      </div>
    )
  }
}
