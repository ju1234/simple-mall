/**
 * 文件说明： 首页 分类 推荐
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.6
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import API from '../../../API';
//=================================================
import classifyHotStyle from './scss/classifyHot.scss';

class ClassifyHot extends Component {
  constructor(props) {
    super(props)
  }

  static PropTypes = {
    classify: React.PropTypes.array.isRequired
  };


  state = {
    hotestGood: {},
    otherGoods: []
  };

  componentDidMount() {
    const classifyID = this.props.classify.id;
    axios.get(API.GET_GOODS_LIST, {
      params: {
        classify_id: classifyID,
        count: 5
      }
    }).then(res => {
      this.setState(() => {
        return {
          hotestGood: res.data[0],
          otherGoods: res.data.slice(1,5)
        }
      })
    })
  }



  render() {
    return (
      <div className={classifyHotStyle.classifyHot}>
        <p>{this.props.classify.name}推荐</p>
        <div>
          <div>
            <Link to={this.state.hotestGood.url}>
              <img src={this.state.hotestGood.src || "/images/test.jpg"} alt=""/>
            </Link>
          </div>
          <div>
            {
              this.state.otherGoods.map( (goods,index) => {
                return (
                  <div key={index}>
                    <Link to={goods.url}>
                      <img src={goods.src || "/images/test.jpg"} alt=""/>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ClassifyHot;
