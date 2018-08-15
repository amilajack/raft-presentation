// @flow
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import merge from 'webpack-merge';
import moment from 'moment';
import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import webpackCommon from './webpack.config.common.babel';

const datestring = moment().format('MM-DD-YY_HH:mm');

export default merge.smartStrategy({
  entry: 'prepend',
  plugins: 'append',
  'module.rules': 'prepend',
})(webpackCommon, {
  mode: 'production',

  devtool: 'source-map',

  output: {
    filename: '[hash].js',
    chunkFilename: '[hash].[chunkhash].js',
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
      })
    ],
  },

  plugins: [
    // new DefinePlugin({
    //   __REACT_DEVTOOLS_GLOBAL_HOOK__: {}, //disables React DevTools extension
    // }),

    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      openAnalyzer: process.env.OPEN_ANALYZER === 'true',
      generateStatsFile: true,
      statsFilename: path.join(
        __dirname,
        `./logs/webpack/production/stats_${datestring}.json`
      ),
    })
  ],
});
