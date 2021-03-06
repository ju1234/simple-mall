/**
 * 文件说明： 首页 banner
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.6
 */


import React,{Component} from 'react';
import {Link} from 'react-router';
import TouchSlider from 'touchslider';
//==========================================================


//===========================================================
import bannerStlye from './scss/banner.scss';

class Banner extends Component{

  componentDidMount(){
    new TouchSlider('banner',{duration:1000, direction:0, interval:3000, fullsize:true})
  }

  render(){
    return(
      <div className={bannerStlye.banner}>
       <ul id="banner">
         {
           this.props.banners.map( (banner,index) => {
             return (
               <li key={index}>
                 <Link to="/synopsis/luggage/3">
                   <img src={banner.src} alt={banner.alt}/>
                 </Link>
               </li>
             )
           })
         }
       </ul>
      </div>
    )
  }
}


export default Banner;
