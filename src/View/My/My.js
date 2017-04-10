/**
 * 文件说明： 我的主页
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.22
 */


import React,{Component} from 'react';
//==============================================
import myStyle from './scss/my.scss';



export default class My extends Component{
  render(){
    return (
      <div className={myStyle.my}>
        <div>
          <img src="/images/test.jpg" alt="background"/>
          <div>
            <img src="/images/test.jpg" alt="avatar"/>
          </div>
        </div>
        <div>
          <p>全部订单</p>
          <p>我的购物车</p>
        </div>
      </div>
    )
  }
}
