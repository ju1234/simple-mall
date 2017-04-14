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
  //==========================GET=================================
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
  app.get(API.GET_ORDERS, (req, res) => {
    let orders = [];
    let successful = 0;
    const user_id = req.query.id;
    mysql.select(['*'], 'orders', `where user_id=${user_id}`)
      .then(data => {
        orders = data;
        if(orders.length === 0){
          res.json(orders)
        }else {
          orders.map((order, index) => {
            mysql.select(['src', 'price', 'synopsis', 'url'], order.classify, `where id=${order.good_id}`)
              .then(dataa => {

                orders[index] = Object.assign({}, order, dataa[0]);
                successful++;
                if (successful === orders.length - 1) {
                  setTimeout(() => {
                    res.json(orders);
                  },300)
                }
              });

          })

        }


      })
      .catch(err => {
        console.log(err)
      });
  });

  // 获取我的购物车
  app.get(API.GET_MY_CART, (req, res) => {
    const {id} = req.query;
    let goods = [];
    mysql.select(['cart'], 'user', `where id=${id}`)
      .then(data => {
        const length = JSON.parse(data[0].cart).length;
        JSON.parse(data[0].cart).map((good, index) => {
          mysql.select(['*'], good.classify, `where id=${good.id}`)
            .then(data => {
              goods.push(data[0]);
              setTimeout(() => {
                if (index === length - 1) {
                  res.json(goods);
                }
              }, 10)
            })
        })
      })
  });

  //==============================POST===================================

  // 登录
  app.post(API.LOGIN, (req, res) => {
    const {username, password} = req.body;
    console.log(username, password);
    mysql.select(['password', 'id'], 'user', `where name='${username}'`)
      .then(data => {
        if (data.length !== 0) {
          console.log(data[0].password === password);
          if (data[0].password === password) {
            res.json({
              msg: true,
              id: data[0].id
            });
          }
        } else {
          mysql.select(['password', 'id'], 'user', `where phone='${username}'`)
            .then(data => {
              if (data.length !== 0) {
                if (data[0].password === password) {
                  res.json({
                    msg: true,
                    id: data[0].id
                  })
                }
              } else {
                res.json({
                  msg: false
                })
              }
            })
        }

      })
      .catch((err) => {
        console.log(err);
        res.json({
          msg: false
        })
      })
  });


  // 添加购物车
  app.post(API.ADD_CART, (req, res) => {
    const {user_id, good_id, classify} = req.body;
    mysql.select(['cart'], 'user', `where id=${user_id}`)
      .then(data => {
        const cart = JSON.parse(data[0].cart).concat({
          id: good_id,
          classify: classify
        });
        mysql.update({
          cart: JSON.stringify(cart)
        }, 'user', `where id=${user_id}`).then(data => {
          res.json({
            msg: true
          })
        })
      }).catch(err => {
      res.json({
        msg: false
      })
    });
  });


  // 添加订单
  app.post(API.ADD_ORDER, (req, res) => {
    const {user_id, good_id, classify, count} = req.body;
    mysql.insert([req.body], 'orders');
    res.json({msg: true})
  });

  // 注册
  app.post(API.REGISTER,(req,res) => {
    mysql.insert([req.body],'user')
      .then( date => {
        return mysql.select(['*'],'user')
      })
      .then( data => {
        res.json({
          msg: true,
          id: data[data.length -1].id
        })
      })
      .catch( err => {
        console.log(err);
        res.json({msg: false})
    })
  });

  //===============================DELETE==========================
  // 删除订单
  app.delete(API.DELETE_ORDER, (req, res) => {
    const {id} = req.query;
    mysql.update({
      visibility: 0
    }, 'orders', `where id=${id}`).then(data => {
      if (data.serverStatus === 2) {
        res.json({
          msg: true
        })
      } else {
        res.json({
          msg: false
        })
      }
    }).catch(err => {
      console.log(err);
      res.json({
        msg: false
      })
    })
  });

  // 删除购物车
  app.delete(API.DELETE_CART, (req, res) => {
    let pass = false;
    const {id, good_id, classify} = req.query;
    mysql.select(['cart'], 'user', `where id=${id}`)
      .then(data => {
        let cart = JSON.parse(data[0].cart);
        cart.map((good, index) => {
          if (good.id == good_id && good.classify === classify) {
            cart.splice(index, 1);
            mysql.update({cart: JSON.stringify(cart)}, 'user', `where id=${id}`)
              .then(data => {
                res.json({msg: true});
                pass = true;
              })
          }
        });

        setTimeout(() => {
          if (!pass) {
            res.json({msg: false})
          }
        }, 2000)
      }).catch(err => {
      console.log(err);
      if (!pass) {
        res.json({msg: false})
      }
    })

    // res.json({
    //   a: id,
    //   b: good_id,
    //   c: classify
    // })
  })

};

console.log('接口配置成功');
