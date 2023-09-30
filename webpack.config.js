const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: '',
    entry: {
        main: './src/js/main.js',
        secondary: './src/js/request.js',
    },
  output: {
    filename: '[name]bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.API_KEY': JSON.stringify('536bbeddb098995bbb7d70adf02c466f'),
        }),
        new Dotenv(),
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
          // Define other rules if needed
        ],
      },
  resolve: {
        extensions: ['.js'],
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer'),
      stream: require.resolve('stream-browserify'),
    },
  },
};