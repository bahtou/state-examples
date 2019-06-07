const path = require('path');
const appRoot = 'src';


module.exports = {
  appEntry: './index.js',
  contentBasePath: path.resolve(__dirname, '..', appRoot),
  contextPath: path.resolve(__dirname, '..', appRoot),

  cssPaths: [
    path.resolve(__dirname, '..', `${appRoot}`),

    path.resolve(__dirname, '..', `${appRoot}/assets/styles`),
    path.resolve(__dirname, '..', `${appRoot}/assets/fonts`),
    path.resolve(__dirname, '..', `${appRoot}/components`),
    path.resolve(__dirname, '..', `${appRoot}/elements`),
    path.resolve(__dirname, '..', `${appRoot}/pages`),
    path.resolve(__dirname, '..', `${appRoot}/shared`)
  ],

  fontPathEntry: [path.resolve(__dirname, '..', `${appRoot}/assets/fonts`)],
  fontPathOutput: 'assets/fonts/[name].[hash:4].[ext]',

  // Parse host and port from env to allow customization.
  //
  // If you use Docker, Vagrant or Cloud9, set
  // host: options.host || "0.0.0.0";
  //
  // 0.0.0.0 is available to all network devices
  // unlike default `localhost`.
  host: process.env.HOST, // Defaults to `localhost`
  port: process.env.PORT || 8000, // Defaults to 8080

  imagePathEntry: [path.resolve(__dirname, '..', `${appRoot}/assets/images`)],
  imagePathOutput: 'assets/images/[name].[hash:4].[ext]',

  jsPaths: [
    path.resolve(__dirname, '..', `${appRoot}/App.js`),

    path.resolve(__dirname, '..', `${appRoot}/piperouter`),
    path.resolve(__dirname, '..', `${appRoot}/components`),
    path.resolve(__dirname, '..', `${appRoot}/configureStore.js`),
    path.resolve(__dirname, '..', `${appRoot}/elements`),
    path.resolve(__dirname, '..', `${appRoot}/gateway`),
    path.resolve(__dirname, '..', `${appRoot}/index.js`),
    path.resolve(__dirname, '..', `${appRoot}/lib`),
    path.resolve(__dirname, '..', `${appRoot}/logger.js`),
    path.resolve(__dirname, '..', `${appRoot}/pages`),
    path.resolve(__dirname, '..', `${appRoot}/reducers`),
    path.resolve(__dirname, '..', `${appRoot}/pipeline`),
    path.resolve(__dirname, '..', `${appRoot}/services`),
    path.resolve(__dirname, '..', `${appRoot}/shared`)
  ],

  outputPath: path.resolve(__dirname, '..', 'build'),
  postcssPaths: path.resolve(__dirname, '..', appRoot),

  resolveAliasPaths: {
    'react-dom': '@hot-loader/react-dom',
    Components: path.resolve(__dirname, '..', `${appRoot}/components`),
    Elements: path.resolve(__dirname, '..', `${appRoot}/elements`),
    Events: path.resolve(__dirname, '..', `${appRoot}/events`),
    Gateway: path.resolve(__dirname, '..', `${appRoot}/gateway`),
    Images: path.resolve(__dirname, '..', `${appRoot}/assets/images`),
    Lib: path.resolve(__dirname, '..', `${appRoot}/lib`),
    PipeRouter: path.resolve(__dirname, '..', `${appRoot}/piperouter`),
    Pages: path.resolve(__dirname, '..', `${appRoot}/pages`),
    Reducers: path.resolve(__dirname, '..', `${appRoot}/reducers`),
    Services: path.resolve(__dirname, '..', `${appRoot}/services`),
    Shared: path.resolve(__dirname, '..', `${appRoot}/components/shared`),
    Store: path.resolve(__dirname, '..', `${appRoot}/configureStore.js`),
    Styles: path.resolve(__dirname, '..', `${appRoot}/assets/styles`)
  },
  resolveAliasModules: [
    path.resolve(__dirname, '..', appRoot),
    'node_modules'
  ]
};


// https://www.npmjs.com/package/loader-utils#interpolatename
