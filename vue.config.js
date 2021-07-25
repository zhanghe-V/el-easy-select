const path = require('path')

function resolve(dir) {
    return path.resolve(__dirname, dir)
}

module.exports = {
  productionSourceMap: false,
  devServer:{
    port: 8091,
    hot: true,
    open: 'Google Chrome'
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('packages'),
        'assets': resolve('examples/assets'),
        'views': resolve('examples/views'),
      }
    }, 
  },
  css: {
    extract: false,
  }
}