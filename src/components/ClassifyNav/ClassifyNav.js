/**
 * 文件说明：首页 分类 导航
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.6
 */


import React, {Component} from 'react';
//================================================

import {Link} from 'react-router';

//============================================
import classifyStyle from './scss/classify.scss'


class Classify extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    classify: [
      '女装','男装','女鞋','男鞋','箱包','化妆品','零食','家电','图书','茶酒'
    ]
  };

  render() {
    return (
      <div className={classifyStyle.classifyNav}>
        {this.state.classify.map((classify, index) => {
          return (
            <div key={index}>
              <img src="/images/38640.jpg" alt=""/>
              <p>{classify}</p>
            </div>
          )
        })}
      </div>
    )
  }
}


export default Classify;
