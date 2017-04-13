/**
 * 文件说明： 购物车  bar
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */
import React,{Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
//========================================
import cartBarStyle from './scss/cartBar.scss';
import API from '../../../../API';

export default class CartBar extends Component{

  state = {
    visibility: 1
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };


  deleteHandle(){


    axios.delete(API.DELETE_CART,{
      params: {
        id: localStorage.getItem('USER_ID'),
        good_id: this.props.id,
        classify: this.props.classify_eng
      }
    }).then( res => {
      console.log(res.data);
      if(!res.data.msg){
        alert('未知错误')
      }else {
        this.setState( () => {
          return {
            visibility: 0
          }
        });
      }
    })
  }


  render(){
    return (
      <li className={this.state.visibility ? cartBarStyle.cartBar : cartBarStyle.hidden}>
        <Link to={this.props.url}>
          <div>
            <img src={this.props.src || "/images/test.jpg"} alt=""/>
          </div>
          <div>
            <h4>{this.props.synopsis}</h4>
            <p>
              <span>￥{this.props.price}</span>
              <del>{this.props.price + parseInt(Math.random() * 100)}</del>
            </p>
            <p>
              <span>邮费: {parseInt(Math.random() * 20)}</span>
              <span>{this.props.sales}人付款</span>
              <span>上海</span>
            </p>
          </div>
        </Link>
        <div>
          <button onClick={() => {
            localStorage.setItem('PAY_INFO',JSON.stringify({id: this.props.id,classify: this.props.classify_eng}))
            this.context.router.push('/pay');
          }}>立即购买</button>
          <button onClick={this.deleteHandle.bind(this)}>删除选项</button>
        </div>
      </li>
    )
  }
}
