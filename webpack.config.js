const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getConfig } = require('quickly-switch')
const { currentModule, relativeRoot, moduleStorePath } = getConfig()
console.log(moduleStorePath, relativeRoot, process.cwd())
module.exports = {
  entry: path.join(__dirname, relativeRoot, currentModule),
  mode: 'development',
  context: __dirname,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
        // use: [
        //   {
        //     loader: 'babel-loader'
        //   }
        // ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template/_layout.ejs',
      favicon: 'template/favicon.ico',
      // inject: false,
      title: '学习算法'
    })
  ]
}
