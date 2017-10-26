const path = require('path');

const webpackConfig = require(path.join(__dirname, 'webpack.conf'));

module.exports = Object.assign(webpackConfig, {

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 8000,
    host: '0.0.0.0',
    historyApiFallback: true
  },

  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js'
  }
});
