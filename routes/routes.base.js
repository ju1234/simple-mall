/**
 * 文件说明： 路由 接口
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */

var path = require('path');
const axios = require('axios');

module.exports = function (app, cb) {

  app.get('/asd',(req,res) => {
    res.json({
      name: 'asd'
    });
  });


};

console.log('借口配置成功');
