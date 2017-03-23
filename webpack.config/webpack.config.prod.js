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
