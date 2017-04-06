/**
 * 文件说明： webpack developing
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.2
 */
var baseConfig = require('./webpack.config'),
  paths = require('../paths.js'),
  webpack = require('webpack'),
  CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'),
  WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin'),
  hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';



var developingConfig = baseConfig;


developingConfig.entry.unshift(hotMiddlewareScript)

developingConfig.devtool = 'source-map';
developingConfig.plugins.push(
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new CaseSensitivePathsPlugin(),
  new WatchMissingNodeModulesPlugin(paths.appNodeModules)
);

module.exports = developingConfig;
