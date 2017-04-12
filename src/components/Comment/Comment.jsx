/**
 * 文件说明： 详情页 评论组件
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */

import React,{Component} from 'react';
//========================================================
import CommentBar from './CommentBar/CommentBar.jsx';
//========================================================
import commentStyle from './scss/comment.scss';


export default class Comment extends Component{



  render(){
    console.log('commentCount',this.props.count);
    return (
      <div className={commentStyle.comment}>
        <p>商品评论(999)</p>
        {/*{*/}
          {/*(() => {*/}
            {/*for (let i = 0;i<this.props.count;i++){*/}
              {/*return <CommentBar/>*/}
            {/*}*/}
          {/*})()*/}
        {/*}*/}
        <CommentBar/>
        <CommentBar/>
        <CommentBar/>
        <CommentBar/>
        <CommentBar/>
      </div>
    )
  }
}
