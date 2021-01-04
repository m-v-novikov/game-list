const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );

console.log('-------------------------')
console.log(dotenv.parsed)
console.log('-------------------------')

module.exports = {
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: "chunks/[contenthash].js",
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './webpack/template/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      chunkFilename: "css/chunk-[id].css",
    }),
    new webpack.DefinePlugin( {
      'process.env.GAME_API_KEY': JSON.stringify(process.env.GAME_API_KEY || '')
    } ),
  ],
  devtool: 'inline-source-map',
  node: {
    fs: "empty"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};
