/**
 * 文件说明： 入口文件
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */
// import "babel-polyfill";
// import React from 'react';
// import {render} from  'react-dom';
// import store from './redux/store'
// import {Provider} from 'react-redux';
// import routes from './routes';
//
// import './tools/init.js';
// render(
//   <Provider store={store}>
//     {routes}
//   </Provider>,
//   document.getElementById('root')
// );
//


class ImagesLoading{
  constructor(imagesSource,loadingBarId){
    this.loadingBar = document.getElementById(loadingBarId);
    this.imagesSource = imagesSource;
    this.loadedCount = 0;
    this.imgCount = imagesSource.length;

  }

  init(){
    this.imagesSource.map( (item,index) => {
      let img = new Image();
      img.src = item.src;
      img.onload = () => {
        console.log(item)
        this.loadedCount ++ ;

        if(this.loadedCount === this.imgCount){
          this.loadingBar.style.width = '100%';
        }else {
          this.loadingBar.style.width = this.loadedCount * (100 / this.imgCount) + '%';
        }

        document.getElementById(item.id).src = item.src;

      }
    })
  }
}


window.onload = () => {
  const imagesSource = [
    {
      id: 'img1',
      src: '/images/goods/frock/1.jpg'
    },
    {
      id: 'img2',
      src: '/images/goods/frock/2.jpg'
    },
    {
      id: 'img3',
      src: '/images/goods/frock/3.jpg'
    },
    {
      id: 'img4',
      src: '/images/goods/frock/4.jpg'
    },
    {
      id: 'img5',
      src: '/images/goods/frock/5.jpg'
    },
  ];

  const imagesLoding = new ImagesLoading(imagesSource,'loadingBar');

  imagesLoding.init()
};
