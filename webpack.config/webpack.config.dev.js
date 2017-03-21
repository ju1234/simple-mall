/**
 * Created by Yeapoo on 2017/03/20.
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
    "process.dev.NODE_ENV": JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new CaseSensitivePathsPlugin(),
  new WatchMissingNodeModulesPlugin(paths.appNodeModules)
);

module.exports = developingConfig;
