/**
 * 文件说明： 购物车  bar
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import moment from 'moment';
//========================================
import orderBarStyle from './scss/orderBar.scss';
import API from '../../../../API';


export default class OrderBar extends Component {
  constructor(props){
    super(props)
    this.deleteHandle = this.deleteHandle.bind(this);
  }

  state = {
    visibility: 1
  };


  deleteHandle(){
    axios.delete(API.DELETE_ORDER,{
      params: {
        id: this.props.id
      }
    }).then(res => {
      console.log(res);
      if(res.data.msg){
        this.setState(() => {
          return {
            visibility: 0
          }
        })
      }else {
        alert('删除失败');
      }
    })
  }


  render() {
    // this.props.visibility = 0;
    const stateArr = ['待发货','已发货','已收货','待支付'];
    const state = stateArr[this.props.state - 1 ];
    const button = this.props.state === 4 ? <button>立即支付</button> : <button className={orderBarStyle.delete} onClick={this.deleteHandle}>删除订单</button>;
    return (
      <li className={this.state.visibility ? orderBarStyle.orderBar : orderBarStyle.hidden}>
        <div>
          <div>
            <img src={this.props.src || "/images/test.jpg"} alt="商品缩略图"/>
          </div>
          <div>
            <Link to={this.props.url}>
              <h4>{this.props.synopsis}</h4>
            </Link>
            <p>收货地址: <span>{this.props.address}</span></p>
            <p>
              单价：<span>￥{this.props.price}</span>，共<span>{this.props.count}</span>件，合计<span>{this.props.price * this.props.count}</span>元
            </p>
            <p>订单状态: {state}</p>
          </div>
        </div>
        <div>
          <span>{moment(this.props.time).format("YYYY-M-d hh:mm:ss")}</span>
          <div>
            {this.props.commented ? null : <button>立即评论</button>}
            {button}
          </div>
        </div>
      </li>
    )
  }
}
