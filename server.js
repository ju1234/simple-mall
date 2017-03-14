/**
 * 文件说明: server
 * 详细描述:
 * 创建者: ju1234
 * 创建时间: 17.3.14
 * 变更记录:
 */



var Koa = require('koa'),
  path = require('path'),
  staticPath = require('koa-static'),
  koaBody = require('koa-body'),
  ejs = require('koa-ejs'),
  router = require('./router'),
  session = require('koa-session2');

var app = new Koa(),
  port = 8888;

// 静态文件根目录
app.use(staticPath(path.join(__dirname + '/static')));
// 接受post数据中间件
app.use(koaBody({multipart: true}));

// 设置session
app.use(session({
  key: "SESSIONID",   //default "koa:sess"
  maxAge: 10000000000  //设置session超时时间
}));

ejs(app,{
  root: path.join(__dirname,'./src/view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
});

// 解决跨域
app.use(async(ctx, next) => {
  await next();
  ctx.response.set('Access-Control-Allow-Origin', 'http://192.168.0.112:8888');
});

app.use(function (ctx, next) {
  ctx.state = ctx.state || {};
  ctx.state.now = new Date();
  ctx.state.ip = ctx.ip;
  ctx.state.version = '2.0.0';
  return next();
});

app.use(async (ctx) => {
  await ctx.render('index',{
    user: ['hello','hello','hello']
  })
});

// 路由配置
app.use(router.routes()).use(router.allowedMethods());

// 服务监听端口
app.listen(port);
console.log(`server start at port ${port}`);
//
// function cookieToObj(cookie) {
//   var obj = {};
//   cookie = cookie.split(';');
//   cookie.map((item) => {
//     item = item.split('=');
//     obj[item[0].trim()] = item[1].trim();
//   });
//
//   return obj;
// }
