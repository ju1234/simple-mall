/**
 * 文件说明： 商品 简介 || 商品分类展示
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React,{Component} from 'react';
import {Link} from 'react-router';
//==================================================
import detailStyle from './scss/details.scss';



class Details extends Component{


  render(){
    console.log(this.props)
    return (
      <Link className={detailStyle.details} to={this.props.url}>
        <div>
          <img src={this.props.src} alt="预览图"/>
        </div>
        <div>
          <p>{this.props.synopsis}</p>
          <span>￥{this.props.price || '**'}</span>
          <span>月销{this.props.sales || '**'}</span>
        </div>
      </Link>
    )
  }
}



export default Details;
