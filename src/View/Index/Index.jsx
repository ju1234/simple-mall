/**
 * 文件说明： 首页界面
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.22
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
//===================================================
import Header from '../../components/Header/Header.jsx';
import Footer from "../../components/Footer/Footer";
// 容器组件
import Container from '../../components/Container/Container.jsx';
// 广告轮播组件
import Banner from '../../components/Banner/Banner.jsx';
// 分类导航组件
import ClassifyNav from '../../components/ClassifyNav/ClassifyNav.jsx';
// 分类推荐组件
import ClassifyHot from '../../components/ClassifyHot/ClassifyHot.jsx'
//===================================================
import indexStyle from './scss/index.scss';
import indexConfig from '../../mock/indexConfig.js';
var API = require('../../../API');


class Index extends Component {
  constructor(props) {
    super(props)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    banners: indexConfig.banners,
    classify: []
  };

  componentDidMount() {
    document.title = '首页';
    axios.get(API.GET_CLASSIFY_Nav)
      .then(data => {
        this.setState(() => {
          return {
            classify: data.data
          }
        });
      })
  }

  render() {
    const {banners} = this.state;

    return (
      <div>
        <Header>
          <h3>首页</h3>
        </Header>
        <Container>
          <Banner banners={banners}/>
          <ClassifyNav classify={this.state.classify}/>
          {
            this.state.classify.map((classify, index) => {
              return (
                <ClassifyHot classify={classify} key={index}/>
              )
            })
          }
        </Container>
        <Footer active={[1,0,0,0]}/>
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
