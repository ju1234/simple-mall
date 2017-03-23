/**
 * 文件说明： 入口文件
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */
import "babel-polyfill";
import React from 'react';
import {render} from  'react-dom';

import routes from './routes';

window.onload = (function () {
  var isRetina = window.devicePixelRatio === 2 ? 1 :2;
  var screenWidth = window.screen.width ;
  // console.log()
  console.log(navigator.userAgent);
  document.getElementById('roota').innerHTML = navigator.userAgent + 'and'
  document.getElementById('roota').style.padding = '50px';
  document.getElementsByTagName('html')[0].style['fontSize'] = `${screenWidth  / 10}px` ;
})();


for (var i = 0;i<10;i++){
  var div = document.createElement('div');
  div.style.cssText = "width: 1rem;height: 20px;background: red;float: left;border: 1px solid #333"

  ;
  document.body.appendChild(div)
}

render(routes,document.getElementById('root'));
