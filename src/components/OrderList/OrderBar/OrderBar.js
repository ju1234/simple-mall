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
    return (
      <li className={orderBarStyle.orderBar}>

        <div>
          <div>
            <img src="/images/test.jpg" alt=""/>
          </div>
          <div>
            <Link to="/synopsis/asd">
              <h4>雪纺韩版显瘦时尚碎花裙子雪纺韩版显瘦时尚碎花裙子</h4>
            </Link>
            <p>
              单价：<span>￥888</span>，共<span>n</span>件，合计<span>n</span>元
            </p>
            <p>订单状态: 已发货 || 已签收 || 代发货 || 待支付</p>
          </div>
        </div>
        <div>
          <button>查看详情</button>
          <button>立即支付</button>
          <button>删除订单</button>
        </div>
      </li>
    )
  }
}
