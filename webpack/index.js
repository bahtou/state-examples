const webpackMerge = require('webpack-merge');
const baseConfig = require('./base-config');


module.exports = (env, arg) => {
  const { mode } = arg;
  const envConfig = require(`./${env}`);

  return webpackMerge(baseConfig, envConfig);
};


/**
 * Webpack 4 optimization - predictable long term caching
 * https://github.com/tpai/tpai.github.io/issues/93
 */
