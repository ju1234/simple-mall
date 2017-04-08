/**
 * 文件说明： 内容 容器
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.6
 */


import React, {Component} from 'react';
import containerStyle from './scss/container.scss';

export default class Container extends Component {

  static defaultProps = {
    top: true,
    bottom: true
  };

  render() {
    const style = this.props.bottom ? containerStyle.container : containerStyle.containerNoBottom;
    return (
      <div className={style}>
        {this.props.children}
      </div>
    )
  }
}
