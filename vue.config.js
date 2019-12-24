const webpack = require('webpack')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
    }
  },
  devServer: {
    open: true,
    proxy: {
      '/api': {
        // target: 'http://192.168.1.112:9080',
        target: 'http://192.168.0.83:9080',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false // 接受 运行在 https 上的服务
      }
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'))

    config.plugin('context')
      .use(webpack.ContextReplacementPlugin,
        [/moment[/\\]locale$/, /zh-cn/])

    config.plugin('provide')
      .use(webpack.ProvidePlugin,
        [{
          $: 'jquery',
          jquery: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }])
  }
}
