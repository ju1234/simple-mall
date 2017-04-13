/**
 * 文件说明： 支付页面
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.14
 */


import React, {Component} from "react";
import axios from 'axios';
//===============================================
import Header from "../../components/Header/Header.jsx";
//==================================================================
import payStyle from "./scss/pay.scss";
import API from '../../../API';


export default class Pay extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    count: 1
  };

  add(){
    this.setState(() => {
      return {
        count: this.state.count+1
      }
    })
  }

  minus(){
    let count = this.state.count - 1;
    if(count < 1){
      count = 1
    }
    this.setState(() => {
      return {
        count: count
      }
    })

  }

  render() {
    const good = JSON.parse(localStorage.getItem('PAY_INFO'));
    return (
      <div>
        <Header>
          <button onClick={() => {
            this.context.router.goBack()
          }}></button>
          <h3>支付</h3>
          <button></button>
        </Header>
        <div className={payStyle.pay}>
         <div>
           数量：
           <button onClick={() => {
             this.minus()
           }}>-</button>
           <span>{this.state.count}</span>
           <button onClick={() => {
             this.add()
           }}>+</button>
         </div>
          <div>
            地址：<span>上海 闵行 莘松路1122</span>
          </div>
          <div>
            <button onClick={() => {
              axios.post(API.ADD_ORDER,{
                user_id: localStorage.getItem('USER_ID'),
                good_id: good.id,
                classify: good.classify,
                count: this.state.count
              }).then(res => {
                if(res.data.msg){
                  this.context.router.push('/order')
                }else {
                  alert('未知错误');
                }
              })
            }}>支付</button>
          </div>
        </div>
      </div>
    )
  }
}
