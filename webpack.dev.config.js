// var webpack, webpackStats;

// webpack = require('webpack');

// webpackStats = require('stats-webpack-plugin');

// module.exports = {
//   devtool: '#source-map',
//   entry: ['webpack/hot/dev-server', 'webpack-hot-middleware/client', __dirname + "/public/js/application.js"],
//   output: {
//     path: '/',
//     filename: 'bundle.js',
//     publicPath: 'http://localhost:3000/'
//   },
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       loaders: ['ng-annotate']
//     }, {
//       test: /\.styl$/,
//       loader: 'style!css!stylus'
//     }]
//   },
//   resolve: {
//     root: process.cwd(),
//     modulesDirectories: ['node_modules'],
//     extensions: ['', '.js']
//   },
//   plugins: [
//     new webpack.EnvironmentPlugin([
//       "NODE_ENV",
//       "DEBUG",
//       "DB_HOST",
//       "DB_PORT",
//       "GMAPS_API_KEY"
//     ]),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin(),
//     new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])),
//     new webpackStats('webpack.json')
//   ],
//   target: 'web'
// };
