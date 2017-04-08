/**
 * 文件说明： 分类详情页
 * 详细描述：
 * 创建者： JU
 * 时间： 17。4.8
 */


import React,{Component} from 'react';
import axios from 'axios';
//==========================================
import Header from '../../components/Header/Header.jsx';
import Container from '../../components/Container/Container.js';
//==================================================================
import classifyStyle from './scss/classify.scss';


class Classify extends Component{
  constructor(props){
    super(props);
    this.backHandle = this.backHandle.bind(this);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {};

  componentWillMount(){
    const pathname = location.pathname;
  }




  backHandle(){
    this.context.router.push(localStorage.getItem('HISTORY'));
  }

  render(){
    return (
      <div className={classifyStyle.classify}>
        <Header>
          <button onClick={this.backHandle}></button>
          <h3>{localStorage.getItem('CLASSIFY_TITLE')}</h3>
          <button></button>
        </Header>
        <Container bottom={false}>
          <div>asd</div>
        </Container>
      </div>
    )
  }
}


export default Classify;
