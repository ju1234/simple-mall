/**
 * Created by Yeapoo on 2017/03/20.
 */
var express = require('express'),
  webpack = require('webpack'),
  path = require('path'),
  routes = require('./routes'),
  colors = require('colors'),
  bodyParser = require('body-parser');

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

var port = isDeveloping ? 8888 : 80;

app.use('/', express.static(path.join(__dirname + '/static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//
// app.get('/',(req,res) => {
//   res.sendfile(path.resolve(__dirname, 'static/dist', 'index.html'))
// });

if(isDeveloping){
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
  app.get('*', function(req, res,next) {
    devMiddleWare.waitUntilValid(function(){
      var html = mfs.readFileSync(file);
      res.end(html)
    });
    next();
  });
  app.post('/api/login',(req,res,next) => {
    console.log(req.body);
    res.json(JSON.stringify({
      mag: 'asd'
    }));
    next();
  });
  console.log('路由挂载完成'.info)

}else {
  console.log("生产模式启动".info);
  routes(app);
}

app.listen(port,(err,success) => {
  if(err){
    console.log(err)
  }else {
    console.log(`server start as port ${port}`.info)
  }
});
