/**
 * 文件说明： 购物车  bar
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
//========================================
import orderBarStyle from './scss/orderBar.scss';


export default class OrderBar extends Component {
  render() {
    const stateArr = ['待发货','已发货','已收货','待支付'];
    const state = stateArr[this.props.state - 1 ];
    const button = this.props.state === 4 ? <button>立即支付</button> : <button className={orderBarStyle.delete}>删除订单</button>;
    return (
      <li className={orderBarStyle.orderBar}>
        <div>
          <div>
            <img src={this.props.src || "/images/test.jpg"} alt="商品缩略图"/>
          </div>
          <div>
            <Link to={this.props.url}>
              <h4>{this.props.synopsis}</h4>
            </Link>
            <p>
              单价：<span>￥{this.props.price}</span>，共<span>{this.props.count}</span>件，合计<span>{this.props.price * this.props.count}</span>元
            </p>
            <p>订单状态: {state}</p>
          </div>
        </div>
        <div>
          {button}
        </div>
      </li>
    )
  }
}
