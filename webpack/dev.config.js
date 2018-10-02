const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');


module.exports = 
{

  mode: 'development',
  
  entry: `./src/main.js`,

  output: 
  {
    path: path.resolve(__dirname, '../dist'),
    filename: `app.js`,
    publicPath: "/dist/"
  },
  
  devtool: "cheap-module-eval-source-map",

  module: 
  {
    rules: [
      {
        test: /\.js$/,
        exclude: /nodes_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: false
          }
        }
      }
    ]
  },

  devServer: {
    port: 9000,
    inline: true,
    contentBase: "./dist/",
    open: true,
    overlay: true,
    stats: "minimal"
  },

  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: "./public/index.html"
    }),
    new HtmlWebpackHarddiskPlugin()
  ],

  resolve: 
  {
    modules: [ path.resolve(__dirname, '../node_modules') ],
  },

}
