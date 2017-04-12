/**
 * 文件说明： 接口  api
 * 详细描述：
 * 创建者： JU
 * 时间： 17.4.7
 */

module.exports = {
  //=========get================
  // 获取分类导航信息
  GET_CLASSIFY_Nav: '/api/getClassify/nav',

  // 获取分类热销
  GET_CLASSIFY_HOT: '/api/getClassify/hot',

  // 获取所有分类产品
  GET_CLASSIFY_GOODS: '/api/getClassify/goods',

  // 获取商品列表
  GET_GOODS_LIST: '/api/getGoodsList',

  // 获取商品详细信息
  GET_GOOD: '/api/getGood',

  // 订单
  GET_ORDERS: '/api/getOrders',

  // 获取购物车
  GET_MY_CART: '/api/get/myCart',



  //========post==============

  // 登录
  LOGIN: '/api/login',


  //===============delete==========
  // 删除订单
  DELETE_ORDER: '/api/delete/order',

  // 删除购物车
  DELETE_CART: '/api/delete/cart'


};

