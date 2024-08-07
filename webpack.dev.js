/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: resolve(common.output.path),
    open: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
});
