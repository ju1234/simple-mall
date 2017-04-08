/**
 * 文件说明： 商品详情页
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React,{Component} from 'react';
import axios from 'axios';
//==============================================
import Header from '../../components/Header/Header.jsx';
import Container from '../../components/Container/Container.js';
// 购买栏
import Paybar from '../../components/Paybar/Paybar.js';
// 评论栏
import Comment from '../../components/Comment/Comment.js'
//=============================================
import synosiStyle from './scss/synopsis.scss';



class Synopsis extends Component{
  constructor(props){
    super(props);
    this.backHandle = this.backHandle.bind(this);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    commentCount: 3
  };

  backHandle(){
    this.context.router.goBack();
  }

  componentDidMount(){
  }

  render(){
    return(
      <div>
        <Header>
          <button type="button" onClick={this.backHandle}></button>
          <h3>{this.props.title || '详情'}</h3>
          <button></button>
        </Header>
        <Container>
          <div className={synosiStyle.wrapper}>
            <div>
              <img src="/images/test.jpg" alt=""/>
            </div>
            <div>
              <h4>2017春装新款女装牛仔连衣裙女两件套韩版背带裙修身包臀套装裙夏</h4>
              <p>￥888</p>
              <div>
                <span>价格：</span>
                <del>￥8888</del>
              </div>
              <div>
                <span>快递：0.00</span>
                <span>月销量888件</span>
                <span>上海浦东</span>
              </div>
            </div>
          </div>
          <Comment count={this.state.commentCount}/>
        </Container>
        <Paybar/>
      </div>
    )
  }
}

export default Synopsis;
