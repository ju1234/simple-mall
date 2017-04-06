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


  render() {
    return (
      <div className={classifyStyle.classifyNav}>
        {this.props.classifyNav.map((classify, index) => {
          return (
            <div key={index}>
              <img src="/images/38640.jpg" alt=""/>
              <p>{classify.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}


export default Classify;
