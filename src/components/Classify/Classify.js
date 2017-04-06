/**
 * 文件说明：首页分类组件
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
      1,2,3,4,5,6,7,8,9,0
    ]
  };

  render() {
    return (
      <div className={classifyStyle.classify}>
        {this.state.classify.map((classify, index) => {
          return (
            <div key={index}>
              <img src="/images/38640.jpg" alt=""/>
              <p>asd</p>
            </div>
          )
        })}
      </div>
    )
  }
}


export default Classify;
