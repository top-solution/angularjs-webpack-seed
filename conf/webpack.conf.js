const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const dirSrc = path.join(__dirname, '../src');
const dirNodeModules = path.join(__dirname, '../node_modules');

const IS_DEV = (process.env.NODE_ENV === 'dev');

module.exports = {
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(dirSrc, 'index.html')
    }),
    new ExtractTextPlugin('style.[hash].css')
  ],
  entry: {
    app: path.join(dirSrc, 'index'),
    vendor: ['babel-polyfill', 'angular', '@uirouter/angularjs']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: IS_DEV
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer],
                sourceMap: IS_DEV
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [dirNodeModules],
                sourceMap: IS_DEV
              }
            }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.html$/,
        loaders: [
          'html-loader'
        ]
      },
      {
        test: /\.(jpe*g|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'images/'
        }
      }
    ]
  }
};
