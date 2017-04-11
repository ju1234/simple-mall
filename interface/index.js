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

  // 获取商品列表
  app.get(API.GET_GOODS_LIST, (req, res) => {
    let {classify_id, count} = req.query;
    let table_name;
    mysql.select(['field'], 'classify', `where id=${classify_id}`)
      .then(data => {
        table_name = data[0].field;
        return mysql.select(['*'], table_name);
      })
      .then(data => {
        res.json(data.slice(0, count || data.length));
      })
  });

  // 获取目标商品
  app.get(API.GET_GOOD, (req, res) => {
    let {classify, id} = req.query;
    mysql.select(['*'], classify, `where id=${id}`)
      .then(data => {
        res.json(data[0]);
      })
  });

  // 获取订单
  app.get(API.GET_ORDERS,(req,res) => {
    let orders = [];
    const user_id = req.query.id;
    mysql.select(['*'],'orders',`where user_id=${user_id}`)
      .then( data => {
        orders = data;
        orders.map( (order,index) => {
          mysql.select(['src','price','synopsis'],order.classify,`where id=${order.good_id}`)
            .then( data => {
              orders[index] = Object.assign({},order,data[0]);
              if(index === orders.length -1 ){
                res.json(orders)
              }
            });
        })
      })
      .catch(err => {
        console.log(err)
      });

  });

  // 登录
  app.post(API.LOGIN, (req, res) => {
    const {username, password} = req.body;
    console.log(username, password);
    mysql.select(['password', 'id'], 'user', `where name='${username}'`)
      .then(data => {
        console.log(data[0].password === password);
        if (data[0].password === password) {
          res.json({
            msg: true,
            id: data[0].id
          });
        } else {
          mysql.select(['password', 'id'], 'user', `where phone='${username}'`)
            .then(data => {
              if (data[0].password === password) {
                res.json({
                  msg: true,
                  id: data[0].id
                })
              } else {
                res.json({
                  msg: false
                })
              }
            }).catch(() => {
            res.json({
              msg: false
            })
          })
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({
          msg: false
        })
      })
  })

};

console.log('接口配置成功');
