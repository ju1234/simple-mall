/**
 * 文件说明： 详情页 评论栏
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React,{Component} from 'react';
//============================================
import commentBarStyle from './scss/commentBar.scss';

class CommentBar extends Component{
  render(){
    return (
      <div className={commentBarStyle.commentBar}>
        <div>
          <img src="/images/test.jpg" alt="头像"/>
          <span>用户名</span>
        </div>
        <p>宝贝收到了，还没试过，先好评吧，祝生意兴隆！宝贝收到了，还没试过，先好评吧，祝生意兴隆！</p>
        <time>2017-12-12</time>
      </div>
    )
  }
}

export default CommentBar;
