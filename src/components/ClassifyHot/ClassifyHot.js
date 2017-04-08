/**
 * 文件说明： 首页 分类 推荐
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.6
 */
import React,{Component} from 'react';
import axios from 'axios';
//=================================================
import classifyHotStyle from './scss/classifyHot.scss';

class ClassifyHot extends Component{
  constructor(props){
    super(props)
  }

  static PropTypes = {
    classify: React.PropTypes.array.isRequired
  };

  componentDidMount(){
    const classifyID = this.props.classify.id;
  }

  state= {
    classifyHot: []
  };

  render(){
    return (
      <div className={classifyHotStyle.classifyHot}>
        <p>{this.props.classify.name}推荐</p>
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
