/**
 * 文件说明： Footer
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */

import React,{Component} from 'react'
import {Link} from 'react-router';

import footerStyle from './scss/footerStyle.scss'

class Footer extends Component{
  render(){
    return (
      <foote className={footerStyle.footer}>
       <div>a</div>
       <div>b</div>
       <div>c</div>
       <div>d</div>
      </foote>
    )
  }
}

export default Footer;
