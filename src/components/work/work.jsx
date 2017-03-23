/**
 * 文件说明： Footer
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */

import React,{Component} from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import workStyle from './work.scss'


import {getUserInfo,getMovie} from '../../redux/actions/workAction'

import asd from '../../tools/routePaths.js'


class Work extends Component{
  constructor(props){
    super(props);
    this.actions = bindActionCreators(Object.assign({},{
      getUserInfo,
      getMovie
    }),props.dispatch);
    this.getUserHandle = this.getUserHandle.bind(this);
    this.getMovieHandle = this.getMovieHandle.bind(this);
  }

  getUserHandle(){
    this.actions.getUserInfo();
  }

  getMovieHandle(){
    this.actions.getMovie()
  }

  render(){
    console.log(asd)
    return (
      <div className={workStyle.workContainer}>
        <button type="button" onClick={this.getUserHandle}>get user</button>
        <button type="button" onClick={this.getMovieHandle}>get movie</button>
        <div>
          {this.props.data}
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    data: store.work.data
  }

}


export default connect(mapStateToProps)(Work);
// module.exports = Work;
