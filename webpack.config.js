
var webpack = require('webpack');
var path = require('path');

// Main Settings config
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'dist/[name].js',
    chunkFilename: 'dist/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};
