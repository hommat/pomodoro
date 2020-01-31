const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new WorkboxPlugin.GenerateSW(),
    new FaviconsWebpackPlugin({
      logo: './src/logo.png',
      favicons: {
        appName: 'Pomodoro timer',
        appShortName: 'Pomodoro',
        appDescription:
          'Application that allows you track time using pomodoro technique',
        start_url: '/',
        background: '#85203b',
        theme_color: '#85203b',
        display: 'standalone'
      }
    }),
    new CleanWebpackPlugin()
  ]
});
