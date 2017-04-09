/**
 * 文件说明： server
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.20
 */
var express = require('express'),
  webpack = require('webpack'),
  path = require('path'),
  colors = require('colors'),
  bodyParser = require('body-parser'),
  axios = require('axios'),
  interfaceConf = require('./interface'),
  commonRoutes = require('./routes/routes.common.js'),
  favicon = require('serve-favicon');

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
var isDeveloping = process.env.NODE_ENV === 'development';

var port = isDeveloping ? 8888 : 9999;

app.use('/', express.static(path.join(__dirname + '/static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(favicon(path.join(__dirname,'./static/images/favicon','favicon.jpg')));

//
// app.get('/',(req,res) => {
//   res.sendfile(path.resolve(__dirname, 'static/dist', 'index.html'))
// });
commonRoutes(app);


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

interfaceConf(app);

app.listen(port, (err, success) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`server start as port ${port}`.info)
  }
});


