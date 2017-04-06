/**
 * 文件说明： 首页界面
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.22
 */

import React,{Component} from 'react';
import {connect} from 'react-redux';
//===================================================
import Header from '../../components/Header/Header.jsx';
import Container from '../../components/Container/Container.js';
import Banner from '../../components/Banner/Banner.js';
//===================================================
import indexStyle from'./scss/index.scss'
import Footer from "../../components/Footer/Footer";


class Index extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className={indexStyle.layout}>
        <Header>
          {/*<button></button>*/}
          <input placeholder="想你所想 买你所买"/>
        </Header>
        <Container>
          <Banner/>
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
