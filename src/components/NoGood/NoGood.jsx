/**
 * 文件说明： 空列表
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.9
 */
import React,{Component} from 'react'
import {Link} from 'react-router';
import style from './scss/noGood.scss';



export default class NoGood extends Component{
  render(){
    return (
      <Link to="/">
      <div className={style.noGood}>
        <p>木有商品</p>
        <p>返回主页</p>
      </div>
      </Link>
    )
  }
}
