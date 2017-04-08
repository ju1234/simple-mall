/**
 * 文件说明：首页 分类 导航
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.6
 */


import React, {Component} from 'react';
import {Link} from 'react-router';
//================================================

//============================================
import classifyStyle from './scss/classify.scss'



class Classify extends Component {
  constructor(props) {
    super(props);
  }

  saveHistory(){
    localStorage.setItem('HISTORY',location.pathname);
  }


  render() {
    return (
      <div className={classifyStyle.classifyNav}>
        {this.props.classify.map((classify, index) => {
          return (
            <Link to={classify.url || '/'} key={index} onClick={this.saveHistory}>
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
