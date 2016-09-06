require('dotenv').config();
var webpack = require('webpack');

module.exports = {
  entry: './public/js/application.js',
  output: {
    path: __dirname + '/public/build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV",
      "DEBUG",
      "DB_HOST",
      "DB_PORT",
      "GMAPS_API_KEY"
    ])
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'ng-annotate'
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.png$/,
      loader: "url-loader?limit=100000"
    }, {
      test: /\.jpg$/,
      loader: "file-loader"
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }]
  }
};
