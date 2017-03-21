/**
 * Created by Yeapoo on 2017/03/20.
 */
var path = require('path');

var paths = {
  basePath: path.resolve('package.json','../'),
  srcPath: path.resolve('./src'),
  staticPath: path.resolve('./static'),
  webpackConfigPath: path.resolve('./webpack.config'),
  distPath: path.resolve('./static/dist'),
  publicPath: path.resolve('./static/dist'),
  appNodeModules: path.resolve('node_modules')
};

module.exports = paths;