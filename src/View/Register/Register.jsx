/**
 * 文件说明： 注册
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React, {Component} from 'react';
import axios from 'axios';
//===============================================
import Header from '../../components/Header/Header.jsx';
//================================================
import signUpStyle from './scss/register.scss';
import API from '../../../API';



export default class Register extends Component {
  constructor(props) {
    super(props);
    this.backHandle = this.backHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }


  componentDidMount(){
    document.title = '注册';
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  submitHandle(){
    console.log(this.username.value)
    console.log(this.phone.value)
    console.log(this.password.value)
    console.log(this.again.value)

    const username = this.username.value.trim();
    const phone = this.phone.value.trim();
    const password = this.password.value.trim();
    const again = this.again.value.trim();

    if(username === undefined || username === ''){
      alert('用户名不得为空');
      return
    }else if(phone === undefined || phone === ''){
      alert('手机号不得为空');
      return
    }else if(password === undefined || password === ''){
      alert('密码不得为空');
      return
    }else if(again === undefined || again === ''){
      alert('');
      return
    }

    if(password === again){
      axios.post(API.REGISTER,{
        name: username,
        phone: phone,
        password: password
      }).then( res => {
        if(res.data.msg){
          localStorage.setItem('USER_ID',res.data.id);
          this.context.router.push('/');
        }else {
          alert('位置错误，请重新注册');
        }
      })
    }else {
      alert('两次密码不一样');
      this.password.value = '';
      this.again.value = '';
    }
  }


  backHandle() {
    this.context.router.goBack()
  }

  render() {
    return (
      <div>
        <Header>
          <button onClick={this.backHandle}></button>
          <h3>注册</h3>
          <button></button>
        </Header>
        <div className={signUpStyle.register}>
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
              <span>手机号码：</span>
              <div>
                <input type="number" id="phone" placeholder="请输入手机号" ref={phone => this.phone = phone}/>
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
            <label htmlFor="again">
              <span>确认密码：</span>
              <div>
                <input type="password" id="again" placeholder="确认密码" ref={again => this.again = again}/>
              </div>
            </label>
          </div>
          <div>
            <button onClick={this.submitHandle}>注册</button>
          </div>
        </div>
      </div>
    )
  }
}
