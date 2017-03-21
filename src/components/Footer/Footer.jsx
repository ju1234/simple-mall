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
      <div className={footerStyle.footer}>
        <div>
          <ul>
            <li><Link to="/ours">关于我们</Link></li>
            <li><Link to="/work">与我工作</Link></li>
            <li><Link to="/contact">联系我们</Link></li>
            <li><Link to="">联系我们</Link></li>
            <li><Link to="">免责声明</Link></li>
            <li><Link to="">帮助中心</Link></li>
            <li><Link to="">广澳是啊</Link></li>
          </ul>
          <p>© 2005－2017 douban.com, all rights reserved 北京豆网科技有限公司 </p>
        </div>
      </div>
    )
  }
}

export default Footer;
