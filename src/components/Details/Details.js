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
    return (
      <Link className={detailStyle.details}>
        <div>
          <img src="/images/test.jpg" alt=""/>
        </div>
        <div>
          <p>雪纺韩版显瘦时尚碎花裙子s</p>
          <span>￥888</span>
          <span>月销888</span>
        </div>
      </Link>
    )
  }
}



export default Details;
