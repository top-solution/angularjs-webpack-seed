const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = require(path.join(__dirname, 'webpack.conf'));

const dirDist = path.join(__dirname, '../dist');

module.exports = Object.assign(webpackConfig, {

  output: {
    path: path.join(dirDist),
    filename: '[name].[chunkhash].js'
  },

  plugins: webpackConfig.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new CleanWebpackPlugin(['dist'], {root: path.join(__dirname, '..')}),
    new UglifyJSPlugin({
      output: {
        comments: false
      },
      compress: {
        unused: true,
        dead_code: true, // eslint-disable-line camelcase
        warnings: false
      }
    })
  ])
});
