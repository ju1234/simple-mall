/**
 * 文件说明： 详情页 底部 购买栏
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.8
 */


import React,{Component} from 'react';
//==========================================
import paybarStyle from './scss/paybar.scss';

class Paybar extends Component{
  render(){
    return (
      <div className={paybarStyle.paybar}>
        <button type="button">加入购物车</button>
        <button type="button">立即购买</button>
      </div>
    )
  }
}


export default Paybar;
