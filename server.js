/**
:q
 * 文件说明： server
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.20
 */

// require('babel-register');

var express = require('express'),
  webpack = require('webpack'),
  path = require('path'),
  colors = require('colors'),
  bodyParser = require('body-parser'),
  axios = require('axios'),
  interfaceConf = require('./interface'),
  commonRoutes = require('./routes/routes.common.js'),
  favicon = require('serve-favicon');
var qs = 'qs';

// 控制台输出字体颜色
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

var app = express();

// 是否为开发模式
var isDeveloping = process.env.NODE_ENV === 'development';


// 监听端口号
var port = isDeveloping ? 8080 : 80;


// 静态文件目录
app.use('/', express.static(path.join(__dirname + '/static')));

// 获取请求参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 设置网站图标
app.use(favicon(path.join(__dirname,'./static/images/favicon','favicon.jpg')));

// 挂载公共路由
commonRoutes(app);

// 开发模式webpack
if (isDeveloping) {
  console.log('开发模式启动'.info);
  var config = require('./webpack.config/webpack.config.dev');
  var compiler = webpack(config);
  devMiddleWare = require('webpack-dev-middleware')(compiler, {
    publicPath: '/dist',
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }
  });
  app.use(devMiddleWare);
  app.use(require('webpack-hot-middleware')(compiler));
  var mfs = devMiddleWare.fileSystem;
  var file = path.join(config.output.path, 'index.html');

  let routes = require('./routes/routes.dev.js');
  routes(app,mfs,file);

  console.log('路由挂载完成'.info)

} else {
  let routes = require('./routes/routes.prod.js');

  console.log("生产模式启动".info);

  routes(app);
}


// 接口挂载
interfaceConf(app);


// 服务启动
app.listen(port, (err, success) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`server start as port ${port}`.info)
  }
});





