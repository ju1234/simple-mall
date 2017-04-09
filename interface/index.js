/**
 * 文件说明：接口
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */

var path = require('path');
var mysql = require('../mysql');
var API = require('../API');
const axios = require('axios');

module.exports = function (app) {
  // 首页导航数据
  app.get(API.GET_CLASSIFY_Nav, (req, res) => {
    mysql.select(['*'], 'classify')
      .then(data => {
        res.json(data)
      })
  });


  app.get(API.GET_GOODS, (req, res) => {
    let {classify_id} = req.query;
    let table_name;
    mysql.select(['field'],'classify',`where id=${classify_id}`)
      .then(data => {
        table_name = data[0].field;
        return mysql.select(['*'],table_name);
      })
      .then( data => {
        console.log(data);
        res.json(data)
      })
  });

  // 首页 分类 推荐
  app.get(API.GET_CLASSIFY_HOT, (req, res) => {

  })

};

console.log('接口配置成功');
