const webpack = require('webpack');
const webpackConfig = require('./webpack-utils/webpack.config');

const webpackCompiler = webpack(webpackConfig);

webpackCompiler.run((err, stats) => {
  console.log(stats);
});
