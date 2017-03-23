/**
 * 文件说明： Footer
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */

import React,{Component} from 'react'
import {Link} from 'react-router';
import axios from 'axios';


class Contact extends Component{
  constructor(props){
    super(props);
    this.submitHandle = this.submitHandle.bind(this)
  }
  submitHandle(){
    axios.post('http://localhost:8888/api/login',{
      username: this.username.value,
      password: this.password.value
    })
  }


  render(){
    console.log('render')
    return (
      <div>
        <input type="text" placeholder="请输入用户名" ref={username => {return this.username = username}}/>
        <input type="password" placeholder="请输入密码" ref={password => {return this.password = password}}/>
        <button type="button" onClick={this.submitHandle}>submit</button>
      </div>
    )
  }
}
console.log('has module');
export default Contact;
// module.exports = Contact;
