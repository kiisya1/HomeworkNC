
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.join( __dirname, 'public')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join( __dirname, 'public'),
    watchContentBase: true
  }
};
