'use strict';

let path = require('path');
let srcPath = path.join(__dirname, '/../src');
let webpack = require('webpack');
let baseConfig = require('./base');

module.exports = {
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'isparta-instrumenter-loader',
        include: [
          path.join(__dirname, '/../src')
        ]
      }
    ],
    loaders: baseConfig.module.loaders.concat([
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [].concat(
          baseConfig.additionalPaths,
          [
            path.join(__dirname, '/../src'),
            path.join(__dirname, '/../test')
          ]
        )
      }
    ])
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: srcPath + '/actions/',
      helpers: path.join(__dirname, '/../test/helpers'),
      components: srcPath + '/components/',
      containers: srcPath + '/containers/',
      sources: srcPath + '/sources/',
      stores: srcPath + '/stores/',
      config: srcPath + '/config/' + process.env.REACT_WEBPACK_ENV,
      reducers: srcPath + '/reducers/'
    }
  },
  plugins: [
    new webpack.IgnorePlugin(/ReactContext/)
  ]
};
