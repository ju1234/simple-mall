/**
 * 文件说明： 浏览器渲染初始化
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.6
 */
window.onload = (function () {
  var isRetina = window.devicePixelRatio === 2 ? 1 : 2;
  var screenWidth = window.innerWidth;
  console.log(navigator.userAgent);
  // document.getElementById('roota').innerHTML = navigator.userAgent + 'and';
  // document.getElementById('roota').style.padding = '100px';
  document.getElementsByTagName('html')[0].style['fontSize'] = `${screenWidth / 10}px`;
  document.getElementsByTagName('body')[0].style['fontSize'] = `12px`;
})();


// localStorage.setItem('HISTORY','');
// for (var i = 0; i < 10; i++) {
//   var div = document.createElement('div');
//   div.style.cssText = "width: 1rem;height: 20px;background: red;float: left;border: 1px solid #333";
//   document.body.appendChild(div)
// }
