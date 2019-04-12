// vue.config.js
module.exports = {
  publicPath: '/',
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'raw-loader'
    })
  }
}