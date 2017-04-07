/**
 * 文件说明：首页 分类 导航
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.6
 */


import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
//================================================

//============================================
import classifyStyle from './scss/classify.scss'

var API = require('../../../API');


class Classify extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    classify: []
  };

  componentDidMount(){
    axios.get(API.GET_CLASSIFY)
      .then( data => {
        this.setState( () => {
          return {
            classify: data.data
          }
        });
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className={classifyStyle.classifyNav}>
        {this.state.classify.map((classify, index) => {
          return (
            <Link to={classify.url || '/'} key={index}>
              <div>
                <img src={classify.src || '/images/38640.jpg'} alt={classify.name}/>
                <p>{classify.name}</p>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}


export default Classify;
