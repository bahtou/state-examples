const webpack = require('webpack');

const {
  appEntry, contextPath, fontPathEntry,
  imagePathEntry, jsPaths, outputPath,
  resolveAliasPaths, resolveAliasModules
} = require('./base-params');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');


module.exports = {
  context: contextPath,

  entry: {
    app: [ appEntry ]
  },

  output: {
    path: outputPath,
    publicPath: '/',
    filename: '[name].[hash:4].js',
    chunkFilename: '[name].[chunkhash:4].js',
    globalObject: 'this',
    pathinfo: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: jsPaths,
        use: [{
          loader: 'babel-loader',
          options: {
            // This is a feature of `babel-loader` for Webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            // When set, each Babel transform output will be compressed with Gzip.
            // If you want to opt-out of cache compression, set it to false --
            // your project may benefit from this if it transpiles thousands of files.
            cacheCompression: true
          }
        }]
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)$/,
        include: fontPathEntry,
        use: [{
          loader: 'url-loader',
          options: {
            // Limit at 50Kb. Above that it emits separate files
            limit: 50000,
            name: './fonts/[name].[hash:4].[ext]'
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/,
        include: imagePathEntry,
        use: [{
          loader: 'url-loader',
          options: {
            // Limit at 25Kb. Above that it emits separate files
            limit: 25000,
            name: './images/[name].[hash:4].[ext]'
          }
        }]
      }
    ]
  },

  plugins: [
    new ExtractCssChunks(
      {
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].[contenthash:4].css',
        chunkFilename: '[name].[contenthash:4].[id].css',
        orderWarning: true, // Disable to remove warnings about conflicting order between imports
        hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
        // reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
        cssModules: true // if you use cssModules, this can help.
      }
    ),

    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js']
    })
  ],

  resolve: {
    alias: resolveAliasPaths,
    extensions: ['.js'],
    enforceExtension: false,
    modules: resolveAliasModules
  }
};
