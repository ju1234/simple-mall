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
  constructor(props){
    super(props);
    this.logoutHandle = this.logoutHandle.bind(this);
  }


  state = {
    login: false
  };

  componentDidMount(){
    this.setState( () => {
      return {
        login: localStorage.getItem('USER_ID') ? true : false
      }
    })
  }

  logoutHandle(){
    localStorage.removeItem('USER_ID');
    this.setState(() => {
      return {
        login: false
      }
    })
  }


  render() {
    const content = !this.state.login ?
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
        <Link to="/address">
          <p>收货地址</p>
        </Link>
        <Link to="/">
          <p>联系我们</p>
        </Link>
        <Link to="/">
          <p>加入我们</p>
        </Link>
        <p onClick={this.logoutHandle}>退出</p>
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
