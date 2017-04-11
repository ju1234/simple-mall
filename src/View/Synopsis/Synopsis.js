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
import API from '../../../API';



class Synopsis extends Component{
  constructor(props){
    super(props);
    this.backHandle = this.backHandle.bind(this);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    good: {}
  };

  backHandle(){
    this.context.router.goBack();
  }

  componentDidMount(){
    let pathanme = location.pathname;
    const urlInfo = pathanme.split('/synopsis/')[1].split('/');
    const classify = urlInfo[0];
    const id = urlInfo[1];
    axios.get(API.GET_GOOD,{
      params: {
        classify: classify,
        id: id
      }
    }).then( res => {
      this.setState( () => {
        return {
          good: res.data
        }
      })
    })
  }

  render(){
    const {good} = this.state;
    console.log(good);
    return(
      <div>
        <Header>
          <button type="button" onClick={this.backHandle}></button>
          <h3>{good.title || '详情'}</h3>
          <button></button>
        </Header>
        <Container>
          <div className={synosiStyle.wrapper}>
            <div>
              <img src={good.src || "/images/test.jpg"} alt=""/>
            </div>
            <div>
              <h4>{good.synopsis}</h4>
              <p>￥{good.price}</p>
              <div>
                <span>价格：</span>
                <del>￥{good.price + parseInt(Math.random() * 1000)}</del>
              </div>
              <div>
                <span>快递：{parseInt(Math.random() * 10)}</span>
                <span>月销量{good.sales}件</span>
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
