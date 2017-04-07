/**
 * 文件说明： 开发环境路由
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */

var routesPaths = require('../src/config/routePaths.js');




module.exports = (app,mfs,file) => {
  let urlArray = [];
  for(let key in routesPaths){
    urlArray.push(routesPaths[key])
  }


  app.get(urlArray, function (req, res, next) {
    devMiddleWare.waitUntilValid(function () {
      var html = mfs.readFileSync(file);
      res.end(html)
    });
    next();
  });

};
