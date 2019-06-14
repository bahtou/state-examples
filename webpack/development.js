const path = require('path');
const webpack = require('webpack');

const { contentBasePath, cssPaths, host, port } = require('./base-params');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',

  devServer: {
    https: false,
    host,
    port,

    open: false,                  // Open the page in browser
    contentBase: contentBasePath, // Content not from webpack is served from here

    historyApiFallback: true,
    compress: true,

    hot: true,

    // Don't refresh if hot loading fails. Good while
    // implementing the client interface.
    hotOnly: true,
    inline: true,

    //capturing compilation related warnings and errors
    overlay: true,

    publicPath: '/',
    // --progress - [assets, children, chunks, colors, errors, hash, timings, version, warnings]
    stats: {
      assets: true,

      // Add build date and time information
      builtAt: true,

      // Add information about cached (not built) modules
      cached: true,

      // Show cached assets (setting this to `false` only shows emitted files)
      cachedAssets: true,

      children: true,
      chunks: false,
      colors: true,

      // Display the distance from the entry point for each module
      depth: false,
      // Display the entry points with the corresponding bundles
      entrypoints: false,

      errors: true,
      errorDetails: true, //depends on {errors: true}
      hash: true,
      modules: false,
      moduleTrace: true,
      performance: true,
      providedExports: true,
      publicPath: true,
      reasons: true,
      source: true,
      usedExports: false,
      timings: true,
      version: true,
      warnings: true
    }
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        include: cssPaths,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
              reloadAll: true // when desperation kicks in - this is a brute force HMR flag
            }
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
              import: true,
              modules: {
                mode: 'local',
                // localIdentName: '[folder]__[local]--[hash:base64:10]',
                // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                localIdentName: '[local]',
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'custom-hash'
                // getLocalIdent: https://github.com/webpack-contrib/css-loader#getlocalident
                // localIdentRegExp: https://github.com/webpack-contrib/css-loader#localidentregexp
              },
              sourceMap: true,
              importLoaders: 1,
              localsConvention: 'camelCase', // https://github.com/webpack-contrib/css-loader#localsconvention
              onlyLocals: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: cssPaths,
              outputStyle: 'expanded',
              precision: 8
            }
          }
        ]
      }
    ]
  },

  optimization: {
    namedModules: true,
    namedChunks: true,
    nodeEnv: 'development',       // sets `process.env.NODE_ENV`in the app
    flagIncludedChunks: false,
    occurrenceOrder: false,
    sideEffects: false,           // https://github.com/webpack/webpack/blob/master/examples/side-effects/README.md

    providedExports: false,
    usedExports: false,
    concatenateModules: false,

    noEmitOnErrors: true,
    minimize: false,             // Tell webpack to minimize the bundle using the TerserPlugin.
    checkWasmTypes: false,

    splitChunks: {
      hidePathInfo: false,
      minSize: 10000,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity
    }
  },
  performance: {
    hints: false
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'react ❤ webpack',
      template: 'index.html',
      // favicon: '',
      meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        ['My App']: 'Barebones foundation to quickly start building your web applications'
      },
      inject: true,
      hash: true,
      cache: true,
      showErrors: true,
      chunksSortMode: 'dependency'
    }),

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5,
      minChunkSize: 1000
    }),

    //see webpack.EnvironmentPlugin(["NODE_ENV"])
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        ciao: JSON.stringify('hola desde el base-config')
      }
    }),

    // Enable the plugin to let webpack communicate changes
    // to WDS. --hot sets this automatically!
    // Enable multi-pass compilation for enhanced performance
    // in larger projects. Good default.
    new webpack.HotModuleReplacementPlugin({
      multiStep: false
    }),

    new ErrorOverlayPlugin(),
    new CaseSensitivePathsPlugin({
      debug: false
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js']
    })
  ]
};
