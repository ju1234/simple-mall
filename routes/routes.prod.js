/**
 * 文件说明： 生产环境路由
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.20
 */


var path = require('path');
var routesPath = require('../src/config/routePaths.js');
var fs = require('fs');

module.exports = function (app, cb) {
  let urlArray = [];
  for (let key in routesPath) {
    urlArray.push(routesPath[key])
  }
  console.log(path.join(path.resolve('./static/dist/index.html')));


  app.get(urlArray, (req, res, next) => {


    res.sendFile(path.resolve('./static'), '/dist/index.html');
    console.log(path.resolve('./static'), '/dist/index.html');
    // res.end('asd')
    next()
  });

};

console.log('路由已挂载');
