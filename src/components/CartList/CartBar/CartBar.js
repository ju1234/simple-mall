/**
 * 文件说明： 购物车  bar
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */
import React,{Component} from 'react';
import {Link} from 'react-router';
//========================================
import cartBarStyle from './scss/cartBar.scss';




export default class CartBar extends Component{
  render(){
    return (
      <li className={cartBarStyle.cartBar}>
        <Link to="/synopsis/asd">
          <div>
            <img src="/images/test.jpg" alt=""/>
          </div>
          <div>
            <h4>雪纺韩版显瘦时尚碎花裙子雪纺韩版显瘦时尚碎花裙子</h4>
            <p>
              <span>￥888</span>
              <del>￥8888</del>
            </p>
            <p>
              <span>邮费: 8</span>
              <span>188人付款</span>
              <span>上海</span>
            </p>
          </div>
        </Link>
      </li>
    )
  }
}
