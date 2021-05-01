const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'js/index.js',
  },
    module: {
      rules: [{
        test: /\.txt$/, 
        use: 'raw-loader'
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
    ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CopyPlugin({
          patterns: [
            {
            context: path.resolve(__dirname, "./src"),
              from: "style.css",
              to: "./css/style.css"
            },
          ],
            options: {
            concurrency: 100,
          },
        })
      ],
    mode: 'production',
  };
