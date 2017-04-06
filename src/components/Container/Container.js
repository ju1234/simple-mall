/**
 * 文件说明： 内容 容器
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.6
 */


import React,{Component} from 'react';
import containerStyle from './scss/container.scss';

export default class Container extends Component{
  render(){
    return (
      <div className={containerStyle.container}>
        {this.props.children}
      </div>
    )
  }
}
