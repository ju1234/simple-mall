/**
 * 文件说明： 公用路由
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */

var recordLog = require('../log/record.log.js');
var path = require('path');

module.exports = (app) => {
  // app.get('*',(req,res,next) => {
  //   recordLog(path.join(__dirname,'../log/server.log'),req.url);
  //   next();
  // });

  app.get('/get/req',(req,res) => {
    console.log(req);
    res.json(req.headers)
  })

  app.get(['/synopsis','/synopsis/'], function (req, res, next) {
    res.redirect('/');
  });
};
