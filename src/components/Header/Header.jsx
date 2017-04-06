/**
 * 文件说明： Header
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.22
 */

import React, {Component} from 'react';
import {connect} from 'react-redux'
//====================================================
import headerStyle from './scss/headerStyle.scss';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // const {canBack,cancel} = this.props.header;
    // const backBtn = canBack ? <button type="button"></button> : null;
    // const cancelBtn = cancel? <button type="button">取消</button> : null;
    return (
      <header className={headerStyle.header}>
        {this.props.children || this.props.header}
      </header>
    )
  }
}

function mapStateToProps(store) {
  return {
    header: store.header.toJS()
  }
}

export default connect(mapStateToProps)(Header);
