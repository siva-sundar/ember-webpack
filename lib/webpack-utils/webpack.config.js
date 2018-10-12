const webpack = require('webpack');
const path = require('path');
const ENV = 'production';
const { getEntriesFromConfig, getExternalsFromConfig } = require('./entry-utils');

module.exports = {
  name: 'common',
  mode: 'production',
  context: path.join(__dirname, '../../build/'),

  entry: getEntriesFromConfig(),
  externals: getExternalsFromConfig(),

  output: {
    path: path.resolve(__dirname, '/output/'),
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      zb: path.resolve(__dirname, "../../build/src/zb"),
    },
  },

  performance: {
    hints: 'warning',
    maxAssetSize: 140000 // 140KB
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              "transform-es2015-modules-amd"
            ]
          }
        }],
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    })
  ]
};