const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: path.resolve(__dirname, './src/template.tsx'),
  output: {
    clean: true,
    environment: {
      arrowFunction: false,
    },
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.[contenthash].js',
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      src: path.resolve(__dirname, 'src'),
      types: path.resolve(__dirname, 'src/types'),
      images: path.resolve(__dirname, 'public/images'),
      fonts: path.resolve(__dirname, 'public/fonts')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool:
    process.env.NODE_ENV === 'production'
    ? 'hidden-source-map'
    : 'eval-source-map',
  module: {
    rules: [
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      { 
        exclude: /\.module\.s?css$/i,
        test: /\.s?css$/i,
        use: [
          isDev ? 'style-loader': MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[hash:base64:5]',
                mode: 'icss',
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.module\.s?css$/i,
        use: [
          isDev ? 'style-loader': MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[hash:base64:5]',
                mode: 'local',
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[hash][ext]'
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      '...', new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 9000,
  }
}