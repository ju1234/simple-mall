/**
 * 文件说明： 图书简介
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.3
 */

import React,{Component} from 'react';

class BookIntro extends Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props)
    return (
      <div>
        a
     {/*   <h5>{this.props.title}</h5>
        <div>
          /!*<img src={} alt=""/>*!/
        </div>
        <p>简介</p>
        <span>jufei</span>
        <span>$123</span>*/}
      </div>
    )
  }
}

export default BookIntro;
