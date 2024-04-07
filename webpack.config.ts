import path from 'path';
import webpack  from 'webpack';
import { buildLoaders } from './config/build/buildLoaders';

module.exports = {
    mode: 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].bundle.js',
    clean: true,
  },
  module: {
    rules: buildLoaders(),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    preferAbsolute: true,
    mainFiles: ['index'],
  },
  devServer:{
    static: path.join(__dirname, "build"),
    port: 6000,
  }
};