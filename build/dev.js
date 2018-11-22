const base = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = Object.assign({}, base, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 7777
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    })
  ]
})
