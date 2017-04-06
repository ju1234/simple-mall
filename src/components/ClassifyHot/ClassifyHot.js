/**
 * 文件说明： 首页 分类 推荐
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.6
 */
import React,{Component} from 'react';
//=================================================
import classifyHotStyle from './scss/classifyHot.scss';

class ClassifyHot extends Component{
  render(){
    return (
      <div className={classifyHotStyle.classifyHot}>
        <p>男装推荐</p>
        <div>
          <div>
            <img src="/images/38640.jpg" alt=""/>
          </div>
          <div>
            <div>
              <img src="/images/38640.jpg" alt=""/>
            </div>
            <div>
              <img src="/images/38640.jpg" alt=""/>
            </div>
            <div>
              <img  src="/images/38640.jpg" alt=""/>
            </div>
            <div>
              <img  src="/images/38640.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ClassifyHot;
