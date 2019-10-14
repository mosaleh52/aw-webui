const path = require('path');
const webpack = require('webpack');
const webpack_base_conf = require('./build/webpack.base.conf.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: {
    resolve: { alias: webpack_base_conf.resolve.alias },
    plugins: [
      new webpack.DefinePlugin({
        PRODUCTION: process.env.NODE_ENV === 'production',
      }),
      new CopyWebpackPlugin([{ from: 'static/', to: 'static' }]),
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 27180,
  },
};
