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
  document.getElementsByTagName('html')[0].style['fontSize'] = `${screenWidth / 10}px`;
  document.getElementsByTagName('body')[0].style['fontSize'] = `12px`;
})();


