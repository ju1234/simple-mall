/**
 * 文件说明： Header
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */

import React,{Component} from 'react';
import headerStyle from './scss/headerStyle.scss'

class Header extends Component{
  render(){
    return (
      <div className={headerStyle.header}>
        <h3>MY 豆瓣</h3>
        <input type="text" placeholder="请输入书名"/>
      </div>
    )
  }
}

export default Header;
