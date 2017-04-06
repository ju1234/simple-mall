/**
 * 文件说明： 首页界面
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.22
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
//===================================================
import Header from '../../components/Header/Header.jsx';
import Footer from "../../components/Footer/Footer";
// 容器组件
import Container from '../../components/Container/Container.js';
// 广告轮播组件
import Banner from '../../components/Banner/Banner.js';
// 分类导航组件
import ClassifyNav from '../../components/ClassifyNav/ClassifyNav.js';
// 分类推荐组件
import ClassifyHot from '../../components/ClassifyHot/ClassifyHot.js'
//===================================================
import indexStyle from './scss/index.scss'
import indexConfig from '../../config/indexConfig.js';

class Index extends Component {
  constructor(props) {
    super(props)
  }

  state = indexConfig;

  render() {
    const {banners,classifyNav} = this.state;

    return (
      <div className={indexStyle.layout}>
        <Header>
          {/*<button></button>*/}
          <input placeholder="想你所想 买你所买"/>
        </Header>
        <Container>
          <Banner banners={banners}/>
          <ClassifyNav classifyNav={classifyNav}/>
          <ClassifyHot/>
          <ClassifyHot/>
          <ClassifyHot/>
          <ClassifyHot/>
          <ClassifyHot/>
          <ClassifyHot/>
          <ClassifyHot/>
          <ClassifyHot/>
          <ClassifyHot/>
          <ClassifyHot/>
        </Container>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProp(store) {
  return {
    layout: store.layout
  }
}


export default connect(mapStateToProp)(Index);
