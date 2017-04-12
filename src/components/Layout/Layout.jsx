/**
 * 文件说明： layout
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.10
 */

import React,{Component} from 'react';
import Footer from '../Footer/Footer';


export default class Layout extends Component{
  render(){
    return (
      <div>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}
