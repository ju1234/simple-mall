/**
 * 文件说明： 登录
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router'
//===============================================
import Header from '../../components/Header/Header.jsx';
//================================================
import loginStyle from './scss/login.scss';
import API from '../../../API';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.backHandle = this.backHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }


  componentDidMount(){
    document.title = '登录';
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  submitHandle(username = this.username.value.trim(),password = this.password.value.trim()){
    axios.post(API.LOGIN,{
      username: username,
      password: password
    }).then( res => {
      if(res.data.msg){
        localStorage.setItem('USER_ID',res.data.id);
        this.context.router.goBack()
      }else {
        alert('密码错误')
      }
    })

  }


  backHandle() {
    this.context.router.goBack()
  }

  render() {
    return (
      <div>
        <Header>
          <button onClick={this.backHandle}></button>
          <h3>登录</h3>
          <button></button>
        </Header>
        <div className={loginStyle.login}>
          <div>
            <label htmlFor="username">
              <span> 用户名：</span>
              <div>
                <input type="text" id="username" placeholder="电话号码或用户名" ref={ username => this.username = username}/>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <span>密码：</span>
              <div>
                <input type="password" id="password" placeholder="请输入密码" ref={password => this.password = password}/>
              </div>
            </label>
          </div>
          <div>
            <button onClick={() => {this.submitHandle()}}>登录</button>
            <p>
              <Link to="register">
                木有账号！！赶紧注册
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
