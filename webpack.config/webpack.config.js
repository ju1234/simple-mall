/**
 * Created by Yeapoo on 2017/03/20.
 */
var path = require('path');
var paths = require('../paths'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  // devtool: 'source-map',
  entry: [
    "babel-polyfill",
    './src/index.js',
    './static/css/base.css'
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
            presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0']
          },
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        // use: new ExtractTextPlugin('/dist/[name].css').extract([ 'style-loader', 'css-loader' ])
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
            query: 'modules&localIdentName=[name]-[local]'
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
      template: path.join(__dirname, '../src', 'index.tpl'),
      inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.[hash:8].js',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
      }
    })
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: function () {
    //       return [
    //         postcssSprites({
    //           stylesheetPath: './src',
    //           sprite: '../static/dist',
    //           // retina: true,
    //           padding: 4
    //         })
    //       ];
    //     }
    //   }
    // })
  ]
};
