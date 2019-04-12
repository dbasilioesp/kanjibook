// vue.config.js
module.exports = {
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'raw-loader'
    })
  }
}