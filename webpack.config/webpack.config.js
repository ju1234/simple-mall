/**
 * Created by Yeapoo on 2017/03/20.
 */
var path = require('path');
var paths = require('../paths'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // devtool: 'source-map',
  entry: [
    "babel-polyfill",
    './src/index.js'
  ],
  output: {
    path: paths.distPath,
    filename: 'bundle.[hash:8].js',
    publicPath: '/dist/',
    chunkFilename: '[name].[chunkhash:8].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0'],
            plugins: [
              ['import', {
                libraryName: 'antd',
                style: 'css'
              }]
            ]
          },
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: 'modules'
          },
          'sass-loader'
        ]
      },
      {
        test: /.(png)|(jpg)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 50000
          }
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/view', 'index.tpl'),
      inject: true
    })
  ]
};
