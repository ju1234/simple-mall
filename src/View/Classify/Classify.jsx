/**
 * 文件说明： 分类详情页
 * 详细描述：
 * 创建者： JU
 * 时间： 17。4.8
 */


import React, {Component} from 'react';
import axios from 'axios';
//==========================================
import Header from '../../components/Header/Header.jsx';
import Container from '../../components/Container/Container.jsx';
import Details from '../../components/Details/Details.jsx'
//==================================================================
import classifyStyle from './scss/classify.scss';
import getClassifyInfo from '../../tools/getClassifyInfo.js';
import API from '../../../API'


class Classify extends Component {
  constructor(props) {
    super(props);
    this.backHandle = this.backHandle.bind(this);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    name: 'title',
    id: 0,
    goods: []
  };



  componentDidMount() {
    const {name, id} = getClassifyInfo(location.pathname);
    axios.get(API.GET_GOODS_LIST, {
      params: {
        classify_id: id
      }
    }).then( res => {
      this.setState( () => {
        return {
          name: name,
          id: id,
          goods: res.data
        }
      })
    })
  }


  backHandle() {
    this.context.router.push('/');
  }

  render() {
    return (
      <div>
        <Header>
          <button onClick={this.backHandle}></button>
          <h3>{this.state.name}</h3>
          <button></button>
        </Header>
        <Container bottom={false}>
          <div className={classifyStyle.wrapper}>
            {
              this.state.goods.map((good, index) => {
                return <Details {...good} key={index}/>
              })
            }
          </div>
        </Container>
      </div>
    )
  }
}


export default Classify;
