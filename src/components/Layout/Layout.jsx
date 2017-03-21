/**
 * 文件说明： 布局组件
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */

import React,{Component} from 'react';

import {connect} from 'react-redux';
import MenuList from '../MenuList/MenuList.jsx';
import layout from'./layout.scss'


class Layout extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className={layout.layout}>
        <MenuList/>
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
module.exports =  connect(mapStateToProp)(Layout);
