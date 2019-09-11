const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)
module.exports = {
  lintOnSave: false,
  outputDir: process.env.outputDir,
  assetsDir: 'static',
  publicPath: '/',

  productionSourceMap: false,

  devServer: {
    open: true,
    host: '0.0.0.0',
    port: '19020',
    proxy: {
      '/api': {
        target: process.env.VUE_APP_HTTP,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@@', resolve('src'))
      .set('style', resolve('src/assets/style'))
      .set('images', resolve('src/assets/images'))
      .set('@c', resolve('src/components'))
      .set('@v', resolve('src/views'))
      .set('@u', resolve('src/utils'))
  },
  // eslint-disable-next-line no-unused-vars
  configureWebpack: config => {
    if(process.env.NODE_ENV === 'production'){
      return {
        plugins: [new CompressionWebpackPlugin({
          test: /\.js$|\.html|\.css|\.scss/,
          threshold: 10240,
          deleteOriginalAssets: false
        })]
      }
    }
  }
}
