/**
 * 文件说明： Footer
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
//==================================================
import footerStyle from './scss/footerStyle.scss';

class Footer extends Component {

  state = {
    active: [1, 0, 0, 0]
  };

  render() {
    return (
      <foote className={footerStyle.footer}>
        <Link to="/">
          <div className={this.props.active[0] ? footerStyle.active : ''}>
            <img src={this.props.active[0] ? '/images/footerIcon/index.active.png' : '/images/footerIcon/index.png'}
                 alt="首页"/>
            <p>首页</p>
          </div>
        </Link>
        <Link to="/order">
          <div className={this.props.active[1] ? footerStyle.active : ''}>
            <img src={this.props.active[1] ? '/images/footerIcon/order.active.png' : '/images/footerIcon/order.png'}
                 alt="订单"/>
            <p>订单</p>
          </div>
        </Link>
        <Link to="/cart">
          <div className={this.props.active[2] ? footerStyle.active : ''}>
            <img src={this.props.active[2] ? '/images/footerIcon/cart.active.png' : '/images/footerIcon/cart.png'}
                 alt="购物车"/>
            <p>购物车</p>
          </div>
        </Link>
        <Link to="/my">
          <div className={this.props.active[3] ? footerStyle.active : ''}>
            <img src={this.props.active[3] ? '/images/footerIcon/my.active.png' : '/images/footerIcon/my.png'}
                 alt="我的资料"/>
            <p>我的资料</p>
          </div>
        </Link>
      </foote>
    )
  }
}

export default Footer;
