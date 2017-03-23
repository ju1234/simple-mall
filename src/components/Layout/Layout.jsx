/**
 * 文件说明： 布局组件
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.22
 */

import React,{Component} from 'react';
import {connect} from 'react-redux';
//===================================================
import Header from '../Header/Header.jsx'
//===================================================
import layout from'./scss/layout.scss'


class Layout extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className={layout.layout}>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProp(store) {
  return {
    layout: store.layout
  }
}



// export default Layout;
export default connect(mapStateToProp)(Layout);
// module.exports =  connect(mapStateToProp)(Layout);
