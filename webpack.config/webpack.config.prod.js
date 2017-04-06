/**
 * 文件说明： webpack production
 * 详细描述：
 * 创建者： JU
 * 时间： 17.3.20
 */


var baseConfig = require('./webpack.config'),
  paths = require('../paths.js'),
  webpack = require('webpack'),
  path = require('path');


var productionConfig = baseConfig;


productionConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.dev.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  })
  // extract vendor chunks

);

module.exports = productionConfig;
