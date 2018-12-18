const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      config = {
        mode: 'development',
        entry: {
          main: './src/index.js'
        },
        output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'dist')
        },
        devtool: 'inline-source-map',
        devServer: {
          contentBase: './dist'
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'head'
          })
        ],
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
        }
      };

module.exports = config;